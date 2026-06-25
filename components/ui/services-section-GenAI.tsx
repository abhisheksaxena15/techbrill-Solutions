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
        title: "Generative AI Development Consulting",
        description:
            "Being a dominant Generative AI development company, we provide comprehensive Generative AI consulting services that help businesses understand how GenAI integration works and innovate their workflows. For this, our experts access your requirements, recommend the best fitted AI models and craft strategies.",
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
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-black dark:text-white">We Build More Than Models</h3>
                            <div className="h-1 w-28 bg-blue-800 mb-6" />
                            {/* Main heading */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                We help you <span className="text-blue-800">imagine & create</span> while others <span className="text-blue-800">follow the trends</span> in Generative AI.
                            </h2>
                            <p className="text-gray-600 dark:text-white mb-2">
                                As a trusted Generative AI partner, TechBrill Solutions empowers organizations to unlock new levels of creativity and automation. We harness the latest in generative models—text, image, audio, and beyond—to help you generate content, ideas, and solutions that set you apart in a rapidly evolving digital world.
                            </p>
                            <p className="text-gray-600 dark:text-white mb-5">
                                Our expert team collaborates closely with you to design and deploy custom generative AI systems that drive engagement, streamline content creation, and open new revenue streams. From ideation to implementation and ongoing support, we ensure your generative AI initiatives deliver real, measurable impact for your business.
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
                        <h2 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-4">Empowering your business through customn <span className="text-blue-800 font-bold">AI services</span></h2>
                        <div className="h-1 w-20 bg-blue-800 mx-auto mt-4 mb-4"></div>
            
                    </div>

                    {/*Design with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Custom AI Solutions
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We develop custom AI solutions tailored to your unique business challenges and objectives. From automating workflows to enhancing customer experiences, our AI systems are designed to deliver measurable impact, drive innovation, and scale with your growth.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>AI-powered business process automation</li>
                                <li> Intelligent data analysis & forecasting</li>
                                <li>Custom model development & integration</li>
                                <li>Scalable solutions aligned with your goals</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
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
                                                src="/images/services/annie-spratt-QckxruozjRg-unsplash.jpg"
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


                    {/* Android App Development with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Speech Recognition & Voice Processing
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We integrate sophisticated models that convert spoken words into text with high accuracy and real-time processing capabilities. Our speech recognition solutions enhance virtual assistants, power transcription tools, and enable voice-controlled applications that transform how users interact with technology across various industries and use cases.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Real-time speech-to-text conversion & transcription</li>
                                <li>Voice-enabled virtual assistants & chatbots</li>
                                <li>Multi-language support with accent recognition</li>
                                <li>Custom voice command systems & integrations</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                                                alt="Android App Development"
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
                                                alt="Android App Tools"
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

                    {/* iOS App Development with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Object Detection & Recognition
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We implement advanced deep learning models that accurately identify, classify, and locate multiple objects within images and video streams in real-time. Our object detection solutions power automated surveillance systems, enhance inventory management, and enable smart monitoring applications that deliver precise results across diverse environments and conditions.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Real-time object identification & localization</li>
                                <li>Multi-object tracking & counting systems</li>
                                <li>Custom object detection for specific industries</li>
                                <li>Edge deployment for offline processing</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="iOS App Development"
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
                                                alt="iOS App Tools"
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


                    {/* Cross-Platform App Development with carousel */}
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Computer Vision & Image Analysis
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We develop comprehensive computer vision solutions that extract meaningful insights from visual data through advanced image processing and pattern recognition techniques. Our systems enable automated visual inspection, document digitization, and intelligent image analysis that streamline operations and enhance decision-making across various business processes.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Automated visual quality inspection & defect detection</li>
                                <li>Optical Character Recognition (OCR) & document processing</li>
                                <li>Device feature access with native-like performance</li>
                                <li>Image enhancement & preprocessing pipelines</li>
                                <li>Custom visual analytics & pattern recognition</li>

                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
                                                alt="Cross-Platform App Development"
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
                                                alt="Cross-Platform App Design"
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

                    {/* Progressive Web App Development with carousel */}
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Intelligent Process Automation (IPA)
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                We develop AI-powered automation solutions that handle complex, rule-based tasks requiring human-level decision-making and contextual understanding. Our intelligent systems streamline repetitive workflows, reduce operational costs, and free up your team to focus on strategic initiatives while maintaining accuracy and compliance standards.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>Document processing & intelligent data extraction</li>
                                <li>Workflow automation with decision-making capabilities</li>
                                <li>Custom business process optimization & integration</li>
                                <li>Compliance monitoring & automated reporting systems</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
                                                alt="Progressive Web App Development"
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
                                                alt="PWA Tools"
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
                    {/* AI, ML & Chatbot Solutions with carousel8*/}
					<div className="flex flex-col md:flex-row-reverse items-start gap-10">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								AI, ML & Chatbot Solutions
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Harness the power of Artificial Intelligence and Machine Learning to automate,
								personalize, and elevate user experiences. Our smart AI, ML, and chatbot solutions
								optimize workflows, enhance customer engagement, and deliver data-driven insights.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>AI-powered data analysis & predictions</li>
								<li>Custom ML model development & deployment</li>
								<li>Natural Language Processing (NLP) integrations</li>
								<li>Intelligent chatbot design & automation</li>
								<li>AI-enhanced personalization for web & mobile</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
												alt="AI &ML chatbot"
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
												alt="AI &ML chatbot"
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