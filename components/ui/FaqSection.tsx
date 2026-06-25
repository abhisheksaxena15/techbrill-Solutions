"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
    question: string;
    answer: string;
};

const faqData: FaqItem[] = [
    {
        question: "What’s the difference between AI and ML?",
        answer:
            "AI enables machines to mimic human intelligence, while ML focuses on algorithms that learn from data.",
    },
    {
        question: "How long does it take to build an AI/ML solution?",
        answer:
            "It depends on complexity, but most projects range from 6–12 weeks.",
    },
    {
        question: "Do you provide post-deployment support?",
        answer:
            "Yes, we offer continuous monitoring, optimization, and maintenance.",
    },
];

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-100 py-12 px-6 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
                        FAQS
                    </h3>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                        Frequently Asked, Clearly Answered
                    </h2>
                    <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>

                    <div className="flex justify-center mt-4">
                        <h3 className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base">
                            Your most important questions, answered with clarity and detail.
                        </h3>
                    </div>
                </div>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-600 hover:bg-gray-50 transition"
                            >
                                {faq.question}
                                <span className="text-xl font-bold text-black dark:text-gray-200">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t text-gray-900 dark:bg-gray-600 text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
