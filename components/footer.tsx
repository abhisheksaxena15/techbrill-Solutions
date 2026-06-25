"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 md:mb-6">
              <div className="relative h-10 w-40">
                <Image
                  src="/logo.png"
                  alt="Techbrill Logo"
                  fill
                  className="object-contain brightness-200"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm">
              Techbrill Solutions is an IT service provider and brand communication company, delivering high-performance
              digital solutions that drive real business growth through innovation and technical excellence.
            </p>
            <div className="space-y-2 md:space-y-3">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <span className="text-gray-400">GH12/1 ACE Platinum, Sector&nbsp;Zeta&nbsp;-1, Gr. Noida, India</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-400">+91 88 6077 1100</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-gray-400">info@techbrillsolutions.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Technologies", href: "/technologies" },
                { name: "Projects", href: "/projects" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: "Web Development", href: "/services/it-services/web-design-development"},
                { name: "Mobile App Development", href: "/services/it-services/mobile-app-development"},
                { name: "QA & testing", href: "/services/it-services/software-qa-testing"},
                { name: "AI & ML Solutions", href: "/services/it-services/ai-ml-development"},
                { name: "Digital Marketing", href: "/services/digital-marketing/content-marketing"},
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm">
              Subscribe to our newsletter to receive updates on our latest services, tech insights, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex w-full">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none focus-visible:ring-primary flex-grow text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-3 py-2 md:px-4 rounded-r-md hover:bg-primary/90 transition-colors text-sm"
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 mt-2">Thank you for subscribing!</p>
              )}
            </form>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/techbrills/", label: "LinkedIn" },
                  { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/techbrills/", label: "Instagram" },
                  { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/techbrillsolutions/", label: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/TechbrillS", label: "Twitter" }
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }}>
                    <Link
                      href={social.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label={social.label}
                      target="_blank"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-t border-gray-800 px-4">
        <div className="container mx-auto py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Techbrill Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
