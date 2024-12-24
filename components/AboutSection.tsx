import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/30 via-amber-100/20 to-transparent dark:from-indigo-800/30 dark:via-amber-900/20 dark:to-transparent"></div>
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-indigo-200 dark:border-indigo-700"
          >
            <p className="text-lg mb-6 text-indigo-800 dark:text-indigo-200">
              I'm a web developer with a passion for creating beautiful and functional websites. With expertise in React, Next.js, and modern web technologies, I strive to deliver exceptional user experiences.
            </p>
            <p className="text-lg text-indigo-800 dark:text-indigo-200">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { name: 'React.js', color: 'from-amber-200 to-amber-300 dark:from-amber-700 dark:to-amber-800' },
              { name: 'Next.js', color: 'from-indigo-200 to-indigo-300 dark:from-indigo-700 dark:to-indigo-800' },
              { name: 'TypeScript', color: 'from-amber-300 to-amber-400 dark:from-amber-600 dark:to-amber-700' },
              { name: 'Springboot', color: 'from-indigo-300 to-indigo-400 dark:from-indigo-600 dark:to-indigo-700' },
              { name: 'React Native', color: 'from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-600' },
              { name: 'DSA', color: 'from-indigo-400 to-indigo-500 dark:from-indigo-500 dark:to-indigo-600' },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-lg text-center font-semibold bg-gradient-to-br ${skill.color} text-indigo-900 dark:text-indigo-100 backdrop-blur-sm border border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:text-indigo-100 dark:hover:text-white`}
              >
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

