import React from "react";
import Image from "next/image";

export default function ConsultationSection({
  bgImage = "/images/services/web-design-hero.jpg",
}) {
  return (
    <section className="relative min-h-[70vh] w-full md:py-16">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Consultation Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Gradient Overlay */}
      {/* Gradient Overlay */}
      {/* Gradient Overlay */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/90 via-black/90 to-red-700/70" />


      {/* Container */}
      <div className="relative z-20 container mx-auto flex flex-col md:flex-row px-6 md:px-12">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col justify-center text-white py-12 md:pr-12">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-6">
            Let&#39;s Build Your Next Mobile App

          </h2>
          <div className="w-20 h-1  bg-gray-100 rounded-full mb-4" />
          <p className="text-sm md:text-base text-gray-200 max-w-lg">
            Partner with our expert team to design, develop, and deliver scalable mobile apps tailored to your business goals.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 flex items-center justify-center py-12 md:pl-8">
          <form className="w-full max-w-xl space-y-5 text-white">
            {/* Form Heading */}
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Share Your Project Requirements with Us!
            </h3>

            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="flex-1 bg-transparent border border-white/50 px-4 py-3 rounded outline-none focus:border-red-400"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="flex-1 bg-transparent border border-white/50 px-4 py-3 rounded outline-none focus:border-red-400"
                required
              />
            </div>

            {/* Phone + Company */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone*"
                className="flex-1 bg-transparent border border-white/50 px-4 py-3 rounded outline-none focus:border-red-400"
                required
              />
              <input
                type="text"
                placeholder="Company*"
                className="flex-1 bg-transparent border border-white/50 px-4 py-3 rounded outline-none focus:border-red-400"
              />
            </div>

            {/* Message */}
            <textarea
              rows={4}
              placeholder="How can I help you?"
              className="w-full bg-transparent border border-white/50 px-4 py-3 rounded outline-none focus:border-red-400"
              required
            />

            {/* Checkbox */}
            {/* <label className="flex items-start gap-2 text-xs text-gray-200 leading-snug">
              <input type="checkbox" className="mt-1 accent-red-600" />
              Subscribe to our resources to receive strategy guides, industry
              insights, trend reports, and more in your inbox!
            </label> */}

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
