import React from "react";
import {
  CreditCard,
  GraduationCap,
  Heart,
  ShoppingCart,
  Plane,
  Truck,
  Monitor,
  Cpu,
  Shield,
  PhoneCall
} from "lucide-react";

export default function IndustriesSectionQA() {
  return (
    <section
      className="relative py-0 px-0 w-full min-h-[60vh] md:min-h-[75vh] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-none">
        <div className="text-center pt-8 md:pt-12 pb-6 md:pb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-blue-400">
            Industry Expertise
          </h3>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-black dark:text-white  md:text-4xl">
            Delivering Tailored Technology Solutions Across Industries
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-base">
          From startups to enterprises, we provide industry-focused technology solutions that drive transformation, performance, and measurable results.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 grid-rows-5 lg:grid-rows-2 gap-2 w-full">
          {[
            {
              label: 'Fintech',
              icon: <CreditCard className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Healthcare',
              icon: <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Retails & eCommerce',
              icon: <ShoppingCart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Telecom',
              icon: <PhoneCall className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Edtech',
              icon: <GraduationCap className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Travel & hospitality',
              icon: <Plane className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Logistics',
              icon: <Truck className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Media & Entertainment',
              icon: <Monitor className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Insurance',
              icon: <Shield className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
            {
              label: 'Manufacturing',
              icon: <Cpu className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
            },
          ].map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[200px] w-full border border-gray-200 transition-all duration-200 cursor-pointer group bg-white hover:bg-blue-900 dark:hover:bg-blue-700 dark:bg-gray-900 dark:border-gray-700 px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8"
            >
              <span className="mb-2 transition-all duration-200 text-blue-900 dark:text-white group-hover:text-white">
                {item.icon}
              </span>
              <span className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide text-blue-900 group-hover:text-white transition-all duration-200 text-center dark:text-white">
                {item.label}
              </span>
              {/* <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 group-hover:text-white text-center mt-1 px-1 sm:px-2 dark:text-gray-400">
                {item.desc}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}