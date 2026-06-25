'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Boxes,
  Layers3,
  RefreshCcw,
  CircleCheck,
  Rocket,
} from 'lucide-react';

const STEPS = [
  {
    key: 'Discover & Assess',
    label: 'Discover & Assess',
    icon: Boxes,
    iconColor: 'text-yellow-500',
    heading: 'Step 1: Content Discovery & Assessment',
    description: (
      <div className="text-justify leading-relaxed">
        We analyze objectives, audience, existing content, platforms, and
        compliance requirements to define scope and success criteria.
      </div>
    ),
    image: '/images/services/annie-spratt-QckxruozjRg-unsplash.jpg',
  },
  {
    key: 'Plan & Strategize',
    label: 'Plan & Strategize',
    icon: Layers3,
    iconColor: 'text-blue-500',
    heading: 'Step 2: Strategy & Content Planning',
    description: (
      <div className="text-justify leading-relaxed">
        We create a content strategy, learning approach, format selection,
        timelines, and delivery roadmap aligned with your goals.
      </div>
    ),
    image: '/images/services/christopher-gower-m_HRfLhgABo-unsplash.jpg',
  },
  {
    key: 'Develop & Convert',
    label: 'Develop & Convert',
    icon: RefreshCcw,
    iconColor: 'text-green-500',
    heading: 'Step 3: Content Development & Conversion',
    description: (
      <div className="text-justify leading-relaxed">
        We develop, convert, and structure content using industry standards,
        ensuring accuracy, consistency, and digital readiness.
      </div>
    ),
    image: '/images/services/web-design-hero.jpg',
  },
  {
    key: 'Test & Validate',
    label: 'Test & Validate',
    icon: CircleCheck,
    iconColor: 'text-purple-500',
    heading: 'Step 4: Quality, Accessibility & Validation',
    description: (
      <div className="text-justify leading-relaxed">
        We conduct thorough QA, accessibility testing, and platform validation
        to meet WCAG, technical, and functional requirements.
      </div>
    ),
    image: '/images/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg',
  },
  {
    key: 'Deploy & Support',
    label: 'Deploy & Support',
    icon: Rocket,
    iconColor: 'text-red-500',
    heading: 'Step 5: Deployment & Continuous Support',
    description: (
      <div className="text-justify leading-relaxed">
        We deploy content to target platforms, integrate systems, and provide
        ongoing support, updates, and optimization.
      </div>
    ),
    image: '/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg',
  },
];

export default function OurProvenProcess({
  steps = STEPS,
}: {
  steps?: typeof STEPS;
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 md:px-16 max-w-full overflow-x-hidden bg-white">
      <div className="text-center mb-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-red-600 dark:text-blue-400 font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
            OUR PROVEN PROCESS
          </span>
          <span className="text-[#000000]">
            Our Work Process to Transform Content into
          </span>
        </motion.h2>

        <div className="w-20 h-1 bg-red-600 mx-auto mb-3 rounded-full mt-3" />

        <motion.p
          className="text-base text-gray-600 max-w-xl mx-auto mt-1 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We follow a structured and collaborative process to design, develop,
          and deliver high-quality content solutions that are scalable,
          accessible, and aligned with learning and business objectives.
        </motion.p>
      </div>

      {/* Top Process Cards */}
      <div className="w-full overflow-x-auto pb-3">
        <div className="mx-auto flex min-w-max gap-6 px-1 md:px-0 md:justify-center">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = active === idx;

            return (
              <button
                key={step.key}
                onClick={() => setActive(idx)}
                type="button"
                className="focus:outline-none"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative flex h-[150px] w-[245px] flex-col items-center justify-center rounded-[22px] bg-white px-6 text-center transition-all duration-300 border
                    ${
                      isActive
                        ? 'border-[#bfc9d8] shadow-[0_8px_22px_rgba(15,23,42,0.08)]'
                        : 'border-[#d9dee7] shadow-[0_2px_10px_rgba(15,23,42,0.05)]'
                    }`}
                >
                  <div className="mb-5 flex items-center justify-center">
                    <Icon
                      className={`h-10 w-10 stroke-[1.9] ${step.iconColor}`}
                    />
                  </div>

                  <span
                    className={`text-[18px] font-semibold leading-snug transition-colors duration-300 ${
                      isActive ? 'text-blue-600' : 'text-[#0f172a]'
                    }`}
                  >
                    {step.label}
                  </span>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Detail Area */}
      <div className="flex flex-col md:flex-row gap-10 mt-10 items-center justify-center mx-auto max-w-6xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`text-${steps[active].key}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex-1 w-full md:w-1/2 min-w-[280px] text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">
              {steps[active].heading}
            </h3>
            <div className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {steps[active].description}
            </div>
          </motion.div>

          <motion.div
            key={`image-${steps[active].image}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex-1 w-full md:w-1/2 flex justify-center items-center"
          >
            <img
              src={steps[active].image}
              alt={steps[active].label}
              className="rounded-xl object-cover shadow-lg h-auto w-full md:h-72"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}