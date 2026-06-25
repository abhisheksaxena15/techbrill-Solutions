"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-primary dark:bg-gray-900 text-white px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <AnimatedText text="Ready to Transform Your Business?" className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 leading-tight" />
            <AnimatedSection animation="fade" delay={0.2}>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90 max-w-xl mx-auto lg:mx-0">
                Let&apos;s discuss how our technology solutions can help you achieve your business goals, overcome
                challenges, and drive sustainable growth in today&apos;s competitive market.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white text-primary hover:text-primary hover:bg-white/90 dark:bg-blue-700 dark:text-white dark:hover:bg-red-600 hover:bg-red-600 hover:text-white group"
                    >
                      Get in Touch{" "}
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/services">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-primary border-none hover:bg-red-600 hover:text-white 
                dark:text-blue-100 dark:border-blue-900 dark:hover:bg-red-800 dark:hover:border-blue-200"
                    >
                      Our Services
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "20+", label: "Team Members" },
            ].map((stat, index) => (
              <AnimatedSection key={index} animation="scale" delay={0.2 + index * 0.1}>
                <motion.div
                  className="bg-white/10 dark:bg-blue-900/30 p-4 md:p-6 rounded-xl text-center backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-1 md:mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-white/80 dark:text-blue-100/90 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
