"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white sm:rounded-3xl overflow-hidden"
                        >
                            <div>
                                <div className="flex justify-between items-start p-4 dark:bg-black">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-black"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            
            <ul className="max-w-2xl mx-auto w-full gap-4 py-16">
                <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-2 text-black dark:text-white">Our robust roadmap to your AI solution</h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800 rounded-full mb-4" />
                <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-medium dark:text-white">
                    More than just AI, we deliver clarity, accuracy, and a process built for real-world impact.
                </p>
                <br />
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 rounded-xl cursor-pointer"
                    >

                        <div className="flex gap-4 flex-col md:flex-row ">
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-gray-800 dark:text-blue-600 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 text-center dark:text-white md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-600 hover:text-white text-black mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
      description: "Initial process for the project development.",
      title: "Discovery and Insight Gathering",
      ctaText: "expand",
      ctaLink: "",
      content: () => {
        return (
          <p>
            We begin every AI project by thoroughly understanding your business landscape and strategic objectives. Our expert team works closely with you to identify key challenges and opportunities, ensuring our AI development approach is perfectly aligned with your vision. <br /> <br /> This collaborative discovery process enables us to design intelligent solutions that address real-world problems while positioning your organization for sustainable growth and competitive advantage in the digital marketplace.
          </p>
        );
      },
    },
    {
      description: "Data is the pivot of solution",
      title: "Data collection and Preprocessing",
      ctaText: "expand",
      ctaLink: "",
      content: () => {
        return (
          <p>
            Our data specialists focus on acquiring and refining premium datasets that serve as the backbone of your AI solution. We implement rigorous data quality protocols to ensure information accuracy, consistency, and relevance for your specific use case. <br /> <br /> Through advanced preprocessing techniques, we transform raw data into structured, machine-readable formats that enable optimal model performance. This meticulous approach establishes a robust foundation for building reliable and effective AI applications.
          </p>
        );
      },
    },
  
    {
      description: "Custom-built intelligence for your needs",
      title: "AI model Creation & Innovation",
      ctaText: "expand",
      ctaLink: "",
      content: () => {
        return (
          <p>
            Our team of AI architects develops bespoke intelligent models tailored to your unique business requirements. We leverage cutting-edge technologies including deep learning, computer vision, and natural language processing to create solutions that drive operational excellence. <br /> <br /> Each model is engineered with scalability and adaptability in mind, ensuring your AI investment grows with your business while maintaining peak performance and delivering measurable value across your organization.
          </p>
        );
      },
    },
    {
      description: "Refining performance through rigorous testing",
      title: "Training & Precision Optimization",
      ctaText: "expand",
      ctaLink: "",
      content: () => {
        return (
          <p>
            We subject your AI models to comprehensive training regimens using advanced optimization techniques and validation methodologies. Our iterative refinement process ensures maximum accuracy, reliability, and real-world applicability of your intelligent systems. <br /> <br /> Through continuous performance monitoring and algorithm enhancement, we deliver AI solutions that consistently exceed expectations while adapting to evolving business conditions and maintaining exceptional operational standards.
          </p>
        );
      },
    },
    {
      description: "Smooth deployment into your ecosystem",
      title: "Seamless Integration & Launch",
      ctaText: "expand",
      ctaLink: "",
      content: () => {
        return (
          <p>
            We orchestrate flawless AI system deployment within your existing technology infrastructure, minimizing disruption while maximizing value realization. Our integration specialists ensure compatibility, security, and optimal performance across all operational touchpoints. <br /> <br /> With emphasis on intuitive user experiences and robust architecture, we guarantee that your AI solution enhances productivity from day one while providing the flexibility to scale and evolve with your business needs.
          </p>
        );
      },
    },
    {
      description: "Ongoing support and system evolution",
      title: "Continuous Monitoring, Support & Evolution",
      ctaText: "expand",
      ctaLink: "",
      content: () => {
        return (
          <p>
            Our partnership extends beyond deployment through comprehensive monitoring, maintenance, and enhancement services. We provide proactive system oversight, performance optimization, and strategic upgrades to ensure your AI solutions remain cutting-edge and effective. <br /> <br /> As your dedicated AI development partner, we continuously evolve your systems to meet emerging challenges and opportunities, ensuring sustained competitive advantage and long-term return on your AI investment.
          </p>
        );
      },
    },
  ];