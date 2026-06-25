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
        title: "Social Media Strategy",
        description:
            "We develop comprehensive social media strategies that align with your business goals. Our strategic approach ensures your brand message resonates with your target audience across all platforms.",
        bullets: [
            "Social media audit & competitive analysis",
            "Platform-specific strategy development",
            "Content calendar planning",
            "Audience targeting & persona development",
            "Brand voice & messaging guidelines",
        ],
        image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
    },
    {
        title: "Content Creation & Management",
        description:
            "From eye-catching visuals to engaging copy, we create compelling content that drives engagement and builds your brand presence across social platforms.",
        bullets: [
            "Custom graphic design & video content",
            "Copywriting & content creation",
            "Daily posting & community management",
            "Stories, reels & interactive content",
            "Brand-consistent visual identity",
        ],
        image: "/images/services/web-design-hero.jpg",
    },
    {
        title: "Paid Social Advertising",
        description:
            "Maximize your ROI with targeted social media advertising campaigns. We create and optimize ads that convert, driving quality leads and sales for your business.",
        bullets: [
            "Facebook & Instagram ad campaigns",
            "LinkedIn & Twitter advertising",
            "Ad creative design & optimization",
            "Audience targeting & retargeting",
            "Campaign performance tracking",
        ],
        image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
    },
    {
        title: "Influencer Marketing",
        description:
            "Connect with your audience through authentic influencer partnerships. We identify and collaborate with the right influencers to amplify your brand message.",
        bullets: [
            "Influencer identification & outreach",
            "Campaign strategy & management",
            "Content collaboration & approval",
            "Performance tracking & reporting",
            "Long-term partnership development",
        ],
        image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
    },
    {
        title: "Analytics & Reporting",
        description:
            "Make data-driven decisions with our comprehensive social media analytics. We track, measure, and optimize your social media performance for maximum impact.",
        bullets: [
            "Social media performance tracking",
            "ROI measurement & analysis",
            "Competitor benchmarking",
            "Custom reporting dashboards",
            "Strategic recommendations",
        ],
        image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
    },
    {
        title: "Community Management",
        description:
            "Build and nurture your online community with our expert community management services. We engage with your audience and foster meaningful relationships.",
        bullets: [
            "Real-time community engagement",
            "Customer service & support",
            "Crisis management & reputation",
            "User-generated content campaigns",
            "Community growth strategies",
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
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black  dark:text-white">Connect. Engage. Convert</h3>
                            <div className="h-1 w-28 bg-blue-500 mb-6 " />
                            {/* Main heading */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">What We Do in <span className="text-blue-700"> Social Media Marketing </span> </h2>
                            <p className="text-gray-600 dark:text-white mb-4">
                                At Techbrill Solutions, we help businesses harness the power of social media to build meaningful connections with their audience. Our comprehensive social media marketing services drive engagement, increase brand awareness, and convert followers into loyal customers.
                            </p>
                            <p className="text-gray-600 dark:text-white mb-4">
                                From strategy development to content creation and paid advertising, we manage every aspect of your social media presence, ensuring your brand stands out in today&apos;s competitive digital landscape.
                            </p>

                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group">
                                        Get started with us{" "}
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
                        <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Building authentic connections and driving engagement through strategic social media is <span className="text-blue-700 font-bold">Our Expertise</span></h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 mb-10"></div>
                        {/*<p className="text-lg text-gray-600 dark:text-white mb-4">We provide end-to-end web design and development solutions that empower businesses to grow, adapt, and succeed in today’s fast-paced digital world</p> */}
                    </div>

                    {/* Social Media Strategy & Planning with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Social Media Strategy & Planning
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We develop comprehensive social media strategies that align with your business goals, target the right audience, and create a roadmap for success across all platforms.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Platform-specific strategy development</li>
                                <li>Audience research & persona creation</li>
                                <li>Content calendar planning</li>
                                <li>Competitive analysis & benchmarking</li>
                                <li>Goal setting & KPI tracking</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/it-consultancy-hero.jpg"
                                                alt="Social Media Strategy Planning"
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
                                                alt="Social Media Content Planning"
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


                    {/* Content Creation & Management with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Content Creation & Management
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Our creative team produces engaging, high-quality content that resonates with your audience and drives meaningful interactions across all social platforms.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Custom graphic design & video content</li>
                                <li>Copywriting & content creation</li>
                                <li>Daily posting & scheduling</li>
                                <li>Stories, reels & interactive content</li>
                                <li>Brand-consistent visual identity</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg"
                                                alt="Content Creation Process"
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
                                                alt="Social Media Management Tools"
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

                    

                    {/* Paid Social Advertising & Analytics with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Paid Social Advertising & Analytics
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Maximize your ROI with targeted social media advertising campaigns and comprehensive analytics to track performance and optimize results.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Facebook & Instagram ad campaigns</li>
                                <li>LinkedIn & Twitter advertising</li>
                                <li>Performance tracking & optimization</li>
                                <li>ROI measurement & reporting</li>
                                <li>A/B testing & campaign refinement</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                                                alt="Social Media Advertising Dashboard"
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
                                                alt="Social Media Analytics Report"
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
                    {/* Influencer Marketing, Community Management, Social Media Analytics */}
                </div>
            </section>
        </>
    );
}