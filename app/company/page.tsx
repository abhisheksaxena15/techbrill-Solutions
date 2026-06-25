"use client"

import React from "react"
import PageHeader from "@/components/page-header"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Link from "next/link"
import AboutPreview from "@/components/about-preview";
import WorkProcess from "@/components/ui/work-process";
import ConsultationSection from "@/components/ConsultationSection";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/about/18771.jpg";

const benefits = [
  {
    title: "Expert Team",
    description: "Our experienced professionals deliver innovative, high-quality solutions tailored to your needs.",
    icon: "👨‍💻",
  },
  {
    title: "Free Consultation",
    description: "Get expert advice and a clear roadmap for your project with no obligation.",
    icon: "💬",
  },
  {
    title: "Lowest Cost",
    description: "We offer competitive pricing without compromising on quality or performance.",
    icon: "💸",
  },
  {
    title: "24/7 Support",
    description: "Our team is always available to assist you, ensuring smooth and uninterrupted service.",
    icon: "⏰",
  },
];

const missionVisionValues = [
  {
    title: "Our Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.",
    icon: "🚀",
  },
  {
    title: "Our Vision",
    description: "To be the leading technology partner for businesses worldwide, known for innovation, reliability, and exceptional service.",
    icon: "🌍",
  },
  {
    title: "Our Values",
    description: "Innovation & Excellence, Client Success, Integrity & Trust, Collaboration.",
    icon: "💎",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image src={bannerImage} alt="Generative AI Hero" fill className="object-cover object-center z-0" priority />
        {/* Dark Linear Gradient Overlay with Blur */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: '-2rem' }}>
          <motion.h1
            className="font-bold text-4xl sm:text-5xl text-white mb-4 dark:hover:bg-red-600 dark:hover:text-white px-4 py-2 rounded-md transition"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-xl text-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Driving Digital Innovation with Expertise and Passion
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
              <Link href="/services" passHref legacyBehavior>
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-red-600 w-full sm:w-auto">Explore Our Services</Button>
              </Link>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/contact" passHref legacyBehavior>
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-red-600 hover:text-white w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>

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

      {/* About/Who We Are Section */}
      <AboutPreview />

      {/* Light Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story (Centered) */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2 dark:text-red-600 text-red-600">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
              Our Journey of Innovation and Growth
            </h2>
            <div className="w-20 h-1 bg-primary mb-6 mx-auto bg-red-600"></div>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base max-w-4xl mx-auto">
              Founded in 2017 and based in Noida, India, Techbrill began its journey with a simple yet powerful vision to transform businesses through innovative technology solutions.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base max-w-4xl mx-auto">
              Over the years, we&apos;ve evolved from a small team of passionate developers into a full-service digital agency, serving clients across various industries.
            </p>
            <p className="mb-8 text-gray-700 dark:text-gray-300 text-base max-w-4xl mx-auto">
              Today, we&apos;re proud to be trusted technology partners for businesses worldwide, delivering solutions that drive real business growth and digital transformation.
            </p>
          </div>

          {/* Main Content Area: Left (Text) and Right (Image) */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Company Focus & Our Team */}
            <div className="flex-1 max-w-xl">
              {/* Company Focus */}
              <div className="mb-12">
                <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2 dark:text-red-600 text-red-600">
                  Company Focus
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
                  Building Brilliance, Together
                </h2>
                <div className="w-20 h-1 bg-primary mb-6 bg-red-600"></div>
                <p className="mb-8 text-gray-700 dark:text-gray-300 text-base">
                  With innovation, integrity, collaboration, customer-centricity, and excellence at our foundation, we build trusted partnerships, deliver impactful solutions, and create meaningful growth for our clients and communities.
                </p>
              </div>

              {/* Our Team */}
              <div>
                <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2 dark:text-red-600 text-red-600">
                  Our Team
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
                  Our People, Your Success
                </h2>
                <div className="w-20 h-1 bg-primary mb-6 bg-red-600"></div>
                <p className="mb-8 text-gray-700 dark:text-gray-300 text-base">
                  Our team is the heart of Techbrill. Passionate designers, developers, and strategists work together to deliver tailor-made digital solutions that drive growth, achieve business goals, and exceed client expectations
                </p>
              </div>
            </div>

            {/* Right: Single Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src={infoImage}
                alt="Company Focus"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
                style={{ minHeight: 300, maxHeight: 500 }}
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2 dark:text-red-600 text-red-600  ">
              Our Mission, Vision & Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
              Inspired by Purpose, Shaping Our Journey Forward
            </h2>
            <div className="w-20 h-1 bg-primary mb-6 mx-auto bg-red-600"></div>
            <p className="text-gray-700 dark:text-gray-300 text-base max-w-3xl mx-auto">
              Our mission, vision and values guide us in driving innovation, building trust and creating lasting partnerships that empower businesses to grow and thrive in the digital world.
            </p>
          </div>
          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Mission Card */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-t-2xl"></div>
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our mission is to empower businesses with innovative, secure, and scalable IT solutions that drive growth, foster trust, and deliver long-term value while enabling organizations to thrive in an ever-evolving digital world.
              </p>
            </div>
            {/* Vision Card */}
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-red-900/20 dark:hover:shadow-red-900/40 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-t-2xl"></div>
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our vision is to be a global leader in technology services, shaping the future with innovation, trust, and excellence while creating meaningful digital experiences that empower businesses and communities worldwide.
              </p>
            </div>
          </div>
          {/* Values Section */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Core Values</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base max-w-4xl mx-auto mb-8">
              Our core values define who we are and how we work. We listen, we advise, and we design together. Our focus is on happy customers and lasting relationships. For us, success is measured by results—and most importantly, by how our clients feel about their experience with us.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {/* Innovation */}
              <div className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-700/50 rounded-xl p-6 hover:shadow-lg dark:shadow-red-900/20 dark:hover:shadow-red-900/40 transition-all duration-300 group hover:border-red-300 dark:hover:border-red-600">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Embracing creativity and cutting-edge technology to deliver forward-thinking solutions</p>
              </div>
              {/* Integrity */}
              <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/50 rounded-xl p-6 hover:shadow-lg dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 transition-all duration-300 group hover:border-blue-300 dark:hover:border-blue-600">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Integrity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Acting with honesty, transparency, and accountability in everything we do</p>
              </div>
              {/* Collaboration */}
              <div className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-700/50 rounded-xl p-6 hover:shadow-lg dark:shadow-red-900/20 dark:hover:shadow-red-900/40 transition-all duration-300 group hover:border-red-300 dark:hover:border-red-600">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Believing in teamwork and building strong partnerships with clients and colleagues</p>
              </div>
              {/* Customer-Centricity */}
              <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/50 rounded-xl p-6 hover:shadow-lg dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 transition-all duration-300 group hover:border-blue-300 dark:hover:border-blue-600">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Customer-Centricity</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Putting client success at the heart of every solution we design</p>
              </div>
              {/* Excellence */}
              <div className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-700/50 rounded-xl p-6 hover:shadow-lg dark:shadow-red-900/20 dark:hover:shadow-red-900/40 transition-all duration-300 group hover:border-red-300 dark:hover:border-red-600">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Committed to the highest standards, ensuring quality and reliability in every delivery</p>
              </div>
              {/* Trust */}
              <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700/50 rounded-xl p-6 hover:shadow-lg dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 transition-all duration-300 group hover:border-blue-300 dark:hover:border-blue-600">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Trust</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fostering long-term relationships built on consistency, reliability, and mutual respect</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Testimonials Section*/}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2 dark:text-red-600 text-red-600">
              What Our Clients Say
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
              Trusted Voices, Real Results
            </h2>
            <div className="w-20 h-1 bg-primary mb-6 mx-auto bg-red-600 "></div>
            <p className="text-gray-700 dark:text-gray-300 text-base max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Hear directly from the businesses we&apos;ve helped empower and transform.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  JD
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Jane Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Innovate Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
              &apos;Techbrill transformed our online presence. Their expertise and dedication are unmatched. We&apos;ve seen a significant increase in engagement and conversions since partnering with them.&apos;
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span>Kothri Kalan, MP</span>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  SM
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Sameer Malik</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Founder, Global Reach</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
              &apos;The team at Techbrill delivered beyond our expectations. Their strategic insights and flawless execution have been instrumental in our recent growth. Highly recommended!&apos;
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  AS
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Ananya Sharma</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director, FutureTech</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
              &apos;From concept to completion, Techbrill was a pleasure to work with. Their deep understanding of technology and commitment to our vision made all the difference.&apos;
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span>Bengaluru, India</span>
              </div>
            </div>

            {/* Testimonial Card 4 (example of more cards) */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600 dark:bg-yellow-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  RK
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Rahul Kumar</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Project Manager, Alpha Innovations</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
              &apos;Their technical support is phenomenal. Any issue we faced was addressed promptly and efficiently. A true partner in our digital journey.&apos;
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Testimonial Card 5 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  LS
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Lakshmi Singh</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CTO, Visionary Systems</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
              &quot;Techbrill&apos;s secure and scalable solutions have provided us with a robust foundation for our expanding operations. Their expertise is invaluable.&apos;
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span>Chennai, India</span>
              </div>
            </div>

            {/* Testimonial Card 6 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-600 dark:bg-pink-500 flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                  DP
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Divya Patel</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Operations Head, Zenith Corp</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
              &quot;The custom software development from Techbrill has streamlined our operations significantly. Their attention to detail and client satisfaction is commendable.&quot;
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}




      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors ">
        <div className="container">
          <div className="text-center mb-12">
            <AnimatedText
              text="Why Choose Techbrill?"
              className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white"
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6 bg-red-600"></div>
            <p className="max-w-xl mx-auto text-gray-700 text-base dark:text-gray-300">
              We believe our growth depends on our clients&apos; growth. Here are a few reasons to partner with us for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {benefits.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div className="dark:bg-gray-800 border-gray-400 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-300">{item.title}</h3>
                  <p className="text-gray-700 text-sm dark:text-gray-500">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation/CTA Section */}
      <ConsultationSection />
    </>
  );
} 