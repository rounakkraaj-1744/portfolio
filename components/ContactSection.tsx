"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">rounakkraaj707@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 76069 54674</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Berhampur, Odisha, India</p>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-medium mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/rounakkraaj-1744" target="_blank"
                    rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.278 9.5 21.017C9.5 20.756 9.5 20.178 9.5 19.391C6.73 19.939 6.14 18.047 6.14 18.047C5.68 17.017 5.03 16.714 5.03 16.714C4.12 16.143 5.1 16.143 5.1 16.143C6.08 16.214 6.6 17.139 6.6 17.139C7.5 18.584 8.97 18.047 9.54 17.805C9.63 17.2 9.89 16.784 10.17 16.541C7.88 16.299 5.5 15.513 5.5 11.793C5.5 10.763 5.88 9.926 6.63 9.274C6.54 9.013 6.2 8.013 6.73 6.677C6.73 6.677 7.57 6.416 9.5 7.774C10.29 7.532 11.15 7.412 12 7.412C12.85 7.412 13.71 7.532 14.5 7.774C16.43 6.416 17.27 6.677 17.27 6.677C17.8 8.013 17.46 9.013 17.37 9.274C18.12 9.926 18.5 10.763 18.5 11.793C18.5 15.513 16.12 16.299 13.83 16.541C14.2 16.844 14.5 17.429 14.5 18.332C14.5 19.642 14.5 20.656 14.5 21.017C14.5 21.278 14.66 21.581 15.16 21.489C19.135 20.166 22 16.418 22 12C22 6.477 17.523 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/rounakk-raaj-745rrs/" target="_blank"
                    rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        fill="currentColor"
                      />
                      <path d="M6 9H2V21H6V9Z" fill="currentColor" />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="https://twitter.com/rounakk_745" target="_blank"
                    rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22 4.01C21.0424 4.67546 19.9821 5.19211 18.86 5.54C18.2577 4.84751 17.4573 4.34669 16.567 4.09513C15.6767 3.84357 14.7395 3.85407 13.8552 4.12492C12.971 4.39577 12.1996 4.9143 11.6292 5.6124C11.0589 6.31051 10.7149 7.16055 10.64 8.05C10.64 8.38 10.64 8.71 10.72 9.04C9.00224 8.96438 7.31489 8.54551 5.7483 7.80662C4.18172 7.06774 2.76783 6.02185 1.58 4.73C1.14312 5.5321 0.932826 6.44206 0.980343 7.35788C1.02786 8.2737 1.33061 9.15223 1.86 9.89C1.08975 9.87028 0.337907 9.66062 0.67 9.29C0.664882 10.2558 0.974656 11.1968 1.55704 11.9723C2.13943 12.7478 2.96512 13.3182 3.91 13.6C3.19819 13.7921 2.45406 13.8156 1.73 13.67C1.96116 14.5037 2.43175 15.2492 3.08115 15.7996C3.73055 16.3501 4.52585 16.6809 5.35 16.75C4.0764 17.7659 2.5076 18.3353 0.89 18.42C0.6 18.42 0.3 18.42 0 18.37C1.65193 19.4114 3.55842 19.9996 5.5 20C12.11 20 15.74 14.86 15.74 10.42C15.74 10.24 15.74 10.06 15.74 9.88C16.6912 9.19371 17.5125 8.35068 18.16 7.39C17.3 7.73 16.39 7.96 15.45 8.06C16.4396 7.5008 17.1834 6.61347 17.53 5.56C16.6145 6.08762 15.6141 6.46496 14.57 6.67C13.8533 5.91825 12.8748 5.45775 11.8289 5.37325C10.7829 5.28875 9.74418 5.58648 8.91276 6.21449C8.08135 6.8425 7.51421 7.75484 7.31302 8.78037C7.11184 9.8059 7.29128 10.8654 7.82 11.76C5.16995 11.6211 2.6349 10.5797 0.64 8.79C0.64 8.79 -1.61 14.74 5.35 17.68C3.94107 18.6643 2.27644 19.1909 0.58 19.19C7.55 23 15.76 19.19 15.76 10.42C15.76 10.21 15.75 10 15.73 9.78C16.5847 9.02316 17.2879 8.10654 17.8 7.08L22 4.01Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a href="https://instagram.com/rounakk_745" target="_blank"
                    rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can I help you?" required value={formData.subject} onChange={handleChange}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." rows={6} required value={formData.message} onChange={handleChange} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}