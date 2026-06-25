"use client"

import IndustriesSection from "@/components/industries-section";
import WorkProcess from "@/components/ui/work-process";
import ConsultationSection from "@/components/ConsultationSection";
import AnimatedText from "@/components/animated-text";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Building2, GraduationCap, BookOpen, Heart, ShoppingCart, Globe, Truck, Home, Film, Cpu, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
import React from 'react';
import Link from "next/link";

const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/services/jimmy-desplanques-yt5sOD8Yw9I-unsplash.jpg";

const benefits = [
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
];


const industries = [
  {
    id: 1,
    title: 'Automotive',
    description: 'Driving innovation in vehicle manufacturing, autonomous systems, and mobility solutions for the future of transportation.',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/automotive',
    icon: Car,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 2,
    title: 'Banking & Finance',
    description: 'Transforming financial services with digital solutions, secure payment systems, and innovative fintech platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/banking-finance',
    icon: Building2,
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 3,
    title: 'Education',
    description: 'Empowering learning through innovative educational technologies, e-learning platforms, and digital classroom solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/education',
    icon: GraduationCap,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 4,
    title: 'Publishing',
    description: 'Revolutionizing content creation and distribution in the digital publishing landscape with modern solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/publishing',
    icon: BookOpen,
    color: 'bg-orange-50 text-orange-600'
  },
  {
    id: 5,
    title: 'Healthcare',
    description: 'Advancing patient care through cutting-edge medical technologies, telemedicine, and healthcare management systems.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/healthcare',
    icon: Heart,
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 6,
    title: 'Retail',
    description: 'Enhancing customer experiences through omnichannel retail solutions, inventory management, and customer analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/retail',
    icon: ShoppingCart,
    color: 'bg-pink-50 text-pink-600'
  },
  {
    id: 7,
    title: 'E-commerce',
    description: 'Building scalable online marketplaces, digital commerce platforms, and comprehensive shopping experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/ecommerce',
    icon: Globe,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    id: 8,
    title: 'Travel',
    description: 'Creating seamless travel experiences through innovative booking systems, travel management, and hospitality solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/travel',
    icon: Globe,
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: 9,
    title: 'Logistics & Transportation',
    description: 'Optimizing supply chain efficiency with smart logistics, fleet management, and transportation solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/logistics',
    icon: Truck,
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    id: 10,
    title: 'Real Estate',
    description: 'Modernizing property management, real estate transactions, and property valuation with innovative digital tools.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/real-estate',
    icon: Home,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 11,
    title: 'Media & Entertainment',
    description: 'Delivering engaging content experiences across multiple digital platforms, streaming services, and media production.',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/media-entertainment',
    icon: Film,
    color: 'bg-violet-50 text-violet-600'
  },
  {
    id: 12,
    title: 'Hi-tech',
    description: 'Pioneering next-generation technologies, innovative software solutions, and cutting-edge technological advancement.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format',
    readMoreUrl: '/industries/hi-tech',
    icon: Cpu,
    color: 'bg-slate-50 text-slate-600'
  }
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative py-20 max-h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image src={bannerImage} alt="Generative AI Hero" fill className="object-cover object-center z-0" priority />
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
            Industries
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-xl text-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Empowering Industries with Future-Ready IT Solutions
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
              <Link href="/services">
                <Button size="lg" className="bg-blue-800 text-white rounded-md hover:dark:bg-red-900 hover:bg-red-900 w-full sm:w-auto">
                  Explore Our Services</Button>
              </Link>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border border-blue-800 text-blue-800 rounded-md font-semibold hover:bg-red-700 hover:text-white w-full sm:w-auto">
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

      {/* Light Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
            <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2 text-red-600 dark:text-red-600">
              Industry Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
              Empowering Businesses with Customized IT Solutions
            </h2>
            <div className="w-20 h-1 bg-primary mb-6 bg-red-600"></div>
            <p className="mb-8 text-gray-700 text-base dark:text-white">
              We deliver tailored IT solutions designed to address the unique challenges of diverse industries. From healthcare and finance to retail, education, and manufacturing, our expertise ensures scalable, secure, and future-ready technology that drives efficiency and growth. With deep domain knowledge and innovative approaches, we empower businesses to achieve digital transformation across sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="outline"    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded shadow-md font-bold hover:text-white hover:bg-red-700 transition duration-300"
>
                    Consult Our Expert
                  </Button>
                </Link>
              </div>


            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={infoImage}
              alt="Industry Solutions"
              width={400}
              height={340}
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              style={{ minHeight: 240, maxHeight: 340 }}
              priority
            />
          </div>
        </div>
      </section>
      {/* Hero Banner */}


      {/* Industries Grid */}
      {/* <IndustriesSection /> */}

      <div className="w-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering innovative solutions across diverse industries with expertise and commitment to excellence.
            </p>
          </div> */}

          <div className="text-center mb-12">
            <h3 className="text-red-600 dark:text-red-600 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
              Industries we serve
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
              Transforming Challenges Into Opportunities Across Industries
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
              With deep domain expertise and innovative technologies, we help businesses across diverse industries achieve efficiency, scalability, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={industry.id}
                  className="group dark:bg-gray-800 bg-white rounded-2xl shadow-lg border-2 dark:border-gray-800 border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.imageUrl}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 ">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                        {industry.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/*Service process section*/}

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="text-red-600 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
                Our Proven Process
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
                Delivering Value Through Tailored IT Solutions
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-red-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
                We combine industry insight with a proven process to ensure efficiency, reliability, and ongoing support, driving measurable success across industries.
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
                    <div className="bg-blue-600 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white dark:text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8">
                <Button className="group">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div> */}
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
                  <Button variant="outline" className="bg-blue-600 text-white hover:text-white hover:bg-red-600 dark:bg-blue-800 dark:hover:bg-red-600 dark:text-white group">
                    <a href="/contact">
                      Contact Our Team
                    </a>
                  </Button>

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
            <h3 className="text-red-600 font-medium uppercase tracking-wide text-xs sm:text-sm block mb-2">
              Why Choose Us
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white">
              Why Businesses Across Industries Trust Us
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-300">
              We bring together domain expertise, cutting-edge technology, and proven delivery methods to provide IT solutions that create lasting value across diverse industries
            </p>
          </div>



          {/* 3x2 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {benefits.map((item, idx) => (
              <AnimatedSection key={idx} animation="scale" delay={0.05 * idx}>
                <div className="group bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-full transition-all duration-300 md:hover:shadow-xl md:hover:shadow-blue-100 md:dark:hover:shadow-blue-900/20 md:hover:-translate-y-2 md:hover:border-primary/30 md:cursor-pointer active:scale-95 touch-manipulation">
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

