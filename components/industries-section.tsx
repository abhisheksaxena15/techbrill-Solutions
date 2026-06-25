import React from "react";
import {
  Car,
  CreditCard,
  GraduationCap,
  BookOpen,
  Heart,
  ShoppingBag,
  ShoppingCart,
  Plane,
  Truck,
  HomeIcon,
  Monitor,
  Cpu
} from "lucide-react";

export default function IndustriesSection() {
  return (
    <section
      className="relative py-0 px-0 w-full min-h-[60vh] md:min-h-[75vh] overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: 'url(/images/services/mobile-app-hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 w-full max-w-none">
        <div className="text-center pt-8 md:pt-12 pb-6 md:pb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
            Industry Expertise
          </h3>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white md:text-4xl">

            Delivering Tailored Technology Solutions Across Industries
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-300 text-base mt-4">
          From startups to enterprises, we provide industry-focused technology solutions that drive transformation, performance, and measurable results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 w-full">
          {[
            {
              label: 'Automotive',
              icon: <Car className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'AI-driven design automation, predictive maintenance, and autonomous systems.'
            },
            {
              label: 'Banking & Finance',
              icon: <CreditCard className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Automated reporting, risk assessment, and personalized financial services.'
            },
            {
              label: 'Education',
              icon: <GraduationCap className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Personalized learning paths, automated assessment, and content generation.'
            },
            {
              label: 'Publishing',
              icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Content creation, editing automation, and personalized publishing.'
            },
            {
              label: 'Healthcare',
              icon: <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Medical imaging analysis, drug discovery, and patient care optimization.'
            },
            {
              label: 'Retail',
              icon: <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Inventory optimization, customer experience, and demand forecasting.'
            },
            {
              label: 'eCommerce',
              icon: <ShoppingCart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Product recommendations, dynamic pricing, and personalized marketing.'
            },
            {
              label: 'Travel',
              icon: <Plane className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Route optimization, customer service automation, and experience personalization.'
            },
            {
              label: 'Logistics & Transportation',
              icon: <Truck className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Supply chain optimization, route planning, and predictive maintenance.'
            },
            {
              label: 'Real Estate',
              icon: <HomeIcon className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Property valuation, market analysis, and virtual property tours.'
            },
            {
              label: 'Media & Entertainment',
              icon: <Monitor className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Content creation, audience analytics, and personalized recommendations.'
            },
            {
              label: 'Hi-Tech',
              icon: <Cpu className="w-10 h-10 md:w-12 md:h-12 mx-auto text-blue-600 group-hover:text-white" />,
              desc: 'Product development, quality assurance, and innovation acceleration.'
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