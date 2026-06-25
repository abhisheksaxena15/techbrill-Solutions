'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Users, Database, Layout, TrendingUp, Shield, Zap, Mail, Phone, Globe, Briefcase, DollarSign, BarChart3, Monitor, ThumbsUp, ChevronDown, Clock, Gift, Shuffle, Headphones, Lightbulb, Palette, Target, Handshake, BadgeDollarSign, PhoneCall } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Icon } from '@iconify/react';
import ServicesSection from '@/components/ui/services-section-DataAnalytics';
import { cn } from '@/lib/utils';
import ConsultationSection from '@/components/ConsultationSection';
import TechStackSection from '@/components/ui/TechStack-DataAnalytics';

import { InfoTabs } from '@/components/ui/info-tab';

//items for painpoints section 

const items = [
  {
    title: 'Data Quality and Inconsistency Issues',
    description: 'Organizations struggle with incomplete, inaccurate, or inconsistent data across multiple sources, leading to unreliable insights and flawed business decisions that undermine confidence in analytics initiatives.',
    icon: <AlertTriangle />,
  },
  {
    title: 'Data Silos and Integration Complexity',
    description: 'Data scattered across disconnected systems and departments creates barriers to comprehensive analysis, while complex ETL processes and lack of standardization make it difficult to achieve a unified view of business operations.',
    icon: <Database />,
  },
  {
    title: 'Skills Gap and Analytics Literacy',
    description: 'Companies face shortages of qualified data scientists and analysts, while business users lack the skills to interpret data effectively, creating bottlenecks in data-driven decision making and reducing analytics adoption across teams.',
    icon: <Users />,
  },
  {
    title: 'Scalability and Performance Limitations',
    description: 'Growing data volumes overwhelm existing infrastructure and tools, causing slow query performance and system crashes that frustrate users and limit the ability to process real-time analytics for time-sensitive business decisions.',
    icon: <TrendingUp />,
  },
];

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

