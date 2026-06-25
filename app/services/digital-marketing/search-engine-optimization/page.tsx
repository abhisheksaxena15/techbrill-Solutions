'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, BarChart2, ShieldCheck, Users, Link, FileText, ChevronDown, Lightbulb, LineChart, Shield, Target, Briefcase, Clock, Eye } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { WobbleCard } from "@/components/ui/wobble-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { seo_services, SeoService } from "@/lib/seo-services";
import ServicesSection from '@/components/ui/services-section-seo';
import WebTechToolsSection from '@/components/ui/seo-tech-tools-section';
import WorkProcess from '@/components/ui/work-process';
import ConsultationSection from '@/components/ConsultationSection';
import AboutPreview from '@/components/about-preview';

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

export default function SeoPage() {
  return (
    <ErrorBoundary>
      <div className='bg-white text-gray-900'>
        {/* Hero Section */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/seo/hero.avif" alt="Search Engine Optimization Hero" fill className="object-cover object-center z-0" priority />
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
              Search Engine Optimization
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Boosting your online visibility and driving organic traffic.
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
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">View Portfolio</Button>
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

        <AboutPreview />

        <ServicesSection />

        {/* 4. Tech Stack Section */}
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
            <WebTechToolsSection />
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Key Benefits of SEO Services
              </h2>
              <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-2">
                Boost your online visibility and drive sustainable organic growth with our comprehensive SEO strategies that deliver measurable results and long-term success.
              </p>
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
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Increased Visibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Improve your search engine rankings and get found by customers actively searching for your products or services online.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Organic Traffic Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Drive sustainable, long-term traffic growth through organic search results without ongoing advertising costs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Brand Credibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build trust and authority in your industry by ranking higher in search results and establishing thought leadership.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Targeted Audience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reach users with high purchase intent who are actively searching for solutions you provide, improving conversion rates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Cost-Effective Marketing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Achieve better ROI compared to paid advertising with long-lasting results that continue to drive traffic over time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Enhanced User Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Improve website performance, navigation, and content quality to provide better user experiences and increase engagement.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Work Process Section */}
        <WorkProcess />

        {/* Commitment Section */}
        <section className="py-20 px-6 md:px-16 bg-blue-100">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
              <h3 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                ASSURANCE TO YOU
              </h3>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Our <span className="text-blue-600">Commitment</span> and Guarantee
              </h2>

              <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>

              <p className="text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
                Our team empowers businesses across industries by integrating cutting-edge technologies and optimizing workflows. We specialize in crafting tailored web solutions that address core operational challenges, enhance efficiency, and spark innovation.
              </p>


              {/* Commitment Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full">
                {/* 100% Transparency */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    100% Transparency
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complete visibility into project progress, timelines, and deliverables. No hidden costs or surprise changes.
                  </p>
                </div>

                {/* 95% On Time Delivery */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    95% On Time Delivery
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Proven track record of meeting deadlines with quality deliverables. We value your time and business commitments.
                  </p>
                </div>

                {/* Free 30 days support */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Free 30 Days Support
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complimentary post-launch support to ensure smooth operation and address any issues that may arise.
                  </p>
                </div>

                {/* Flexible Engagement */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Flexible Engagement
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Adaptable working models to suit your project needs, timeline, and budget requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Choose us ?
                </h2>
                <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mt-6">
                  TechBrill is an IT consulting services company with a young, dynamic workforce delivering value to your business
                  through innovation and ingenuity. As a dedicated IT consulting service provider, we emphasize personalized strategies and
                  forward-thinking solutions tailored to your unique business challenges and objectives.
                </p>
                <p className="text-gray-900 font-semibold text-lg mt-4">
                  We are:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Point 001 - Seasoned Experts */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">001</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Seasoned Experts
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      With a dedicated team of IT service consultants, we ensure that our IT
                      consulting and services help you get the maximum value for your
                      engagement with us, resulting in a long-lasting partnership we have
                      developed with 95% of our clients.
                    </p>
                  </div>
                </motion.div>

                {/* Point 002 - Attention to Every Detail */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 mt-12"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">002</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Attention to Every Detail
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our IT support consulting experts and IT project management consultants,
                      specializing in technology consulting services, pay attention to every minor
                      requirement and assemble a solution to tackle your pain points most
                      effectively.
                    </p>
                  </div>
                </motion.div>

                {/* Point 003 - Keeping Transparency Paramount */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 pb-8"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">003</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Keeping Transparency Paramount
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Believing in the ethos of an open work culture, we, as a leading IT
                      professional services provider, work alongside our clients, keeping them
                      updated about developments, ideas, and strategies.
                    </p>
                  </div>
                </motion.div>

                {/* Point 004 - Enhanced Security */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 pb-8 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">004</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Enhanced Security
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our IT services consultants specialize in identifying and mitigating security
                      threats within your network and systems. They work closely with your team
                      to develop innovative solutions, implement robust security measures, and
                      establish protocols to ensure continuous protection of your existing systems.
                    </p>
                  </div>
                </motion.div>

                {/* Point 005 - Client-Centric Approach */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">005</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Client-Centric Approach
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We prioritize your success by offering a client-centric approach. By deeply
                      understanding your business goals, we craft IT strategies that not only solve
                      immediate challenges but also position your organization for long-term
                      growth and sustainability.
                    </p>
                  </div>
                </motion.div>

                {/* Point 006 - Rapid Project Delivery */}
                <motion.div
                  className="flex items-start space-x-6 p-6 border-t border-gray-300 pt-8 pb-8 mt-6"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0">
                    <span className="text-sm font-mono text-gray-500">006</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Rapid Project Delivery
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to accelerating project timelines without compromising
                      quality. Our efficient processes and agile methodologies ensure that your IT
                      projects are completed quickly, allowing you to capitalize on new
                      opportunities and achieve your objectives sooner.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
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

        {/* Consultation Section */}
        <ConsultationSection />

      </div >
    </ErrorBoundary >
  );
}