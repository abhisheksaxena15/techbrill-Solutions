"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const SERVICES = [
    {
        title: "UI/UX Services",
        description:
            "We craft intuitive, user-centric interfaces that delight and engage. Our UI/UX team ensures every digital experience is seamless, accessible, and visually stunning.",
        bullets: [
            "User research & persona development",
            "Wireframing & interactive prototyping",
            "UI design for web and mobile apps",
            "UX audits & usability testing",
            "Accessibility-focused design",
        ],
        image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
    },
    {
        title: "Web Development",
        description:
            "From landing pages to complex web apps, we build robust, scalable, and high-performing websites. Our developers use the latest technologies to deliver secure, maintainable solutions.",
        bullets: [
            "Custom website & web app development",
            "Responsive & mobile-first design",
            "API integration & backend services",
            "SEO & performance optimization",
            "Ongoing support & maintenance",
        ],
        image: "/images/services/web-design-hero.jpg",
    },
    {
        title: "E-Commerce Solutions",
        description:
            "Empower your business to sell online with custom e-commerce platforms. We create secure, user-friendly stores that drive sales and enhance customer experience.",
        bullets: [
            "Custom e-commerce website development",
            "Payment gateway integration",
            "Mobile-optimized shopping",
            "Inventory & order management",
            "Analytics & conversion tracking",
        ],
        image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
    },
    {
        title: "Mobile App Development",
        description:
            "Reach your audience on any device. We design and develop cross-platform mobile apps that are fast, reliable, and tailored to your business goals.",
        bullets: [
            "iOS & Android app development",
            "Cross-platform solutions",
            "App store deployment",
            "Push notifications & analytics",
            "Ongoing updates & support",
        ],
        image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
    },
    {
        title: "CMS & Content Solutions",
        description:
            "Manage your content with ease. We implement flexible CMS platforms that empower your team to update, organize, and publish content effortlessly.",
        bullets: [
            "Custom CMS development",
            "WordPress, Strapi, and more",
            "Content migration & training",
            "Role-based access control",
            "SEO-friendly architecture",
        ],
        image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
    },
    {
        title: "SEO & Digital Marketing",
        description:
            "Grow your reach and drive results with our digital marketing expertise. We combine SEO, content, and analytics to help your business stand out online.",
        bullets: [
            "On-page & technical SEO",
            "Content strategy & creation",
            "Analytics & reporting",
            "Social media integration",
            "Conversion rate optimization",
        ],
        image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
    },
];

