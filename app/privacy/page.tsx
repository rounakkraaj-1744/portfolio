import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy | Rounakk Raaj Sabat",
  description: "Privacy policy for Rounakk Raaj Sabat's portfolio website.",
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: May 18, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Rounakk Raaj Sabat&apos;s portfolio website. I respect your privacy and am committed to protecting
              your personal data. This privacy policy will inform you about how I look after your personal data when you
              visit my website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. The Data I Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person
              can be identified. I may collect, use, store, and transfer different kinds of personal data about you
              which I have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Identity Data</strong> includes first name, last name, username, or similar identifier.
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                and version, time zone setting and location, browser plug-in types and versions, operating system and
                platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use my website.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How I Collect Your Personal Data</h2>
            <p>I use different methods to collect data from and about you including through:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Direct interactions.</strong> You may give me your Identity and Contact Data by filling in forms
                or by corresponding with me by email or otherwise.
              </li>
              <li>
                <strong>Automated technologies or interactions.</strong> As you interact with my website, I may
                automatically collect Technical Data about your equipment, browsing actions, and patterns.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How I Use Your Personal Data</h2>
            <p>
              I will only use your personal data when the law allows me to. Most commonly, I will use your personal data
              in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where I need to perform the contract I am about to enter into or have entered into with you.</li>
              <li>
                Where it is necessary for my legitimate interests (or those of a third party) and your interests and
                fundamental rights do not override those interests.
              </li>
              <li>Where I need to comply with a legal obligation.</li>
            </ul>
            <p className="mt-4">Purposes for which I will use your personal data:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To respond to your inquiries</li>
              <li>To provide you with information about my services</li>
              <li>To manage my relationship with you</li>
              <li>To administer and protect my business and this website</li>
              <li>To use data analytics to improve my website, services, marketing, and user experiences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              I have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, I limit access to your
              personal data to those who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>
              I will only retain your personal data for as long as reasonably necessary to fulfill the purposes I
              collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or
              reporting requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data,
              including the right to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely
              used in order to make websites work, or work more efficiently, as well as to provide information to the
              owners of the site. Most web browsers allow some control of most cookies through the browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins, and applications. Clicking on those
              links or enabling those connections may allow third parties to collect or share data about you. I do not
              control these third-party websites and am not responsible for their privacy statements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to the Privacy Policy</h2>
            <p>
              I may update this privacy policy from time to time. I will notify you of any changes by posting the new
              privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p>
              If you have any questions about this privacy policy, please contact me at{" "}
              <a href="mailto:rounakkraaj707@gmail.com" className="text-primary hover:underline">
                rounakkraaj707@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            By using this website, you acknowledge that you have read and understood this Privacy Policy and agree to
            its terms.
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
