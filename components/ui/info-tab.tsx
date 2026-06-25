'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type InfoTab = {
  title: string;
  description: string;
  icon?: React.ReactNode; // You can use a Lucide icon or an <Image>
};

type InfoTabsProps = {
  items: InfoTab[];
};

const tabListGradient =
  'bg-gradient-to-br from-[#3bb6ff] via-[#1e90ff] to-[#005bea]';

export const InfoTabs: React.FC<InfoTabsProps> = ({ items }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className="flex flex-col md:flex-row rounded-3xl bg-black overflow-hidden border border-blue-400 dark:border-blue-400/40 shadow-xl"
    >
      {/* Left: Tab List */}
      <div
        className={`md:w-1/2 w-full p-8 ${tabListGradient} flex flex-col justify-center`}
      >
        {items.map((item, idx) => (
          <button
            key={item.title}
            className={`flex items-center gap-3 py-4 px-2 text-left transition-all duration-200 border-b border-white/20 last:border-b-0
              ${selected === idx
                ? 'text-white font-bold text-xl'
                : 'text-white/70 font-semibold text-lg'
              }`}
            style={{
              outline: 'none',
              background: 'none',
              width: '100%',
            }}
            onClick={() => setSelected(idx)}
            role="tab"
            aria-selected={selected === idx}
            aria-controls={`tabpanel-${idx}`}
            id={`tab-${idx}`}
          >
            <span className={`mr-4 text-2xl font-mono ${selected === idx ? 'opacity-100' : 'opacity-60'}`}>
              {String(idx + 1).padStart(2, '0')}.
            </span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* Right: Tab Content */}
      <div className="md:w-1/2 w-full bg-gray-50 dark:bg-black flex flex-col justify-center items-center p-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {items[selected].icon && (
                <div
                className='mb-5'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 52,
                      height: 50,
                      borderRadius: 16,
                      background: 'linear-gradient(180deg, #3bb6ff 0%, #005bea 100%)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      fontSize: 32,
                      color: '#fff',
                    }}
                  >
                    {items[selected].icon}
                  </div>
            )}
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              {items[selected].title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-neutral-200">{items[selected].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};