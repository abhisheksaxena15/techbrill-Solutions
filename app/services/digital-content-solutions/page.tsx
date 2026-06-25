'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Code, Layout, Smartphone, Shield, Zap, Mail, Phone, Globe, Briefcase, Layers, Database, Monitor, TrendingUp, ChevronDown, Clock, Gift, Shuffle, Headphones, Lightbulb, Palette, Target, Handshake, BadgeDollarSign, PhoneCall, HeartPulse, Building2, ShoppingCart, Factory, Laptop, Truck, GraduationCap } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Icon } from '@iconify/react';
import ServicesSection from '@/components/ui/services-section-DigitalSolution';
import { cn } from '@/lib/utils';
import ConsultationSection from '@/components/ConsultationSection';
import OurProvenProcess from '@/components/ui/OurProvenProcess';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
// import Reviews from "@/components/ui/reviews";
// import TechStackSection from '@/components/ui/TechStack-AI';
import { ExpandableCardDemo } from '@/components/ui/AI-development-roadmap';
import FaqSection from "@/components/ui/FaqSectionDigitalContent"; // adjust the path based on your folder
// import Differentiators from "@/components/ui/Differentiators"; // adjust path
import { useRef } from "react";



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

const industries01 = [
  {
    id: 1,
    title: 'Education & EdTech',
    description: 'Enhancing patient outcomes with predictive analytics and intelligent diagnostics solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/healthcare',
    icon: HeartPulse,
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 2,
    title: 'Corporate & Enterprises',
    description: 'Detect fraud, manage risks, and optimize financial decision-making effectively.',
    imageUrl: '/images/hack-capital-uv5_bsypFUM-unsplash.jpg', // ✅ local image
    readMoreUrl: '/industries/finance',
    icon: Building2,
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 3,
    title: 'Publishing & Media',
    description: 'Drive personalized experiences and recommendations for better customer engagement.',
    imageUrl: '/images/shoper-slLo94wES2M-unsplash.jpg', // ✅ local image
    readMoreUrl: '/industries/retail-ecommerce',
    icon: ShoppingCart,
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    id: 4,
    title: 'Healthcare & Life Sciences',
    description: 'Optimize processes and reduce downtime with predictive maintenance solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/manufacturing',
    icon: Factory,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 5,
    title: 'IT & Technology',
    description: 'Accelerate development cycles and improve quality with AI-powered automation.',
    imageUrl: '/images/scott-graham-5fNmWej4tAA-unsplash.jpg', // ✅ local image
    readMoreUrl: '/industries/it-software',
    icon: Laptop,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 6,
    title: 'Government & Public Sector',
    description: 'Optimize routes, forecast demand, and improve operational efficiency with AI.',
    imageUrl: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/logistics-supply',
    icon: Truck,
    color: 'bg-orange-50 text-orange-600'
  }
];


const techStack = [
  { name: 'React Native', icon: <Icon icon="simple-icons:reactnative" className="w-7 h-7" /> },
  { name: 'Flutter', icon: '/images/tech/flutter.svg' },
  { name: 'Swift', icon: '/images/tech/swift.svg' },
  { name: 'Kotlin', icon: '/images/tech/kotlin.svg' },
  { name: 'Firebase', icon: '/images/tech/firebase.svg' },
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
  { title: 'Native iOS Development', icon: <Smartphone className="w-10 h-10 text-blue-500" />, desc: 'High-performance iOS apps built with Swift and SwiftUI.' },
  { title: 'Native Android Development', icon: <Smartphone className="w-10 h-10 text-green-500" />, desc: 'Robust Android apps using Kotlin and modern Android architecture.' },
  { title: 'Cross-Platform Apps', icon: <Smartphone className="w-10 h-10 text-yellow-500" />, desc: 'React Native and Flutter apps for multiple platforms.' },
  { title: 'UI/UX Design', icon: <Layout className="w-10 h-10 text-purple-500" />, desc: 'Mobile-first design that delights users.' },
  { title: 'App Maintenance', icon: <Database className="w-10 h-10 text-pink-500" />, desc: 'Ongoing support, updates, and performance optimization.' },
  { title: 'App Store Deployment', icon: <TrendingUp className="w-10 h-10 text-indigo-500" />, desc: 'Seamless app store submission and management.' },
];

