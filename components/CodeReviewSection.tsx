import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from 'lucide-react';

export default function CodeReviewSection() {
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
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-semibold mb-4 text-indigo-900 dark:text-indigo-100">
                    Get Your Code Reviewed
                  </h3>
                  <p className="text-indigo-700 dark:text-indigo-200 mb-4">
                    I offer code reviews for personal projects and hackathon submissions. Get excellent feedback to improve your code quality and learn best practices.
                  </p>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-700">
                    <Code className="mr-2 h-4 w-4" />
                    Submit Your Code
                  </Button>
                </div>
                <div className="w-full md:w-1/3">
                  <img
                    src="/code-review-illustration.svg"
                    alt="Code Review Illustration"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