export default function AIMlDevelopmentPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/ai-ml-hero.jpg" alt="Generative AI Hero" fill className="object-cover object-center z-0" priority />
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
              Data Analytics Solutions
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Transform your data into actionable insights and smarter decisions with advanced analytics solutions.
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
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">Get Started with data analytics</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">Explore Data Insights</Button>
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

        {/*7. Data Analytics tech stack section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                Technologies We Use
              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Driven by bold ideas, delivered through robust <span className="text-blue-700">Tech Stacks</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
              {/* <h1>We use the latest web technologies to build dynamic, high-performance web applications that are responsive, secure, and scalable, ensuring your digital presence stays modern, efficient, and ready for future growth.</h1> */}
            </div>
            <TechStackSection />
          </div>
        </section>

    

        {/* 5. Industries Section */}
        <section
          className="relative py-0 px-0 w-full min-h-[60vh] md:min-h-[75vh] overflow-hidden bg-fixed bg-center bg-cover"
          style={{ backgroundImage: 'url(/images/services/mobile-app-hero.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 w-full max-w-none">
            <div className="text-center pt-16 md:pt-24 pb-10 md:pb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
                Data Analytics Impact Across Industries
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto">
                Data analytics is revolutionizing decision-making, efficiency, and innovation in every sector. Discover how our analytics solutions drive value and transformation for your industry.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 w-full">
              {[
                {
                  label: 'Retail & E-Commerce',
                  icon: <Gift className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Customer segmentation, demand forecasting, and personalized recommendations to boost sales and loyalty.'
                },
                {
                  label: 'Healthcare & Life Sciences',
                  icon: <Shield className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Predictive analytics for patient outcomes, operational efficiency, and medical research acceleration.'
                },
                {
                  label: 'Financial Services',
                  icon: <BadgeDollarSign className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Fraud detection, risk modeling, and real-time reporting for smarter financial decisions.'
                },
                {
                  label: 'Manufacturing',
                  icon: <Layout className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Process optimization, predictive maintenance, and supply chain analytics for greater productivity.'
                },
                {
                  label: 'Telecommunications',
                  icon: <Monitor className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Churn prediction, network optimization, and customer experience analytics.'
                },
                {
                  label: 'Education',
                  icon: <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Student performance analytics, adaptive learning, and institutional efficiency insights.'
                },
                {
                  label: 'Energy & Utilities',
                  icon: <Palette className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Consumption forecasting, grid optimization, and asset management analytics.'
                },
                {
                  label: 'Logistics & Transportation',
                  icon: <Briefcase className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
                  desc: 'Route optimization, fleet analytics, and real-time supply chain visibility.'
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[200px] w-full border border-gray-200 transition-all duration-200 cursor-pointer group bg-white hover:bg-blue-900 px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8"
                >
                  <span className="mb-2 transition-all duration-200">{item.icon}</span>
                  <span className="font-extrabold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-blue-900 group-hover:text-white transition-all duration-200 text-center">
                    {item.label}
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 group-hover:text-white text-center mt-1 px-1 sm:px-2">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Customer Pain Points Section */}

        <motion.section
          className="py-20 bg-gray-50 dark:bg-black"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-2 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Addressing Your Data Analytics Challenges
                <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We understand the obstacles you face and have solutions ready
              </motion.p>
            </div>
            <InfoTabs items={items} />
          </div>
        </motion.section>

        {/* 7. Commitment & Why Choose Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Our Commitment & Guarantee</h2>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver robust, scalable, and high-performance mobile solutions. Our team is dedicated to transparency, timely delivery, and ongoing support—empowering your business to thrive in a mobile-first world.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
              {[
                {
                  icon: <CheckCircle className="w-10 h-10 text-blue-800" />,
                  title: '100% Transparency',
                  desc: 'Clear, honest communication and full project visibility from start to finish.'
                },
                {
                  icon: <Clock className="w-10 h-10 text-blue-800" />,
                  title: 'On-Time Delivery',
                  desc: '95%+ of our projects launch on schedule, so you can plan with confidence.'
                },
                {
                  icon: <Gift className="w-10 h-10 text-blue-800" />,
                  title: '30 Days Free Support',
                  desc: 'Enjoy complimentary post-launch support for a smooth transition.'
                },
                {
                  icon: <Shuffle className="w-10 h-10 text-blue-800" />,
                  title: 'Flexible Engagements',
                  desc: 'Choose a partnership model that fits your business and budget.'
                },
                {
                  icon: <Headphones className="w-10 h-10 text-blue-800" />,
                  title: '24/7 Expert Help',
                  desc: 'Our team is always available to assist you, day or night.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(30,64,175,0.10)', borderColor: '#1e40af', backgroundColor: 'rgba(30,64,175,0.04)' }}
                  className={cn(
                    "flex flex-col items-center justify-center text-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg px-6 py-8 min-w-0 border border-blue-100 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-xl",
                    "sm:gap-3 md:gap-4"
                  )}
                >
                  <div className="flex items-center justify-center mb-0">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Why Choose Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver more than just mobile apps — we bring vision, precision, and a results-driven process to every project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-800" />,
                  title: 'Unique, Purposeful & Accessibility Standards Design',
                  desc: 'We craft mobile experiences that are not only beautiful but also accessible and purposeful for every user.'
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-800" />,
                  title: 'Strong Technology Capability',
                  desc: 'Our team leverages the latest mobile tech to build robust, scalable, and future-ready solutions.'
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-800" />,
                  title: 'Highly Creative & Motivated Teams',
                  desc: 'Our passionate experts bring creativity and energy to every mobile project, driving innovation and results.'
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-800" />,
                  title: 'Result-Driven Approach and Process',
                  desc: 'We focus on outcomes, using proven processes to deliver measurable business value through mobile apps.'
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-800" />,
                  title: 'Flexible Engagement Models',
                  desc: 'Choose from a range of engagement options tailored to your mobile app needs and goals.'
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-800" />,
                  title: 'Seamless Communication',
                  desc: 'We keep you in the loop with clear, proactive, and responsive communication throughout your mobile app journey.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(30,64,175,0.10)', borderColor: '#1e40af', backgroundColor: 'rgba(30,64,175,0.04)' }}
                  className="flex flex-col items-center text-center gap-3 bg-white/80 rounded-2xl border border-blue-100 shadow-md px-7 py-8 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6">Let us help you build a stunning, high-performing website.</p>
            <Button size="lg" className="bg-white text-blue-600 font-semibold hover:bg-blue-50">Contact Us</Button>
          </motion.div>
        </section>

        <ConsultationSection bgImage="/images/services/mobile-app-hero.jpg" />
      </main>
    </ErrorBoundary>
  );
}