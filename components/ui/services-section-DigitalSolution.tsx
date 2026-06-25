"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const quickServices = [
  {
    title: "LMS Solutions",
    description:
      "Scalable LMS platforms to manage, deliver, and track digital learning efficiently.",
    icon: GraduationCap,
    targetId: "lms-solutions",
    iconBg: "bg-blue-600",
    iconText: "text-white",
  },
  {
    title: "eLearning & Corporate Training",
    description:
      "Engaging training solutions for onboarding, compliance, and skill development.",
    icon: BookOpen,
    targetId: "elearning-corporate-training",
    iconBg: "bg-green-500",
    iconText: "text-white",
  },
  {
    title: "Content Conversion & Digitization",
    description:
      "Transforming legacy content into structured, digital-ready formats.",
    icon: RefreshCw,
    targetId: "content-conversion-digitization",
    iconBg: "bg-violet-600",
    iconText: "text-white",
  },
  {
    title: "Accessibility & Compliance",
    description:
      "WCAG-compliant content ensuring inclusive learning experiences.",
    icon: ShieldCheck,
    targetId: "accessibility-compliance",
    iconBg: "bg-sky-500",
    iconText: "text-white",
  },
];

export default function ServicesSection() {
  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-[#111827]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-9">
            {/* Left: Image */}
            <motion.div
              className="w-full md:w-1/2 flex items-center justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full">
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/services/web-design-hero.jpg"
                    alt="Digital content solutions"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg max-w-xs text-center border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <blockquote className="text-xs md:text-sm italic text-gray-700 dark:text-gray-300">
                    &ldquo;Your content vision is carefully transformed into
                    engaging, accessible, and impactful digital experiences.&rdquo;
                  </blockquote>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400 mb-3">
                TRANSFORMING CONTENT INTO DIGITAL EXPERIENCES
              </h3>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                End-to-End LMS, eLearning, Corporate Training, and Content
                Conversion Services
              </h2>

              <div className="h-1 w-28 bg-red-600 mb-3" />

              <p className="text-gray-600 dark:text-white mb-2">
                At Techbrill Solutions, we deliver end-to-end Content Solutions
                across education, publishing, and corporate training. Our
                services include Learning Management Systems (LMS), corporate
                training solutions, and large-scale content conversion. We help
                organizations create, manage, and transform content into
                structured, interactive, and accessible digital formats that
                support modern learning platforms, workforce development, and
                multi-channel content delivery.
              </p>

              <p className="text-gray-600 dark:text-white mb-5">
                Our experienced team combines content expertise with technology
                to build scalable, standards-compliant, and future-ready
                solutions that drive measurable learning and business outcomes.
              </p>

              <AnimatedSection animation="fade" delay={0.6}>
                <Link href="/contact">
                  <Button className="group bg-blue-800 hover:bg-red-700 dark:bg-blue-700">
                    Consult with us
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                        duration: 0.8,
                      }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </Link>
              </AnimatedSection>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-13 pb-8 bg-white dark:bg-[#111827]">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
              CORE OFFERINGS
            </h2>

            <h2 className="mt-2 text-2xl mx-auto max-w-5xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Comprehensive Content Solutions for Your Business
            </h2>

            <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-4"></div>

            <h3 className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-1 leading-relaxed">
              Offering comprehensive LMS, eLearning, corporate training, and
              content conversion services tailored to education, enterprises,
              and publishing organizations.
            </h3>
          </div>

          {/* Quick Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {quickServices.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <motion.button
                  key={service.title}
                  onClick={() => scrollToSection(service.targetId)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group text-left rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 p-6"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${service.iconBg}`}
                    >
                      <IconComponent
                        className={`w-7 h-7 ${service.iconText} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug pt-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-base leading-8">
                    {service.description}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* LMS Solutions */}
          <div
            id="lms-solutions"
            className="scroll-mt-28 flex flex-col md:flex-row items-start gap-10 mb-16"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Learning Management System (LMS) Solutions
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                We design and implement scalable Learning Management System
                solutions that enable organizations to deliver, manage, and
                track digital learning programs efficiently, with strong
                analytics, seamless integrations, and flexible deployment
                options.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>
                  LMS Setup – Platform configuration, customization, and
                  deployment
                </li>
                <li>
                  User Management – Role-based access and learner administration
                </li>
                <li>
                  Learning Analytics – Progress tracking and performance
                  insights
                </li>
                <li>Standards Ready – SCORM and xAPI compliance</li>
                <li>Ongoing Support – Maintenance, upgrades, and optimization</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 3500 })]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                        alt="LMS Solutions"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
                        alt="LMS Platform"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* eLearning & Corporate Training */}
          <div
            id="elearning-corporate-training"
            className="scroll-mt-28 flex flex-col md:flex-row-reverse items-start gap-10 mb-16"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                eLearning & Corporate Training Solutions
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                We develop engaging eLearning and corporate training solutions
                that support onboarding, compliance, and skill development
                through interactive content, flexible delivery models, and
                measurable learning outcomes aligned with business objectives.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>
                  Self-Paced Learning – Anytime, anywhere digital training
                </li>
                <li>
                  Instructor-Led Training – Virtual and classroom learning
                  support
                </li>
                <li>Interactive Content – Videos, quizzes, and simulations</li>
                <li>Custom Branding – Branded and localized learning assets</li>
                <li>
                  Performance Tracking – Learner progress and assessment reports
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 4000 })]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                        alt="eLearning Solutions"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/web-design-hero.jpg"
                        alt="Corporate Training"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Content Conversion & Digitization */}
          <div
            id="content-conversion-digitization"
            className="scroll-mt-28 flex flex-col md:flex-row items-start gap-10 mb-16"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Content Conversion & Digitization
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                We convert legacy and print content into structured,
                digital-ready formats that ensure consistency, accuracy, and
                compatibility across learning platforms, publishing systems,
                devices, and distribution channels.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>
                  Source Conversion – PDF, Word, and InDesign transformation
                </li>
                <li>Digital Formats – XML, HTML, ePub, and SCORM outputs</li>
                <li>
                  Content Structuring – Metadata tagging and logical hierarchy
                </li>
                <li>Multi-Device Ready – Optimized for web and mobile</li>
                <li>Quality Assurance – Validation and accuracy checks</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 4500 })]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                        alt="Content Conversion"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                        alt="Content Digitization"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Content Accessibility & Compliance */}
          <div
            id="accessibility-compliance"
            className="scroll-mt-28 flex flex-col md:flex-row-reverse items-start gap-10 mb-16"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Content Accessibility & Compliance
              </h3>
              <p className="text-gray-600 dark:text-white mb-4">
                We ensure digital content meets global accessibility and
                compliance standards, enabling inclusive learning experiences
                while supporting regulatory requirements and usability for users
                with diverse abilities.
              </p>
              <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                <li>
                  WCAG Compliance – Global accessibility standards alignment
                </li>
                <li>
                  Inclusive Design – Screen reader and keyboard accessibility
                </li>
                <li>
                  Accessible Formats – Documents and eLearning accessibility
                </li>
                <li>Accessibility Testing – Manual and automated audits</li>
                <li>
                  Compliance Reports – Documentation and remediation support
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 3800 })]}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                        alt="Accessibility Compliance"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-md overflow-hidden">
                      <Image
                        src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                        alt="Compliance Support"
                        width={600}
                        height={400}
                        className="object-cover w-full h-[300px]"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}