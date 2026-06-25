'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Bug, Shield, Target, Clock, Headphones, Lightbulb, ChevronDown, Cloud, FileCheck } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import ServicesSection from '@/components/ui/services-section-QA';
import TechStackSection from '@/components/ui/TechStack-QA';
import WorkProcess from '@/components/ui/work-process';
import ConsultationSection from '@/components/ConsultationSection';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/animated-section';
import Link from 'next/link';
import IndustriesSection from '@/components/industries-section-QA';
import IndustriesSectionQA from '@/components/industries-section-QA';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const benefits = [
  {
    icon: <Target className="w-8 h-8 text-blue-700 dark:text-blue-300" />,
    title: "Proven Expertise",
    description: "Years of QA excellence across diverse industries."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-700 dark:text-blue-300" />,
    title: "Faster Time-to-Market",
    description: "Accelerated delivery with automation and DevOps QA."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-700 dark:text-blue-300" />,
    title: "Dedicated QA Teams",
    description: "Skilled professionals tailored for your project needs."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-700 dark:text-blue-300" />,
    title: "Robust Security Focus",
    description: "Ensuring applications remain secure and compliant."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-700 dark:text-blue-300" />,
    title: "Cutting-Edge Innovation",
    description: "Adopting next-gen tools and methodologies for QA."
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-700 dark:text-blue-300" />,
    title: "Client-Centric Approach",
    description: "Tailored QA solutions aligned with business goals."
  }
];

