"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What types of digital content solutions do you provide?",
    answer:
      "We provide a wide range of digital content solutions including content digitization, eLearning modules, multimedia content, accessibility enhancements, content management workflows, and platform-ready publishing solutions tailored to business and learning needs.",
  },
  {
    question: "Can you convert existing content into digital formats?",
    answer:
      "Yes, we help transform existing print, legacy, or static content into structured and engaging digital formats such as eBooks, interactive learning modules, HTML5 content, mobile-friendly assets, and accessible digital experiences.",
  },
  {
    question: "Do you ensure accessibility and standards compliance?",
    answer:
      "Yes, we develop digital content with a strong focus on accessibility, usability, and industry standards. Our solutions can be aligned with requirements such as WCAG, responsive design principles, and platform-specific compliance needs.",
  },
  {
    question: "Can your solutions support large-scale enterprise content needs?",
    answer:
      "Absolutely. Our digital content solutions are designed to be scalable, secure, and efficient, making them suitable for enterprises managing large volumes of learning, publishing, training, or knowledge-based content across multiple platforms.",
  },
  {
    question: "Do you provide ongoing support after delivery?",
    answer:
      "Yes, we offer ongoing support and maintenance services to help clients manage updates, enhancements, performance improvements, and evolving business requirements after the initial delivery.",
  },
];

const FaqSectionDigitalContent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
            FAQs
          </h3>

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked, Clearly Answered
          </h2>

          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 rounded-full"></div>

          <div className="flex justify-center mt-5">
            <p className="max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed">
              Get clear answers to common questions about our digital content
              solutions, delivery approach, and support capabilities.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 px-5 md:px-7 py-5 md:py-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-gray-700">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-7 pb-5 md:pb-6 border-t border-gray-100 bg-white">
                    <p className="pt-4 text-sm md:text-base leading-7 text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSectionDigitalContent;