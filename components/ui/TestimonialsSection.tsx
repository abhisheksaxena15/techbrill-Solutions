"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const testimonials = [
    {
      initials: "JD",
      name: "Jane Doe",
      role: "CEO, Innovate Solutions",
      review:
        "Techbrill transformed our online presence. Their expertise and dedication are unmatched. We've seen a significant increase in engagement and conversions since partnering with them.",
      location: "Kothri Kalan, MP",
      color: "bg-blue-600 dark:bg-blue-500",
    },
    {
      initials: "SM",
      name: "Sameer Malik",
      role: "Founder, Global Reach",
      review:
        "The team at Techbrill delivered beyond our expectations. Their strategic insights and flawless execution have been instrumental in our recent growth. Highly recommended!",
      location: "New Delhi, India",
      color: "bg-red-600 dark:bg-red-500",
    },
    {
      initials: "AS",
      name: "Ananya Sharma",
      role: "Marketing Director, FutureTech",
      review:
        "From concept to completion, Techbrill was a pleasure to work with. Their deep understanding of technology and commitment to our vision made all the difference.",
      location: "Bengaluru, India",
      color: "bg-green-600 dark:bg-green-500",
    },
    {
      initials: "AR",
      name: "Abhay Rohilla",
      role: "Marketing Director, FutureTech",
      review:
        "From concept to completion, Techbrill was a pleasure to work with. Their deep understanding of technology and commitment to our vision made all the difference.",
      location: "Bengaluru, India",
      color: "bg-green-600 dark:bg-green-500",
    },
    {
      initials: "AM",
      name: "Ankur Mittal",
      role: "Senior Manager, FutureTech",
       review:
        "From concept to completion, Techbrill was a pleasure to work with. Their deep understanding of technology and commitment to our vision made all the difference.",
      location: "Bengaluru, India",
      color: "bg-green-600 dark:bg-green-500",
    },
    {
      initials: "AS",
      name: "Ananya Sharma",
      role: "Marketing Director, FutureTech",
      review:
        "From concept to completion, Techbrill was a pleasure to work with. Their deep understanding of technology and commitment to our vision made all the difference.",
      location: "Bengaluru, India",
      color: "bg-green-600 dark:bg-green-500",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm block mb-2">
            What Our Clients Say
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 leading-tight text-gray-900 dark:text-white">
            Trusted Voices, Real Results
          </h2>
          <div className="w-20 h-1 bg-[#DC2626] mb-6 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 text-base max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Hear directly from the businesses we&apos;ve helped empower and transform.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-visible">
          <button className="testimonial-prev hidden md:flex absolute left-[-20px] lg:left-[-32px] top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:scale-105 transition">
            <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>

          <button className="testimonial-next hidden md:flex absolute right-[-20px] lg:right-[-32px] top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:scale-105 transition">
            <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-200" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={700}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-0 md:px-14"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-700/20 dark:hover:shadow-gray-700/40 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                    &apos;{item.review}&apos;
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}