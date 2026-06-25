'use client'

// Corrected import paths based on common Next.js project structures.
// Assuming these components are in the specified directories.
import TechnologyStackOldone from "@/components/technology-stack-oldone"
import ConsultationSection from "@/components/ConsultationSection";
import TechnoTechToolsSection from "@/components/ui/techno-tech-tools-section";
import WorkProcessTech from "@/components/ui/work-process-tech";
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"

// This is correct, but let's ensure it's the only motion import.
import { motion } from "framer-motion";

// Corrected imports for React components and icons
import React from "react";
import { FaRocket, FaLock, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";




const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/about/techno.webp";

// Changed icons to FaReact components for consistency
const benefits = [
  {
    title: "Agile Delivery",
    description: "We deliver high-value solutions quickly through an iterative, flexible process that adapts to your needs.",
    icon: "🚀",
  },
  {
    title: "Secure Solutions",
    description: "We build robust, proactive security into every solution to protect your data and ensure your peace of mind.",
    icon: "🔒",
  },
  {
    title: "Certified Experts",
    description: "Our team is comprised of certified professionals with validated expertise, guaranteeing high-quality, reliable results.",
    icon: "🎓" ,
  },
  {
    title: "Continuous Innovation",
    description: "We are committed to a process of constant improvement, ensuring your solutions always remain modern and competitive.",
    icon: "💡",
  },
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description: "We start by understanding your vision, audience, and goals to craft a purpose-driven plan.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers create user-focused, engaging interfaces that reflect your brand.",
  },
  {
    step: "03",
    title: "Development",
    description: "We turn designs into high-performing, scalable solutions using modern technologies.",
  },
  {
    step: "04",
    title: "Consulting & Support",
    description: "We provide ongoing consultancy, support, and maintenance for your continued success.",
  },
  {
    step: "05",
    title: "Promotion",
    description: "Our digital marketing experts help you grow your presence and reach your audience.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      {/* Hero Banner with Motion Effects */}
      <section className="relative w-full h-[320px] md:h-[320px] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* Background Image with motion effect */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05, filter: "blur(4px)" }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={bannerImage}
            alt="Technologies Banner Background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }} />

        {/* Centered Content with motion effects */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
          {/* Main Heading */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Technologies
          </motion.h1>

          {/* Sub-paragraph */}
          <motion.p
            className="text-lg md:text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Modern, high-performance technology stacks for your business growth and digital transformation.
          </motion.p>

          {/* Buttons with motion effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="/services/#contact-form01">
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:dark:bg-red-900 hover:bg-red-900 w-full sm:w-auto">
                  Explore our expertise
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="/contact#contact-form">
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-red-700 hover:text-white w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Moved to a different container or adjusted position */}
        <motion.div
          className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 z-40"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-7 h-7 text-white opacity-80" />
        </motion.div>
      </section>


      {/* Light + dark Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600 m ">
              Technology Excellence
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mb-3">
              Driving Innovation with Cutting-Edge Technologies
            </h2>
            <div className="w-32 h-1 bg-red-600 mb-4" />

            <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
              At Techbrill, technology is at the core of everything we do. We believe that the right tech stack can turn bold ideas into powerful solutions. Our teams continuously evolve with the latest advancements to ensure our clients stay ahead of the curve, whether it’s building robust applications, modernizing legacy systems, or adopting emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="bg-white dark:bg-gray-800 text-blue-800 dark:text-blue-400 font-semibold px-8 py-3 text-base shadow-md hover:bg-red-700 hover:dark:bg-red-700 hover:text-white hover:dark:text-white mt-4">
                Consult Our Expert
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Technologies"
              width={500}
              height={440}
              className="rounded-2xl shadow-lg w-full max-w-md"
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section>


      {/* Technology Stack Section */}
      <section className="pt-4 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <TechnologyStackOldone />
        </div>
      </section>


      {/* 4. Tech Stack Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto bg-white dark:bg-gray-900">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600 mb-4">
              Innovation & Emerging Techn
            </h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mt-4">
              Transforming Ideas with Next-Gen Technologies
            </h2>
            <div className="w-32 h-1 mx-auto bg-red-600 rounded-full mt-4 mb-4" />
            <div className="flex justify-center mt-4">
              <h3 className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                We don’t just adopt technology, we innovate with it. Our R&D team explores next-gen solutions that drive competitive advantage.
              </h3>
            </div>
          </div>
          <TechnoTechToolsSection />
        </div>
      </section>

      {/* Our Work Process Section (from mobile development) */}
      <WorkProcessTech />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600 mb-2">
              Why Choose Us
            </h3>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mb-3">
              Blending Expertise, Reliability, and Forward Thinking
            </h2>
            <div className="w-32 h-1 mx-auto bg-red-600 mt-4 mb-4" />
            <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
              Our focus on innovation, quality, and reliability ensures that every solution we deliver is built to scale, secure by design, and aligned with your business goals for long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {benefits.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div key={idx}> {/* Replaced AnimatedSection to prevent errors if not found */}
                  <div className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-black/30 dark:border-gray-700 h-full transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 md:cursor-pointer active:scale-95 touch-manipulation min-h-[280px]   /* NEW */

    flex flex-col   /* NEW ">
                    <div className="text-4xl mb-4 transform transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-3">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white md:group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed md:group-hover:text-gray-800 md:dark:group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

          </div>
          {/* AnimatedText component was not used in the code, but if needed, it should be imported */}
          {/* <AnimatedText text="Your Text Here" /> */}
        </div>
      </section>

      <ConsultationSection />
    </>
  );
}
