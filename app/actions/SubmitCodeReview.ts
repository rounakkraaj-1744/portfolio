'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  githubRepo: z.string().url().startsWith('https://github.com/'),
  email: z.string().email(),
})

export async function submitCodeReview(formData: FormData) {
  const validatedFields = schema.safeParse({
    githubRepo: formData.get('githubRepo'),
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid input. Please check your entries.' }
  }

  const { githubRepo, email } = validatedFields.data

  try {
    await resend.emails.send({
      from: 'Code Review <onboarding@resend.dev>',
      to: 'rounakkraaj707@gmail.com',
      subject: 'New Code Review Request',
      html: `
        <h2>New Code Review Request</h2>
        <p>A new code review request has been submitted:</p>
        <ul>
          <li><strong>GitHub Repository:</strong> ${githubRepo}</li>
          <li><strong>Requester's Email:</strong> ${email}</li>
        </ul>
      `,
    })

    // Send confirmation email to the requester
    await resend.emails.send({
      from: 'Code Review <onboarding@resend.dev>',
      to: email,
      subject: 'Code Review Request Received',
      html: `
        <h2>Code Review Request Received</h2>
        <p>Thank you for submitting your code for review. Here's what you submitted:</p>
        <ul>
          <li><strong>GitHub Repository:</strong> ${githubRepo}</li>
        </ul>
        <p>I'll review your code and get back to you soon!</p>
      `,
    })

    return { 
      success: true, 
      message: 'Your code review request has been submitted successfully! Check your email for confirmation.' 
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return { 
      success: false, 
      message: 'Failed to submit your request. Please try again later.' 
    }
  }
}

