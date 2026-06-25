'use client';

import React from 'react';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import { Highlight } from '@/components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, ChevronDown, Clock, Eye, Lightbulb, LineChart, Shield, Target, PenTool, BarChart3, Star, Search } from 'lucide-react';
import { InfoTabs } from '@/components/ui/info-tab';
import CaseStudiesCarousel from '@/components/ui/casestudies-carousel';
import Image from 'next/image';
import { Users, ThumbsUp, TrendingUp, Calendar, DollarSign } from 'lucide-react';
import ServicesSection from '@/components/ui/services-section-social';
import SocialTechToolsSection from '@/components/ui/social-tech-tools-section';
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

const items = [
  {
    title: 'Inconsistent Content Posting',
    description: 'We schedule and manage regular, engaging posts tailored for each platform.',
    icon: <Calendar />,
  },
  {
    title: 'Lack of Strategy',
    description: 'Our team builds data-driven strategies aligned with your business goals.',
    icon: <BarChart3 />,
  },
  {
    title: 'Low Engagement Rates',
    description: 'We design creative, community-oriented campaigns to boost interaction.',
    icon: <ThumbsUp />,
  },
  {
    title: 'Poor ROI from Ads',
    description: 'We run A/B tested paid campaigns for maximum return with transparent reporting.',
    icon: <DollarSign />,
  }
];

const CaseStudies = [
  {
    title: "Gucci",
    subtitle: "Instagram Growth & Sales Optimization",
    description: "Increased Instagram followers by 250% and boosted online sales by 60% in just 3 months through influencer collaborations and ad optimization.",
    challenge: "Low brand awareness and declining engagement rates on Instagram",
    solution: "Implemented influencer partnerships and optimized ad targeting",
    results: "250% follower growth, 60% sales increase, 8.5% engagement rate",
    // metrics: [
    //   { label: "Follower Growth", value: "250%", icon: Users },
    //   { label: "Sales Increase", value: "60%", icon: TrendingUp },
    //   { label: "Engagement Rate", value: "8.5%", icon: Target }
    // ],
    image: "/images/services/social-media-marketing/fashion-brand.jpg",
    tags: ["Instagram", "Influencer Marketing", "E-commerce"],
    duration: "3 months",
    industry: "Fashion & Retail",
    client: "Premium Fashion Brand"
  },
  {
    title: "WebAI",
    subtitle: "LinkedIn Lead Generation Campaign",
    description: "Generated 1,200+ qualified leads via LinkedIn campaigns with a 5.3x return on ad spend (ROAS), establishing them as an industry thought leader.",
    challenge: "Difficulty in reaching decision-makers and generating quality leads",
    solution: "Strategic LinkedIn content marketing and targeted B2B advertising",
    results: "1,200+ qualified leads, 5.3x ROAS, 45% reduction in cost per lead",
    // metrics: [
    //   { label: "Qualified Leads", value: "1,200+", icon: Target },
    //   { label: "ROAS", value: "5.3x", icon: TrendingUp },
    //   { label: "Cost per Lead", value: "-45%", icon: Award }
    // ],
    image: "/images/services/social-media-marketing/tech-startup.jpg",
    tags: ["LinkedIn", "B2B Marketing", "Lead Generation"],
    duration: "6 months",
    industry: "Technology",
    client: "B2B SaaS Startup"
  },
  {
    title: "KFC",
    subtitle: "Multi-Platform Brand Awareness",
    description: "Transformed a local restaurant into a regional favorite with 400% increase in social mentions and 180% growth in foot traffic.",
    challenge: "Limited brand recognition beyond local market",
    solution: "Multi-platform content strategy with location-based targeting",
    results: "400% increase in social mentions, 180% foot traffic growth",
    // metrics: [
    //   { label: "Social Mentions", value: "400%", icon: Users },
    //   { label: "Foot Traffic", value: "180%", icon: TrendingUp },
    //   { label: "Brand Recognition", value: "320%", icon: Award }
    // ],
    image: "/images/services/social-media-marketing/restaurant-chain.jpg",
    tags: ["Multi-Platform", "Local SEO", "Content Marketing"],
    duration: "4 months",
    industry: "Food & Beverage",
    client: "Regional Restaurant Chain"
  },
  {
    title: "Hubspot",
    subtitle: "Twitter Community Building",
    description: "Built an engaged community of 50K+ developers and tech enthusiasts, resulting in 300% increase in trial signups and improved customer retention.",
    challenge: "Low brand awareness in developer community and poor trial conversion",
    solution: "Community-driven content strategy and developer-focused engagement",
    results: "50K+ community members, 300% trial signup increase, 85% retention rate",
    // metrics: [
    //   { label: "Community Growth", value: "50K+", icon: Users },
    //   { label: "Trial Signups", value: "300%", icon: Target },
    //   { label: "Retention Rate", value: "+85%", icon: Award }
    // ],
    image: "/images/services/social-media-marketing/saas-platform.jpg",
    tags: ["Twitter", "Community Building", "SaaS Marketing"],
    duration: "8 months",
    industry: "Software",
    client: "Developer Tools Platform"
  },
  {
    title: "Khan Academy",
    subtitle: "YouTube Channel Growth & Monetization",
    description: "Grew educational YouTube channel from 5K to 100K+ subscribers with 400% increase in course sales through strategic video content and community engagement.",
    challenge: "Stagnant subscriber growth and low course conversion rates",
    solution: "Educational content series with strong call-to-actions and community building",
    results: "95K new subscribers, 400% course sales increase, 12% conversion rate",
    // metrics: [
    //   { label: "Subscriber Growth", value: "95K+", icon: Users },
    //   { label: "Course Sales", value: "400%", icon: TrendingUp },
    //   { label: "Conversion Rate", value: "12%", icon: Target }
    // ],
    image: "/images/services/social-media-marketing/elearning-platform.jpg",
    tags: ["YouTube", "Educational Content", "Sales Funnel"],
    duration: "10 months",
    industry: "Education",
    client: "Online Learning Platform"
  }
];

