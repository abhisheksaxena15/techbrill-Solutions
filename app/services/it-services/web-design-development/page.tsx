'use client';


import React, { useState } from 'react';
import OurAssurance from "@/components/OurAssurance";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye, Clock, Shield, Users, CheckCircle, Code, Layout, Smartphone, Zap, Phone, Globe, Briefcase, Layers, Database, TrendingUp, ChevronDown, Lightbulb, Palette, Target, Handshake, PhoneCall } from 'lucide-react';

import { ErrorBoundary } from '@/components/error-boundary';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFigma, SiAmazon, SiMongodb, SiTypescript } from 'react-icons/si';

import { TextRevealCard } from '@/components/ui/text-reveal-card';
import { FocusCards } from '@/components/ui/focus-cards';
import WebTechToolsSection from '@/components/ui/web-tech-tools-section';
import ServicesSection from '@/components/ui/services-section';
import WorkProcess from '@/components/ui/work-process';
import ConsultationSection from '@/components/ConsultationSection';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import Link from "next/link";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const techStack = [
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'Tailwind', icon: '/images/tech/tailwind.svg' },
  { name: 'Figma', icon: '/images/tech/figma.svg' },
  { name: 'AWS', icon: '/images/tech/aws.svg' },
  { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
  { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
];

const industries = [
  { name: 'E-Commerce', icon: <Globe className="w-8 h-8 text-blue-500" /> },
  { name: 'Healthcare', icon: <Shield className="w-8 h-8 text-green-500" /> },
  { name: 'Finance', icon: <TrendingUp className="w-8 h-8 text-yellow-500" /> },
  { name: 'Education', icon: <Users className="w-8 h-8 text-purple-500" /> },
  { name: 'Real Estate', icon: <Briefcase className="w-8 h-8 text-pink-500" /> },
  { name: 'SaaS', icon: <Layers className="w-8 h-8 text-indigo-500" /> },
];

const services = [
  { title: 'UI/UX Design', icon: <Layout className="w-10 h-10 text-blue-500" />, desc: 'Modern, user-centric interfaces for web and mobile.' },
  { title: 'Web Development', icon: <Code className="w-10 h-10 text-green-500" />, desc: 'Robust, scalable, and high-performing websites.' },
  { title: 'E-Commerce', icon: <Briefcase className="w-10 h-10 text-yellow-500" />, desc: 'Custom online stores with seamless shopping experiences.' },
  { title: 'Mobile Apps', icon: <Smartphone className="w-10 h-10 text-purple-500" />, desc: 'Cross-platform mobile app development.' },
  { title: 'CMS Solutions', icon: <Database className="w-10 h-10 text-pink-500" />, desc: 'Flexible content management for your business.' },
  { title: 'SEO & Marketing', icon: <TrendingUp className="w-10 h-10 text-indigo-500" />, desc: 'Grow your reach with smart SEO and digital marketing.' },
];

const devSteps = [
  { title: 'Strategy', icon: '/images/process/strategy.svg', desc: 'We understand your vision and goals to craft a clear, actionable plan.' },
  { title: 'Design', icon: '/images/process/design.svg', desc: 'Wireframes and UI/UX design to ensure a delightful user experience.' },
  { title: 'Development', icon: '/images/process/development.svg', desc: 'Robust coding and integration using modern tech.' },
  { title: 'Testing', icon: '/images/process/testing.svg', desc: 'Thorough QA to ensure quality and performance.' },
  { title: 'Launch', icon: '/images/process/launch.svg', desc: 'Go live with confidence and post-launch support.' },
];

const commitments = [
  { icon: <CheckCircle className="w-8 h-8 text-blue-500" />, title: '100% Transparency' },
  { icon: <Shield className="w-8 h-8 text-green-500" />, title: 'Secure & Reliable' },
  { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: 'Fast Delivery' },
  { icon: <Users className="w-8 h-8 text-purple-500" />, title: 'Expert Team' },
  { icon: <Phone className="w-8 h-8 text-pink-500" />, title: '24/7 Support' },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-500" />, title: 'Result Driven' },
];

const TechStackCard: React.FC<{ tech: { name: string; icon: any; img: string }; idx: number }> = ({ tech, idx }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      whileHover={{ scale: 1.08 }}
      className="relative flex flex-col items-center group cursor-pointer"
    >
      <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 transition-transform">
        {!imgError ? (
          <Image src={tech.img} alt={tech.name} width={48} height={48} onError={() => setImgError(true)} />
        ) : (
          React.createElement(tech.icon, { size: 48, color: '#3b82f6' })
        )}
      </div>
      <span className="text-base font-medium mt-1 text-center">{tech.name}</span>
    </motion.div>
  );
};

