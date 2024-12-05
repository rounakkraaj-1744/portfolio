import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link , Download } from "lucide-react"; 
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-indigo-200/10 to-transparent dark:from-amber-700/20 dark:via-indigo-700/10 dark:to-transparent"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-6 p-2 inline-block">
          <h1 className="text-5xl sm:text-6xl font-bold text-indigo-900 dark:text-amber-100">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
              Rounakk Raaj Sabat
            </span>
          </h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl mb-8 text-indigo-700 dark:text-indigo-200">
          A passionate web developer creating amazing digital experiences
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-x-4">
          <Button size="lg" onClick={() => router.push('#contact')} className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-700">
            Get in touch
          </Button>
          <Button size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-700"
            onClick={() => window.open('https://codebriefs.netlify.app', '_blank', 'noopener noreferrer')} >
            <Link className="mr-2 h-4 w-4" />
            Blogs
          </Button>
          <Button variant="outline" size="lg"
            className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-600 dark:text-indigo-200 dark:hover:bg-indigo-800/50"
            onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}