"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eye, Clock, Shield, Users, CheckCircle, Lightbulb, Palette, Target, Handshake, PhoneCall } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import ConsultationSection from "@/components/ConsultationSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContentMarketingPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 
                    h-[300px] sm:h-[400px] md:h-[450px] lg:h-[450px] 
                    flex items-center justify-center overflow-hidden">
          {/* The 'h-[...]' classes replace 'max-h' to provide more explicit control over height at different breakpoints. */}
          {/* 'h-[300px]' will be for very small mobile screens. */}
          {/* 'sm:h-[400px]' will apply for small screens and up. */}
          {/* 'md:h-[450px]' will apply for medium screens and up, maintaining the desired desktop height. */}

          <Image
            src="/images/services/content-marketing-overview.jpg" // Ensure this image exists in public/images/services/
            alt="Content Marketing Hero Background"
            fill
            className="object-cover object-center z-0"
            priority
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: "-2rem" }}>
            <motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Content Marketing
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Creating valuable content to attract and engage your audience.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <Button size="lg" className="bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Get Started</Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                <Button size="lg" variant="outline" className="border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full sm:w-auto">View Portfolio</Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. Overview Section */}
        <section className="py-20 px-6 md:px-16 bg-slate-100">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              <motion.div
                className="flex-1 w-full lg:w-1/2"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
                    STRATEGIC CONTENT
                  </h3>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl text-center">
                    Content that Drives Results
                  </h2>
                  <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                </div>
                <p className="text-gray-600 text-left max-w-lg lg:mx-0 mt-4 text-justify leading-relaxed">
                  Our content marketing services help you build authority, engage your audience, and drive conversions. We create blog posts, articles, infographics, videos, and more—tailored to your brand and goals. Our team works closely with you to develop a strategy that delivers measurable results.
                </p>
                <div className="text-left">
                  <button
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow-md font-bold hover:bg-blue-700 transition duration-300"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Talk to a Content Expert
                  </button>
                </div>
              </motion.div>
              <motion.div
                className="flex-1 w-full lg:w-1/2 flex justify-center items-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                {/* Updated: Changed image source for the overview section image */}
                <img
                  src="/images/services/content-marketing-overview.jpg" // Assuming you've placed your "Content Marketing Overview" image here
                  alt="Content Marketing Overview"
                  className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl shadow-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Features/Offerings Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Our Content Marketing Services</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We offer a full suite of content marketing solutions to help your business grow.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-600" />,
                  title: "Blog & Article Writing",
                  desc: "SEO-optimized, engaging content that builds authority and drives organic traffic."
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-600" />,
                  title: "Content Strategy",
                  desc: "Custom strategies based on your goals, audience, and industry trends."
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-600" />,
                  title: "Infographics & Visuals",
                  desc: "Eye-catching graphics and visuals to boost engagement and shareability."
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-600" />,
                  title: "Lead Magnets & Ebooks",
                  desc: "Gated content to capture leads and nurture prospects through your funnel."
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-600" />,
                  title: "Social Media Content",
                  desc: "Platform-specific content to grow your brand and community."
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-600" />,
                  title: "Content Consulting",
                  desc: "Expert advice and audits to improve your content marketing ROI."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)", borderColor: "#2563eb", backgroundColor: "rgba(59,130,246,0.04)" }}
                  className="flex flex-col items-center text-center gap-3 bg-white/80 rounded-2xl border border-blue-100 shadow-md px-7 py-8 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-2">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Process Section */}
        <section className="py-20 px-6 md:px-16 bg-slate-100">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Our Content Marketing Process</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                A proven, step-by-step approach to content marketing success.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
              {[
                {
                  icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
                  title: "Discovery",
                  desc: "We learn about your business, goals, and audience."
                },
                {
                  icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
                  title: "Strategy",
                  desc: "We develop a custom content plan and editorial calendar."
                },
                {
                  icon: <Palette className="w-10 h-10 text-blue-600" />,
                  title: "Creation",
                  desc: "Our team produces high-quality, original content."
                },
                {
                  icon: <Target className="w-10 h-10 text-blue-600" />,
                  title: "Distribution",
                  desc: "We publish and promote your content across channels."
                },
                {
                  icon: <PhoneCall className="w-10 h-10 text-blue-600" />,
                  title: "Analysis",
                  desc: "We track performance and optimize for better results."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)", borderColor: "#2563eb", backgroundColor: "rgba(59,130,246,0.04)" }}
                  className="flex flex-col items-center justify-center text-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg px-6 py-8 min-w-0 border border-blue-100 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-xl"
                >
                  <div className="flex items-center justify-center mb-0">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Commitment Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
              <h3 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
                ASSURANCE TO YOU
              </h3>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Our <span className="text-blue-600">Commitment</span> and Guarantee
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                We deliver robust, scalable, and high-performing content marketing services to help you grow your brand and achieve your business goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Transparency</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Complete visibility into project progress, timelines, and deliverables. No hidden costs or surprise changes.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">95% On Time Delivery</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Proven track record of meeting deadlines with quality deliverables. We value your time and business commitments.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Free 30 Days Support</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Complimentary post-launch support to ensure smooth operation and address any issues that may arise.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Engagement</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Adaptable working models to suit your project needs, timeline, and budget requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why Choose Us Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Why Choose Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver more than just content — we bring vision, creativity, and a results-driven process to every project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-600" />,
                  title: "Unique, Purposeful & Brand-Aligned Content",
                  desc: "We craft content that is not only engaging but also aligned with your brand and business goals."
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-600" />,
                  title: "Creative & Strategic Team",
                  desc: "Our experts blend creativity with strategy to deliver content that stands out."
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-600" />,
                  title: "Visual Storytelling",
                  desc: "We use compelling visuals and storytelling to boost engagement and retention."
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-600" />,
                  title: "Results-Driven Approach",
                  desc: "We focus on measurable outcomes and continuous improvement."
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-600" />,
                  title: "Flexible Engagement Models",
                  desc: "Choose from a range of engagement options tailored to your needs and goals."
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-600" />,
                  title: "Seamless Communication",
                  desc: "We keep you in the loop with clear, proactive, and responsive communication."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)", borderColor: "#2563eb", backgroundColor: "rgba(59,130,246,0.04)" }}
                  className="flex flex-col items-center text-center gap-3 bg-white/80 rounded-2xl border border-blue-100 shadow-md px-7 py-8 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-500 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-2">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Brand with Content?</h2>
            <p className="mb-6">Let us help you build a powerful, results-driven content marketing strategy.</p>
            <Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-blue-50">Contact Us</Button>
          </motion.div>
        </section>

        {/* 8. Contact Form Section */}
        <ConsultationSection />
      </main>
    </ErrorBoundary>
  );
}