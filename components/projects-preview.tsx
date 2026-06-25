"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function ProjectsPreview() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070",
      link: "/projects/1",
    },
    {
      title: "Healthcare App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      link: "/projects/2",
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      link: "/projects/3",
    },
    {
      title: "Neural Networking",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034",
      link: "/projects/4",
    },
  ]

  return (
    <section className="py-16 relative bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <AnimatedText text="Explore Recent Projects" className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl" />
            <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mt-4">
              Discover our portfolio of successful projects that showcase our expertise, creativity, and commitment to
              delivering exceptional results for our clients.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <AnimatedSection
            animation="scale"
            delay={0.1}
            className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
          >
            <motion.div
              className="relative h-80 rounded-xl overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-gray-700 dark:text-gray-200">{projects[0].title}</span>
                </h3>
                <p className="text-sm text-gray-200 mb-4">{projects[0].category}</p>
                <Link href={projects[0].link} className="text-white font-medium flex items-center group">
                  View Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection
            animation="scale"
            delay={0.2}
            className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <motion.div
              className="relative h-80 rounded-xl overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={projects[1].image || "/placeholder.svg"}
                alt={projects[1].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-gray-700 dark:text-gray-200">{projects[1].title}</span>
                </h3>
                <p className="text-sm text-gray-200 mb-4">{projects[1].category}</p>
                <Link href={projects[1].link} className="text-white font-medium flex items-center group">
                  View Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection
            animation="scale"
            delay={0.3}
            className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <motion.div
              className="relative h-80 rounded-xl overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={projects[2].image || "/placeholder.svg"}
                alt={projects[2].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-gray-700 dark:text-gray-200">{projects[2].title}</span>
                </h3>
                <p className="text-sm text-gray-200 mb-4">{projects[2].category}</p>
                <Link href={projects[2].link} className="text-white font-medium flex items-center group">
                  View Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection
            animation="scale"
            delay={0.4}
            className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1"
          >
            <motion.div
              className="relative h-80 rounded-xl overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src={projects[3].image || "/placeholder.svg"}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-gray-700 dark:text-gray-200">{projects[3].title}</span>
                </h3>
                <p className="text-sm text-gray-200 mb-4">{projects[3].category}</p>
                <Link href={projects[3].link} className="text-white font-medium flex items-center group">
                  View Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade" delay={0.5}>
          <div className="text-center mt-12">

            <Button
              asChild
              className="group hover:bg-red-700 transition-colors duration-300"
            >
              <Link href="/projects">
                View All Projects
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                    duration: 0.8,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
