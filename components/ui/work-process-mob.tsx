
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Layout, PenTool, Code, Rocket } from 'lucide-react';

const STEPS = [
    {
        key: "Planning & Strategy",
        label: "Planning & Strategy",
        icon: (
            // Add a wrapper div with a defined height and hover effect
            // This wrapper provides a consistent space for the icon to animate within.
            <div className="flex flex-col items-center justify-center h-24">
                <Lightbulb className="w-11 h-11 text-yellow-500 hover:scale-135 transition-transform" />

            </div>
        ),
        heading: "Step 1: Planning & Strategy",
        description: (
            <div className="text-justify leading-relaxed">
                We develop a detailed roadmap, outlining site structure, features, and design flow. This stage aligns business goals with user needs, sets timelines, allocates resources, and anticipates challenges. Clear planning ensures an efficient workflow, minimizes risks, and lays the foundation for a smooth, successful web development journey.
            </div>
        ),
        image: "/images/services/annie-spratt-QckxruozjRg-unsplash.jpg",
    },
    {
        key: "Design & Prototyping ",
        label: "Design & Prototyping ",
        icon: (
            // New wrapper div for the icon and label
            <div className="flex flex-col items-center justify-center h-24">
                <Layout className="w-11 h-12 text-blue-500 hover:scale-135 transition-transform" />

            </div>
        ),
        heading: "Step 2: Design & Prototyping ",
        description: (
            <div className="text-justify leading-relaxed">
                We transform ideas into wireframes and interactive mockups, showcasing layout, navigation, and visual style. This stage refines aesthetics, usability, and brand consistency, ensuring the design meets user expectations. Feedback-driven iterations guarantee a polished, intuitive interface before moving to development, reducing revisions and ensuring a smooth build process.
            </div>
        ),
        image: "/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    },
    {
        key: "development",
        label: "Development",
        icon: (
            // New wrapper div for the icon and label
            <div className="flex flex-col items-center justify-center h-24">
                <Code className="w-11 h-12 text-green-500 hover:scale-135 transition-transform" />

            </div>
        ),
        heading: "Step 4: Development",
        description: (
            <div className="text-justify leading-relaxed">
                Now the magic happens behind the scenes. Our developers transform approved designs into a fully functional, responsive website with clean, scalable code. This stage covers front-end and back-end development, database integration, and feature implementation — ensuring performance, security, and cross-device compatibility.      </div>
        ),
        image: "/images/services/web-design-hero.jpg",
    },
    {
        key: "QA & Testing",
        label: "QA & Testing",
        icon: (
            // New wrapper div for the icon and label
            <div className="flex flex-col items-center justify-center h-24">
                <PenTool className="w-11 h-12 text-purple-500 hover:scale-135 transition-transform" />

            </div>
        ),
        heading: "Step 3: QA & Testing",
        description: (
            <div className="text-justify leading-relaxed">
                We perform rigorous testing to ensure flawless functionality, performance, and security across all devices and browsers. From usability checks and bug fixes to compatibility testing, our QA process guarantees a seamless, accessible, and error-free user experience before launch.      </div>
        ),
        image: "/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg",
    },
    {
        key: "launch",
        label: "Launch & Support",
        icon: (
            // New wrapper div for the icon and label
            <div className="flex flex-col items-center justify-center h-24">
                <Rocket className="w-11 h-12 text-red-500 hover:scale-135 transition-transform" />

            </div>
        ),
        heading: "Step 5: Launch & Support",
        description: (
            <div className="text-justify leading-relaxed">
                Our partnership doesn&#39;t end at launch. We ensure a smooth go-live, then continue supporting you with ongoing consultancy, maintenance, and optimizations to keep your website secure, updated, and high-performing. From refining features to implementing growth strategies, we’re committed to helping your online presence thrive and your business succeed at every stage.
            </div>
        ),
        image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
    },
];

export default function WorkProcessMob({ steps = STEPS }: { steps?: typeof STEPS }) {
    const [active, setActive] = useState(0);

    return (


        <section className="dark:bg-gray-900 py-20 px-6 md:px-16 max-w-full overflow-x-hidden bg-white">
        
              <div className="text-center mb-10">
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="text-red-600 dark:text-red-600 font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
                    OUR PROVEN PROCESS
                  </span>
                  Our Work Process to Build Digital Success
                </motion.h2>
                <div className=" w-20 h-1 bg-red-600 mx-auto mb-3  mt-3" />
                <motion.p
                  className="dark:text-white text-base text-gray-600   max-w-xl mx-auto mt-1 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
        A seamless journey from concept to launch, blending strategy, creativity, and technology to turn ideas into reality efficiently.        </motion.p>
              </div>
              {/* Tabs */}
                    <div
                      className="flex gap-4 md:gap-6 border-b dark:border-gray-700 pb-4 pl-4 pr-4 md:pl-0 md:pr-0 
                      justify-start md:justify-center overflow-x-auto snap-x w-full"
                    >
                      {steps.map((step, idx) => (
                        <button
                          key={step.key}
                          className={`flex flex-col items-center px-2 md:px-4 pb-2 focus:outline-none transition relative group snap-center min-w-[72px] flex-shrink-0
                            ${active === idx
                              ? "text-red-600 dark:text-red-400 font-semibold"
                              : "text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300"
                            }`}
                          onClick={() => setActive(idx)}
                          type="button"
                        >
                          <motion.div whileHover={{ scale: 1.18, y: -4 }} className="mb-1">
                            {step.icon}
                          </motion.div>
                          <span className="text-sm md:text-base">{step.label}</span>
                          {active === idx && (
                            <motion.div
                              layoutId="underline"
                              className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-400 dark:from-red-400 dark:via-red-500 dark:to-red-300 shadow-md"
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
              
                    {/* Details lower pane */}
                    <div className="flex flex-col md:flex-row gap-8 mt-10 items-center justify-between mx-auto max-w-6xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={steps[active].key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 w-full md:w-1/2 min-w-[220px]"
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-gray-200 text-gray-800">
                      {steps[active].heading}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
                      {steps[active].description}
                    </div>
                  </motion.div>
                  <motion.div
                    key={steps[active].image}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 w-full md:w-1/2 flex justify-center items-center"
                  >
                    <img
                      src={steps[active].image}
                      alt={steps[active].label}
                      className="rounded-xl object-cover shadow-md h-auto w-full md:h-72"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Expandable Detail Area */}
              
            </section>
    );
}
//