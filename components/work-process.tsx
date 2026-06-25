import React from "react";
import Image from "next/image";

const steps = [
  {
    img: "/images/process-1.jpg",
    step: "01",
    title: "Choose a Service",
    desc: "Choose the service you need to get started and kick off your project with us.",
  },
  {
    img: "/images/process-2.jpg",
    step: "02",
    title: "Schedule a Meeting",
    desc: "Schedule a meeting to discuss your requirements and align on the best approach forward.",
  },
  {
    img: "/images/process-3.jpg",
    step: "03",
    title: "Receive Custom Plan",
    desc: "Receive a custom plan tailored to your business needs, goals, and project requirements.",
  },
  {
    img: "/images/process-4.jpg",
    step: "04",
    title: "Let's Make it Happen",
    desc: "We're ready—let's build, launch, and grow your business together.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
            How It Work
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Check Out Our Work Process
          </h2>
          <p className="max-w-xl mx-auto text-gray-300 text-base">
          </p>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            We keep things simple - listen to your goals, plan together, and bring your ideas to life with ease.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="flex flex-col items-center text-center flex-1 relative group cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto relative group-hover:border-red-600 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-red-500/25 group-hover:scale-110">
                  <Image
                    src={step.img}
                    alt={step.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full border-4 border-white shadow group-hover:bg-blue-600 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  {step.step}
                </span>
              </div>

              <h3 className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold mt-2 mb-2 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-105 dark:group-hover:text-blue-400">
                {step.title}
              </h3>

              <p className="h-14 text-gray-600 dark:text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300 group-hover:scale-105">
                {step.desc}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:scale-110">
                  <svg
                    width="60"
                    height="24"
                    fill="none"
                    viewBox="0 0 60 24"
                    className="transition-colors duration-300"
                  >
                    <path
                      d="M0 12h56m0 0l-6-6m6 6l-6 6"
                      stroke="#b0b7c3"
                      strokeWidth="2"
                      className="group-hover:stroke-blue-500 dark:stroke-gray-600 dark:group-hover:stroke-blue-400"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

