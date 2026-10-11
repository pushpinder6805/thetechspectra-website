# Contact form email setup

The contact page posts to the server-side `/api/contact` route. It validates submissions, rejects cross-origin posts, discards submissions that trip its honeypot field, and delivers accepted messages through the site's authenticated SMTP mailbox. The SMTP connection requires STARTTLS (or implicit TLS on port 465). Credentials stay server-side.

The production Vercel project is already configured with the recipient `semrushn@gmail.com`. To enable SMTP delivery:

1. In the Vercel project (`bigspring-light-nextjs`), open **Settings → Environment Variables** and add these for **Production**:
   - `SMTP_HOST=businessemail.webeyesoft.com`
   - `SMTP_PORT=26`
   - `SMTP_USER=info@thetechspectra.com`
   - `SMTP_PASS` set to the mailbox password and marked **Secret**
   - `CONTACT_TO=semrushn@gmail.com` (already configured)
2. Save the variables and redeploy the production project.
3. Submit a test through `/contact`. If the SMTP server does not offer STARTTLS on port 26, ask the mail provider for its encrypted SMTP submission port (commonly 587 or 465) and update `SMTP_PORT` accordingly.

The form shows success only after the SMTP server accepts the message. If delivery isn't configured or the provider rejects a message, the form displays a recoverable error. Use `.env.example` for local variable names; keep a real password in `.env.local` or Vercel Secrets only. Never use a `NEXT_PUBLIC_` prefix or put a real password in source code.
