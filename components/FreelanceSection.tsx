"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { ChevronLeft, ChevronRight, Star, Quote, Zap, CheckCircle2 } from "lucide-react"
import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
})

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "Product Manager",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Rounakk was an absolute pleasure. He delivered our web application ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving skills are exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "DataFlow Systems",
    role: "CTO",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Rounakk helped us rebuild our entire backend infrastructure. His knowledge of system design and ability to optimize for performance transformed our application. We've seen a 40% improvement in response times.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Creative Solutions",
    role: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We hired Rounakk to develop our e-commerce platform, and he delivered a beautiful, functional site that has significantly increased our conversion rates. His communication throughout the project was excellent.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    company: "FinTech Innovations",
    role: "Lead Developer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Rounakk's expertise in both frontend and backend development made him the perfect partner for our complex financial application. He navigated challenging requirements with ease and delivered a secure, scalable solution.",
    rating: 4,
  },
]

export default function FreelanceSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  useEffect(() => {
    // Auto-rotate testimonials
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current)
      }
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    try {
      formSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please check the form for errors",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Project request submitted!",
        description: "Thank you for your interest. I'll review your project details and get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to submit your project request. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextTestimonial = () => {
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current)
    }
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const prevTestimonial = () => {
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current)
    }
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const goToTestimonial = (index: number) => {
    if (testimonialInterval.current) {
      clearInterval(testimonialInterval.current)
    }
    setCurrentTestimonial(index)
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  return (
    <section id="freelance" className="py-20 relative overflow-hidden noise">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold gradient-text">
            Freelance Services
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mt-2 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="max-w-2xl text-muted-foreground">
            Let's collaborate on your next project. I offer professional development services tailored to your needs.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="services" className="w-full">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center mb-8"
          >
            <TabsList className="bg-background/80 backdrop-blur-sm">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="hire">Hire Me</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="services" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Web Development
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Full-stack web applications built with modern technologies like React, Next.js, Node.js, and more.
                      Responsive, performant, and accessible.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Custom web applications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">E-commerce solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Progressive Web Apps (PWA)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Mobile App Development
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Cross-platform mobile applications that work seamlessly on iOS and Android. Built with React
                      Native for native performance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Native-like performance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Offline capabilities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">App store deployment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      API Development
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Robust and scalable APIs that power your applications. RESTful or GraphQL endpoints with proper
                      authentication and authorization.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">RESTful API design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">GraphQL implementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Authentication & security</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      DevOps & Cloud
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Set up your infrastructure for success. CI/CD pipelines, containerization, and cloud deployment to
                      ensure your applications run smoothly.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Docker & Kubernetes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">CI/CD pipeline setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">AWS/GCP/Azure deployment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Database Design
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Efficient database architecture that scales with your application. SQL or NoSQL solutions based on
                      your specific needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Schema design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Performance optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Data migration</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Technical Consultation
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Expert advice on your technical challenges. Architecture reviews, technology selection, and best
                      practices guidance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Architecture review</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Technology selection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">Performance optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="testimonials" className="mt-0">
            <div className="testimonial-slider relative">
              <div className="max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="testimonial-slide"
                  >
                    <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md group overflow-hidden">
                      <CardContent className="p-8 relative">
                        <Quote className="absolute top-6 right-6 h-24 w-24 text-primary/5 rotate-12" />
                        <div className="flex flex items-center gap-6 mb-6">
                          <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                              alt={testimonials[currentTestimonial].name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {testimonials[currentTestimonial].name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                            </p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < testimonials[currentTestimonial].rating ? "text-primary" : "text-muted"}`}
                                  fill={i < testimonials[currentTestimonial].rating ? "currentColor" : "none"}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic relative z-10">
                          "{testimonials[currentTestimonial].content}"
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center mt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>

                  <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`testimonial-dot ${index === currentTestimonial ? "active" : ""}`}
                        onClick={() => goToTestimonial(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hire" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <Card className="border border-border/50 hover:border-primary/20 transition-all hover:shadow-md">
                <CardContent className="p-6 pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Request a Project Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Your Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Your Email <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization (Optional)</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">
                          Project Type <span className="text-primary">*</span>
                        </Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={`w-full h-10 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.projectType ? "border-destructive" : ""}`}
                          required
                        >
                          <option value="">Select type</option>
                          <option value="web">Web Application</option>
                          <option value="mobile">Mobile App</option>
                          <option value="api">API Development</option>
                          <option value="devops">DevOps & Cloud</option>
                          <option value="database">Database Design</option>
                          <option value="consultation">Technical Consultation</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.projectType && <p className="text-xs text-destructive">{errors.projectType}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">
                          Budget Range <span className="text-primary">*</span>
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={`w-full h-10 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.budget ? "border-destructive" : ""}`}
                          required
                        >
                          <option value="">Select budget</option>
                          <option value="small">$1,000 - $5,000</option>
                          <option value="medium">$5,000 - $10,000</option>
                          <option value="large">$10,000 - $25,000</option>
                          <option value="enterprise">$25,000+</option>
                          <option value="hourly">Hourly Rate</option>
                        </select>
                        {errors.budget && <p className="text-xs text-destructive">{errors.budget}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">
                          Timeline <span className="text-primary">*</span>
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={`w-full h-10 px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.timeline ? "border-destructive" : ""}`}
                          required
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">ASAP (1-2 weeks)</option>
                          <option value="short">Short (2-4 weeks)</option>
                          <option value="medium">Medium (1-3 months)</option>
                          <option value="long">Long (3+ months)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                        {errors.timeline && <p className="text-xs text-destructive">{errors.timeline}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Project Description <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Please describe your project requirements, goals, and any specific features you need..."
                        rows={6}
                        required
                        value={formData.description}
                        onChange={handleChange}
                        className={errors.description ? "border-destructive" : ""}
                      />
                      {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
                    </div>

                    <Button type="submit" className="w-full group relative overflow-hidden" disabled={isSubmitting}>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-purple-500 group-hover:opacity-90 transition-opacity"></span>
                      <span className="relative flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-4 w-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Zap className="mr-2 h-4 w-4" />
                            Submit Project Request
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
