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

const ICONS = [
	"application-development-svgrepo-com.svg",
	"mobile-app-svgrepo-com.svg",
	"application-svgrepo-com.svg",
	"application-customer-mobile-svgrepo-com.svg",
	"alert-octagon.svg"
];

export default function ServicesSection() {
	return (
		<>
			{/* 1. What We Do Section - matches the image layout */}
				  <section className="pt-16 pb-10 bg-white dark:bg-gray-900">
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
						  <div className="relative w-full">
							<div className="relative w-full h-[500px] rounded-xl overflow-hidden">
							  <Image
								src="/images/services/web-design-hero.jpg"
								alt="Code editor with web development code"
								fill
								className="object-cover"
								priority
							  />
							</div>
							<motion.div
							  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg shadow-lg max-w-xs text-center"
							  initial={{ opacity: 0, scale: 0.8 }}
							  whileInView={{ opacity: 1, scale: 1 }}
							  viewport={{ once: true }}
							  transition={{ delay: 0.5, duration: 0.5 }}
							>
							  <blockquote className="text-xs md:text-sm italic text-gray-700 dark:text-gray-300">
								&ldquo;We don&#39;t just write code — we craft solutions and create value.&rdquo;
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
							{/* Section label with blue underline */}

							<h3 className=" mb-3 text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">

								WEB EXCELLENCE</h3>
							{/* <div className="h-1 w-28 bg-blue-600 mb-3 " /> */}
							{/* Main heading */}
							<h2 className=" mb-5 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">End-to-End Web Solutions for Modern Businesses </h2> {/*<span className="text-blue-800 italic"> Web Design, Development</span> and Beyond</h2> */}
							<div className="h-1 w-28 bg-red-600 mb-3 " />
							<p className="text-gray-600 dark:text-white mb-2 mt-3">Your digital presence is more than just a website it&#39;s your brand&#39;s identity, functionality, and customer experience rolled into one.
							</p>
							<p className="text-gray-600 dark:text-white mb-2 mt-3">At TechBrill, we specialize in crafting stunning websites, powerful web applications, and intelligent portals that not only look great but work seamlessly. We focus on design that captivates, development that performs, and user journeys that convert.
							</p>
							<p className="text-gray-600 dark:text-white mb-5">
								Backed by creativity and deep technical expertise, our team builds scalable, responsive, and secure solutions tailored to your audience. Whether you need a business website, a custom web app, or a complex portal, we ensure it communicates your vision clearly and delivers real value—across every screen and interaction.
							</p>

							<AnimatedSection animation="fade" delay={0.6}>
								<Link href="/contact">
									<Button className="group bg-blue-800 hover:bg-red-700 dark:bg-blue-700 dark:hover:bg-red-700">
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

			{/* 2. Services Section - Using the custom dark theme from the image */}
			<section className="py-16 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="text-center mb-8 md:mb-12">
						<h2 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
							WHO WE DO
						</h2>
						<h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Building Smart, Scalable, and Engaging Web Platforms
						</h2>
						<div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-4"></div>
						<h3 className="dark:text-white text-base text-gray-600   max-w-3xl mx-auto mt-1 leading-relaxed">
							We provide end-to-end web design and development solutions that empower businesses to grow, adapt, and succeed in today&#39;s fast-paced digital world.
						</h3>
					</div>

					{/* UI/UX Design with carousel */}
					{/* UI/UX Services with carousel */}
					<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								UI/UX Services
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Elevate your digital products with user-centric design that
								balances form, function, and delightful interactions. Our
								end-to-end Product Design & UI/UX offerings ensure every
								touchpoint resonates with your audience and drives business
								goals.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>User research & persona development</li>
								<li>Wireframing & interactive prototyping</li>
								<li>UI design for web and mobile apps</li>
								<li>UX audits & usability testing</li>
								<li>Responsive & accessibility-focused design</li>
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


					{/* Web Development with carousel */}
					<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Custom Web Development
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								From simple digital presence websites to complex web apps, we
								build robust, scalable, and effective solutions. Our expert team
								creates customized experiences that deliver unique, maintainable
								solutions.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Custom website & web app development</li>
								<li>Frontend & backend development</li>
								<li>API integration & feature testing</li>
								<li>CMS performance optimization</li>
								<li>Website security & maintenance</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg"
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
												src="/images/services/web-design-hero.jpg"
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

					{/* E-Commerce Solutions with carousel */}
					<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								E-Commerce Development & Solutions
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Our eCommerce development and solutions services empower
								businesses to sell online with secure, scalable, and user-friendly
								platforms. We build custom online stores that drive sales,
								enhance customer experience, and streamline operations.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Custom eCommerce website development</li>
								<li>Payment gateway and third-party integrations</li>
								<li>Mobile-optimized shopping experiences</li>
								<li>Multi-channel sales solutions</li>
								<li>Custom product visualization design</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4500 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
												alt="E-commerce Development"
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
												alt="E-commerce Platform Design"
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


					{/* Mobile App Development with carousel */}
					<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Progressive Web Apps (PWAs)
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Deliver fast, reliable, and engaging experiences with Progressive
								Web Apps that work seamlessly across devices. We craft PWAs that
								combine the best of web and mobile, offering offline access,
								app-like interactions, and optimized performance.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Cross-platform app experience with a single codebase</li>
								<li>Fast-loading, responsive design</li>
								<li>Offline functionality & background sync</li>
								<li>Push notifications & home screen installation</li>
								<li>SEO-friendly and secure architecture</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3800 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg"
												alt="Mobile App Development"
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
												alt="Mobile App Design Process"
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

					{/* CMS & Content Solutions with carousel */}
					<div className="flex flex-col md:flex-row items-start gap-10 mb-16">
						<div className="w-full md:w-1/2">
							<h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
								Content Management System (CMS)
							</h3>
							<p className="text-gray-600 dark:text-white mb-4">
								Manage your content with ease using our flexible CMS platforms.
								We implement powerful content management systems that empower
								your team to update, organize, and publish content effortlessly
								while maintaining full control over your digital presence.
							</p>
							<ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
								<li>Custom CMS development & implementation</li>
								<li>WordPress, Strapi, Contentful & headless CMS</li>
								<li>Seamless API-based content delivery</li>
								<li>Role-based access control & workflows</li>
								<li>SEO optimization & multilingual support</li>
							</ul>
						</div>
						<div className="w-full md:w-1/2">
							<Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 4200 })]}>
								<CarouselContent>
									<CarouselItem>
										<div className="rounded-md overflow-hidden">
											<Image
												src="/images/services/campaign-creators-pypeCEaJeZY-unsplash.jpg"
												alt="CMS Content Management"
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
												alt="Content Strategy Planning"
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
					{/* AI, ML & Chatbot Solutions with carousel */}
					<div className="flex flex-col md:flex-row-reverse items-start gap-10 mb-10">
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

					{/* SEO & Digital Marketing with carousel
                    <div className="flex flex-col md:flex-row-reverse items-start gap-10">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                SEO & Digital Marketing
                            </h3>
                            <p className="text-gray-600 dark:text-white mb-4">
                                Grow your online reach and drive measurable results with our
                                comprehensive digital marketing expertise. We combine strategic
                                SEO, compelling content creation, and data-driven analytics to
                                help your business stand out in the competitive digital landscape.
                            </p>
                            <ul className="list-disc list-inside text-gray-500 dark:text-white space-y-2 ml-2">
                                <li>On-page & technical SEO optimization</li>
                                <li>Content strategy & high-quality creation</li>
                                <li>Analytics setup & performance reporting</li>
                                <li>Social media integration & management</li>
                                <li>Conversion rate optimization & A/B testing</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3600 })]}>
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="rounded-md overflow-hidden">
                                            <Image
                                                src="/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg"
                                                alt="SEO & Digital Marketing"
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
                                                alt="Digital Marketing Strategy"
                                                width={600}
                                                height={400}
                                                className="object-cover w-full h-[300px]"
                                            />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div> */}
					{/* 3. Emerging Tech Solutions Section */}
					<div className="mt-4">
						<section className=" bg-gray-50 dark:bg-gray-900 " >
							{/* <div className="container mx-auto">
                    <div className="text-left mb-8 md:mb-12">
                        <h3 className="text-2xl font-semibold uppercase tracking-wide text-blue-700 dark:text-white">
                            Solution & Services
                        </h3>
                        <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
                        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
                            We use the latest web technologies to build dynamic, high-performance web applications that are responsive, secure, and scalable, ensuring your digital presence stays modern, efficient, and ready for future growth.                          
                        </h2>
                        {/* Change: Wrapped the h3 tag in a new flex container to control its width
                     and ensure it stays centered while having a maximum width.
                 */}
							{/* <div className="flex justify-center mt-4">
                            {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
							{/* <h3 className=" text-xs text-gray-600  md:text-lg  max-w-3xl mx-auto mt-1 leading-relaxed">
                                We use the latest web technologies to build dynamic, high-performance web applications that are responsive, secure, and scalable, ensuring your digital presence stays modern, efficient, and ready for future growth.
                            </h3>
                        </div>
                    </div>

                </div> */ }

							{/******/}
							{/* <section className="py-0 bg-blue-50 dark:bg-gray-900"> */}
							<div className="dark:bg-gray-900 container bg-gray-100 mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:h-[500px] ">
								{/* Left: Sticky Heading & CTA */}
								<div className="w-full md:w-1/2 flex flex-col justify-start md:h-full md:sticky md:top-0 md:self-start hide-scrollbar mb-2 md:mb-0  ">

									<h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600 mt-6">
										OUR WEB SOLUTIONS INCLUDE
									</h3>
									<h3 className="mt-2 mb-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
										Comprehensive Web Solutions for Your Business
									</h3>
									<div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-left mt-2 mb-4"></div>

									{/* <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                            Comprehensive Web Solutions for Your Business
                        </h2> */}
									<p
										className="text-gray-600 dark:text-white mb-4"
										style={{ textAlign: "justify" }}
									>
										We deliver advanced, end-to-end web services powered by modern technologies and innovation. From responsive design and scalable development to seamless integrations and performance optimization, our solutions are tailored to enhance user experience, boost efficiency, and accelerate your digital growth.
									</p>
									<p
										className="text-gray-600 dark:text-white mb-4"
										style={{ textAlign: "justify" }}
									>
										Our team is here to understand your needs and deliver solutions that help your business grow. Whether you want a fresh website, smoother operations, or stronger security, we’ll support you every step so you can stay competitive and ready for the future.
									</p>

									{/* <p className="text-gray-600 dark:text-white mb-2 ">
                            Meanwhile, our  <span className="text-blue-800 font-semibold">Mobile App Development</span> & Integration capabilities fuse creativity, technology, and strategy to build scalable, stunning apps tailored for tomorrows users. Whether launching a product or optimizing legacy systems, we deliver results that exceed expectations—and industry-best timelines.
                        </p> */}
								</div>
								{/* Right: Scrollable Tech Cards */}
								<div className="md:w-1/2 md:h-full md:max-h-[600px] md:overflow-y-auto pr-2 overflow-hidden hide-scrollbar flex flex-row md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible pl-4 pr-4 md:pl-0 md:pr-0 snap-x snap-mandatory">
									{/* Card Example */}
									{[
										{ title: "AI-powered personalization", desc: "Deliver tailored user experiences by leveraging AI to adapt content, design, and recommendations in real time." },
										{ title: "API-First Architecture", desc: "Build scalable, flexible applications with an API-first approach, ensuring seamless integrations, faster development, and future-ready digital solutions." },
										{ title: "Cloud-Native Web Solutions", desc: "Harness the power of the cloud to build scalable, resilient, and high-performance web applications optimized for agility and continuous innovation." },
										{ title: "Single Page Application (SPA)", desc: "Create fast, seamless, and engaging web experiences with SPAs that load instantly, enhance interactivity, and deliver smooth, app-like performance for users." },
										{ title: "Open Source Solutions", desc: "Leverage the power of open-source technologies to build cost-effective, customizable, and scalable web solutions backed by active community support and continuous innovation." },
										{ title: "Web accessibility compliance", desc: "Ensure your website meets WCAG and ADA standards, delivering inclusive, user-friendly experiences that are accessible to everyone, regardless of ability or device." },
										// { title: "Mobile App Testing", desc: "From cross-device functionality to platform-specific nuances, we ensure your mobile app works wherever your users are." },
										// { title: "Load & Stress Testing", desc: "We mimic extreme user traffic to monitor system endurance, resource usage, and fault tolerance." },
										// { title: "Continuous Testing", desc: "Integrated into your CI/CD pipeline, we support constant feedback, faster iterations, and higher code confidence." },
										// { title: "UI/UX Design for Mobile Apps", desc: "Our design-first approach ensures intuitive interfaces that combine visual appeal with frictionless usability." },
										// { title: "Custom App Development", desc: "We craft tailor-made mobile apps that align perfectly with your brand identity and functional needs." },
										// { title: "Enterprise Mobile App Solutions", desc: "Scalable, secure, and enterprise-grade—our apps empower businesses to streamline operations and engage stakeholders" },
										// { title: "App Testing & Quality Assurance", desc: "Rigorous end-to-end testing ensures your app launches polished, reliable, and high-performing from Day One." },
										// { title: "App Integration with APIs", desc: "We connect your apps with essential third-party services to boost functionality and deliver a seamless experience." },
										// { title: "App Integration with Backend Systems", desc: "We synchronize your mobile front ends with existing backend ecosystems—whether cloud-native or on-premise." },
										// { title: "App Store Deployment & Optimization", desc: "From metadata optimization to compliance checks—we ensure smooth approval and discoverability on both Android & iOS stores." },
										// { title: "Post-Launch Maintenance & Support", desc: "Your success doesn#39;$t stop at launch. We offer continuous monitoring, updates, and support for optimal performance." },
									].map((card, idx) => (
										<div key={card.title} className="flex items-start gap-4 border-b border-gray-200 dark:border-gray-700 pb-8 transition-all duration-300 rounded-xl p-4 hover:bg-blue-100 dark:hover:bg-gray-800/80 cursor-pointer min-w-[280px] md:min-w-0">
											<span className="w-12 h-12 mt-1 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
												<Image src={`/images/icons/${ICONS[idx % ICONS.length]}`} alt={card.title + " icon"} width={40} height={40} />
											</span>
											<div className="flex-1">
												<h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">{card.title}</h3>
												<p className="text-gray-600 dark:text-gray-300 mt-2">{card.desc}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						{/* </section> */}
					</section>
				</div>
			</div>
		</section >
		</>
	);
}