import { NextResponse } from 'next/server'
import Mailgun from 'mailgun.js'
import FormData from 'form-data'

const mailgun = new Mailgun(FormData).client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY!,
  url: 'https://api.eu.mailgun.net',
})

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  try {
    const result = await mailgun.messages.create(process.env.MAILGUN_DOMAIN!, {
      from: process.env.MAILGUN_FROM!,
      to: [process.env.MAILGUN_TO!],
      subject: `Message from site from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ success: true, id: result.id })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Error sending an e-mail' }, { status: 500 })
  }
}