function ServiceCard({
    service,
    index,
}: {
    service: typeof SERVICES[0];
    index: number;
}) {
    const isEven = index % 2 === 0;
    return (
        <motion.div
            className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""
                } items-center gap-8 py-10 md:justify-between`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
        >
            {/* Image */}
            <motion.div
                className="w-full md:w-1/3 flex-shrink-0"
                initial={{ x: isEven ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
                <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl object-cover shadow-md w-full h-64 md:h-56 lg:h-64"
                />
            </motion.div>
            {/* Text */}
            <div className="flex-1 md:max-w-[60%] w-full pl-0 md:pl-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <ul className="list-disc pl-5 text-gray-500 mt-2 space-y-1">
                    {service.bullets.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        <>
            {/* 2. What We Do Section - matches the image layout */}
            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-9">
                        {/* Left: Code image */}
                        <motion.div
                            className="w-full md:w-1/2 flex items-center justify-center"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="rounded-md overflow-hidden w-full">
                                <Image
                                    src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                    alt="Code editor with web development code"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[420px]"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Right: Text content */}
                        {/* Right: Text content */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                                STRATEGIZE. OPTIMIZE. MODERNIZE
                            </h3>
                            <h2 className="mb-5 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                                Empowering Enterprises with Strategic IT Consulting
                            </h2>
                            <div className="h-1 w-28 bg-red-600 mb-3" />
                            <p className="text-gray-600 dark:text-white mb-2 mt-3">
                                At Techbrill, we provide IT consultancy services that align business objectives with the right technology solutions. Our goal is to design strategies that boost efficiency, reduce risks, and accelerate digital transformation.                            </p>
                            <p className="text-gray-600 dark:text-white mb-2 mt-3">
                                From strengthening security to modernizing systems and scaling operations, we deliver clear, actionable guidance that helps your business grow, adapt, and stay competitive in today’s evolving digital landscape.                            </p>
                            <p className="text-gray-600 dark:text-white mb-5">
                                With expertise in cloud adoption, enterprise architecture, and cybersecurity, our consultants combine deep industry knowledge with proven methodologies to ensure your IT investments create measurable value and long-term growth.                            </p>

                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group bg-blue-800 hover:bg-red-700 dark:bg-blue-700">
                                        Consult with us{" "}
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
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

            {/* 3. Services Section - Using the custom dark theme from the image */}
            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
                            KEY SERVICES
                        </h2>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                            Driving Transformation Through End-to-End Technology Advisory
                        </h2>
                        <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-4"></div>
                        <h3 className=" text-base text-gray-600 max-w-3xl mx-auto mt-1 leading-relaxed">
                            Explore our full spectrum of IT consultancy services designed to transform operations, enhance security, and accelerate business growth.
                        </h3>
                    </div>

                    {/* IT Strategy & Roadmap */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                IT Strategy & Roadmap
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We help organizations align IT with business vision by creating tailored strategies and roadmaps. Our approach ensures smarter investments, higher efficiency, and long-term value from technology.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Business-aligned IT planning</li>
                                <li>ROI-focused investment strategies</li>
                                <li>Agile and adaptable roadmaps</li>
                                <li>Governance and compliance guidance</li>
                                <li>Future-ready technology adoption</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="IT Strategy"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                                                alt="Strategy Session"
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

                    {/* Digital Transformation Consulting */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Digital Transformation Consulting
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Transform how your business operates with technology-driven change. From process automation to customer experience, we guide you through every stage of digital transformation for measurable impact.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Legacy system modernization</li>
                                <li>Workflow automation solutions</li>
                                <li>Customer experience enhancement</li>
                                <li>Cloud-native business models</li>
                                <li>Scalable digital strategies</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Digital Transformation"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="Business Model"
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

                    {/* Cloud Consulting & Migration */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Cloud Consulting & Migration
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Our experts design and implement cloud strategies that improve agility, reduce costs, and enhance security. We ensure seamless migration and optimization for long-term scalability.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Cloud readiness assessment</li>
                                <li>Migration planning & execution</li>
                                <li>Hybrid & multi-cloud strategies</li>
                                <li>Cost and performance optimization</li>
                                <li>Security and compliance assurance</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                                                alt="Cloud Migration"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="Cloud Strategy"
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

                    {/* Cybersecurity & Risk Management */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Cybersecurity & Risk Management
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Protect your business with proactive security strategies. We identify vulnerabilities, implement safeguards, and ensure compliance so your operations remain resilient against evolving threats.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Threat & risk assessment</li>
                                <li>Security architecture design</li>
                                <li>Compliance (ISO, GDPR, etc.)</li>
                                <li>Identity & access management</li>
                                <li>Incident response planning</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4300 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="Cybersecurity"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Risk Management"
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

                    {/* Enterprise Architecture & Infrastructure */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Enterprise Architecture & Infrastructure
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We design robust IT architectures that support growth and innovation. Our solutions strengthen infrastructure, improve resilience, and align with business demands.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>IT infrastructure assessment</li>
                                <li>Cloud & on-premise integration</li>
                                <li>Scalable architecture frameworks</li>
                                <li>Disaster recovery planning</li>
                                <li>Performance optimization</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4400 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="Enterprise Architecture"
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
                                                alt="Infrastructure Solutions"
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

                    {/* Software & Application Consulting */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Software & Application Consulting
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Optimize, modernize, or integrate software applications to meet your business needs. We provide insights to enhance performance, usability, and scalability.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Application modernization roadmaps</li>
                                <li>Integration & API strategies</li>
                                <li>Technology stack evaluation</li>
                                <li>Performance optimization audits</li>
                                <li>Vendor & tool selection guidance</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="Software Consulting"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Application Integration"
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

                    {/* Data Analytics & AI Advisory */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Data Analytics & AI Advisory
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Leverage data and AI to drive better decisions. We help businesses uncover insights, predict outcomes, and innovate with intelligent solutions.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Data strategy & governance</li>
                                <li>Advanced analytics models</li>
                                <li>AI use-case identification</li>
                                <li>Predictive & prescriptive analytics</li>
                                <li>BI & visualization solutions</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4600 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="Data Analytics"
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
                                                alt="AI Advisory"
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

                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                QA & Testing Consultancy
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Ensure product reliability and performance with our QA consulting. We define quality frameworks that reduce risks, improve user satisfaction, and accelerate time-to-market.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2 text-gray-600 dark:text-gray-300">
                                <li>Test strategy & planning</li>
                                <li>Automation frameworks</li>
                                <li>Performance & load testing</li>
                                <li>Security & compliance testing</li>
                                <li>Continuous testing in DevOps</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="Software Consulting"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Application Integration"
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

            {/* QA & Testing Consultancy
    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
      <div className="w-full md:w-1/2">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          QA & Testing Consultancy
        </h3>
        <p className="text-gray-600 dark:text-white mb-4">
          Ensure product reliability and performance with our QA consulting. We define quality frameworks that reduce risks, improve user satisfaction, and accelerate time-to-market.
        </p>
        <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
          <li>Test strategy & planning</li>
          <li>Automation frameworks</li>
          <li>Performance & load testing</li>
          <li>Security & compliance testing</li>
          <li>Continuous testing in DevOps</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4700 })]}>
          <CarouselContent>
            <CarouselItem>
              <div className="rounded-md overflow-hidden">
                <Image
                  src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                  alt="QA Consultancy"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] */}

        </>
    );
}