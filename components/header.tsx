"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { FaXTwitter } from 'react-icons/fa6'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        category: "IT Services",
        services: [
          { name: "Web Design & Development", href: "/services/it-services/web-design-development" },
          { name: "Mobile App Development", href: "/services/it-services/mobile-app-development" },
          { name: "AI & ML Development", href: "/services/it-services/ai-ml-development" },
          { name: "Software QA & Testing", href: "/services/it-services/software-qa-testing" },
          { name: "IT Consultancy", href: "/services/it-services/it-consultancy" },
        ],
      },
      {
        category: "AI & Automation Solutions",
        services: [
          { name: "Digital Transformation", href: "/services/ai-automation/digital-transformation" },
          { name: "Generative AI", href: "/services/ai-automation/generative-ai" },
          { name: "Blockchain", href: "/services/ai-automation/blockchain" },
          { name: "Data Analytics", href: "/services/ai-automation/data-analytics" },
          { name: "Cloud & DevOps", href: "/services/ai-automation/cloud-devops" },
          { name: "Artificial Intelligence", href: "#" },
          { name: "Machine Learning", href: "#" },
          
        ],
      },
      {
        category: "Digital Marketing",
        services: [
          { name: "Search Engine Optimization", href: "/services/digital-marketing/search-engine-optimization" },
          { name: "Social Media Marketing", href: "/services/digital-marketing/social-media-marketing" },
          { name: "Content Marketing", href: "/services/digital-marketing/content-marketing" },
          { name: "Web Analytics", href: "/services/digital-marketing/web-analytics" },
          { name: "Design & Print Media", href: "/services/digital-marketing/design-print-media" },
        ],
      },
      {
        category: "Digital Content Solutions",
        href: "/services/digital-content-solutions",
        services: [],
      }
    ],
  },
  { name: "Technologies", href: "/technologies" },
  { name: "Industries", href: "/industries" },
  { name: "Company", href: "/company" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState<number | null>(null);

  // Add these new state variables for mobile menu dropdowns
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [mobileCategories, setMobileCategories] = useState<Record<string, boolean>>({});

  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="mailto:info@techbrillsolutions.com"
                className="flex items-center text-sm hover:text-gray-200 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>info@techbrillsolutions.com</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="tel:+918860771100"
                className="flex items-center text-sm hover:text-gray-200 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 88 6077 1100</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            {[
              { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/company/techbrills/", label: "LinkedIn" },
              { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/techbrills/", label: "Instagram" },
              { icon: <Facebook className="h-4 w-4" />, href: "https://www.facebook.com/techbrillsolutions/", label: "Facebook" },
              { icon: <Twitter className="h-4 w-4" />, href: "https://x.com/TechbrillS", label: "Twitter" }
            ].map((social, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link
                  href={social.href}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
            {mounted && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div
                  className={cn(
                    "relative w-14 h-8 rounded-full flex items-center cursor-pointer transition-colors duration-300",
                    theme === "dark" ? "bg-gray-700" : "bg-blue-400"
                  )}
                  onClick={toggleTheme}
                >
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full transition-opacity duration-300",
                      theme === "dark" ? "opacity-100 bg-gray-900" : "opacity-100 bg-blue-300"
                    )}
                  >
                    {theme === "dark" && (
                      <div className="absolute inset-0 overflow-hidden rounded-full">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                    {theme !== "dark" && (
                      <div className="absolute inset-0 overflow-hidden rounded-full flex items-center justify-around">
                        <div className="w-5 h-3 bg-white rounded-full shadow-md"></div>
                        <div className="w-7 h-4 bg-white rounded-full shadow-md"></div>
                        <div className="w-6 h-3 bg-white rounded-full shadow-md"></div>
                      </div>
                    )}
                  </div>

                  <motion.div
                    className={cn(
                      "absolute w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center",
                      theme === "dark" ? "left-[calc(100%-30px)] bg-gray-200" : "left-[4px] bg-yellow-400"
                    )}
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {theme === "dark" ? (
                      <Moon className="h-4 w-4 text-gray-700" />
                    ) : (
                      <Sun className="h-4 w-4 text-orange-600" />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.div
        className={cn(
          "py-4 transition-all duration-300 border-b",
          mounted ? (theme === 'dark' ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200") : "",
          isScrolled ? "shadow-md" : "shadow-none",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto flex justify-between items-center text-white px-4">
          <Link href="/" className="flex-shrink-0">
            <motion.div className="relative h-8 sm:h-10 w-32 sm:w-40" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="/logo.png"
                alt="Techbrill Logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center space-x-2 lg:space-x-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.dropdown ? (
                    <NavigationMenuTrigger className={cn(
                      "px-3 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-colors",
                      "bg-gray-100 hover:bg-gray-200 text-gray-900",
                      "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
                      pathname === item.href
                        ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                        : "",
                    )}>{item.name}</NavigationMenuTrigger>
                  ) : (
                    <Link href={item.href} className={cn(
                      "px-3 py-2 lg:px-6 lg:py-2 rounded-full text-xs lg:text-sm font-medium transition-colors",
                      "bg-gray-100 hover:bg-gray-200 text-gray-900",
                      "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
                      pathname === item.href
                        ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                        : "",
                    )}>{item.name}</Link>
                  )}
                  {item.dropdown && (
                    <NavigationMenuContent className="flex bg-gray-800 text-gray-200 border border-gray-700 rounded-md shadow-lg p-0 w-[300px] lg:w-[600px]">
                      {/* Categories Column */}
                      <div className="flex flex-col p-4 w-full lg:w-[300px] border-r border-gray-700 pr-0">
                        <h4 className="font-semibold text-gray-200 mb-2">Categories</h4>
                        <ul className="space-y-1">
                          {item.dropdown.map((category, catIdx) => (
                            <li key={catIdx}>
                              <NavigationMenuLink
                                asChild
                                onMouseEnter={() => setHoveredCategoryIndex(catIdx)}
                              >
                                {category.href ? (
                                  <Link
                                    href={category.href}
                                    className={cn(
                                      "flex px-3 py-2 rounded-md text-sm font-medium transition-colors justify-between items-center",
                                      catIdx === hoveredCategoryIndex
                                        ? "bg-gray-700 text-blue-500"
                                        : "text-gray-200 hover:bg-gray-700 hover:text-blue-500"
                                    )}
                                  >
                                    {category.category}
                                  </Link>
                                ) : (
                                  <Link
                                    href="#"
                                    className={cn(
                                      "flex px-3 py-2 rounded-md text-sm font-medium transition-colors justify-between items-center",
                                      catIdx === hoveredCategoryIndex
                                        ? "bg-gray-700 text-blue-500"
                                        : "text-gray-200 hover:bg-gray-700 hover:text-blue-500"
                                    )}
                                  >
                                    {category.category}
                                    <ChevronRight className="h-4 w-4 ml-2 text-gray-400" />
                                  </Link>
                                )}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services Sub-Dropdown (appears next to categories) */}
                      {hoveredCategoryIndex !== null && item.dropdown && item.dropdown[hoveredCategoryIndex]?.services && item.dropdown[hoveredCategoryIndex].services.length > 0 && (
                        <motion.div
                          className="p-4 space-y-2 w-full lg:w-[300px]"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h4 className="font-semibold text-gray-200 mb-2">Services</h4>
                          <ul className="space-y-1">
                            {item.dropdown[hoveredCategoryIndex].services.map((service, srvIdx) => (
                              <li key={srvIdx}>
                                <Link href={service.href} className="block px-3 py-2 rounded-md text-sm text-gray-200 hover:bg-gray-700 hover:text-blue-500 transition-colors">
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="ml-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get A Quote</Button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            {mounted && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="flex items-center space-x-2">
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <Moon className="h-5 w-5 text-blue-500" />
                </div>
              </motion.div>
            )}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-[72px] left-0 right-0 bg-white dark:bg-gray-900 border-b shadow-lg w-full overflow-y-auto max-h-[80vh]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "80vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {item.dropdown ? (
                    <div>
                      <div
                        className="px-3 py-2 rounded-md text-base font-medium w-full text-gray-700 dark:text-gray-200 flex justify-between items-center cursor-pointer"
                        onClick={() => {
                          // Toggle visibility of this specific dropdown
                          setMobileDropdowns(prev => ({
                            ...prev,
                            [item.name]: !prev[item.name]
                          }));
                        }}
                      >
                        {item.name}
                        <ChevronRight className={`h-4 w-4 transition-transform ${mobileDropdowns[item.name] ? 'rotate-90' : ''}`} />
                      </div>

                      {/* Only display categories when dropdown is active */}
                      {mobileDropdowns[item.name] && (
                        <div className="pl-6 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700">
                          {item.dropdown.map((category, catIdx) => (
                            <div key={catIdx}>
                              {category.href ? (
                                <Link
                                  href={category.href}
                                  className="block px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {category.category}
                                </Link>
                              ) : (
                                <div>
                                  <div
                                    className="px-3 py-1 text-sm font-semibold text-gray-800 dark:text-gray-300 flex justify-between items-center cursor-pointer"
                                    onClick={() => {
                                      // Toggle visibility of this specific category
                                      setMobileCategories(prev => ({
                                        ...prev,
                                        [`${item.name}-${catIdx}`]: !prev[`${item.name}-${catIdx}`]
                                      }));
                                    }}
                                  >
                                    {category.category}
                                    {category.services?.length > 0 && (
                                      <ChevronRight className={`h-3 w-3 transition-transform ${mobileCategories[`${item.name}-${catIdx}`] ? 'rotate-90' : ''}`} />
                                    )}
                                  </div>

                                  {/* Display services under each category only when category is expanded */}
                                  {mobileCategories[`${item.name}-${catIdx}`] && category.services && category.services.length > 0 && (
                                    <div className="pl-4 space-y-1">
                                      {category.services.map((service, srvIdx) => (
                                        <Link
                                          key={srvIdx}
                                          href={service.href}
                                          className="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium w-full",
                        pathname === item.href
                          ? "text-primary"
                          : "text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <Link href="/contact" className="block px-3 py-2 mt-4" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Get A Quote</Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="px-4 py-4 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="flex flex-col space-y-3">
                <Link
                  href="mailto:info@techbrillsolutions.com"
                  className="flex items-center text-sm text-gray-700 dark:text-gray-200"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@techbrillsolutions.com</span>
                </Link>
                <Link href="tel:+918860771100" className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 88 6077 1100</span>
                </Link>
              </div>
              <div className="flex space-x-4 mt-4">
                {[
                  { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/company/techbrills/", label: "LinkedIn" },
                  { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/techbrills/", label: "Instagram" },
                  { icon: <Facebook className="h-4 w-4" />, href: "https://www.facebook.com/techbrillsolutions/", label: "Facebook" },
                  { icon: <Twitter className="h-4 w-4" />, href: "https://x.com/TechbrillS", label: "Twitter" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-700 dark:text-gray-200"
                    aria-label={social.label}
                    target="_blank"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

