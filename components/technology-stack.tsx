"use client"

import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

export default function TechnologyStack() {
 
  const technologies = [
    // Core Development Technologies
    { name: "React", icon: "devicon:react" },
    { name: "Next.js", icon: "devicon:nextjs" },
    { name: "TypeScript", icon: "devicon:typescript" },
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "Python", icon: "devicon:python" },
    { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    { name: "JavaScript", icon: "devicon:javascript" },
    { name: "Vue.js", icon: "devicon:vuejs" },
  
    // Enterprise & Backend Technologies
    { name: "Java", icon: "devicon:java" },
    { name: "Spring Boot", icon: "devicon:spring" },
    { name: "C#", icon: "devicon:csharp" },
    { name: ".NET", icon: "devicon:dotnetcore" },
    { name: "Go", icon: "devicon:go" },
    { name: "Git", icon: "devicon:git" },

  
    // Cloud & Infrastructure
    { name: "Docker", icon: "devicon:docker" },
    { name: "Kubernetes", icon: "devicon:kubernetes" },
    { name: "AWS", icon: "devicon:amazonwebservices-wordmark" },
    { name: "Google Cloud", icon: "devicon:googlecloud" },

  
    // Databases & Data Management
    { name: "PostgreSQL", icon: "devicon:postgresql" },
    { name: "MongoDB", icon: "devicon:mongodb" },
    { name: "MySQL", icon: "devicon:mysql" },

  
    // AI/ML & Data Science
    { name: "TensorFlow", icon: "devicon:tensorflow" },
    { name: "PyTorch", icon: "devicon:pytorch" },

  
  
    // Design & Collaboration
    { name: "Figma", icon: "devicon:figma" },



  
    // Mobile Development
    { name: "React Native", icon: "devicon:react" },
    { name: "Flutter", icon: "devicon:flutter" },
    { name: "Swift", icon: "devicon:swift" },
    { name: "Kotlin", icon: "devicon:kotlin" },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="container mx-auto">
        <AnimatedSection animation="fade">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
              Technologies We Use
            </h3>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Driven by Innovation, Powered by the Right {" "}Technology Stack
            </h2>
            <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
            <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            We leverage the latest technologies to build robust, scalable, and future-proof 
            solutions that give your business a competitive edge in today&apos;s digital landscape.
            </p>
          </div>
        </AnimatedSection>

        {/* 6x2 Grid with simple rounded rectangle cards */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <AnimatedSection key={tech.name} animation="scale" delay={0.05 * index}>
              <motion.div
                className={cn(
                  "bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300",
                  "flex flex-col items-center justify-center text-center aspect-square",
                  "border border-transparent" // Ensures consistent size, no visible border
                )}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon
                  icon={tech.icon}
                  className="w-12 h-12 mb-1.5 text-gray-700 dark:text-gray-200"
                />
                <span className="text-xs font-semibold text-gray-800 dark:text-white leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
// "use client"

// import Image from "next/image"
// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion"
// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import AnimatedSection from "./animated-section"
// import AnimatedText from "./animated-text"

// export default function TechnologyStack() {
//   const [currentStackIndex, setCurrentStackIndex] = useState(0)

//   const technologyStacks = [
//     {
//       title: "Frontend Development",
//       technologies: [
//         {
//           name: "React",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//         },
//         {
//           name: "Next.js",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//         },
//         {
//           name: "Vue.js",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
//         },
//         {
//           name: "HTML5/CSS3",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
//         },
//         {
//           name: "Angular",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
//         },
//         {
//           name: "Flutter",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
//         },
//         // {
//         //   name: "Swift",
//         //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
//         // },
//         // {
//         //   name: "Kotlin",
//         //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
//         // },
//       ]
//     },
//     {
//       title: "Backend Development",
//       technologies: [
//         {
//           name: "Node.js",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//         },
//         {
//           name: "Express",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//         },
//         {
//           name: "Django",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
//         },
//         {
//           name: ".NET",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
//         },
//         {
//           name: "Java",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//         },
//         {
//           name: "php",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
//         },
//         {
//           name: "Ruby",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg",
//         },
//         // {
//         //   name: "MySQL",
//         //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//         // },
//       ]
//     },
//     {
//       title: "Database",
//       technologies: [
        
//         {
//           name: "MySQL",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//         },
//         {
//           name: "PostgreSQL",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//         },
//         {
//           name: "MongoDb",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//         },
        
//         {
//           name: "Oracle",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Oracle/oracle-plain.svg",
//         },
//         {
//           name: "Redis",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Redis/Redis-original.svg",
//         },
        
        
        
//       ]
//     },
//     {
//       title: "Cloud Platform",
//       technologies: [
//         {
//           name: "AWS",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
//         },
//         {
//           name: "Microsoft Azure",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
//         },
//         {
//           name: "Google Cloud platform",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
//         },
//         {
//           name: "DigitalOcean",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/DigitalOcean/DigitalOcean-original.svg",
//         },
        
       
//       ]
//     },
//     {
//       title: "DevOps & Automation",
//       technologies: [
//          {
//           name: "Docker",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//         },
//         {
//           name: "Kubernetes",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
//         },
      
//         {
//           name: "Jenkins",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
//         },
//         {
//           name: "Terraform",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
//         },
//         {
//           name: "GitHub Actions ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//         },
        
//       ]
//     },
//     {
//       title: "AI, Data & Analytics",
//       technologies: [
//          {
//           name: "Tensorflow",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Tensorflow/Tensorflow-original.svg",
//         },
//         {
//           name: "PyTorch ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/PyTorch /PyTorch -plain.svg",
//         },
      
//         {
//           name: "Power BI",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Power BI/Power BI-original.svg",
//         },
//         {
//           name: "Apache Hadoop ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Apache Hadoop /Apache Hadoop -original.svg",
//         },
//         {
//           name: "Tableau",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//         },
        
//       ]
//     },
//     {
//       title: "Quality Assurance & Testing",
//       technologies: [
//          {
//           name: "Selenium ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Selenium /Selenium -original.svg",
//         },
//         {
//           name: "JMeter ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/JMeter /JMeter -plain.svg",
//         },
      
//         {
//           name: "Postman ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Postman /Postman -original.svg",
//         },
//         {
//           name: "Cypress ",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Cypress /Cypress -original.svg",
//         },
//         {
//           name: "Appium",
//           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/Appium/Appium-original.svg",
//         },
        
//       ]
//     },
//   ]

//   const nextStack = () => {
//     setCurrentStackIndex((prev) => (prev + 1) % technologyStacks.length)
//   }

//   const prevStack = () => {
//     setCurrentStackIndex((prev) => (prev - 1 + technologyStacks.length) % technologyStacks.length)
//   }

//   const currentStack = technologyStacks[currentStackIndex]

//   return (
//     <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 px-4">
//       <div className="container">
//         <AnimatedSection animation="fade">

//           <div className="text-center mb-8 md:mb-12">
//             <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Our Technology Stack</h3>
//             <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
//               Powering Innovation with a Robust <span className="italic text-blue-800 dark:text-blue-200">Tech Stack</span>
//             </h2>
//             <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-3"></div>
//             <h3 className=" max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-base">
//               We work across a wide spectrum of technologies to design solutions that align perfectly with business needs.                </h3>

//           </div>

//           {/* <div className="text-center mb-8 md:mb-12">
//             <AnimatedText
//               text="Driven by innovation, powered by the right Technology Stack"
//               className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 leading-tight text-gray-800 dark:text-white"
//             />
//             <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//             <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-base">
//               We leverage the latest technologies to build robust, scalable, and future-proof solutions that give your
//               business a competitive edge in today&apos;s digital landscape.
//             </p>
//           </div> */}
//         </AnimatedSection>

//         {/* Stack Navigation */}
//         <div className="flex items-center justify-between mb-8">
//           <button
//             onClick={prevStack}
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
//             aria-label="Previous technology stack"
//           >
//             <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//           </button>

//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//               {currentStack.title}
//             </h3>
//             <div className="flex space-x-2 justify-center">
//               {technologyStacks.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentStackIndex(index)}
//                   className={cn(
//                     "w-2 h-2 rounded-full transition-all duration-200",
//                     index === currentStackIndex
//                       ? "bg-primary w-6"
//                       : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
//                   )}
//                   aria-label={`Go to ${technologyStacks[index].title} stack`}
//                 />
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={nextStack}
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
//             aria-label="Next technology stack"
//           >
//             <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//           </button>
//         </div>

//         {/* Technology Grid - 2 Rows */}
//         <motion.div
//           key={currentStackIndex}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -50 }}
//           transition={{ duration: 0.3 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* First Row */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
//             {currentStack.technologies.slice(0, 4).map((tech, index) => (
//               <AnimatedSection key={`${currentStackIndex}-${index}`} animation="scale" delay={0.05 * index}>
//                 <motion.div
//                   className={cn(
//                     "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all",
//                     "flex flex-col items-center justify-center text-center aspect-square",
//                     "border border-gray-100 dark:border-gray-700"
//                   )}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
//                   }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex-shrink-0">
//                     <Image
//                       src={tech.icon || "/placeholder.svg"}
//                       alt={tech.name}
//                       fill
//                       className="object-contain drop-shadow-sm"
//                       sizes="(max-width: 768px) 48px, 64px"
//                     />
//                   </div>
//                   <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
//                     {tech.name}
//                   </span>
//                 </motion.div>
//               </AnimatedSection>
//             ))}
//           </div>

//           {/* Second Row */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
//             {currentStack.technologies.slice(4, 8).map((tech, index) => (
//               <AnimatedSection key={`${currentStackIndex}-${index + 4}`} animation="scale" delay={0.05 * (index + 4)}>
//                 <motion.div
//                   className={cn(
//                     "bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all",
//                     "flex flex-col items-center justify-center text-center aspect-square",
//                     "border border-gray-100 dark:border-gray-700"
//                   )}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
//                   }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex-shrink-0">
//                     <Image
//                       src={tech.icon || "/placeholder.svg"}
//                       alt={tech.name}
//                       fill
//                       className="object-contain drop-shadow-sm"
//                       sizes="(max-width: 768px) 48px, 64px"
//                     />
//                   </div>
//                   <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-tight">
//                     {tech.name}
//                   </span>
//                 </motion.div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
