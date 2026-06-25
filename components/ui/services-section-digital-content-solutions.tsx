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
        title: "Content Strategy & Planning",
        description:
            "We develop comprehensive content strategies that align with your business goals. Our strategic approach ensures your content resonates with your target audience and drives meaningful engagement.",
        bullets: [
            "Content audit & competitive analysis",
            "Editorial calendar development",
            "Brand voice & messaging guidelines",
            "Content performance metrics",
            "Multi-channel content planning",
        ],
        image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
    },
    {
        title: "Video Production & Editing",
        description:
            "From concept to completion, we create compelling video content that tells your story. Our video production services deliver high-quality content that engages and converts.",
        bullets: [
            "Corporate video production",
            "Promotional & marketing videos",
            "Educational & training content",
            "Video editing & post-production",
            "Animation & motion graphics",
        ],
        image: "/images/services/web-design-hero.jpg",
    },
    {
        title: "Graphic Design & Branding",
        description:
            "Create a consistent visual identity that stands out. We design compelling graphics and branding materials that communicate your message effectively across all platforms.",
        bullets: [
            "Logo design & brand identity",
            "Marketing collateral design",
            "Social media graphics",
            "Infographic creation",
            "Print & digital design",
        ],
        image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
    },
    {
        title: "Content Writing & Copywriting",
        description:
            "Engage your audience with compelling written content. Our writers create persuasive copy and valuable content that drives action and builds brand authority.",
        bullets: [
            "Website copy & landing pages",
            "Blog posts & articles",
            "Social media content",
            "Email marketing copy",
            "Technical documentation",
        ],
        image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
    },
    {
        title: "Interactive Content Development",
        description:
            "Create engaging interactive experiences that captivate your audience. We develop interactive content that increases engagement and provides valuable user experiences.",
        bullets: [
            "Interactive infographics",
            "Quizzes & assessments",
            "Virtual tours & 360° content",
            "Interactive presentations",
            "Gamified content experiences",
        ],
        image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
    },
    {
        title: "Content Distribution & Optimization",
        description:
            "Maximize your content&apos;s reach and impact. We optimize and distribute your content across multiple channels to ensure it reaches the right audience at the right time.",
        bullets: [
            "Multi-channel content distribution",
            "SEO content optimization",
            "Content performance analysis",
            "A/B testing & optimization",
            "Content repurposing strategies",
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
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black  dark:text-white">Create. Engage. Convert</h3>
                            <div className="h-1 w-28 bg-blue-500 mb-6 " />
                            {/* Main heading */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">What We Do in <span className="text-blue-700"> Digital Content Solutions </span> </h2>
                            <p className="text-gray-600 dark:text-white mb-4">
                                At Techbrill Solutions, we create compelling digital content that captivates audiences and drives business results. Our comprehensive content solutions encompass strategy, creation, and distribution to help your brand tell its story effectively across all digital channels.
                            </p>
                            <p className="text-gray-600 dark:text-white mb-4">
                                From video production and graphic design to interactive content and strategic planning, we deliver content that not only looks great but also achieves your business objectives and engages your target audience.
                            </p>

                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group">
                                        Start your project{" "}
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
                        <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Creating compelling digital content that drives engagement and delivers results is <span className="text-blue-700 font-bold">Our Expertise</span></h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 mb-10"></div>
                        {/*<p className="text-lg text-gray-600 dark:text-white mb-4">We provide end-to-end web design and development solutions that empower businesses to grow, adapt, and succeed in today’s fast-paced digital world</p> */}
                    </div>

                    {/* Content Strategy & Creation with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Content Strategy & Creation
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We develop comprehensive content strategies and create engaging content that resonates with your audience, builds brand authority, and drives meaningful business results.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Content strategy & editorial planning</li>
                                <li>Brand storytelling & messaging</li>
                                <li>Multi-format content creation</li>
                                <li>Content calendar development</li>
                                <li>Performance tracking & optimization</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="Content Strategy Planning"
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
                                                alt="Content Creation Workshop"
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


                    {/* Video Production & Visual Design with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Video Production & Visual Design
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Our creative team produces high-quality video content and visual designs that capture attention, tell compelling stories, and enhance your brand presence across all platforms.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Corporate video production</li>
                                <li>Animation & motion graphics</li>
                                <li>Graphic design & branding</li>
                                <li>Video editing & post-production</li>
                                <li>Visual identity development</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Video Production Setup"
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
                                                alt="Creative Design Process"
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

                    

                    {/* Interactive Content & Distribution with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Interactive Content & Distribution
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We create engaging interactive experiences and implement strategic distribution plans to maximize your content&apos;s reach, engagement, and impact across all digital channels.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Interactive content development</li>
                                <li>Multi-channel distribution strategy</li>
                                <li>Content optimization & SEO</li>
                                <li>Performance analytics & reporting</li>
                                <li>Content repurposing & adaptation</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                                                alt="Interactive Content Dashboard"
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
                                                alt="Content Distribution Analytics"
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
                    {/* Content Writing, Interactive Experiences, Content Optimization */}
                </div>
            </section>
        </>
    );
}