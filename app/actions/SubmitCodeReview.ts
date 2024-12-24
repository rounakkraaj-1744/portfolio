'use server'

import { z } from 'zod'
import { Resend } from 'resend'; 

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

  // Here you would typically send an email or store the submission in a database
  // For this example, we'll just log the data and return a success message
  console.log('Code review request received:', validatedFields.data)

  return { success: true, message: 'Your code review request has been submitted successfully!' }
}
