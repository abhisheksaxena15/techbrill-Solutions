"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function TechnologyStackOldone() {
  const [currentStackIndex, setCurrentStackIndex] = useState(0)

  const TechnologyStackOldone = [
    {
      title: "Frontend Development",
      technologies: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "HTML5/CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        
      ]
    },
    {
      title: "Backend Development",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: ".NET",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "php",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Ruby",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg",
        },
      
      ]
    },
    {
      title: "Database",
      technologies: [

        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDb",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },

        {
          name: "Oracle",
          icon: "/images/techno_logo/oracle-6-logo-svgrepo-com.svg",
        },
        {
          name: "Redis",
          icon: "/images/techno_logo/redis-logo-svgrepo-com.svg",
        },



      ]
    },
    {
      title: "Cloud Platform",
      technologies: [
        {
          name: "AWS",
          icon: "/images/techno_logo/Amazon_Web_Services-Logo.wine.svg",
        },
        {
          name: "Microsoft Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
        {
          name: "Google Cloud platform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        },
        {
          name: "DigitalOcean",
          icon: "/images/techno_logo/idFCqXPdgY_1756191870994.svg",
        },


      ]
    },
    {
      title: "DevOps & Automation",
      technologies: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },

        {
          name: "Jenkins",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        },
        {
          name: "Terraform",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        },
        {
          name: "GitHub Actions ",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },

      ]
    },
    {
      title: "AI, Data & Analytics",
      technologies: [
        {
          name: "Tensorflow",
          icon: "/images/techno_logo/google-tensorflow-icon.svg",
        },
        {
          name: "PyTorch ",
          icon: "/images/techno_logo/pytorch-svgrepo-com.svg",
        },

        {
          name: "Power BI",
          icon: "/images/techno_logo/power-bi-icon.svg",
        },
        {
          name: "Apache Hadoop ",
          icon: "/images/techno_logo/Apache Hadoop.svg",
        },
        {
          name: "Tableau",
          icon: "/images/techno_logo/tableau-icon-svgrepo-com.svg",
        },

      ]
    },
    {
      title: "Quality Assurance & Testing",
      technologies: [
        {
          name: "Selenium ",
          icon: "/images/techno_logo/Selenium.svg",
        },

        {
          name: "JMeter ",
          icon: "/images/techno_logo/apachejmeter-svgrepo-com.svg",
        },

        {
          name: "Postman ",
          icon: "/images/techno_logo/Postman.svg",
        },

        {
          name: "Cypress ",
          icon: "/images/techno_logo/Cypress.svg",
        },

        {
          name: "Appium",
          icon: "/images/techno_logo/appium-logo-svg-vector.svg",
        },

      ]
    },
  ]

  const nextStack = () => {
    setCurrentStackIndex((prev) => (prev + 1) % TechnologyStackOldone.length)
  }

  const prevStack = () => {
    setCurrentStackIndex((prev) => (prev - 1 + TechnologyStackOldone.length) % TechnologyStackOldone.length)
  }

  const currentStack = TechnologyStackOldone[currentStackIndex]

  return (

    <section className="pt-12 pb-8 md:pt-10 md:pb-6 bg-gray-50 dark:bg-gray-900 px-4">  

     <div className="container">
      <AnimatedSection animation="fade">

        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">Our Technology Stack</h3>
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl mb-3">
            Powering Innovation with a Robust Tech Stack
          </h2>
          <div className="w-32 h-1 mx-auto bg-red-600 rounded-full mb-4" />
          <h3 className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
            We work across a wide spectrum of technologies to design solutions that align perfectly with business needs.                </h3>

        </div>

        
      </AnimatedSection>

      {/* Stack Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevStack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Previous technology stack"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {currentStack.title}
          </h3>
          <div className="flex space-x-2 justify-center">
            {TechnologyStackOldone.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStackIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === currentStackIndex
                    ? "bg-primary w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                )}
                aria-label={`Go to ${TechnologyStackOldone[index].title} stack`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextStack}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Next technology stack"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Technology Grid - 2 Rows */}
      <motion.div
        key={currentStackIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {currentStack.technologies.slice(0, 4).map((tech, index) => (
            <AnimatedSection key={`${currentStackIndex}-${index}`} animation="scale" delay={0.05 * index}>
              <motion.div
                className={cn(
                  "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all",
                  "flex flex-col items-center justify-center text-center aspect-square",
                  "border border-gray-100 dark:border-gray-700"
                )}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex-shrink-0">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 768px) 48px, 64px"
                  />
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {currentStack.technologies.slice(4, 8).map((tech, index) => (
            <AnimatedSection key={`${currentStackIndex}-${index + 4}`} animation="scale" delay={0.05 * (index + 4)}>
              <motion.div
                className={cn(
                  "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all",
                  "flex flex-col items-center justify-center text-center aspect-square",
                  "border border-gray-100 dark:border-gray-700"
                )}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex-shrink-0">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 768px) 48px, 64px"
                  />
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </div>
    </section>
  )
}

