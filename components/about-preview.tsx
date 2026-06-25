"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function AboutPreview() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="scale" delay={0.2}>
            <div className="relative">
              <div className="relative h-64 md:h-80 lg:h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about/18771.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg max-w-xs text-center md:text-left"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <blockquote className="text-xs md:text-sm italic text-gray-700 dark:text-gray-300">
                  &ldquo;Give your business digital wings with Technology Brilliance.&rdquo;
                </blockquote>
              </motion.div>
            </div>
          </AnimatedSection>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">WHO WE ARE</h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Your Trusted Partner Delivering IT Excellence and Innovation
            </h2>
            <br />
            <div className="h-1 w-20 bg-red-600 dark:bg-red-600"></div>
            
            <AnimatedSection animation="fade" delay={0.5}>
              <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base mt-4">
              Techbrill Solutions is an IT services and brand communication company delivering high-performance, scalable, and secure digital solutions. We help startups and enterprise clients achieve their business goals, drive growth, and create meaningful impact through innovative, user-friendly technology.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                At Techbrill, we stand for brilliance, diligence, and commitment to core values of collaboration. We tackle every challenge with determination and creativity, ensuring we reach our common goal no matter the impediment.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.6}>
              <Link href="/company">
                <Button className="group hover:bg-red-600 hover:text-white">
                  Explore More{" "}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
