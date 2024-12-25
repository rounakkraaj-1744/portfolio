'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Code, Loader2 } from 'lucide-react'
import { submitCodeReview } from '@/app/actions/SubmitCodeReview'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'
import Image from 'next/image'

export default function CodeReviewSection() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await submitCodeReview(formData)

    setIsLoading(false)

    if (response.success) {
      toast({
        title: 'Success!',
        description: response.message,
      })
      const formElement = document.getElementById('code-review-form') as HTMLFormElement;
      if (formElement) {
        formElement.reset();
      }
    } else {
      toast({
        title: 'Error',
        description: response.message,
        variant: 'destructive',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <section id="code-review" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
          Code Review Service
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-amber-100 to-indigo-100 dark:from-amber-900 dark:to-indigo-900 hover:shadow-lg transition-all duration-300 border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-900 dark:text-indigo-100">
                    Get Your Code Reviewed
                  </h3>
                  <p className="text-indigo-700 dark:text-indigo-200 mb-4">
                    I offer code reviews for personal projects and hackathon submissions. Get expert feedback to improve your code quality and learn best practices.
                  </p>
                  <form id="code-review-form" onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="githubRepo">GitHub Repository URL</Label>
                      <Input
                        id="githubRepo"
                        name="githubRepo"
                        type="url"
                        placeholder="https://github.com/yourusername/your-repo"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-700">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Code className="mr-2 h-4 w-4" />
                          Submit Your Code
                        </>
                      )}
                    </Button>
                  </form>
                </div>
                <div className="w-full md:w-1/2">
                  <Image
                    src="/review.jpg"
                    alt="Code Review Illustration"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="w-full h-100"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

