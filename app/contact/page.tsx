"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedText from "@/components/animated-text";
import AnimatedSection from "@/components/animated-section";
import Image from "next/image";
import React, { useEffect } from 'react';

const bannerImage = "/images/hero-background.jpg";
const infoImage = "/images/about/18771.jpg";

const benefits = [
  {
    title: "Expert Guidance",
    description: "Our experienced team will help you find the best solution for your business.",
    icon: "💡",
  },
  {
    title: "Quick Response",
    description: "We respond to all inquiries promptly and keep you updated at every step.",
    icon: "⚡",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. Get a clear, detailed quote tailored to your needs.",
    icon: "💸",
  },
  {
    title: "Full Support",
    description: "From first contact to project delivery and beyond, we’re here for you.",
    icon: "🤝",
  },
];

export default function ContactPage() {
  // Use a useEffect hook to handle scrolling to the form section
  useEffect(() => {
    // This runs only on the client side after the component mounts
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative w-full h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImage}
          alt="Contact Banner Background"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-sm"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            We&apos;re here to answer your questions and provide the right solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </div>
      </section>

      {/* Main Contact/Quote Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <div id="contact-form" className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade" delay={0.1}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-gray-100">
                  Let&apos;s Connect and Create the Right Solution
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  Have a question or a project in mind? Please share your details below, and our team will get back to you as soon as possible.
                </p>
                {/* The unique ID is on the form itself, making it the scroll target */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div >
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input id="name" placeholder="your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Example@gmail.com" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-8 items-center">
                <Image
                  src={infoImage}
                  alt="Contact Info"
                  width={320}
                  height={220}
                  className="rounded-2xl shadow-md w-full max-w-xs object-cover mb-6"
                  style={{ minHeight: 180, maxHeight: 220 }}
                  priority
                />
                <div className="space-y-6 w-full">
                  {/* FIX: Changed items-center to items-start */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                      <p className="text-gray-700 dark:text-gray-300">GH12/1 ACE Platinum, Sector Zeta -1, Gr. Noida, India</p>
                    </div>
                  </div>
                  {/* FIX: Changed items-center to items-start */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                      <p className="text-gray-700 dark:text-gray-300">info@techbrillsolutions.com</p>
                    </div>
                  </div>
                  {/* FIX: Changed items-center to items-start */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                      <p className="text-gray-700 dark:text-gray-300">+91 88 6077 1100</p>
                    </div>
                  </div>
                  {/* FIX: Changed items-center to items-start */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 w-full">
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {/* Social icons as before */}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}