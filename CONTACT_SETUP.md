# Contact form email setup

The contact page posts to the server-side `/api/contact` route. It validates submissions, rejects cross-origin posts, discards submissions that trip its honeypot field, and delivers accepted messages with Resend. Credentials stay server-side.

The production Vercel project is already configured with the requested recipient (`semrushn@gmail.com`) and the sender (`contact@thetechspectra.com`). To start delivery:

1. Create a Resend account and add `thetechspectra.com` as a sending domain.
2. Add the DNS records Resend gives you at the domain's DNS host, then wait for Resend to verify the domain and sender. Preserve existing DNS and mail records.
3. Create a Resend API key with permission to send email.
4. In the Vercel project (`bigspring-light-nextjs`), open **Settings → Environment Variables** and add `RESEND_API_KEY` for **Production**. Mark it encrypted/secret. Never use a `NEXT_PUBLIC_` prefix or put the key in source code.
5. Redeploy the production project.

The form shows success only after Resend accepts the message. If delivery isn't configured or the provider rejects a message, the form displays a recoverable error. Use `.env.example` for local variable names; keep a real key in `.env.local` or Vercel Secrets only.
