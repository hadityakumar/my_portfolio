import nodemailer from 'nodemailer'

// Ensure this route runs on the Node.js runtime (required for nodemailer)
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.MAIL_TO || user

    if (!host || !user || !pass) {
      return new Response(JSON.stringify({ error: 'SMTP not configured' }), { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587/25
      auth: { user, pass },
    })

    // Optional verify to surface auth/connection errors early
    try {
      await transporter.verify()
    } catch (e: any) {
      const msg = e?.message || 'SMTP verification failed'
      return new Response(JSON.stringify({ error: msg }), { status: 500 })
    }

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${user}>`,
      to,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.5">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr/>
          <pre style="white-space:pre-wrap">${message}</pre>
        </div>
      `,
    })

    return new Response(JSON.stringify({ ok: true, id: info.messageId }), { status: 200 })
  } catch (err: any) {
    console.error('Contact API error', err)
    const msg = err?.message || 'Failed to send'
    return new Response(JSON.stringify({ error: msg }), { status: 500 })
  }
}
