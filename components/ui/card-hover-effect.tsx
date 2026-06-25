"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
// import { motion } from "framer-motion";

import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    points: Array<string>;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-800/[0.8] block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                }}
                />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardPoints points={item.points} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 shadow rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent group-hover:border-slate-700 relative z-20", 
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-xl font-semibold mb-4 text-black dark:text-white", className)}>
      {children}
    </h3>
  );
};

//Implement CardPoints display points under the title
export const CardPoints = ({
  points,
  className,
}: {
  points: Array<string>;
  className?: string;
}) => {
  return (
    <ul className={cn("space-y-3 pl-5 text-gray-700 dark:text-gray-300 list-disc", className)}>
      {points.map((point, index) => (
        <li key={index}>
          {point}
        </li>
      ))}
    </ul>
  );
};


