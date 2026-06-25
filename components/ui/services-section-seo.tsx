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
        title: "Technical SEO",
        description:
            "We optimize your website's technical foundation to ensure search engines can crawl, index, and understand your content. Our technical SEO audit identifies and fixes critical issues that impact your rankings.",
        bullets: [
            "Site speed optimization & Core Web Vitals",
            "Mobile-first indexing & responsiveness",
            "XML sitemaps & robots.txt optimization",
            "Schema markup & structured data",
            "Technical SEO audits & reporting",
        ],
        image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
    },
    {
        title: "On-Page SEO",
        description:
            "Maximize your content's potential with strategic on-page optimization. We fine-tune every element of your web pages to improve search visibility and user experience.",
        bullets: [
            "Keyword research & content optimization",
            "Title tags & meta descriptions",
            "Header structure & internal linking",
            "Image optimization & alt text",
            "Content gap analysis & competitor research",
        ],
        image: "/images/services/web-design-hero.jpg",
    },
    {
        title: "Local SEO",
        description:
            "Dominate local search results and attract nearby customers. Our local SEO strategies help businesses increase visibility in location-based searches and Google My Business listings.",
        bullets: [
            "Google My Business optimization",
            "Local citation building & NAP consistency",
            "Location-based keyword targeting",
            "Local content creation & reviews management",
            "Local link building & community outreach",
        ],
        image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
    },
    {
        title: "Content SEO Strategy",
        description:
            "Create content that ranks and converts. Our content SEO approach combines keyword research, user intent analysis, and engaging storytelling to drive organic traffic.",
        bullets: [
            "Content strategy & editorial calendars",
            "SEO copywriting & blog optimization",
            "Topic clustering & pillar pages",
            "Content performance tracking",
            "User intent optimization & conversion focus",
        ],
        image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
    },
    {
        title: "Link Building & Authority",
        description:
            "Build domain authority through strategic link acquisition. We develop high-quality backlink profiles that establish your website as a trusted authority in your industry.",
        bullets: [
            "White-hat link building strategies",
            "Digital PR & brand mentions",
            "Guest posting & content partnerships",
            "Broken link building & resource pages",
            "Link audit & toxic link removal",
        ],
        image: "/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg",
    },
    {
        title: "SEO Analytics & Reporting",
        description:
            "Track, measure, and optimize your SEO performance with comprehensive analytics. We provide detailed insights and actionable recommendations to continuously improve your search rankings.",
        bullets: [
            "Google Analytics & Search Console setup",
            "Keyword ranking & traffic monitoring",
            "Conversion tracking & ROI analysis",
            "Competitive analysis & market insights",
            "Monthly SEO reports & strategy adjustments",
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

export default function SEOServicesSection() {
    return (
        <>
            {/* 2. What We Do Section - matches the image layout */}
            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-9">
                        {/* Left: SEO Analytics image */}
                        <motion.div
                            className="w-full md:w-1/2 flex items-center justify-center"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="rounded-md overflow-hidden w-full">
                                <Image
                                    src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                                    alt="SEO analytics dashboard with search performance metrics"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[440px]"
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
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black  dark:text-white">We Drive More Than Traffic</h3>
                            <div className="h-1 w-28 bg-blue-500 mb-6 " />
                            {/* Main heading */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">We are your trusted Partner in <span className="text-blue-700">Search Engine Optimization</span> and Digital Growth</h2>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Your online visibility is more than just rankings; it&apos;s your brand&apos;s discoverability,
                                credibility, and competitive advantage rolled into one. At TechBrill,
                                we specialize in comprehensive SEO strategies that not only improve search rankings but drive
                                qualified traffic and meaningful conversions.
                                We focus on technical excellence, content optimization, and user experience that converts.
                            </p>

                            <p className="text-gray-600 dark:text-white mb-5">
                                Backed by data-driven insights and proven SEO methodologies, our team builds sustainable,
                                white-hat optimization strategies tailored to your industry and audience. Whether you need local SEO,
                                enterprise-level optimization, or technical SEO audits, we ensure your website ranks higher,
                                performs better, and delivers measurable ROI—across every search query and user journey.
                            </p>
                            
                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group">
                                        Get SEO Audit{" "}
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
                        <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Transforming search visibility into business growth is <span className="text-blue-700 font-bold">Our Expertise</span></h2>
                        <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 mb-10"></div>
                        {/*<p className="text-lg text-gray-600 dark:text-white mb-4">We provide comprehensive SEO solutions that help businesses rank higher, attract more qualified traffic, and achieve sustainable organic growth in today's competitive digital landscape</p> */}
                    </div>

                    {/* Technical SEO with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Technical SEO Optimization
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Build a solid foundation for search success with comprehensive
                                technical SEO. Our technical optimization ensures search engines
                                can effectively crawl, index, and understand your website while
                                delivering exceptional user experiences.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Core Web Vitals & page speed optimization</li>
                                <li>Mobile-first indexing & responsive design</li>
                                <li>URL structure & crawlability improvements</li>
                                <li>Schema markup & structured data implementation</li>
                                <li>Technical SEO audits & error resolution</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                                                alt="Technical SEO Analysis"
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
                                                alt="SEO Technical Optimization"
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


                    {/* On-Page SEO with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                On-Page SEO & Content Optimization
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Maximize your content&apos;s search potential with strategic on-page
                                optimization. We optimize every element of your web pages to
                                improve search visibility, user engagement, and conversion rates
                                through data-driven SEO strategies.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Keyword research & strategic content optimization</li>
                                <li>Title tags, meta descriptions & header optimization</li>
                                <li>Internal linking & site architecture improvement</li>
                                <li>Content gap analysis & competitor research</li>
                                <li>User intent optimization & semantic SEO</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="On-Page SEO Optimization"
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
                                                alt="Content SEO Strategy"
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

                    {/* Local SEO with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Local SEO & Google My Business
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Dominate local search results and attract nearby customers with
                                our comprehensive local SEO strategies. We optimize your online
                                presence to increase visibility in location-based searches and
                                drive foot traffic to your business.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Google My Business optimization & management</li>
                                <li>Local citation building & NAP consistency</li>
                                <li>Location-based keyword targeting & mapping</li>
                                <li>Review management & reputation monitoring</li>
                                <li>Local content creation & community engagement</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"
                                                alt="Local SEO Optimization"
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
                                                alt="Google My Business Management"
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


                    {/* Link Building with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Link Building & Domain Authority
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Build domain authority and trust through strategic link acquisition.
                                Our white-hat link building strategies focus on earning high-quality
                                backlinks that improve your search rankings and establish your
                                website as an industry authority.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>White-hat link building & outreach strategies</li>
                                <li>Digital PR & brand mention campaigns</li>
                                <li>Guest posting & content partnership development</li>
                                <li>Broken link building & resource page opportunities</li>
                                <li>Link audit & toxic backlink removal</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                                                alt="Link Building Strategy"
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
                                                alt="Digital PR & Outreach"
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

                    {/* SEO Content Strategy with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                SEO Content Strategy & Creation
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Create content that ranks, engages, and converts with our
                                strategic SEO content approach. We combine keyword research,
                                user intent analysis, and compelling storytelling to develop
                                content that drives organic traffic and business growth.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Content strategy & editorial calendar development</li>
                                <li>SEO copywriting & blog content optimization</li>
                                <li>Topic clustering & pillar page architecture</li>
                                <li>Content performance tracking & optimization</li>
                                <li>User intent mapping & conversion-focused content</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
                                                alt="SEO Content Strategy"
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
                                                alt="Content Creation & Planning"
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
                    {/* SEO Analytics & Reporting with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                SEO Analytics & Performance Tracking
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Monitor, measure, and optimize your SEO performance with comprehensive
                                analytics and reporting. We provide detailed insights, track key metrics,
                                and deliver actionable recommendations to continuously improve your
                                search rankings and organic traffic growth.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Google Analytics & Search Console optimization</li>
                                <li>Keyword ranking & organic traffic monitoring</li>
                                <li>Conversion tracking & ROI measurement</li>
                                <li>Competitive analysis & market intelligence</li>
                                <li>Monthly SEO reports & strategy refinements</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                                                alt="SEO Analytics & Reporting"
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
                                                alt="SEO Performance Tracking"
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