export default function SoftwareQATestingPage() {
  return (
    <ErrorBoundary>
      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>

        {/* Hero Section with Background Image */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/qa-testing-hero.jpg" alt="QA & Testing Hero" fill className="object-cover object-center z-0" priority />
          {/* Dark Linear Gradient Overlay with Blur */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          {/* Centered Content */}
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: '-2rem' }}>
            <motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Software QA & Testing
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Ensuring quality, security, and reliability in every release
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >

            </motion.div>
          </div>

          {/* Scroll Down Indicator (if space allows) */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-7 h-7 text-white opacity-80" />
          </motion.div>
        </section>

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
                      &ldquo;Partnering with Techbrill means delivering quality with confidence and accelerating your digital journey.&rdquo;
                    </blockquote>
                  </motion.div>
                </div>
              </AnimatedSection>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">ENSURING EXCELLENCE</h3>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  Powering Digital Success Through Quality Assurance
                </h2>
                <br />
                <div className="w-20 h-1 bg-red-600 mb-6"></div>


                <AnimatedSection animation="fade" delay={0.5}>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                    Quality assurance has become a cornerstone of modern software delivery, ensuring reliability, security, and seamless user experiences in today’s fast-paced digital world. Robust QA practices not only reduce risks but also accelerate time-to-market and strengthen customer trust.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                    At Techbrill, we deliver end-to-end QA and Testing services tailored to your business goals. From functional, automation, and mobile testing to performance, security, and API validation, our solutions combine precision, scalability, and compliance to guarantee excellence.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                    Our expert QA engineers, automation specialists, and domain-focused professionals leverage next-gen tools and proven methodologies to deliver flawless, future-ready software.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade" delay={0.6}>
                  <Link href="/company">
                    <Button className="group bg-blue-800 hover:bg-red-600 dark:bg-blue-700">
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

        {/* Service Explanation Section - Minimal alternating layout with working images */}
        <ServicesSection />


        {/* Advanced Technologies */}
        <section className="py-16 bg-white dark:bg-gray-950 text-gray-900">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">ADVANCED QA SERVICES</h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Next-Level QA Expertise for Emerging Technologies
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
              <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base mt-4">
                Our specialized QA services help businesses improve quality, optimize processes, and stay future-ready beyond standard testing.
              </p>
            </div>

            {/* Three Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* QA Audit & Process Improvement - Card with Image */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >

                <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/it-consultancy-hero.jpg"
                    alt="QA Audit & Process Improvement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI & Emerging Tech Testing</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Specialized testing for AI-powered applications, machine learning models, IoT devices, and blockchain solutions to ensure reliability in cutting-edge technologies.
                  </p>
                </div>
              </motion.div>

              {/* QA Documentation & Reporting */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                    alt="QA Documentation & Reporting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Test Automation</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Leverage artificial intelligence to create intelligent test automation that adapts, learns, and optimizes testing strategies for maximum efficiency and coverage.
                  </p>
                </div>
              </motion.div>

              {/* On-Demand QA Staffing */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >

                <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                    alt="On-Demand QA Staffing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Continuous Testing in DevOps</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Seamlessly integrate testing into your DevOps pipeline with continuous testing strategies that provide instant feedback and accelerate delivery cycles.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>




        {/*Specialized QA Services*/}
        <section className="py-16 bg-white dark:bg-gray-950 text-gray-900">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">SPECIALIZED QA SERVICES</h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Specialized QA Solutions Beyond Standard Testing
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
              <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base mt-4">
                Targeted QA solutions to strengthen processes, compliance, and team scalability.
              </p>
            </div>

            {/* Three Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* QA Audit & Process Improvement - Card with Image */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >

                <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/it-consultancy-hero.jpg"
                    alt="QA Audit & Process Improvement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">QA Audit & Process Improvement</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Comprehensive assessment of your current QA processes with actionable recommendations for optimization, compliance enhancement, and quality improvement.
                  </p>
                </div>
              </motion.div>

              {/* QA Documentation & Reporting */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                    alt="QA Documentation & Reporting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">QA Documentation & Reporting</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Professional documentation services including test plans, reports, compliance documentation, and comprehensive quality metrics for stakeholders.
                  </p>
                </div>
              </motion.div>

              {/* On-Demand QA Staffing */}
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >

                <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                    alt="On-Demand QA Staffing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">On-Demand QA Staffing</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Flexible QA talent solutions including dedicated QA engineers, automation specialists, and testing consultants to scale your team as needed.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Ensure Your Software Quality?</h2>
            <p className="mb-6">Let us help you deliver flawless, high-performing software.</p>
            <Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-blue-50">Contact Us</Button>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 pb-24 md:pb-32">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                Tools & Technologies
              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Powered by Industry-Leading Tools & Frameworks
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mt-2">
                We leverage industry-leading QA tools and modern technologies to ensure accuracy, efficiency, and reliability across every stage of the software testing lifecycle.
              </p>
            </div>
            <TechStackSection />
          </div>
        </section>

        {/*Industries we serve*/}
        <IndustriesSectionQA />


        {/* How We Ensure Quality Section */}
        <AnimatedSection animation="fade" delay={0.2}>
          <div className="mt-16 md:mt-20 bg-white dark:bg-gray-900">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-center mb-8 md:mb-12">
                <br />
                <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">HOW WE ENSURE QUALITY</h3>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Structured QA Process for Reliable Outcomes
                </h2>
                <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
                <p className="max-w-4xl mx-auto text-gray-600 dark:text-gray-300 text-sm mt-2">
                Our QA workflow follows a structured, transparent process designed to detect defects early, improve collaboration, and ensure every release meets the highest quality standards.
                </p>
              </div>
            </motion.div>
            <section className="py-16 bg-white dark:bg-gray-900">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="space-y-6">
                      {[
                        {
                          step: "01",
                          title: "Requirement Analysis",
                          description: "Defining scope, risks, and acceptance criteria for clear quality goals.",
                          icon: "🔍",
                          lightIcon: "🔍",
                          darkIcon: "🔍"
                        },
                        {
                          step: "02",
                          title: "Test Planning",
                          description: "Creating test strategy with scope, tools, timelines, and resource allocation.",
                          icon: "📝",
                          lightIcon: "📝",
                          darkIcon: "📝"
                        },
                        {
                          step: "03",
                          title: "Test Design & Development",
                          description: "Building detailed test cases, scripts, and scenarios for full coverage.",
                          icon: "⚙️",
                          lightIcon: "⚙️",
                          darkIcon: "⚙️"
                        },
                        {
                          step: "04",
                          title: "Test Execution",
                          description: "Running manual and automated tests to validate functionality and performance.",
                          icon: "▶️",
                          lightIcon: "▶️",
                          darkIcon: "▶️"
                        },
                        {
                          step: "05",
                          title: "Defect Reporting & Tracking",
                          description: "Logging, prioritizing, and tracking issues until resolution with full transparency.",
                          icon: "🐞",
                          lightIcon: "🐞",
                          darkIcon: "🐞"
                        },
                        {
                          step: "06",
                          title: "Test Closure & Reporting",
                          description: "Delivering detailed reports, insights, and retrospectives to optimize future cycles.",
                          icon: "📊",
                          lightIcon: "📊",
                          darkIcon: "📊"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white dark:text-white font-bold">
                            {item.step}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">{item.icon}</span>
                              <h3 className="text-xl font-semibold text-black dark:text-white">{item.title}</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* <div className="mt-8">
        <Button className="group">
          Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div> */}
                  </div>
                  <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {/* Background Image */}
                    {/* public/images/services/content-marketing-overview.jpg */}
                    <Image
                      src="/images/services/content-marketing-overview.jpg"
                      alt="Custom solution background"
                      fill
                      priority
                      className="object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-600/5"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 mx-4">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                          Need a Custom Solution?
                        </h3>
                        <p className="mb-6 max-w-sm mx-auto text-gray-700 dark:text-gray-300">
                          We specialize in creating tailored solutions to address your unique business challenges.
                        </p>
                        <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white group">
                          <a href="/contact">
                            Contact Our Team
                          </a>
                        </Button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



          </div>
        </AnimatedSection>



        


        {/* Why Choose Us Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">


            <div className="text-center mb-12">
              <h3 className="text-red-600 dark:text-blue-400 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                Why Choose Us
              </h3>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                Why Businesses Across Industries Trust Us
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
              <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                We bring together domain expertise, cutting-edge technology, and proven delivery methods to provide IT solutions that create lasting value across diverse industries
              </p>
            </div>



            {/* 3x2 Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {benefits.map((item, idx) => (
                <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                  <div className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 md:cursor-pointer active:scale-95 touch-manipulation">
                    {/* Icon with hover effect */}
                    <div className="text-4xl mb-4 transform transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-3">
                      {item.icon}
                    </div>

                    {/* Title with hover color change */}
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white md:group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed md:group-hover:text-gray-800 md:dark:group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Optional: Add a subtle background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>



        {/* Consultation Section */}
        <ConsultationSection />
      </main>
    </ErrorBoundary>
  );
} 