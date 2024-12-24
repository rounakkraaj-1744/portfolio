import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-indigo-100/30 to-transparent dark:from-amber-900/50 dark:via-indigo-900/30 dark:to-transparent"></div>
      <div className="relative max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-amber-500 to-indigo-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300">
          <CardContent className="p-6">
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-indigo-50 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 focus:border-amber-500 dark:focus:border-amber-500 text-indigo-900 dark:text-indigo-100 placeholder:text-indigo-400 dark:placeholder:text-indigo-500 transition-colors duration-300"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-indigo-50 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 focus:border-amber-500 dark:focus:border-amber-500 text-indigo-900 dark:text-indigo-100 placeholder:text-indigo-400 dark:placeholder:text-indigo-500 transition-colors duration-300"
                required
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-md bg-indigo-50 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-700 hover:border-indigo-400 dark:hover:border-indigo-500 focus:border-amber-500 dark:focus:border-amber-500 text-indigo-900 dark:text-indigo-100 placeholder:text-indigo-400 dark:placeholder:text-indigo-500 transition-colors duration-300"
                required
              ></Textarea>
              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-700">
                Send Message
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

