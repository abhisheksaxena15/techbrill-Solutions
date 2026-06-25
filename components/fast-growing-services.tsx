"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function FastGrowingServices() {
  const services = [
    {
      title: "Search Engine Optimization",
      description:
        "Improve your website's visibility in search engine results pages (SERPs) and drive organic traffic.",
      icon: "/icons/search.svg",
      image: "/images/services/christina-wocintechchat-com-qZYNQp_Lm3o-unsplash.jpg",
      link: "/services/digital-marketing/search-engine-optimization",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build brand awareness, engage with your audience, and drive leads through strategic social media campaigns.",
      icon: "/icons/share-2.svg",
      image: "/images/services/social-media-marketing-hero.avif",
      link: "/services/digital-marketing/social-media-marketing",
    },
    {
      title: "Content Marketing",
      description:
        "Create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience.",
      icon: "/icons/file-text.svg",
      image: "/images/services/myriam-jessier-eveI7MOcSmw-unsplash.jpg",
      link: "/services/digital-marketing/content-marketing",
    },
    {
      title: "Design & Print Media",
      description:
        "Create visually appealing designs for both digital and print media to enhance your brand identity.",
      icon: "/icons/pen-tool.svg",
      image: "/images/services/flipsnack-YoNWSk5NnUE-unsplash.jpg",
      link: "/services/digital-marketing/design-print-media",
    },
    {
      title: "Web Analytics",
      description:
        "Track, analyze, and report on website traffic to gain insights and make data-driven decisions.",
      icon: "/icons/bar-chart.svg",
      image: "/images/services/austin-distel-gUIJ0YszPig-unsplash.jpg",
      link: "/services/digital-marketing/web-analytics",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerControls = useAnimation();
  const cardControls = useAnimation();

  const [currentOffset, setCurrentOffset] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [cardWidth, setCardWidth] = useState(320); // Default card width
  const [visibleCards, setVisibleCards] = useState(3); // Default visible cards
  const gapWidth = 32; // Gap between cards (8 * 4 = 32px for gap-8)

  // Calculate drag constraints
  const calculateConstraints = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalContentWidth =
        services.length * cardWidth + (services.length - 1) * gapWidth;
      const maxScroll = Math.max(0, totalContentWidth - containerWidth);

      setDragConstraints({
        left: -maxScroll,
        right: 0,
      });

      // Reset current offset if it's out of bounds after resize
      if (currentOffset < -maxScroll) {
        setCurrentOffset(-maxScroll);
        containerControls.start({
          x: -maxScroll,
          transition: { duration: 0.3 },
        });
      }
    }
  }, [services.length, cardWidth, gapWidth, containerControls, currentOffset]);

  // Calculate card width and visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setCardWidth(280);
        setVisibleCards(1);
      } else if (width < 768) {
        // Small tablet
        setCardWidth(300);
        setVisibleCards(2);
      } else if (width < 1024) {
        // Tablet
        setCardWidth(310);
        setVisibleCards(2);
      } else if (width < 1280) {
        // Small desktop
        setCardWidth(320);
        setVisibleCards(3);
      } else {
        // Large desktop
        setCardWidth(320);
        setVisibleCards(3);
      }

      // Recalculate constraints after size change
      calculateConstraints();
    };

    // Initial calculation
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateConstraints]);

  useEffect(() => {
    calculateConstraints();
  }, [calculateConstraints]);

  const handleMouseEnter = () => {
    cardControls.start({
      scale: 1.03,
      transition: { duration: 0.2 },
    });
  };

  const handleMouseLeave = () => {
    cardControls.start({ scale: 1, transition: { duration: 0.2 } });
  };

  const slideLeft = () => {
    const slideAmount = cardWidth + gapWidth;
    const newOffset = Math.min(currentOffset + slideAmount, 0);
    setCurrentOffset(newOffset);
    containerControls.start({
      x: newOffset,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  const slideRight = () => {
    const slideAmount = cardWidth + gapWidth;
    const maxOffset = dragConstraints.left;
    const newOffset = Math.max(currentOffset - slideAmount, maxOffset);
    setCurrentOffset(newOffset);
    containerControls.start({
      x: newOffset,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    const newOffset = currentOffset + info.offset.x;
    const clampedOffset = Math.max(Math.min(newOffset, 0), dragConstraints.left);
    setCurrentOffset(clampedOffset);
    containerControls.start({
      x: clampedOffset,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#f8fafc] dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-600">
              Fast Growing Services
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Boosting Business Performance Through{" "}Digital Marketing
              
            </h2>
            <div className="h-1 w-20 bg-red-600 dark:bg-red-600 mx-auto mt-4"></div>
            <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Explore our result-driven digital marketing services designed to
              boost brand visibility, attract customers, and accelerate business
              growth in today’s fast-paced digital world.
            </p>
          </motion.div>
        </div>

        {/* Slider Container */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={containerRef}
        >
          <motion.div
            className="flex flex-row gap-4 sm:gap-6 md:gap-8 py-4"
            animate={containerControls}
            drag="x"
            style={{ x: 0 }}
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col border border-blue-600 dark:border-blue-400 group"
                style={{ width: `${cardWidth}px` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={cardControls}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-40 sm:h-44 md:h-48 lg:h-56 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < visibleCards}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 md:mb-3">
                    <span className="text-gray-700 dark:text-gray-200">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-none min-h-[150px]">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="text-red-700 dark:text-red-400 font-medium flex items-center group mt-auto text-sm sm:text-base"
                  >
                    Read More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatDelay: 3,
                        duration: 0.8,
                      }}
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-4">
          <button
            onClick={slideLeft}
            aria-label="Previous services"
            className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 group"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>
          <button
            onClick={slideRight}
            aria-label="Next services"
            className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 group"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>
        </div>

        
      </div>
    </section>
  );
}
