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
            <h3 className="text-2xl font-semibold">Aspiring Software Engineer & Problem Solver</h3>
            <p className="text-muted-foreground">
              I am a passionate computer science student with a strong foundation in software development and a keen
              interest in building scalable applications. My journey in tech began with curiosity about how digital
              products work, which led me to pursue a degree in computer science.
            </p>
            <p className="text-muted-foreground">
              Currently, I am focused on honing my skills in full-stack development, mobile app development, systems
              design, and DevOps practices. I enjoy tackling complex problems and turning them into elegant solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h4 className="font-bold mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">
                Bachelor of Technology in Computer Science
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