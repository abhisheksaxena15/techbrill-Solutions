"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animated-section";

export default function ServicesOverview() {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Crafting elegant, user-first web experiences with responsive design, seamless functionality, and optimized performance to engage your audience across all devices.",
      icon: "monitor",
      image: "/images/services/web-design-hero.jpg",
      link: "/services/it-services/web-design-development",
    },
    {
      title: "Mobile App Development",
      description:
        "Building exclusive and reliable native and cross-platform mobile applications that connect, inspire, and engage users on the go with intuitive interfaces and powerful features.",
      icon: "smartphone",
      image: "/images/services/mobile-app-hero.jpg",
      link: "/services/it-services/mobile-app-development",
    },
    {
      title: "AI & ML Development",
      description:
        "Empowering businesses with intelligent, scalable AI and ML technologies that transform data into actionable insights, automate processes, and drive innovation.",
      icon: "brain",
      image: "/images/services/ai-ml-hero.jpg",
      link: "/services/it-services/ai-ml-development",
    },
    {
      title: "Software QA & Testing",
      description:
        "Ensuring quality and reliability in every line of code through comprehensive testing strategies that identify and resolve issues before they impact users.",
      icon: "refresh-cw",
      image: "/images/services/qa-testing-hero.jpg",
      link: "/services/it-services/software-qa-testing",
    },
    {
      title: "Digital Marketing",
      description:
        "Driving brand growth through strategic digital campaigns, SEO, social media, and data-driven marketing to boost visibility, engagement, and conversions.",
      icon: "file-text",
      image: "/images/services/digital-marketing-hero.jpg",
      link: "/services/digital-marketing",
    },
    {
      title: "IT Consultancy",
      description:
        "Providing expert guidance and support to help businesses navigate the complex IT landscape, optimize their technology investments, and achieve their strategic goals.",
      icon: "trending-up",
      image: "/images/services/it-consultancy-hero.jpg",
      link: "/services/it-services/it-consultancy",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <AnimatedSection animation="fade" delay={0.1}>
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >


              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">Our Core Services</h3>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  Empowering small & mid-sized businesses  with smart IT services
                </h2>
                <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
                <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base mt-4">
                Passionate about technology, we provide IT solutions that drive innovation, transformation, and growth for your business.
                </p>
              </div>


            </motion.div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="slide">
              <motion.div
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col border border-blue-600 dark:border-blue-400"
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 15,
                    mass: 0.8,
                    delay: index * 0.15
                  }
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                  amount: 0.3
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }
                }}
              >
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-lg md:text-xl font-semibold mb-2 md:mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.15 + 0.2,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-700 dark:text-gray-200">{service.title}</span>
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base flex-grow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.15 + 0.3,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                  <Link href={service.link} className="text-red-600 font-medium flex items-center group mt-auto">
                    Read More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.8 }}
                    >
                      <ArrowRight className="h-4 w-4 text-red-600" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* How We Ensure Quality Section */}
        
      </div>
    </section>
  );
}