export default function WebDesignDevelopmentPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden dark:bg-gray-900">
          {/* Background Image */}
          <Image src="/images/services/web-design-hero.jpg" alt="Web Design Hero" fill className="object-cover object-center z-0" priority />
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
              Web Design & Development
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Crafting Digital Experiences That Drive Growth.
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


        {/* 3. Services Section */}
        <ServicesSection />

        {/* 8. Contact CTA Section */}
        <section className="pb-12 py-10 bg-blue-800 text-white text-center ">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6">Let us help you build a stunning, high-performing website.</p>
            <Link href="/contact"><Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-red-700 hover:text-white">Contact Us</Button>
            </Link>
          </motion.div>
        </section>

        {/* 4. Tech Stack Section */}
        <section className="dark:bg-gray-900 pt-16 , pb-16">
          <div className=" container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
                Technologies We Use
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Driven by bold ideas, delivered through robust Tech Stacks
              </h2>
              <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
              {/* Change: Wrapped the h3 tag in a new flex container to control its width
      and ensure it stays centered while having a maximum width.
    */}
              <div className="flex justify-center mt-4">
                {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                <h3 className=" max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                  We leverage the latest technologies to build dynamic, secure, and scalable web applications that keep your digital presence modern and future-ready.                </h3>
              </div>
            </div>
            <WebTechToolsSection />
          </div>

        </section>

        {/* 5. Industries Section */}
        <section className="dark:bg-gray-900  px-6 md:px-16 bg-slate-100">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              {/* Left Column: Text */}
              <motion.div
                className="flex-1 w-full lg:w-1/2"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className=" text-left mb-6 lg:mb-8">
                  <h3 className="text-sm font-semibold tracking-wide text-red-600 dark:text-red-600">
                    Industry Expertise
                  </h3>
                  <h2 className="dark:text-white text-left mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl ">
                    Empowering Diverse Industries with Tailored Digital Solutions
                  </h2>
                  <div className="w-20 h-1 bg-red-600 dark:bg-red-600 mb-3 rounded-full mt-3" />
                  <div className="flex justify-center mt-4">
                    {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                    <h3 className="mb-0 max-w-3xl mx-auto text-gray-700 dark:text-white text-base">
                      Our web solutions are designed around your industry needs to accelerate growth and maximize business impact.
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-white text-left max-w-lg lg:mx-0 mt-1 text-justify leading-relaxed">
                  Our team empowers businesses across industries by integrating cutting-edge technologies and optimizing workflows. We specialize in crafting tailored web solutions that address core operational challenges, enhance efficiency, and spark innovation. With a focus on tangible outcomes, we help organizations accelerate growth, improve customer experience, and stay ahead in a dynamic digital landscape. Our team delivers custom web solutions that solve real business problems and drive measurable results.
                </p>
                <div className="flex space-x-4">
                  <button
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow-md font-bold hover:bg-red-700 transition duration-300"
                    onClick={() => window.location.href = '/industries'}
                  >
                    Explore Industries
                  </button>

                  <button
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow-md font-bold hover:bg-red-700 transition duration-300"
                    onClick={() => window.location.href = '/'}
                  >
                    Consult Our Expert
                  </button>
                </div>
              

              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                className="flex-1 w-full lg:w-1/2 flex justify-center items-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/images/services/web-design-hero.jpg"
                  alt="Web Design Analytics Dashboard"
                  className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Dev Process Section */}
        <WorkProcess />


        {/*7 Our commitment section*/}
        <OurAssurance />

        
        {/* Why Choose Us Section */}
        <section className="py-20 px-6 md:px-16 dark:bg-gray-900 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
                WHY CHOOSE US
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Why Choosing Us Makes the Difference
              </h2>
              <div className="h-1 w-20 bg-red-600 dark:bg-red-600   mx-auto mt-3 mb-2 rounded-full"></div>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-1 leading-relaxed">
                Customer satisfaction drives us, powered by consistent quality, ongoing innovation, and integrity in every project
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  title: "Unique, Purposeful & Accessibility Standards Design",
                  desc: "We craft digital experiences that are not only beautiful but also accessible and purposeful for every user.",
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-white" />,
                  title: "Strong Technology Capability",
                  desc: "Our team leverages the latest tech to build robust, scalable, and future-ready solutions.",
                },
                {
                  icon: <Palette className="w-6 h-6 text-white" />,
                  title: "Highly Creative & Motivated Teams",
                  desc: "Our passionate experts bring creativity and energy to every project, driving innovation and results.",
                },
                {
                  icon: <Target className="w-6 h-6 text-white" />,
                  title: "Result-Driven Approach and Process",
                  desc: "We focus on outcomes, using proven processes to deliver measurable business value.",
                },
                {
                  icon: <Handshake className="w-6 h-6 text-white" />,
                  title: "Flexible Engagement Models",
                  desc: "Choose from a range of engagement options tailored to your needs and goals.",
                },
                {
                  icon: <PhoneCall className="w-6 h-6 text-white" />,
                  title: "Seamless Communication",
                  desc: "We keep you in the loop with clear, proactive, and responsive communication.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }} // only for entrance
                  whileHover={{
                    y: -8, // move up
                    scale: 1.03, // subtle zoom
                    boxShadow: "0 10px 36px rgba(59,130,246,0.25)",
                    borderColor: "#3B82F6",
                    transition: { duration: 0.2 }, // separate quick hover animation
                  }}
                  className="flex flex-col items-center text-center gap-3 bg-white dark:bg-gray-800 rounded-2xl 
  border border-blue-100 dark:border-gray-700 shadow-md px-7 py-8 
  transition-colors duration-300 
  hover:bg-gradient-to-br hover:from-blue-50 hover:to-red-50 
  dark:hover:from-gray-800 dark:hover:to-gray-900"
                >


                  {/* Gradient Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-red-500 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-blue-800 dark:text-white group-hover:text-red-600 transition-colors duration-300 mb-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </section>



        {/* 8. Contact CTA Section */}
        {/* <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6">Let us help you build a stunning, high-performing website.</p>
            <Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-blue-50">Contact Us</Button>
          </motion.div>
        </section> */}

        {/* 9. Contact Form Section */}
        {/* <section className="py-16">
          <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:w-1/2 flex items-center justify-center bg-blue-50 p-8">
              <img
                src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                alt="Contact Team"
                className="rounded-xl object-cover w-full max-w-[320px] h-[320px] border border-blue-100 shadow-md"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-blue-700">Let&apos;s Connect...</h3>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input type="text" placeholder="Name" className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="email" placeholder="Email" className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="flex gap-4">
                  <input type="text" placeholder="Phone No" className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <select className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>Web Design & Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                <textarea placeholder="Message" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4}></textarea>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </section> */}
        <ConsultationSection />

      </main>
    </ErrorBoundary>
  );
}