export default function SocialMediaMarketingPage() {
  return (
    <div className='bg-white text-gray-900'>
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
            Social Media Marketing
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-xl text-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Attract. Engage. Convert. All through smart social media strategies.
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
              <Button size="lg" className="bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Get Started</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button size="lg" variant="outline" className="border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full sm:w-auto">View Portfolio</Button>
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

      {/* Service Explanation Section - Minimal alternating layout with working images */}
        <ServicesSection />

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
          <SocialTechToolsSection />
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
              Key Benefits of Social Media Marketing
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-2">
              Transform your brand presence and drive business growth with strategic social media marketing that builds communities, increases engagement, and delivers measurable results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-200 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Content Strategy */}
            <motion.div
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <PenTool className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-300">CONTENT STRATEGY</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Social media marketers develop comprehensive content strategies using tools like Hootsuite and Buffer to create engaging posts that increase brand awareness and drive meaningful interactions across all social platforms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Audience Engagement - Featured */}
            <motion.div
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide ">AUDIENCE ENGAGEMENT</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Audience engagement identifies the best strategies for your target market and measures community growth potential. Our social media experts detect all possible engagement opportunities and build authentic connections through strategic community management.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Analytics & Insights */}
            <motion.div
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-300">ANALYTICS & INSIGHTS</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    The primary goal of social media analytics is to identify performance metrics and audience behavior as early as possible, so campaigns can be optimized before budgets are spent. We track exactly that at the right time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Paid Advertising */}
            <motion.div
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-300">PAID ADVERTISING</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    We have the capability, skills and experience required in paid social advertising with deep industry knowledge. Our specialists guarantee the best ROI, targeting precision and seamless campaign management while providing advertising services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Influencer Marketing */}
            <motion.div
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-300">INFLUENCER MARKETING</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Our influencer marketing team ensures that all our brand partnerships are properly vetted and aligned with your values for a seamless brand experience on all platforms and collaborations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Brand Monitoring */}
            <motion.div
              className="bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase tracking-wide group-hover:text-blue-700 transition-colors duration-300">BRAND MONITORING</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Brand monitoring ensures social media reputation will perform well under expected market conditions. The goal of reputation management is to eliminate negative mentions and brand risks, and we are specialized in doing that.
                  </p>
                </div>
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
    </div>
  );
}
