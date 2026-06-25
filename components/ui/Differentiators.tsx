"use client";

import React from "react";
import { motion } from "framer-motion";

type Differentiator = {
    image: string;
    title: string;
    description: string;
};

const differentiators: Differentiator[] = [
    {
        image: "/images/hack-capital-uv5_bsypFUM-unsplash.jpg",
        title: "Domain Knowledge",
        description:
            "Our team combines deep industry insights with advanced AI & ML expertise to craft solutions that solve real problems.",
    },
    {
        image: "/images/digital-content.jpg",
        title: "Agility & Flexibility",
        description:
            "We adapt quickly to evolving technologies and client needs, ensuring solutions that remain relevant and future-ready.",
    },
    {
        image: "/images/scott-graham-5fNmWej4tAA-unsplash.jpg",
        title: "Collaborative Approach",
        description:
            "We work as an extension of your team, aligning strategies with your business vision.",
    },
    {
        image: "/images/consultation-section.jpg",
        title: "Transparent Process",
        description:
            "Clear communication, detailed roadmaps, and measurable milestones—so you always know what’s next.",
    },
    {
        image: "/images/data-analytics.jpg",
        title: "Innovation with Responsibility",
        description:
            "We adopt the latest AI innovations while ensuring ethical, secure, and responsible deployment.",
    },
    {
        image: "/images/shoper-slLo94wES2M-unsplash.jpg",
        title: "Global Delivery Capability",
        description:
            "Experience serving startups, SMEs, and enterprises worldwide with scalable solutions tailored to diverse markets.",
    },
];


const Differentiators: React.FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <div className="text-center mb-8 md:mb-12">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
                        WHY CHOSE US              </h3>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                        Why Businesses Rely on Our Expertise              </h2>
                    <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
                    {/* Change: Wrapped the h3 tag in a new flex container to control its width
      and ensure it stays centered while having a maximum width.
    */}
                    <div className="flex justify-center mt-4">
                        {/* "text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed" */}
                        <h3 className=" max-w-5xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                            We don’t just deliver AI & ML solutions, we deliver measurable business impact.
                        </h3>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {differentiators.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.08 }} // ✅ only for entry animation
                            whileHover={{
                                scale: 1.04,
                                boxShadow: "0 4px 32px 0 rgba(30,64,175,0.10)",
                                borderColor: "#1e40af",
                                backgroundColor: "rgba(30,64,175,0.04)",
                                transition: { duration: 0.2, ease: "easeOut" }, // ✅ snappy hover
                            }}
                            whileTap={{ scale: 0.98 }} // ✅ quick click/tap effect
                            className="flex flex-col text-left bg-white/80  dark:bg-gray-800 rounded-2xl 
             border border-blue-100 shadow-md overflow-hidden 
             transition-all duration-200"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
