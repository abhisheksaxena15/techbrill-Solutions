"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techTabs = [
  {
    label: "SEO & Analytics Tools",
    skills: [
      { name: "Google Analytics", icon: <Icon icon="logos:google-analytics" className="w-7 h-7" /> },
      { name: "Google Search Console", icon: <Icon icon="logos:google" className="w-7 h-7" /> },
      { name: "SEMrush", icon: <Icon icon="simple-icons:semrush" className="w-7 h-7" /> },
      { name: "Ahrefs", icon: <Icon icon="simple-icons:ahrefs" className="w-7 h-7" /> },
      { name: "Screaming Frog", icon: <Icon icon="mdi:spider" className="w-7 h-7" /> },
      { name: "Moz", icon: <Icon icon="simple-icons:moz" className="w-7 h-7" /> },
      { name: "GTMetrix", icon: <Icon icon="mdi:speedometer" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Technical SEO Tools",
    skills: [
      { name: "Schema Markup", icon: <Icon icon="mdi:code-json" className="w-7 h-7" /> },
      { name: "Core Web Vitals", icon: <Icon icon="logos:google" className="w-7 h-7" /> },
      { name: "Lighthouse", icon: <Icon icon="logos:lighthouse" className="w-7 h-7" /> },
      { name: "PageSpeed Insights", icon: <Icon icon="mdi:speedometer-medium" className="w-7 h-7" /> },
      { name: "XML Sitemaps", icon: <Icon icon="mdi:sitemap" className="w-7 h-7" /> },
      { name: "Robots.txt", icon: <Icon icon="mdi:robot" className="w-7 h-7" /> },
      { name: "Canonical URLs", icon: <Icon icon="mdi:link-variant" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Frontend Development",
    skills: [
      { name: "Next.js", icon: <Icon icon="logos:nextjs-icon" className="w-7 h-7" /> },
      { name: "React", icon: <Icon icon="logos:react" className="w-7 h-7" /> },
      { name: "HTML5", icon: <Icon icon="logos:html-5" className="w-7 h-7" /> },
      { name: "TypeScript", icon: <Icon icon="logos:typescript-icon" className="w-7 h-7" /> },
      { name: "Tailwind CSS", icon: <Icon icon="logos:tailwindcss-icon" className="w-7 h-7" /> },
      { name: "CSS3", icon: <Icon icon="logos:css-3" className="w-7 h-7" /> },
      { name: "Sass", icon: <Icon icon="logos:sass" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Content & Marketing SEO",
    skills: [
      { name: "WordPress", icon: <Icon icon="logos:wordpress-icon" className="w-7 h-7" /> },
      { name: "Contentful", icon: <Icon icon="logos:contentful" className="w-7 h-7" /> },
      { name: "Strapi", icon: <Icon icon="logos:strapi-icon" className="w-7 h-7" /> },
      { name: "Mailchimp", icon: <Icon icon="logos:mailchimp" className="w-7 h-7" /> },
      { name: "HubSpot", icon: <Icon icon="logos:hubspot" className="w-7 h-7" /> },
      { name: "Yoast SEO", icon: <Icon icon="simple-icons:yoast" className="w-7 h-7" /> },
      { name: "Google Ads", icon: <Icon icon="logos:google-ads" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Backend Development",
    skills: [
      { name: "Node.js", icon: <Icon icon="logos:nodejs-icon" className="w-7 h-7" /> },
      { name: "Express.js", icon: <Icon icon="logos:express" className="w-7 h-7" /> },
      { name: "MongoDB", icon: <Icon icon="logos:mongodb-icon" className="w-7 h-7" /> },
      { name: "PostgreSQL", icon: <Icon icon="logos:postgresql" className="w-7 h-7" /> },
      { name: "MySQL", icon: <Icon icon="logos:mysql-icon" className="w-7 h-7" /> },
      { name: "GraphQL", icon: <Icon icon="logos:graphql" className="w-7 h-7" /> },
      { name: "Prisma", icon: <Icon icon="logos:prisma" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Performance & Hosting",
    skills: [
      { name: "Vercel", icon: <Icon icon="logos:vercel-icon" className="w-7 h-7" /> },
      { name: "Netlify", icon: <Icon icon="logos:netlify" className="w-7 h-7" /> },
      { name: "Cloudflare", icon: <Icon icon="logos:cloudflare" className="w-7 h-7" /> },
      { name: "AWS", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
      { name: "CDN", icon: <Icon icon="mdi:cloud-outline" className="w-7 h-7" /> },
      { name: "Docker", icon: <Icon icon="logos:docker-icon" className="w-7 h-7" /> },
      { name: "GitHub Actions", icon: <Icon icon="logos:github-actions" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Testing & Optimization",
    skills: [
      { name: "Google Optimize", icon: <Icon icon="logos:google" className="w-7 h-7" /> },
      { name: "Hotjar", icon: <Icon icon="simple-icons:hotjar" className="w-7 h-7" /> },
      { name: "Lighthouse", icon: <Icon icon="logos:lighthouse" className="w-7 h-7" /> },
      { name: "Jest", icon: <Icon icon="logos:jest" className="w-7 h-7" /> },
      { name: "Cypress", icon: <Icon icon="logos:cypress" className="w-7 h-7" /> },
      { name: "A/B Testing", icon: <Icon icon="mdi:test-tube" className="w-7 h-7" /> },
      { name: "Postman", icon: <Icon icon="logos:postman-icon" className="w-7 h-7" /> },
    ],
  },
];

export default function SEOTechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSkills = techTabs[activeTab].skills;

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
          {/* Tab Selector - Desktop Vertical */}
          <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-500 hide-scrollbar hidden md:flex">
            {techTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${
                  activeTab === idx
                    ? "bg-blue-800 shadow-lg text-white"
                    : "hover:bg-blue-800/80 opacity-80 text-gray-200"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="flex items-center">
                  <span className={`mr-2 font-bold ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>{`0${idx + 1}.`}</span>
                  {tab.label}
                </span>
                {activeTab === idx && <span className="ml-2 text-lg">→</span>}
              </button>
            ))}
          </div>
          {/* Tab Selector - Mobile Horizontal */}
          <div className="bg-blue-900 text-white p-2 flex md:hidden flex-row gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
            {techTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${
                  activeTab === idx
                    ? "bg-blue-800 shadow text-white"
                    : "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
                }`}
                onClick={() => setActiveTab(idx)}
                style={{ textOverflow: 'ellipsis' }}
              >
                <span className="mr-2 font-bold">{`0${idx+1}.`}</span>
                <span className="truncate block w-full">{tab.label}</span>
              </button>
            ))}
          </div>
          {/* Right: Skills Grid - Desktop */}
          <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <span className="text-base font-medium text-black">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Carousel */}
          <div className="w-full bg-[#efefef] dark:bg-white p-2 min-h-[110px] flex md:hidden items-center">
            <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2 min-w-[110px] max-w-[130px] snap-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition text-neutral-800"
                  style={{ flex: '0 0 60%' }}
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-1">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-blue-900 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