const devSteps = [
  { title: 'Strategy', icon: '/images/process/strategy.svg', desc: 'We understand your vision and goals to craft a clear, actionable mobile strategy.' },
  { title: 'Design', icon: '/images/process/design.svg', desc: 'Mobile-first UI/UX design to ensure a delightful user experience.' },
  { title: 'Development', icon: '/images/process/development.svg', desc: 'Robust mobile development using modern frameworks and best practices.' },
  { title: 'Testing', icon: '/images/process/testing.svg', desc: 'Comprehensive testing across devices and platforms.' },
  { title: 'Launch', icon: '/images/process/launch.svg', desc: 'App store deployment and post-launch support.' },
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
  const sliderRef = useRef<HTMLDivElement>(null);
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

export default function AIMlDevelopmentPage() {
  return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          <Image src="/images/services/dsimage.jpg" alt="Mobile App Development Hero" fill className="object-cover object-center z-0" priority />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: '-2rem' }}>
            <motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
             Digital Content Solution
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >

              Transforming Ideas into Digital Content Solution

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
                {/* <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">Get Started</Button> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">View Portfolio</Button> */}
              </motion.div>
            </motion.div>
          </div>
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

        {/*4. Industries */}
     <div className="pt-12 w-full bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Section Heading */}
            <div className="text-center mb-12">
              <h3 className="text-[#2562E9] font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                Industries We Serve
              </h3>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
               Empowering Businesses with Advanced Digital Content Solutions
              </h2>
              <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"> </div>
              <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Delivering scalable, accessible, and engaging digital content solutions that help organizations transform learning, training, and knowledge delivery for the modern digital world.
              </p>
            </div>

            {/* Sliding Container */}
            <div className="overflow-hidden relative">
              <div className="flex gap-6 min-w-max animate-slide">
                {[...industries01, ...industries01].map((industry, idx) => {
                  const IconComponent = industry.icon;
                  return (
                    <div
                      key={idx}
                      className="min-w-[320px] max-w-[350px] bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 flex-shrink-0"
                    >
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={industry.imageUrl}
                          alt={industry.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm ${industry.color}`}
                          >
                            {IconComponent && <IconComponent className="w-5 h-5" />}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                            {industry.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-sm">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Custom animation */}
              <style>
                {`
      @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-slide {
        display: flex;
        animation: slide 40s linear infinite;
      }
    `}
              </style>
            </div>

          </div>
        </div>


    {/* Our Commitment & Guarantee */}
   
<section className="py-20 px-6 md:px-16 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8">
      <h3 className="text-[#1D4ED8] font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
        ASSURANCE TO YOU
      </h3>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">
        Our Commitment & Guarantee
      </h2>
      <div className="w-32 h-1 mx-auto bg-[#DC2626] rounded-full mb-4" />
      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
        We promise consistent excellence for delivering on time, supporting you always, and ensuring every project is handled with care and integrity.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
      {[
        {
          icon: <CheckCircle className="w-10 h-10 text-blue-800" />,
          title: '100% Transparency',
          // desc: 'Clear, honest communication and full project visibility from start to finish.'
        },
        {
          icon: <Clock className="w-10 h-10 text-blue-800" />,
          title: 'On-Time Delivery',
          // desc: '95%+ of our projects launch on schedule, so you can plan with confidence.'
        },
        {
          icon: <Gift className="w-10 h-10 text-blue-800" />,
          title: '30 Days Free Support',
          // desc: 'Enjoy complimentary post-launch support for a smooth transition.'
        },
        {
          icon: <Shuffle className="w-10 h-10 text-blue-800" />,
          title: 'Flexible Engagements',
          // desc: 'Choose a partnership model that fits your business and budget.'
        },
        {
          icon: <Headphones className="w-10 h-10 text-blue-800" />,
          title: (
            <>
              24/7
              <br />
              Support
            </>
          ),
          // desc: 'Our team is always available to assist you, day or night.'
        }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: idx * 0.08 }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 4px 32px 0 rgba(30,64,175,0.10)',
            borderColor: '#1e40af',
            backgroundColor: 'rgba(30,64,175,0.04)'
          }}
          className={cn(
            "flex flex-col items-center justify-center text-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg px-6 py-8 min-w-0 border border-blue-100 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-xl",
            "sm:gap-3 md:gap-4"
          )}
        >
          <div className="flex items-center justify-center mb-0">
            {item.icon}
          </div>

          <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1 uppercase tracking-wide">
            {item.title}
          </h3>

          {/* <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
            {item.desc}
          </p> */}
        </motion.div>
      ))}
    </div>
  </div>
</section>

     {/* Our Proven Process section */}
              <OurProvenProcess/>

      <section className="pb-12 mt-10 py-10 bg-blue-800 text-white text-center mb-9">
      <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="container mx-auto"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Ready to transform your content into impactful digital experiences?
    </h2>
    <p className="mb-6">
      Let us help you create, convert, and deliver scalable digital content solutions that engage audiences and drive lasting value.
    </p>
    <Link href="/contact">
      <Button
        size="lg"
        className="bg-white text-blue-600 font-semibold hover:bg-red-700 hover:text-white"
      >
        Speak To Us
      </Button>
    </Link>
  </motion.div>
</section>

      {/* Client Reviews */}
    
    <TestimonialsSection/>


       <section>
          <FaqSection />
        </section>


        <ConsultationSection bgImage="/images/services/mobile-app-hero.jpg" />
      </main>
    </ErrorBoundary>
  );
} 