'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Vortex } from '@/components/ui/vortex';
import { ArrowRight, TrendingUp, Users, Target, Heart, Rocket, Lightbulb, Search, MessageCircle, Award, Calendar, BarChart3, ThumbsUp, DollarSign, Headphones, Truck, Shield, Settings, Palette, Zap, Blocks, Cloud, UserCheck, ChevronDown, LineChart, Briefcase, BrainCircuit, Brain, Eye, Clock } from 'lucide-react';

import { InfoTabs } from '@/components/ui/info-tab';
import CaseStudiesCarousel from '@/components/ui/casestudies-carousel';
import { motion } from 'framer-motion';
import { ErrorBoundary } from '@/components/error-boundary';
import ConsultationSection from '@/components/ConsultationSection';
import Image from 'next/image';
import ServicesSection from '@/components/ui/services-section-digital-transformations';
import DigitalTransformationsTechToolsSection from '@/components/ui/digital-transformations-tech-tools-section';
import WorkProcess from '@/components/work-process';

const items = [
    {
        title: ' Legacy System Integration Challenges',
        description: 'Organizations struggle with outdated, incompatible systems that resist integration with modern digital solutions, creating data silos and operational inefficiencies that hinder productivity and decision-making.',
        icon: <Calendar />,
    },
    {
        title: 'Employee Resistance and Skills Gap',
        description: 'Teams often resist new technologies due to fear of change or lack of digital skills, while companies face difficulty finding qualified talent to implement and manage digital transformation initiatives effectively.',
        icon: <BarChart3 />,
    },
    {
        title: 'Data Security and Compliance Concerns',
        description: 'Businesses worry about exposing sensitive customer data and meeting regulatory requirements during digital transitions, leading to hesitation in adopting new technologies and cloud-based solutions.',
        icon: <ThumbsUp />,
    },
    {
        title: 'Overwhelming Technology Choices and ROI Uncertainty',
        description: 'Companies feel paralyzed by the vast array of digital tools available and struggle to identify which solutions will deliver measurable returns on investment, often resulting in delayed decisions or poor technology choices.',
        icon: <DollarSign />,
    },
];

