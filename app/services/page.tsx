"use client"

import { ArrowRight, ChevronDown, Globe, Smartphone, Brain, Search, Share2, FileText, BarChart3, Palette, Cloud, Database, Zap, Shield, Users, Settings, Code, Target, TrendingUp, Layers, Cpu, Bot, Network, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import ServiceCard from "@/components/service-card"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link"

export default function ServicesPage() {

  const services = [
    // IT Services
    {
      id: 1,
      title: "Web Design & Development",
      description: "Crafting elegant, user-first web experiences that inspire and engage across every device. Our web development solutions combine cutting-edge technology with intuitive design principles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      link: "/services/it-services/web-design-development",
      icon: Globe,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "We craft exclusive and reliable mobile apps that connect, inspire, and engage on the go. Our mobile development expertise spans native and cross-platform solutions.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      link: "/services/it-services/mobile-app-development",
      icon: Smartphone,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      title: "AI & ML Development",
      description: "Empowering businesses with intelligent, scalable AI and ML technologies for innovation. We develop custom artificial intelligence solutions that automate processes.",
      image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
      link: "/services/it-services/ai-ml-development",
      icon: Brain,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 4,
      title: "Software QA & Testing",
      description: "Comprehensive quality assurance and testing services to ensure your software meets the highest standards of reliability, performance, and user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      link: "/services/it-services/software-qa-testing",
      icon: Shield,
      color: "bg-red-50 text-red-600"
    },
    {
      id: 5,
      title: "IT Consultancy",
      description: "Strategic IT consulting services to help businesses align technology with their goals, optimize processes, and drive digital transformation initiatives.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      link: "/services/it-services/it-consultancy",
      icon: Users,
      color: "bg-indigo-50 text-indigo-600"
    },
    
    // Digital Marketing Services
    {
      id: 6,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies. Our comprehensive approach combines technical optimization and content strategy.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/search-engine-optimization",
      icon: Search,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 7,
      title: "Social Media Marketing",
      description: "Engage your audience and build your brand with strategic social media campaigns. Our social media marketing expertise helps businesses create compelling content.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/social-media-marketing",
      icon: Share2,
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: 8,
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives conversions. Our content marketing approach combines strategic planning and creative storytelling.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/content-marketing",
      icon: FileText,
      color: "bg-orange-50 text-orange-600"
    },
    {
      id: 9,
      title: "Web Analytics",
      description: "Gain valuable insights into your website performance and user behavior with comprehensive web analytics solutions. We implement advanced tracking systems.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-marketing/web-analytics",
      icon: BarChart3,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      id: 10,
      title: "Design & Print Media",
      description: "We offer graphic design and print solutions to create impactful visuals for brand identity. Our design expertise encompasses everything from logo creation.",
      image: "https://images.unsplash.com/photo-1639717995202-02db625f64a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/digital-marketing/design-print-media",
      icon: Palette,
      color: "bg-emerald-50 text-emerald-600"
    },
    
    // AI & Automation Services
    {
      id: 11,
      title: "Cloud & DevOps",
      description: "Streamline your development and deployment processes with our comprehensive Cloud & DevOps solutions. We help businesses achieve faster delivery and improved reliability.",
      image: "/images/services/cloud-devops.jpg",
      link: "/services/ai-automation/cloud-devops",
      icon: Cloud,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 12,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions. We help businesses make data-driven decisions and uncover hidden opportunities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      link: "/services/ai-automation/data-analytics",
      icon: Database,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 13,
      title: "Digital Transformation",
      description: "Accelerate your digital journey with our comprehensive transformation services. We help businesses modernize processes, systems, and customer experiences.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      link: "/services/ai-automation/digital-transformation",
      icon: Zap,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 14,
      title: "Generative AI",
      description: "Leverage the power of generative AI to create innovative content, automate creative processes, and unlock new possibilities for your business.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      link: "/services/ai-automation/generative-ai",
      icon: Bot,
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: 15,
      title: "Blockchain Development",
      description: "Build secure, transparent, and decentralized applications with our blockchain development expertise. We create innovative solutions for the future of digital transactions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&auto=format",
      link: "/services/ai-automation/blockchain",
      icon: Network,
      color: "bg-orange-50 text-orange-600"
    },
    
    // Digital Content Solutions
    {
      id: 16,
      title: "Digital Content Solutions",
      description: "Comprehensive digital content creation and management services to help businesses engage their audience and drive meaningful connections through compelling content.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      link: "/services/digital-content-solutions",
      icon: FileCode,
      color: "bg-indigo-50 text-indigo-600"
    }
  ]

  return (
    <>
      <main className='bg-white text-gray-900'>
        {/* Hero Section with Background Image */}
        <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image src="/images/services/it-consultancy-hero.jpg" alt="Web Design Hero" fill className="object-cover object-center z-0" priority />
          {/* Dark Linear Gradient Overlay with Blur */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm" />
          {/* Centered Content */}
          <div id="contact-form01"className="relative z-20 flex flex-col items-center justify-center w-full px-4" style={{ marginTop: '-2rem' }}>
            <motion.h1
              className="font-bold text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-xl text-center"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Empowering Businesses with Tailored IT Services & Next-Gen Solutions
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
                 <Link href="/contact">
                   <Button size="lg" className="bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full sm:w-auto">Get Started</Button>
                 </Link>
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
      </main>

      {/* IT Excellence Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
              IT Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
              End-to-End IT Services for <span className="text-blue-800">Business Growth</span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="mb-8 text-gray-700 text-base dark:text-white">
              At Techbrill, we provide end-to-end IT services that empower businesses to innovate, scale, and succeed in the digital era. Our expertise covers web development, mobile app development, QA & testing, DevOps, cloud solutions, AI & ML, and digital marketing.
            </p>
            <p className="mb-8 text-gray-700 text-base dark:text-white">
              By delivering customized, scalable, and secure solutions, we help organizations improve efficiency, enhance customer experiences, and achieve sustainable growth across industries.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4">
               <Link href="#services">
                 <Button size="lg" className="bg-primary text-white font-semibold px-8 py-3 text-base shadow-md hover:bg-primary/90">
                   Explore Services
                 </Button>
               </Link>
               <Link href="/contact">
                 <Button size="lg" variant="outline" className="bg-white text-primary font-semibold px-8 py-3 text-base border-2 border-primary shadow-md hover:bg-gray-100">
                   Get Consultation
                 </Button>
               </Link>
             </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/services/jimmy-desplanques-yt5sOD8Yw9I-unsplash.jpg"
              alt="IT Services"
              width={400}
              height={340}
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h2>
            <motion.h2 
              className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Assiting your bussiness with robust services and meeting your <span className="text-blue-800 font-bold">Digital Requirements</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>

          {/* Services Grid - Similar to Industries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center shadow-sm`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Read More Link */}
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-blue-700 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
               OUR PROVEN PROCESS
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
              Creating Business Value with Tailored  <span className="italic text-blue-800 dark:text-blue-200">IT Solutions</span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-blue-700 mx-auto mb-4 sm:mb-6"></div>
              <p className="w-full max-w-2xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                From planning to execution, we follow a streamlined process designed to maximize efficiency, minimize risks, and deliver IT solutions that create real business value and sustainable growth.
              </p>
            </motion.div> 
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Planning",
                    description: "We begin by understanding your business needs, goals, and target audience.",
                  },
                  {
                    step: "02",
                    title: "Design & Development",
                    description: "Our team creates prototypes and develops solutions based on the approved designs.",
                  },
                  {
                    step: "03",
                    title: "Testing & Quality Assurance",
                    description:
                      "Rigorous testing ensures that the final product meets all requirements and quality standards.",
                  },
                  {
                    step: "04",
                    title: "Deployment & Support",
                    description: "We deploy the solution and provide ongoing support and maintenance.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white dark:text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

                             <div className="mt-8">
                 <Link href="/contact">
                   <Button className="group">
                     Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </Button>
                 </Link>
               </div>
            </div>
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-600/5"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 mx-4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Need a Custom Solution?
                  </h3>
                  <p className="mb-6 max-w-sm mx-auto text-gray-700 dark:text-gray-300">
                    We specialize in creating tailored solutions to address your unique business challenges.
                  </p>
                                     <Link href="/contact">
                     <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white group">
                       Contact Our Team 
                     </Button>
                   </Link>
                  
                </div>
              </div>
            </div>
                     </div>
         </div>
       </section>

       {/* Why Choose Us Section */}
       <section className="py-16 bg-white dark:bg-gray-900">
         <div className="container">
           <div className="text-center mb-12">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
             >
               <span className="text-blue-700 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                 WHY CHOOSE US
               </span>
               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                 Why Clients <span className="text-blue-800">Trust Us</span> to Drive Innovation
               </h2>
               <div className="w-16 sm:w-20 h-1 bg-blue-700 mx-auto mb-4 sm:mb-6"></div>
               <p className="w-full max-w-2xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                 We combine innovation, expertise, and commitment to deliver IT services that truly make a difference. Here&apos;s why businesses trust us as their technology partner.
               </p>
             </motion.div>
           </div>

           {/* 3x2 Grid Layout */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
             {[
               {
                 icon: "🎯",
                 title: "Domain Expertise",
                 description: "Deep understanding of multiple industries and compliance requirements."
               },
               {
                 icon: "⚙️",
                 title: "Customized Solutions",
                 description: "Tailored IT strategies aligned with unique business needs."
               },
               {
                 icon: "🏆",
                 title: "Proven Track Record",
                 description: "Successful delivery of projects for global clients."
               },
               {
                 icon: "✅",
                 title: "Quality & Reliability",
                 description: "Rigorous testing and assurance at every stage."
               },
               {
                 icon: "📈",
                 title: "Scalable & Future-Ready",
                 description: "Solutions designed to grow with your business."
               },
               {
                 icon: "🤝",
                 title: "Continuous Support",
                 description: "Dedicated post-deployment optimization and assistance."
               }
             ].map((item, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 md:cursor-pointer active:scale-95 touch-manipulation"
               >
                 {/* Icon with hover effect */}
                 <div className="text-4xl mb-4 transform transition-transform duration-300 md:group-hover:scale-110 md:group-hover:rotate-3">
                   {item.icon}
                 </div>

                 {/* Title with hover color change */}
                 <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white md:group-hover:text-primary transition-colors duration-300">
                   {item.title}
                 </h3>

                 {/* Description */}
                 <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed md:group-hover:text-gray-800 md:dark:group-hover:text-gray-200 transition-colors duration-300">
                   {item.description}
                 </p>

                 {/* Optional: Add a subtle background gradient on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
     </>
   )
 }
