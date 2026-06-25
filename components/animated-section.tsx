"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { useAnimation } from "./animation-provider"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  animation?: "fade" | "slide" | "scale" | "none"
  duration?: number
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  once = true,
  animation = "fade",
  duration = 0.5,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const { prefersReducedMotion } = useAnimation()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion || animation === "none") {
    return <div className={className}>{children}</div>
  }

  const variants = {
    hidden: {
      opacity: animation === "fade" || animation === "slide" ? 0 : 1,
      y: animation === "slide" ? 20 : 0,
      scale: animation === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration,
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