const caseStudies = [
    {
        title: 'Gucci',
        subtitle: 'Instagram Growth & Sales Optimization',
        description:
            'Increased Instagram followers by 250% and boosted online sales by 60% in just 3 months through influencer collaborations and ad optimization.',
        challenge: 'Low brand awareness and declining engagement rates on Instagram',
        solution: 'Implemented influencer partnerships and optimized ad targeting',
        results: '250% follower growth, 60% sales increase, 8.5% engagement rate',
        // metrics: [
        //   { label: "Follower Growth", value: "250%", icon: Users },
        //   { label: "Sales Increase", value: "60%", icon: TrendingUp },
        //   { label: "Engagement Rate", value: "8.5%", icon: Target }
        // ],
        image: '/images/services/social-media-marketing/fashion-brand.jpg',
        tags: ['Instagram', 'Influencer Marketing', 'E-commerce'],
        duration: '3 months',
        industry: 'Fashion & Retail',
        client: 'Premium Fashion Brand',
    },
    {
        title: 'WebAI',
        subtitle: 'LinkedIn Lead Generation Campaign',
        description:
            'Generated 1,200+ qualified leads via LinkedIn campaigns with a 5.3x return on ad spend (ROAS), establishing them as an industry thought leader.',
        challenge: 'Difficulty in reaching decision-makers and generating quality leads',
        solution: 'Strategic LinkedIn content marketing and targeted B2B advertising',
        results: '1,200+ qualified leads, 5.3x ROAS, 45% reduction in cost per lead',
        // metrics: [
        //   { label: "Qualified Leads", value: "1,200+", icon: Target },
        //   { label: "ROAS", value: "5.3x", icon: TrendingUp },
        //   { label: "Cost per Lead", value: "-45%", icon: Award }
        // ],
        image: '/images/services/social-media-marketing/tech-startup.jpg',
        tags: ['LinkedIn', 'B2B Marketing', 'Lead Generation'],
        duration: '6 months',
        industry: 'Technology',
        client: 'B2B SaaS Startup',
    },
    {
        title: 'KFC',
        subtitle: 'Multi-Platform Brand Awareness',
        description:
            'Transformed a local restaurant into a regional favorite with 400% increase in social mentions and 180% growth in foot traffic.',
        challenge: 'Limited brand recognition beyond local market',
        solution: 'Multi-platform content strategy with location-based targeting',
        results: '400% increase in social mentions, 180% foot traffic growth',
        // metrics: [
        //   { label: "Social Mentions", value: "400%", icon: Users },
        //   { label: "Foot Traffic", value: "180%", icon: TrendingUp },
        //   { label: "Brand Recognition", value: "320%", icon: Award }
        // ],
        image: '/images/services/social-media-marketing/restaurant-chain.jpg',
        tags: ['Multi-Platform', 'Local SEO', 'Content Marketing'],
        duration: '4 months',
        industry: 'Food & Beverage',
        client: 'Regional Restaurant Chain',
    },
    {
        title: 'Hubspot',
        subtitle: 'Twitter Community Building',
        description:
            'Built an engaged community of 50K+ developers and tech enthusiasts, resulting in 300% increase in trial signups and improved customer retention.',
        challenge: 'Low brand awareness in developer community and poor trial conversion',
        solution: 'Community-driven content strategy and developer-focused engagement',
        results: '50K+ community members, 300% trial signup increase, 85% retention rate',
        // metrics: [
        //   { label: "Community Growth", value: "50K+", icon: Users },
        //   { label: "Trial Signups", value: "300%", icon: Target },
        //   { label: "Retention Rate", value: "+85%", icon: Award }
        // ],
        image: '/images/services/social-media-marketing/saas-platform.jpg',
        tags: ['Twitter', 'Community Building', 'SaaS Marketing'],
        duration: '8 months',
        industry: 'Software',
        client: 'Developer Tools Platform',
    },
    {
        title: 'Khan Academy',
        subtitle: 'YouTube Channel Growth & Monetization',
        description:
            'Grew educational YouTube channel from 5K to 100K+ subscribers with 400% increase in course sales through strategic video content and community engagement.',
        challenge: 'Stagnant subscriber growth and low course conversion rates',
        solution: 'Educational content series with strong call-to-actions and community building',
        results: '95K new subscribers, 400% course sales increase, 12% conversion rate',
        // metrics: [
        //   { label: "Subscriber Growth", value: "95K+", icon: Users },
        //   { label: "Course Sales", value: "400%", icon: TrendingUp },
        //   { label: "Conversion Rate", value: "12%", icon: Target }
        // ],
        image: '/images/services/social-media-marketing/elearning-platform.jpg',
        tags: ['YouTube', 'Educational Content', 'Sales Funnel'],
        duration: '10 months',
        industry: 'Education',
        client: 'Online Learning Platform',
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function ContentMarketingPage() {
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
                      Digital Transformation 
                    </motion.h1>
                    <motion.p
                      className="text-lg text-gray-300 mb-8 max-w-xl text-center"
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Empowering Businesses with Innovative Solutions
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
                    <DigitalTransformationsTechToolsSection />
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
                        Key Benefits of Digital Transformation
                      </h2>
                      <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                      <p className="text-gray-600 max-w-3xl mx-auto text-lg mt-2">
                        Transform your business operations and unlock new opportunities with comprehensive digital transformation solutions that drive efficiency, innovation, and sustainable growth.
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
                            <Lightbulb className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-blue-600">Enhanced Agility</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Rapidly adapt to market changes and customer demands with flexible, scalable digital infrastructure that enables quick pivots and innovation cycles.
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
                          <h3 className="text-xl font-semibold mb-3 text-blue-600">Operational Efficiency</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Streamline processes through automation and data-driven insights, reducing manual tasks and improving productivity across all business functions.
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
                          <h3 className="text-xl font-semibold mb-3 text-blue-600">Customer Experience</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Deliver personalized, omnichannel experiences that delight customers and build lasting relationships through digital touchpoints and data insights.
                          </p>
                        </div>
                      </motion.div>
        
                      <motion.div
                        className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                        variants={fadeInUp}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-blue-600">Data-Driven Decisions</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Transform raw data into actionable insights with advanced analytics and AI, enabling informed decision-making and predictive business strategies.
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
                          <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation Acceleration</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Foster a culture of innovation with modern tools and platforms that enable rapid prototyping, testing, and deployment of new ideas and solutions.
                          </p>
                        </div>
                      </motion.div>
        
                      <motion.div
                        className="bg-white hover:bg-blue-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group"
                        variants={fadeInUp}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Briefcase className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-blue-600">Competitive Advantage</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Stay ahead of competitors with cutting-edge technologies and digital capabilities that differentiate your brand and create new market opportunities.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </section>
        
                {/* Advanced Technologies Section with Sticky Left Column */}
                <section className="py-16 bg-white text-gray-900">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
                      {/* Left Column - Sticky */}
                      <div className="lg:sticky lg:top-48 lg:h-fit">
                        <div className="max-w-lg">
                          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
                            Advanced Technologies We Use
                            in <span className='text-blue-700'> Our Digital Transformation Services </span>
                          </h2>
                          <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            From <span className="text-blue-600 underline">cloud migration</span> to AI-powered automation, microservices to 
                            <span className="text-blue-600 underline">data analytics</span>, our comprehensive digital transformation services 
                            leverage cutting-edge technologies to modernize your business operations. As a leading digital transformation partner, 
                            we ensure that your technology stack is optimized, secure, and future-ready 
                            to drive sustainable growth and innovation.
                          </p>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                            Transform Your Business Today
                          </Button>
                        </div>
                      </div>
        
                      {/* Right Column - Scrollable */}
                      <div className="space-y-12">
                        {/* Cloud Computing & Migration */}
                        <motion.div
                          className="p-8 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <Cloud className='w-6 h-6 text-blue-600' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Cloud Computing & Migration</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Our <span className="text-blue-600 underline">cloud transformation</span> services help businesses migrate from legacy infrastructure to modern, 
                            scalable cloud platforms. We specialize in multi-cloud strategies, serverless architectures, and 
                            <span className="text-blue-600 underline">container orchestration</span> to ensure your applications are resilient, cost-effective, 
                            and capable of handling dynamic workloads with automated scaling and enhanced security.
                          </p>
                        </motion.div>
        
                        {/* Data Analytics & Business Intelligence */}
                        <motion.div
                          className="p-8 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <BarChart3 className='w-6 h-6 text-blue-600' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Data Analytics & Business Intelligence</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Transform raw data into actionable insights with our advanced <span className="text-blue-600 underline">analytics platforms</span> 
                            and business intelligence solutions. We implement real-time dashboards, predictive analytics, 
                            and machine learning models that enable data-driven decision making, helping you identify 
                            trends, optimize operations, and discover new revenue opportunities through intelligent data processing.
                          </p>
                        </motion.div>
        
                        {/* AI & Machine Learning Integration */}
                        <motion.div
                          className="p-8 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <BrainCircuit className='w-6 h-6 text-blue-600' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">AI & Machine Learning Integration</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Harness the power of <span className="text-blue-600 underline">artificial intelligence</span> and machine learning to automate 
                            complex business processes and enhance decision-making capabilities. Our AI solutions include 
                            natural language processing, computer vision, predictive modeling, and intelligent automation 
                            that streamline operations, reduce costs, and create personalized customer experiences at scale.
                          </p>
                        </motion.div>
        
                        {/* API Integration & Microservices */}
                        <motion.div
                          className="p-8 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <Blocks className='w-6 h-6 text-blue-600' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">API Integration & Microservices</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Modernize your architecture with <span className="text-blue-600 underline">microservices</span> and seamless API integrations 
                            that connect disparate systems and enable flexible, scalable solutions. Our approach focuses on 
                            breaking down monolithic applications into manageable, independent services that can be 
                            deployed, scaled, and maintained separately, improving system resilience and development velocity.
                          </p>
                        </motion.div>
        
                        {/* DevOps & Automation */}
                        <motion.div
                          className="p-8 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                              <Settings className='w-6 h-6 text-blue-600' />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">DevOps & Automation</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            Accelerate software delivery and improve operational efficiency with our comprehensive 
                            <span className="text-blue-600 underline">DevOps automation</span> solutions. We implement CI/CD pipelines, infrastructure as code, 
                            automated testing, and monitoring systems that reduce deployment risks, increase release 
                            frequency, and ensure consistent, reliable software delivery across all environments.
                          </p>
                        </motion.div>
                      </div>
                    </div>
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
              </main>
            </ErrorBoundary>
    );
}