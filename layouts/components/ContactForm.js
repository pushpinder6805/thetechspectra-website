"use client";

import { useState } from "react";
import Icon from "@components/Icon";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const body = await response.text();
      let result;
      try {
        result = JSON.parse(body);
      } catch {
        // Proxies and hosting platforms can return an HTML error page instead
        // of the JSON response from the contact API.
        result = null;
      }
      if (!response.ok || !result || typeof result.message !== "string") {
        throw new Error(
          result?.message ||
            "We couldn't reach the email service. Please try again in a moment.",
        );
      }
      form.reset();
      setStatus("success");
      setNotice(result.message);
    } catch (error) {
      setStatus("error");
      setNotice(
        error.message || "We couldn't send your message. Please try again.",
      );
    }
  }

  return (
    <form className="contact-form panel" onSubmit={handleSubmit}>
      <h2>Tell us about your project</h2>
      <p className="form-intro">
        A few details are all we need to get started.
      </p>
      <div className="form-grid">
        <div>
          <label htmlFor="contact-name">
            Your name <span>(required)</span>
          </label>
          <input
            id="contact-name"
            className="form-input"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Alex Morgan"
            maxLength={120}
            required
          />
        </div>
        <div>
          <label htmlFor="contact-email">
            Email address <span>(required)</span>
          </label>
          <input
            id="contact-email"
            className="form-input"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="alex@company.com"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject">
          What would you like to build? <span>(required)</span>
        </label>
        <input
          id="contact-subject"
          className="form-input"
          name="subject"
          placeholder="A website, an app, a custom integration…"
          maxLength={160}
          required
        />
      </div>
      <div>
        <label htmlFor="contact-message">Project details</label>
        <textarea
          id="contact-message"
          className="form-textarea"
          name="message"
          rows={6}
          maxLength={5000}
          placeholder="Share your goals, timeline, and anything else we should know."
        />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send your message"}
        {status !== "submitting" && <Icon size={18} />}
      </button>
      <p
        className={`contact-notice contact-notice-${status}`}
        role="status"
        aria-live="polite"
      >
        {notice}
      </p>
    </form>
  );
}
