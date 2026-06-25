"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import { HeroHighlight } from "./BackgroundBeams"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
      <HeroHighlight>
        <div className="mx-auto max-w-7xl px-6 py-20 md:flex md:items-center md:justify-between lg:px-8">
          {/* Left Content */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
                Innovative IT Solutions <br />
                for Your Business Growth
              </h1>
              <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-300">
                We deliver cutting-edge technology solutions that help businesses
                transform, innovate, and thrive in the digital era. Our expert
                team turns your vision into reality with precision and creativity.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-red-600 hover:dark:bg-red-600 transition"
                >
                  Get Started
                </a><Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-blue-600 px-6 py-3  hover:bg-red-600 hover:dark:bg-red-600 hover:text-white transition"
                >
                  Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-8 text-center sm:text-left [&>div]:w-[calc(50%-1rem)]">
                <div className="bg-white text-center dark:bg-gray-800 rounded-lg shadow p-4">
                  <p className="text-2xl font-bold text-blue-600">8+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="bg-white text-center dark:bg-gray-800 rounded-lg shadow p-4">
                  <p className="text-2xl font-bold text-blue-600">20+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Team Members</p>
                </div>
                <div className="bg-white text-center dark:bg-gray-800 rounded-lg shadow p-4">
                  <p className="text-2xl font-bold text-blue-600">100+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-white text-center dark:bg-gray-800 rounded-lg shadow p-4">
                  <p className="text-2xl font-bold text-blue-600">50+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <AnimatedSection delay={0.5} animation="scale">
            <div className="relative mt-16 md:mt-0">
              {/* Image with Browser Mock */}
              <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl border border-gray-200">
                {/* Browser Top Bar */}
                <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2 border-b border-gray-300">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>

                {/* Team Image */}
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="Team Working"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Trusted Badge */}
              <motion.div
                className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border text-sm font-medium text-gray-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                🔒 Trusted by 100+ Clients
              </motion.div>

              {/* 24/7 Support Badge */}
              <motion.div
                className="mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-lg border border-green-200 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                24/7 Support Available
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </HeroHighlight>
    </section>
  )
}
