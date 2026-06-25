"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { usePathname } from "next/navigation"

type AnimationContextType = {
  prefersReducedMotion: boolean
  isPageLoaded: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  isPageLoaded: false,
})

export const useAnimation = () => useContext(AnimationContext)

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    // Set page as loaded after a short delay
    const timer = setTimeout(() => setIsPageLoaded(true), 100)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      clearTimeout(timer)
    }
  }, [])

  // Reset scroll position when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AnimationContext.Provider value={{ prefersReducedMotion, isPageLoaded }}>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </LazyMotion>
    </AnimationContext.Provider>
  )
}
