'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, LineChart, Users, Shield, Target, Briefcase, ChevronDown, Eye, Clock, BrainCircuit, Brain } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ServicesSection from '@/components/ui/services-section-it-consultancy';
import ITConsultancyTechToolsSection from '@/components/ui/it-consultancy-tech-tools-section';
import ConsultationSection from '@/components/ConsultationSection';
import WorkProcess from '@/components/ui/work-process';
import ConsultationSectionMob from '@/components/ConsultationSectionIT';

import { FaRocket, FaLock, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import AnimatedText from "@/components/animated-text"
import AnimatedSection from "@/components/animated-section"
import Link from "next/link";


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

const benefits01 = [
  {
    title: "Proven Expertise",
    description:
      "Certified consultants with deep industry knowledge and years of hands-on experience.",
    icon: "🧑‍💻",
  },
  {
    title: "Cutting-Edge Technologies",
    description:
      "Leverage AI, cloud, cybersecurity, and automation for future-ready results.",
    icon: "⚡",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy to implementation and beyond, we stay with you every step.",
    icon: "🔄",
  },
  {
    title: "Security & Compliance Focus",
    description:
      "Ensuring your IT meets global standards and regulatory requirements.",
    icon: "🔐",
  },
  {
    title: "Measurable Results",
    description:
      "Data-driven outcomes that improve efficiency, cut costs, and drive growth.",
    icon: "📊",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Transparent communication, collaboration, and long-term partnerships.",
    icon: "🤝",
  },
];


const steps = [
  {
    title: "Discovery & Assessment",
    desc: "Understand current challenges, goals, and opportunities through in-depth analysis.",
    img: "/images/services/it-consultancy-hero.jpg",
  },
  {
    title: "Strategy & Roadmap Design",
    desc: "Define tailored strategies and create actionable roadmaps for success.",
    img: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
  },
  {
    title: "Solution Architecture",
    desc: "Design scalable, secure, and efficient technology solutions aligned to your needs.",
    img: "/images/shoper-slLo94wES2M-unsplash.jpg",
  },
  {
    title: "Implementation Guidance",
    desc: "Provide hands-on support during deployment and integration phases.",
    img: "/images/digital-content.jpg",
  },
  {
    title: "Ongoing Optimization",
    desc: "Continuously monitor, improve, and optimize systems for long-term success.",
    img: "/images/scott-graham-5fNmWej4tAA-unsplash.jpg",
  },
];


export default function ITConsultancyPage() {
  return (
    <ErrorBoundary>
      <main className='bg-white text-gray-900'>
        {/* Hero Section with Background Image */}

        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/it-consultancy-hero.jpg" alt="Web Design Hero" fill className="object-cover object-center z-0" priority />
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
              IT Consultancy Services
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Smarter IT Strategies, Stronger Business Outcomes
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* <Button size="lg" className="bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Get Started</Button> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* <Button size="lg" variant="outline" className="border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full sm:w-auto">View Portfolio</Button> */}
              </motion.div>
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

        {/* Service Explanation Section - Minimal alternating layout with working images */}
        <ServicesSection />



        {/* Key Benefits Section */}
        <section className="pb-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              
            >
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-red-600 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                  KEY BENEFITS
                </h3>
                <h2 className="mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white max-w-4xl">
                  IT That Works for Your Business
                </h2>
                <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-3"></div>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Harness IT expertise to optimize operations, enhance efficiency, and unlock new pathways for business growth.
                </p>
              </div>
            </motion.div>



            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              
            >
              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Strategic Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Develop comprehensive technology strategies that align with your business goals and drive innovation across your organization.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Cost Optimization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identify opportunities to reduce IT costs while improving efficiency and maximizing return on technology investments.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Expert Guidance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access experienced IT professionals and industry best practices to accelerate your digital transformation journey.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Risk Management</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identify and mitigate technology-related risks to ensure business continuity and protect your digital assets.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Digital Transformation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Guide your organization through successful digital transformation initiatives that modernize operations.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{
                    scale: 1.05,
                    background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                    boxShadow: '0 6px 32px 0 rgba(59,130,246,0.25), 0 0 14px rgba(239,68,68,0.45)',
                    borderImage: 'border-rounded-2xl linear-gradient(90deg, #ef4444, #3b82f6) 1',
                  }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Business Alignment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensure your technology investments support your business objectives and drive measurable outcomes.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* 8. Contact CTA Section */}
        <section className=" py-10 bg-blue-800 text-white text-center mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for the right IT strategy?</h2>
            <p className="mb-6">Let&#39;s align technology with your goals; Partner with us for end-to-end IT consultancy that drives measurable success.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-red-700 hover:text-white">Contact With Us</Button>
            </Link>
          </motion.div>
        </section>

        <section className="py-8"></section>


        {/* 5. Industries Section */}
        <section
          className="relative  w-full min-h-[75vh] overflow-hidden bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url(/images/services/mobile-app-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 w-full w-full">
            <div className="text-center pt-24 pb-20 px-6">
              <h2 className="text-xl font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">INDUSTRIES WE SERVE</h2>
              <h3 className="mt-2 mb-2 text-xl sm:text-3xl font-bold text-white dark:text-white md:text-4xl">
Transforming Industries with Customized IT Consulting
              </h3>
              <p className="text-base text-white font-medium max-w-2xl mx-auto">
                Delivering industry-focused consulting in cloud, AI, and cybersecurity to accelerate innovation and operational excellence.
              </p>
            </div>

            {/* White background wrapper */}
            <div className="bg-white rounded-lg shadow-lg pb-16 p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {[
                  { label: 'Automotive', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></svg> },
                  { label: 'HealthCare', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /><path d="M12 6v6l4 2" /></svg> },
                  { label: 'Manufacturing', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg> },
                  { label: 'Finance & Banking', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 17h20" /><path d="M6 17v2" /><path d="M18 17v2" /></svg> },
                  { label: 'Retail & eCommerce', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="17" cy="17" r="2" /><circle cx="7" cy="17" r="2" /><path d="M5 6h14l1 7H4z" /></svg> },
                  { label: 'Education - eLearning', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg> },
                  { label: 'Startups & SMBs', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg> },
                  { label: 'Travel & Tourism', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8" /><path d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2" /></svg> },
                  { label: 'Software Vendors', icon: <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M2 17h20" /><path d="M6 17v2" /><path d="M18 17v2" /></svg> },

                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md border border-blue-600 cursor-pointer transition-all duration-300 hover:bg-blue-50 group"
                  >
                    <span className="mb-3 text-blue-500 group-hover:text-blue-400 transition-colors duration-300">{item.icon}</span>
                    <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-gray-700 group-hover:text-blue-400 transition-colors duration-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        {/* <WorkProcess /> */}

        {/* techstack */}
        <section className="py-10">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                Technologies We Use
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Innovation Delivered, Powered by Robust Tech Stacks              </h2>
              <div className="h-1 w-20 bg-red-600 dark:bg-blue-400 mx-auto mt-4"></div>
              {/* Change: Wrapped the h3 tag in a new flex container to control its width
      and ensure it stays centered while having a maximum width.
    */}
              <div className="flex justify-center mt-4">
                {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                <h3 className=" max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                  Leveraging AI, cloud, and next-gen technologies to deliver innovative, scalable solutions that future-proof your business.
                </h3>
              </div>
            </div>
            <ITConsultancyTechToolsSection />
          </div>
        </section>



        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                OUR CONSULTING PROCESS
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Structured Approach to Building Digital Excellence
              </h2>
              <div className="h-1 w-20 bg-red-600 dark:bg-blue-400 mx-auto mt-4"></div>
              {/* Change: Wrapped the h3 tag in a new flex container to control its width
      and ensure it stays centered while having a maximum width.
    */}
              <div className="flex justify-center mt-4">
                {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                <h3 className=" max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                  A transparent, collaborative approach that guides your business from strategy to successful digital transformation.
                </h3>
              </div>
            </div>



<section className="pt-10 bg-white dark:bg-gray-950">
  <div className="container mx-auto px-4 max-w-6xl">

    {/* ----------------------
        MOBILE: stacked steps with downward arrows
        ---------------------- */}
    <div className="md:hidden space-y-10">
      {steps.map((s, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          {/* Circle with hover glow */}
          <motion.div
            className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white z-10"
            whileHover={{ scale: 1.07, boxShadow: "0 0 30px rgba(37,99,235,0.7)" }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            {/* number badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-blue-600 text-white text-sm font-semibold rounded-full px-3 py-1 shadow-lg">
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>

          {/* Title & description */}
          <motion.h3
            className="mt-4 font-semibold text-lg text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.25, duration: 0.4 }}
          >
            {s.title}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
          >
            {s.desc}
          </motion.p>

          {/* Downward arrow (only between steps) */}
          {i < steps.length - 1 && (
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.35, duration: 0.4 }}
            >
              <motion.path
                d="M12 5v14"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: i * 0.35 }}
              />
              <motion.path
                d="M5 13l7 7 7-7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: i * 0.45 }}
              />
            </motion.svg>
          )}
        </motion.div>
      ))}
    </div>

    {/* ----------------------
        DESKTOP: circles row + arrows + captions
        ---------------------- */}
    <div className="hidden md:block relative">
      {/* Circles row */}
      <div className="grid grid-cols-5 items-start gap-6 md:gap-8 relative">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="flex justify-center relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <motion.div
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white z-10"
              whileHover={{ scale: 1.08, boxShadow: "0 0 35px rgba(37,99,235,0.7)" }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              {/* number badge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 bg-blue-600 text-white text-sm font-semibold rounded-full px-3 py-1 shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>

            {/* Arrow between circles (but not after last) */}
            {i < steps.length - 1 && (
              <motion.svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 absolute top-1/2 right-[-18%] -translate-y-1/2"
                aria-hidden
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.25, duration: 0.4 }}
              >
                <motion.path
                  d="M2 12h18"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.25 }}
                />
                <motion.path
                  d="M14 6l6 6-6 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.35 }}
                />
              </motion.svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* Titles & descriptions row */}
      <div className="grid grid-cols-5 gap-6 md:gap-8 mt-10 text-center">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
          >
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
              {s.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>





          </div>
        </section>



        {/* Why Choose Us Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-red-600 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                Why Choose Us
              </h3>
              <h2 className="mx-auto text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white max-w-4xl">
                Your Success, Our Commitment
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
              <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                We deliver expert IT consultancy solutions powered by innovation, proven methodologies, and client-focused strategies.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {benefits01.map((item, idx) => (
                <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                  <div key={idx}> {/* Replaced AnimatedSection to prevent errors if not found */}
                    <div className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 md:cursor-pointer active:scale-95 touch-manipulation">
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
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
  {benefits01.map((item, idx) => (
    <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
      <div
        key={idx}
        className="h-full"
      >
        <div className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 
                        transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 
                        md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 
                        md:cursor-pointer active:scale-95 touch-manipulation 
                        flex flex-col justify-start h-full min-h-[280px]">
        
          <div className="text-4xl mb-4 transform transition-transform duration-300 
                          md:group-hover:scale-110 md:group-hover:rotate-3">
          
          </div>

          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white 
                         md:group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>


          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed 
                        md:group-hover:text-gray-800 md:dark:group-hover:text-gray-200 
                        transition-colors duration-300 flex-grow">
            {item.description}
          </p>

          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
                          opacity-0 md:group-hover:opacity-100 transition-opacity 
                          duration-300 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </AnimatedSection>
  ))}
</div>
*/}
            {/* AnimatedText component was not used in the code, but if needed, it should be imported */}
            {/* <AnimatedText text="Your Text Here" /> */}
          </div>
        </section>


        {/* Consultation Section */}
        <ConsultationSectionMob bgImage="/images/services/mobile-app-hero.jpg" />
      </main>
    </ErrorBoundary>
  );
}