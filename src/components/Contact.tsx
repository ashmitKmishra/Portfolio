import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Code2 } from "lucide-react";
import Lottie from "lottie-react";
import chatbotAnimation from "@/assets/Live_chatbot.json";

export function Contact() {

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="flex gap-4 mb-8 justify-center flex-wrap">
                <motion.a
                  href="http://github.com/ashmitkmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                  title="GitHub"
                >
                  <Github className="h-6 w-6 text-foreground" />
                </motion.a>

                <motion.a
                  href="https://leetcode.com/ashmit0702"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                  title="LeetCode"
                >
                  <Code2 className="h-6 w-6 text-foreground" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ashmit-mishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </motion.a>

                <motion.a
                  href="mailto:ashmitkmishra@gmail.com"
                  aria-label="Email"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                  title="Email"
                >
                  <Mail className="h-6 w-6 text-foreground" />
                </motion.a>
              </div>
            </div>

            <Card className="p-6 bg-card border-border card-glow">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:ashmit@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      ashmitkmishra@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Mississippi State, MS
                    </p>
                  </div>
                </div>

                
              </div>
            </Card>
          </motion.div>

          {/* Chatbot Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              <Lottie 
                animationData={chatbotAnimation} 
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
