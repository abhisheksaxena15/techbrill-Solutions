'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MoveRight, MoveLeft, TrendingUp, Users, Target, Award, Clock, Building } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  duration: string;
  industry: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
}

interface CaseStudiesCarouselProps {
  caseStudies: CaseStudy[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CaseStudiesCarousel: React.FC<CaseStudiesCarouselProps> = ({
  caseStudies,
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(autoPlay);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, autoPlayInterval, caseStudies.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % caseStudies.length;
      cards.push(caseStudies[index]);
    }
    return cards;
  };

  // const visibleCards = getVisibleCards();

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Cards Container */}
      <div className="overflow-hidden py-2 pb-[2.0rem]">
        <motion.div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`
          }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title + index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 dark:text-gray-200">
                      <Building className="w-3 h-3" />
                      {study.industry}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      <Clock className="w-3 h-3" />
                      {study.duration}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {study.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Controls - Bottom */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        {/* Previous Button */}
        <motion.button
          onClick={goToPrevious}
          className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MoveLeft className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </motion.button>

        {/* Next Button */}
        <motion.button
          onClick={goToNext}
          className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MoveRight className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
        </motion.button>
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;