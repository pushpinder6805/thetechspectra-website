# Contact form email setup

The contact page posts to the server-side `/api/contact` route. It validates submissions, rejects cross-origin posts, discards submissions that trip its honeypot field, and delivers accepted messages through Gmail SMTP. It sends from `semrushn@gmail.com` to the same inbox, with the visitor's address set as Reply-To. Credentials stay server-side.

The production Vercel project is configured with the Gmail SMTP host, port, username, and recipient. To enable delivery:

1. Turn on 2-Step Verification for the Google account and create a Google App Password. Google requires 2-Step Verification for App Passwords; some protected or managed accounts may not offer them.
2. In the Vercel project (`bigspring-light-nextjs`), open **Settings → Environment Variables**. Replace `SMTP_PASS` for **Production** with the App Password and mark it **Secret**. Do not use the normal Google account password; remove spaces if you paste the App Password as grouped text.
3. Redeploy the production project so the function receives the updated secret.
4. Submit a test through `/contact` and check the Gmail inbox and Spam folder.

The form shows success only after Gmail accepts the message. If delivery isn't configured or the provider rejects a message, the form displays a recoverable error. Use `.env.example` for local variable names; keep an App Password in `.env.local` or Vercel Secrets only. Never use a `NEXT_PUBLIC_` prefix or put a real password in source code.
