import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service | Rounakk Raaj Sabat",
  description: "Terms and conditions for using Rounakk Raaj Sabat's services and website.",
}

export default function TermsPage() {
  return (
    <main className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: May 18, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Rounakk Raaj Sabat's portfolio website. These Terms and Conditions govern your use of our
              website and services. By accessing or using our website, you agree to be bound by these Terms. If you
              disagree with any part of the terms, you may not access the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, Rounakk Raaj Sabat owns the intellectual property rights for all material on this
              website. All intellectual property rights are reserved. You may view and/or print pages from the website
              for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className="mt-4">You must not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
            <p>
              In these Terms and Conditions, "User Content" shall mean any audio, video, text, images, or other material
              you choose to submit to this website. By submitting User Content, you grant Rounakk Raaj Sabat a
              non-exclusive, worldwide, irrevocable, royalty-free license to use, reproduce, adapt, publish, translate,
              and distribute it in any media.
            </p>
            <p className="mt-4">
              User Content must not be illegal or unlawful, must not infringe any third party's legal rights, and must
              not be capable of giving rise to legal action whether against you or Rounakk Raaj Sabat or a third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall Rounakk Raaj Sabat, nor any of its officers, directors, and employees, be liable to you
              for anything arising out of or in any way connected with your use of this website, whether such liability
              is under contract, tort, or otherwise, and Rounakk Raaj Sabat shall not be liable for any indirect,
              consequential, or special liability arising out of or in any way related to your use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent Rounakk Raaj Sabat from and against any and all liabilities,
              costs, demands, causes of action, damages, and expenses (including reasonable attorney's fees) arising out
              of or in any way related to your breach of any of the provisions of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such
              unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such
              provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Variation of Terms</h2>
            <p>
              Rounakk Raaj Sabat is permitted to revise these Terms at any time as it sees fit, and by using this
              website, you are expected to review such Terms on a regular basis to ensure you understand all terms and
              conditions governing use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and construed in accordance with the laws of India, and you submit to the
              non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any
              disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact me at{" "}
              <a href="mailto:rounakkraaj707@gmail.com" className="text-primary hover:underline">
                rounakkraaj707@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms
            and Conditions.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
