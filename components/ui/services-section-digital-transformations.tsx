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
                                    className="object-cover w-full h-[380px]"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Right: Text content */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Section label with blue underline */}
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black  dark:text-white">Transform. Innovate. Accelerate</h3>
                            <div className="h-1 w-28 bg-blue-500 mb-6 " />
                            {/* Main heading */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">What We Do in <span className="text-blue-700"> Digital Transformations </span> </h2>
                            <p className="text-gray-600 dark:text-white mb-4">
                                At Techbrill Solutions, we specialize in comprehensive digital transformation services that revolutionize how businesses operate, engage customers, and drive growth. Our expert team guides organizations through every aspect of their digital journey, from strategy development to technology implementation.
                            </p>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We help businesses leverage cutting-edge technologies, modernize legacy systems, and create digital-first experiences that enhance efficiency, improve customer satisfaction, and unlock new revenue opportunities in today&apos;s rapidly evolving digital landscape.
                            </p>

                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group">
                                        Transform with us{" "}
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
                        <h2 className="text-lg font-semibold uppercase tracking-wide text-black dark:text-white">
                            What We Do
                        </h2>
                        <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Driving digital evolution through innovative transformation strategies is <span className="text-blue-700 font-bold">Our Expertise</span></h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 mb-10"></div>
                        {/*<p className="text-lg text-gray-600 dark:text-white mb-4">We provide end-to-end web design and development solutions that empower businesses to grow, adapt, and succeed in today’s fast-paced digital world</p> */}
                    </div>

                    {/* Digital Transformation & Strategy Services with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Digital Strategy & Roadmap Development
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We create comprehensive digital transformation strategies that align with your business objectives, developing clear roadmaps for technology adoption and organizational change.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Digital Maturity Assessment</li>
                                <li>Transformation Strategy Development</li>
                                <li>Technology Roadmap Planning</li>
                                <li>Change Management Strategy</li>
                                <li>ROI & Success Metrics Definition</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="UI/UX Design Process"
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
                                                alt="UI/UX Design Workshop"
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


                    {/* Cloud Migration & Modernization with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Cloud Migration & Modernization
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We accelerate your digital transformation through strategic cloud migration and application modernization, enabling scalability, flexibility, and innovation.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Cloud Strategy & Architecture</li>
                                <li>Legacy System Modernization</li>
                                <li>Multi-Cloud & Hybrid Solutions</li>
                                <li>Application Containerization</li>
                                <li>Cloud Security & Compliance</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Web Development"
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
                                                alt="Web Development Tools"
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

                    

                    {/* Data Analytics & AI Integration with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Data Analytics & AI Integration
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Transform your data into actionable insights with advanced analytics and AI solutions that drive intelligent decision-making and automate business processes.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Data Strategy & Governance</li>
                                <li>Advanced Analytics Implementation</li>
                                <li>AI & Machine Learning Solutions</li>
                                <li>Business Intelligence Dashboards</li>
                                <li>Predictive Analytics & Automation</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                                                alt="IT Strategy Session"
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
                                                alt="IT Advisory Meeting"
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

                    {/* Continue adding the rest of your services with carousels... */}
                    {/* Mobile App Development, CMS & Content Solutions, SEO & Digital Marketing */}
                </div>
            </section>
        </>
    );
}