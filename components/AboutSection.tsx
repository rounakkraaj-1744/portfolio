export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mt-2 mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Aspiring Software Engineer, System Programmer & Problem Solver</h3>
            <p className="text-muted-foreground">
              I am a passionate Computer Science student with a deep interest in full-stack development, mobile app development,
              system programming, and DevOps. My journey in tech started with a curiosity about how digital products work,
              which evolved into hands-on experience building scalable and production-ready applications across multiple domains.
            </p>
            <p className="text-muted-foreground">
              I specialize in developing high-performance web and mobile applications using Next.js,
              React Native, NestJS, Spring Boot, and Rust while leveraging PostgreSQL, MongoDB, and cloud-based databases.
              My expertise extends to DevOps and cloud infrastructure, where I integrate Docker, Kubernetes, AWS, and CI/CD pipelines to
              ensure seamless deployment and scalability.
            </p>
            <p className="text-muted-foreground">
              Beyond full-stack development, I am exploring Generative AI (GenAI) for application development,
              incorporating LangChain and AI-driven automation into my projects.
              I also have a strong foundation in system programming, building optimized software that blends efficiency with modern technology.
            </p>
            <p className="text-muted-foreground">
              Let&apos;s connect and build something impactful together!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">
                Bachelor&apos;s of Technology in Computer Science
                <br />
                Year of Graduation: 2027
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Location</h4>
              <p className="text-sm text-muted-foreground">
                Based in Odisha, India
                <br />
                Open to Hybrid/Remote Opportunities
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Interests</h4>
              <p className="text-sm text-muted-foreground">
                Blockchain
                <br />
                Low Latency Programming
                <br />
                Open Source Contribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}