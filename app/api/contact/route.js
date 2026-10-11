const json = (message, status) => Response.json({ message }, { status });
const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return json(
      "We couldn't verify this request. Refresh the page and try again.",
      403,
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return json("Your message is too long.", 413);

  let fields;
  try {
    fields = await request.json();
  } catch {
    return json("Please check the form and try again.", 400);
  }

  if (!fields || typeof fields !== "object" || Array.isArray(fields)) {
    return json("Please check the form and try again.", 400);
  }

  // Silently accept bot submissions while discarding the message.
  if (typeof fields.website === "string" && fields.website.trim()) {
    return json("Thanks for reaching out. Your message has been sent.", 200);
  }

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const subject =
    typeof fields.subject === "string"
      ? fields.subject.replace(/[\r\n]+/g, " ").trim()
      : "";
  const message =
    typeof fields.message === "string" ? fields.message.trim() : "";

  if (!name || name.length > 120)
    return json("Enter your name (up to 120 characters).", 400);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json("Enter a valid email address so we can reply.", 400);
  }
  if (!subject || subject.length > 160)
    return json("Add a subject of up to 160 characters.", 400);
  if (message.length > 5000)
    return json("Keep your project details under 5,000 characters.", 400);

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    console.error(
      "Contact email is not configured. Set RESEND_API_KEY, CONTACT_TO, and CONTACT_FROM.",
    );
    return json(
      "The contact form is still being set up. Please try again later.",
      503,
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message || "No additional project details provided.",
  ].join("\n");
  const html = `<h2>New website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Subject:</strong> ${escapeHtml(subject)}</p><p><strong>Project details:</strong></p><p style="white-space:pre-wrap">${escapeHtml(message || "No additional project details provided.")}</p>`;

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `Website enquiry: ${subject}`,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!delivery.ok) {
      console.error(
        "Contact email provider rejected a message. HTTP status:",
        delivery.status,
      );
      return json(
        "We couldn't send your message right now. Please try again in a moment.",
        502,
      );
    }

    return json(
      "Thanks for reaching out. Your message has been sent successfully.",
      200,
    );
  } catch {
    console.error("Contact email provider could not be reached.");
    return json(
      "We couldn't send your message right now. Please try again in a moment.",
      502,
    );
  }
}
