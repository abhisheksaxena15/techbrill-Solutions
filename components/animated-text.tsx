"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { useAnimation } from "./animation-provider"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  duration?: number
  staggerChildren?: number
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
  duration = 0.05,
  staggerChildren = 0.02,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })
  const { prefersReducedMotion } = useAnimation()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren, 
        delayChildren: delay,
        type: "spring",
        stiffness: 100,
        damping: 12
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={child} 
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
