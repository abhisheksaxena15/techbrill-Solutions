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

// Replace all <svg>...</svg> in the scrolling cards section with <Image> components, assigning the SVGs from public/images/icons in order for each card.
// List of icons to use in order


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
                                    src="/images/services/web-design-hero.jpg"
                                    alt="Code editor with web development code"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-[500px]"
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
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-white">
                                Cloud & DevOps Excellence
                            </h3>
                            <div className="h-1 w-28 bg-blue-800 mb-6" />
                            {/* Main heading */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                Accelerate innovation and <span className="text-blue-800">streamline operations</span> with modern Cloud & DevOps solutions.
                            </h2>
                            <p className="text-gray-600 dark:text-white mb-2">
                                At TechBrill Solutions, we help organizations unlock agility, scalability, and resilience through expert cloud architecture and DevOps enablement. Our team guides you in building secure, automated, and cost-effective cloud environments tailored to your business needs.
                            </p>
                            <p className="text-gray-600 dark:text-white mb-5">
                                From multi-cloud management and infrastructure automation to CI/CD pipelines and cloud security, we partner with you at every step of your cloud and DevOps journey. Empower your teams, reduce operational friction, and deliver value faster in today’s digital landscape.
                            </p>

                            <AnimatedSection animation="fade" delay={0.6}>
                                <Link href="/contact">
                                    <Button className="group bg-blue-800 dark: bg-blue-700 ">
                                        Consult with us{" "}
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, duration: 0.8 }}
                                        >
                                            <ArrowRight className="ml-2 h-4 w-4 " />
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
                        <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">
                            Accelerate Your Business with <span className="text-blue-800 font-bold">Cloud & DevOps</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-4"></div>
                    </div>

                    {/* Multi-Cloud Management & Vendor Independence */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Multi-Cloud Management & Vendor Independence
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Seamlessly orchestrate workloads across AWS, Azure, GCP, and more. We help you avoid vendor lock-in, optimize costs, and ensure flexibility by designing cloud-agnostic architectures and robust migration strategies.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Multi-cloud workload deployment & automation</li>
                                <li>Cloud migration & hybrid cloud enablement</li>
                                <li>Cost optimization & resource governance</li>
                                <li>Cloud-native application modernization</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                                                alt="Data Integration"
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
                                                alt="ETL Process"
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

                    {/* CI/CD Automation & Release Engineering */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                CI/CD Automation & Release Engineering
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Accelerate your software delivery with robust CI/CD pipelines. We automate build, test, and deployment processes, reduce manual errors, and enable rapid, reliable releases—empowering your teams to innovate faster.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Pipeline design & implementation (GitHub Actions, GitLab, Jenkins, etc.)</li>
                                <li>Automated testing & quality gates</li>
                                <li>Blue/green & canary deployments</li>
                                <li>Release orchestration & rollback strategies</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                                                alt="Data Visualization"
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
                                                alt="Dashboards"
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

                    {/* Infrastructure as Code & Configuration Management */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Infrastructure as Code & Configuration Management
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Achieve consistency and scalability with Infrastructure as Code (IaC). We automate provisioning, eliminate drift, and ensure environments are reproducible and secure—across development, staging, and production.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Terraform, CloudFormation, Pulumi, Ansible, and more</li>
                                <li>Automated environment provisioning</li>
                                <li>Configuration drift detection & remediation</li>
                                <li>Version-controlled infrastructure & policy as code</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="Predictive Analytics"
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
                                                alt="Advanced Analytics"
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

                    {/* Cloud Security, Compliance & Governance */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Cloud Security, Compliance & Governance
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Protect your cloud assets and ensure regulatory compliance. We implement security best practices, continuous monitoring, and automated policy enforcement to keep your data safe and your business audit-ready.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Identity & access management (IAM)</li>
                                <li>Security posture assessment & remediation</li>
                                <li>Compliance automation (GDPR, HIPAA, SOC2, etc.)</li>
                                <li>Cloud-native security tooling & monitoring</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                                                alt="Data Governance"
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
                                                alt="Data Quality"
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

                    {/* Monitoring, Observability & Cost Optimization */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Monitoring, Observability & Cost Optimization
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Gain full visibility into your cloud infrastructure and applications. We implement modern observability stacks, proactive alerting, and cost management tools to maximize uptime and control cloud spend.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Centralized logging & distributed tracing</li>
                                <li>Real-time monitoring & alerting (Prometheus, Grafana, Datadog, etc.)</li>
                                <li>Cloud cost analysis & optimization</li>
                                <li>Performance tuning & resource right-sizing</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="Self-Service Analytics"
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
                                                alt="Data Literacy"
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

                    {/* DevOps Enablement & Cloud-Native Transformation */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                DevOps Enablement & Cloud-Native Transformation
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Foster a DevOps culture and modernize your IT. We provide training, tooling, and hands-on guidance to bridge the skills gap, automate workflows, and help your teams embrace cloud-native best practices.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>DevOps maturity assessment & roadmap</li>
                                <li>Containerization & Kubernetes adoption</li>
                                <li>Team enablement & process automation</li>
                                <li>Change management & cultural transformation</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="DevOps Enablement"
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
                                                alt="Cloud-Native Transformation"
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