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
import {
    MessageSquare,   // 💬 NLP
    Eye,             // 👁 Computer Vision
    Cog,             // ⚙️ Business Automation
    LineChart,       // 📈 Predictive Analytics
    ShieldCheck,     // 🛡️ QA & Testing
    CloudCog         // ☁️ AI Integration
} from "lucide-react";

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

// Replace all <svg>...</svg> in the scrolling cards section with <Image> components, assigning the SVGs from public/images/icons in order for each card.
// List of icons to use in order
const ICONS = [
    "application-development-svgrepo-com.svg",
    "mobile-app-svgrepo-com.svg",
    "application-svgrepo-com.svg",
    "application-customer-mobile-svgrepo-com.svg",
    "alert-octagon.svg"
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
                className="w-full  md:w-1/3 flex-shrink-0"
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
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-9">

                        {/* Left: Code image with floating quote */}
                        <motion.div
                            className="w-full md:w-1/2 flex items-center justify-center"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative w-full">
                                {/* Image wrapper */}
                                <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/services/web-design-hero.jpg"
                                        alt="Code editor with web development code"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Floating quote box */}
                                <motion.div
                                    className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg max-w-xs text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <blockquote className="text-xs md:text-sm italic text-gray-700 dark:text-gray-300">
                                        &ldquo;Your vision, powered by AI & ML is carefully crafted and delivered to create meaningful impact.&rdquo;
                                    </blockquote>
                                </motion.div>
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

                            {/* Section label */}
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600 mb-3">
                                TURNING DATA INTO INTELLIGENT ACTION
                            </h3>

                            {/* Main heading */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                Transforming Businesses with AI & ML Innovation
                            </h2>
                            <div className="h-1 w-28 bg-red-600 mb-3" />

                            <p className="text-gray-600 dark:text-white mb-2">
                                Artificial Intelligence (AI) and Machine Learning (ML) are transforming industries by enabling smarter decision-making, automation, and personalized experiences. Businesses that leverage AI/ML gain a competitive edge through improved efficiency and innovation.
                            </p>

                            <p className="text-gray-600 dark:text-white mb-5">
                                At Techbrill Solutions, we offer tailored AI and ML development services, including predictive analytics, natural language processing, computer vision, and custom model deployment. We specialize in building scalable, secure, and industry-specific solutions that drive measurable results.
                            </p>

                            <p className="text-gray-600 dark:text-white mb-5">
                                Our expert team consists of data scientists, ML engineers, and AI specialists with deep domain knowledge. We are passionate about solving complex challenges and delivering intelligent systems that help businesses thrive in the digital era.
                            </p>

                            {/* Button */}
                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group bg-blue-800 hover:bg-red-700 dark:hover:bg-red-600">
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
            <section className="pt-10 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
                            CORE OFFERINGS
                        </h2>
                        <h2 className="mt-2 text-2xl mx-auto max-w-5xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Accelerate Growth with Full-Spectrum AI & ML Development Services
                        </h2>
                        <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-4"></div>
                        <h3 className=" text-base text-gray-600  dark:text-gray-300 max-w-3xl mx-auto mt-1 leading-relaxed">
                            Delivering end-to-end AI & ML solutions that streamline operations, drive innovation, and unlock sustainable business growth.
                        </h3>
                    </div>

                    {/* AI Development */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Artificial Intelligence (AI) Development
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                AI solutions that help businesses automate processes, enhance decision-making, and deliver intelligent customer experiences. At Techbrill, we design and deploy AI systems that are secure, scalable, and tailored to your goals, enabling your business to operate smarter, faster, and with greater efficiency.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Intelligent process automation</li>
                                <li>AI-powered chatbots & assistants</li>
                                <li>Decision-support systems</li>
                                <li>End-to-end AI integration</li>
                            </ul>

                            <Button asChild className="mt-4 bg-blue-800 hover:bg-red-700 hover:dark:bg-red-600">
                                <a href="/services/it-services/ai-ml-development">Explore more</a>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                                                alt="AI Development"
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
                                                alt="AI Integration"
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

                    {/* Gen AI Solutions */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Generative AI Solutions
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Generative AI empowers businesses with creative automation and intelligent content generation. From building advanced chatbots to automating content creation, Techbrill helps you leverage generative models to unlock innovation, reduce manual effort, and accelerate growth while maintaining security and reliability at scale.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Conversational AI & chatbots</li>
                                <li>Automated content generation</li>
                                <li>Design & creative automation</li>
                                <li>Personalized user experiences</li>
                            </ul>

                            <Button asChild className="mt-4  bg-blue-800 hover:bg-red-700 hover:dark:bg-red-600">
                                <a href="/services/ai-automation/generative-ai">Explore more</a>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                                                alt="Gen AI Solutions"
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
                                                alt="Gen AI Tools"
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

                    {/* ML Development */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Machine Learning (ML) Development
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Our ML solutions enable businesses to learn from data, predict outcomes, and optimize operations. We develop machine learning models that enhance decision-making, improve customer insights, and unlock new business opportunities with accuracy, scalability, and measurable results.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Predictive analytics models</li>
                                <li>Recommendation systems</li>
                                <li>Anomaly & fraud detection</li>
                                <li>Demand forecasting</li>
                            </ul>

                            <Button asChild className="mt-4  bg-blue-800 hover:bg-red-700 hover:dark:bg-red-600">
                                <a href="/services/it-services/ai-ml-development">Explore more</a>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="ML Development"
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
                                                alt="ML Tools"
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

                    {/* Data Engineering & Model Training */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Data Engineering & Model Training
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                High-quality data is the foundation of successful AI & ML projects. Techbrill provides robust data engineering, preparation, and model training services to ensure your systems are powered by clean, reliable, and optimized datasets for maximum accuracy and performance.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Data preparation & cleaning</li>
                                <li>Scalable data pipelines</li>
                                <li>Feature engineering</li>
                                <li>Model training & optimization</li>
                            </ul>

                            <Button asChild className="mt-4  bg-blue-800 hover:bg-red-700 hover:dark:bg-red-600">
                                <a href="/services/ai-automation/data-analytics">Explore more</a>
                            </Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                                                alt="Data Engineering"
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
                                                alt="Model Training"
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
            

            
                
                    <div className="container bg-gray-100 mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:min-h-[500px] dark:bg-gray-900">
                        {/* Left: Sticky Heading & CTA */}
                        <div className="w-full  dark:bg-gray-900 md:w-1/2 flex flex-col justify-start md:h-full md:sticky md:top-0 md:self-start hide-scrollbar mb-2 md:mb-0">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600 mt-6">
                                SOLUTIONS INCLUDE
                            </h3>
                            <h3 className="mt-2 mb-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                                Unlock Advanced AI & ML Capabilities
                            </h3>
                            <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-left mt-2 mb-4"></div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4" style={{ textAlign: "justify" }}>
                                Unlock the true potential of AI & ML with innovations that go beyond the basics. Our advanced offerings are built to tackle complex business challenges, delivering intelligent, scalable, and secure solutions that drive meaningful transformation.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-4" style={{ textAlign: "justify" }}>
                                At Techbrill, we blend technical expertise with deep industry knowledge to create AI solutions that are practical yet transformative. By enabling smarter decisions, seamless automation, and future-ready capabilities, we empower businesses to stay competitive and lead with confidence.
                            </p>
                        </div>

                        {/* Right: Scrollable Tech Cards */}
                        <div className="md:w-1/2 md:h-full md:max-h-[600px] md:overflow-y-auto pr-2 overflow-hidden hide-scrollbar flex flex-row md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pl-4 pr-4 md:pl-0 md:pr-0 snap-x snap-mandatory">
                            {[
                                {
                                    title: "Natural Language Processing (NLP) Solutions",
                                    desc: "Enable machines to understand, analyze, and respond to human language with intelligent chatbots, sentiment analysis, and voice processing.",
                                    icon: MessageSquare,
                                },
                                {
                                    title: "Computer Vision Applications",
                                    desc: "Leverage AI for image recognition, object detection, facial recognition, and automated quality inspection in real time.",
                                    icon: Eye,
                                },
                                {
                                    title: "AI-Powered Business Automation",
                                    desc: "Streamline workflows with AI-driven automation to cut manual effort, reduce costs, and boost productivity across teams.",
                                    icon: Cog,
                                },
                                {
                                    title: "Predictive Analytics & Forecasting",
                                    desc: "Anticipate future trends, detect risks, and model scenarios with data-driven predictions to make smarter business decisions.",
                                    icon: LineChart,
                                },
                                {
                                    title: "AI-Powered Quality Assurance & Testing",
                                    desc: "Enhance QA with intelligent test automation, anomaly detection, and defect prediction to accelerate release cycles.",
                                    icon: ShieldCheck,
                                },
                                {
                                    title: "AI Integration with Enterprise Systems",
                                    desc: "Embed AI into CRMs, ERPs, and SaaS platforms for improved customer engagement, smarter insights, and operational excellence.",
                                    icon: CloudCog,
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="
                                        group
                                        flex items-start gap-4
                                        border-b border-gray-200 dark:border-gray-700
                                        pb-8
                                        transition-all duration-300
                                        rounded-xl p-4
                                     hover:bg-blue-100
                                     dark:hover:bg-gray-800/80
                                        cursor-pointer
                                        min-w-[280px] md:min-w-0
                                    "
                                >                                    <span className="w-12 h-12 mt-1 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                        <card.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </span>
                                    <div className="flex-1 ">
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white ">{card.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mt-2">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                
            </section>
        </>
    );
}

