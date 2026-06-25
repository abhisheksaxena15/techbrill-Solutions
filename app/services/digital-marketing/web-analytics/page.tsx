"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Gift, Shuffle, Headphones, Lightbulb, Palette, Target, Handshake, PhoneCall, BarChart3, PieChart, UserCheck, Settings2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import ConsultationSection from "@/components/ConsultationSection";
import { cn } from "@/lib/utils";

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

export default function WebAnalyticsPage() {
	return (
    <ErrorBoundary>
      <main className="bg-white text-gray-900">
        {/* 1. Hero Banner */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          <Image src="/images/services/web-analytics/hero.jpeg" alt="Web Analytics Hero" fill className="object-cover object-center z-0" priority />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: "-2rem" }}>
						<motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
						>
							Web Analytics
						</motion.h1>
						<motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
						>
							Tracking and analyzing website data for informed decisions.
						</motion.p>
					<motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900 w-full sm:w-auto">Get Started</Button>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-blue-800 hover:text-white w-full sm:w-auto">View Portfolio</Button>
              </motion.div>
					</motion.div>
						</div>
						<motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-7 h-7 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
          </motion.div>
        </section>

        {/* 1.5. Analytics Overview Section */}
        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 w-full flex justify-center items-center">
              <Image src="/images/services/web-analytics/hero.jpeg" alt="Analytics Dashboard" width={800} height={450} className="object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl shadow-md" />
										</div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-lg font-semibold text-black-800 mb-2">We Turn Data Into Growth</h3>
              <div className="w-20 h-1 mb-4 bg-blue-700 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black leading-tight">
                Your Strategic Partner in <span className="text-blue-800">Web Analytics</span> & Data-Driven Decisions
              </h2>
              <p className="text-gray-700 mb-4 text-base md:text-lg">
                Unlock the full potential of your website with actionable insights. Our web analytics services empower you to understand user behavior, optimize marketing campaigns, and drive measurable business growth. We help you track the right metrics, visualize performance, and make smarter decisions—faster.
              </p>
              <p className="text-gray-700 mb-6 text-base md:text-lg">
                From Google Analytics setup to custom dashboards and advanced funnel analysis, our experts ensure your data is accurate, accessible, and aligned with your business goals. Partner with us to transform raw data into real results.
              </p>
              <Button size="lg" className="bg-blue-800 text-white rounded-md hover:bg-blue-900">Consult with us</Button>
									</div>
										</div>
        </section>

        {/* 2. Features/Services Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Our Web Analytics Services</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We provide comprehensive analytics solutions to help you understand and optimize your digital presence.
										</p>
									</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BarChart3 className="w-9 h-9 text-blue-800" />,
                  title: "Traffic Analysis",
                  desc: "Detailed insights into your website visitors, sources, and behavior."
                },
                {
                  icon: <PieChart className="w-9 h-9 text-blue-800" />,
                  title: "Conversion Tracking",
                  desc: "Monitor goals, sales, and user actions to measure ROI."
                },
                {
                  icon: <UserCheck className="w-9 h-9 text-blue-800" />,
                  title: "User Insights",
                  desc: "Understand your audience segments and personalize experiences."
                },
                {
                  icon: <Settings2 className="w-9 h-9 text-blue-800" />,
                  title: "Custom Dashboards",
                  desc: "Visualize KPIs and trends with easy-to-use dashboards."
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-800" />,
                  title: "Event & Funnel Analysis",
                  desc: "Track user journeys and optimize conversion paths."
                },
                {
                  icon: <Gift className="w-9 h-9 text-blue-800" />,
                  title: "Analytics Consulting",
                  desc: "Expert advice to maximize your analytics investment."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(30,64,175,0.10)", borderColor: "#1e40af", backgroundColor: "rgba(30,64,175,0.04)" }}
                  className="flex flex-col items-center text-center gap-3 bg-white/80 rounded-2xl border border-blue-100 shadow-md px-7 py-8 transition-all duration-200 hover:bg-blue-50/60 hover:border-blue-800 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center mb-2">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
									</div>
								</div>
        </section>

        {/* 3. Tech Stack Section (optional, can be customized for analytics tools) */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                Analytics Tools We Use
              </h3>
              <h2 className=" text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                Powered by industry-leading <span className="text-blue-800">Analytics Platforms</span>
              </h2>
              <div className="h-1 w-20 bg-blue-800 dark:bg-blue-400 mx-auto mt-4"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Google Analytics", icon: "/images/tech/google-analytics.svg" },
                { name: "GA4", icon: "/images/tech/ga4.svg" },
                { name: "Hotjar", icon: "/images/tech/hotjar.svg" },
                { name: "Mixpanel", icon: "/images/tech/mixpanel.svg" },
                { name: "Tableau", icon: "/images/tech/tableau.svg" },
                { name: "Looker Studio", icon: "/images/tech/looker.svg" },
              ].map((tool, idx) => (
                <div key={tool.name} className="flex flex-col items-center">
                  <Image src={tool.icon} alt={tool.name} width={48} height={48} />
                  <span className="mt-2 text-sm font-medium text-gray-700">{tool.name}</span>
							</div>
              ))}
					</div>
				</div>
        </section>

        {/* 4. Process Section */}
        <section className="py-20 px-6 md:px-16 bg-slate-100">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Our Analytics Process</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-400 via-blue-800 to-blue-400 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                A proven, step-by-step approach to analytics success.
								</p>
							</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
              {[
                {
                  icon: <CheckCircle className="w-10 h-10 text-blue-800" />,
                  title: "Discovery",
                  desc: "We learn about your business, goals, and data needs."
                },
                {
                  icon: <Lightbulb className="w-10 h-10 text-blue-800" />,
                  title: "Setup",
                  desc: "We implement tracking, configure tools, and define KPIs."
                },
                {
                  icon: <Palette className="w-10 h-10 text-blue-800" />,
                  title: "Data Collection",
                  desc: "We gather and validate data from all relevant sources."
                },
                {
                  icon: <Target className="w-10 h-10 text-blue-800" />,
                  title: "Analysis",
                  desc: "We analyze data, build reports, and uncover insights."
                },
                {
                  icon: <PhoneCall className="w-10 h-10 text-blue-800" />,
                  title: "Optimization",
                  desc: "We recommend and implement improvements for better results."
                }
              ].map((item, idx) => (
						<motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(30,64,175,0.10)", borderColor: "#1e40af", backgroundColor: "rgba(30,64,175,0.04)" }}
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

        {/* 5. Commitment & Why Choose Section */}
        <section className="py-20 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Our Commitment & Guarantee</h2>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver robust, scalable, and high-performance analytics solutions. Our team is dedicated to transparency, timely delivery, and ongoing support—empowering your business to thrive with data.
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
                  <div className="flex items-center justify-center mb-0">{item.icon}</div>
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-black">Why Choose Us</h2>
              <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
                We deliver more than just analytics — we bring vision, precision, and a results-driven process to every project.
              </p>
					</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="w-9 h-9 text-blue-800" />,
                  title: 'Data-Driven Decisions',
                  desc: 'We help you make informed decisions with actionable insights.'
                },
                {
                  icon: <Lightbulb className="w-9 h-9 text-blue-800" />,
                  title: 'Advanced Analytics Expertise',
                  desc: 'Our team leverages the latest analytics tools and methods.'
                },
                {
                  icon: <Palette className="w-9 h-9 text-blue-800" />,
                  title: 'Custom Dashboards & Reports',
                  desc: 'We build tailored dashboards and reports for your needs.'
                },
                {
                  icon: <Target className="w-9 h-9 text-blue-800" />,
                  title: 'Results-Driven Approach',
                  desc: 'We focus on measurable outcomes and continuous improvement.'
                },
                {
                  icon: <Handshake className="w-9 h-9 text-blue-800" />,
                  title: 'Flexible Engagement Models',
                  desc: 'Choose from a range of engagement options tailored to your needs and goals.'
                },
                {
                  icon: <PhoneCall className="w-9 h-9 text-blue-800" />,
                  title: 'Seamless Communication',
                  desc: 'We keep you in the loop with clear, proactive, and responsive communication.'
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
                  <div className="flex items-center justify-center mb-2">{item.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
						</motion.div>
              ))}
							</div>
							</div>
        </section>

        <ConsultationSection bgImage="/images/services/web-analytics-hero.jpg" />
      </main>
    </ErrorBoundary>
	);
}
