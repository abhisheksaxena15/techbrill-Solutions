// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";

// const techTabs = [
//   {
//     label: "UI/UX & Styling",
//     skills: [
//       { name: "Figma", icon: <Icon icon="logos:figma" className="w-7 h-7" /> },
//       { name: "Adobe XD", icon: <Icon icon="logos:adobe-xd" className="w-7 h-7" /> },
//       { name: "Sketch", icon: <Icon icon="logos:sketch" className="w-7 h-7" /> },
//       { name: "Framer", icon: <Icon icon="logos:framer" className="w-7 h-7" /> },
//       { name: "Zeplin", icon: <Icon icon="logos:zeplin" className="w-7 h-7" /> },
//     ],
//   },
//   {
//     label: "Frontend Development",
//     skills: [
//       { name: "React", icon: <Icon icon="logos:react" className="w-7 h-7" /> },
//       { name: "HTML5", icon: <Icon icon="logos:html-5" className="w-7 h-7" /> },
//       { name: "CSS3", icon: <Icon icon="logos:css-3" className="w-7 h-7" /> },
//       { name: "TypeScript", icon: <Icon icon="logos:typescript-icon" className="w-7 h-7" /> },
//       { name: "Redux", icon: <Icon icon="logos:redux" className="w-7 h-7" /> },
//       { name: "Tailwind CSS", icon: <Icon icon="logos:tailwindcss-icon" className="w-7 h-7" /> },
//       { name: "Sass", icon: <Icon icon="logos:sass" className="w-7 h-7" /> },
//     ],
//   },
//   {
//     label: "Backend Development",
//     skills: [
//       { name: "Node.js", icon: <Icon icon="logos:nodejs-icon" className="w-7 h-7" /> },
//       { name: "Express.js", icon: <Icon icon="logos:express" className="w-7 h-7" /> },
//       { name: "MongoDB", icon: <Icon icon="logos:mongodb-icon" className="w-7 h-7" /> },
//       { name: "PostgreSQL", icon: <Icon icon="logos:postgresql" className="w-7 h-7" /> },
//       { name: "MySQL", icon: <Icon icon="logos:mysql-icon" className="w-7 h-7" /> },
//       { name: "GraphQL", icon: <Icon icon="logos:graphql" className="w-7 h-7" /> },
//       { name: "Prisma", icon: <Icon icon="logos:prisma" className="w-7 h-7" /> },
//     ],
//   },
//   {
//     label: "QA & Testing",
//     skills: [
//       { name: "Jest", icon: <Icon icon="logos:jest" className="w-7 h-7" /> },
//       { name: "Mocha", icon: <Icon icon="logos:mocha" className="w-7 h-7" /> },
//       { name: "Cypress", icon: <Icon icon="logos:cypress" className="w-7 h-7" /> },
//       { name: "Selenium", icon: <Icon icon="logos:selenium" className="w-7 h-7" /> },
//       { name: "Postman", icon: <Icon icon="logos:postman-icon" className="w-7 h-7" /> },
//       { name: "Playwright", icon: <Icon icon="logos:playwright" className="w-7 h-7" /> },
//       { name: "Cucumber", icon: <Icon icon="logos:cucumber" className="w-7 h-7" /> },
//     ],
//   },
//   {
//     label: "DevOps & Deployment",
//     skills: [
//       { name: "Docker", icon: <Icon icon="logos:docker-icon" className="w-7 h-7" /> },
//       { name: "Kubernetes", icon: <Icon icon="logos:kubernetes" className="w-7 h-7" /> },
//       { name: "AWS", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
//       { name: "Vercel", icon: <Icon icon="logos:vercel-icon" className="w-7 h-7" /> },
//       { name: "Netlify", icon: <Icon icon="logos:netlify" className="w-7 h-7" /> },
//       { name: "GitHub Actions", icon: <Icon icon="logos:github-actions" className="w-7 h-7" /> },
//       { name: "Jenkins", icon: <Icon icon="logos:jenkins" className="w-7 h-7" /> },
//     ],
//   },
// ];

// export default function WebTechToolsSection() {
//   const [activeTab, setActiveTab] = useState(0);
//   const activeSkills = techTabs[activeTab].skills;

//   return (
//     <motion.div
//       className="mt-20"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="mx-auto w-full max-w-[1100px]">
//         <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
//           {/* Tab Selector - Desktop Vertical */}
//           <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-500 hide-scrollbar hidden md:flex">
//             {techTabs.map((tab, idx) => (
//               <button
//                 key={tab.label}
//                 className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${
//                   activeTab === idx
//                     ? "bg-blue-800 shadow-lg text-white"
//                     : "hover:bg-blue-800/80 opacity-80 text-gray-200"
//                 }`}
//                 onClick={() => setActiveTab(idx)}
//               >
//                 <span className="flex items-center">
//                   <span className={`mr-2 font-bold ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>{`0${idx + 1}.`}</span>
//                   {tab.label}
//                 </span>
//                 {activeTab === idx && <span className="ml-2 text-lg">→</span>}
//               </button>
//             ))}
//           </div>
//           {/* Tab Selector - Mobile Horizontal */}
//           <div className="bg-blue-900 text-white p-2 flex md:hidden flex-row gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
//             {techTabs.map((tab, idx) => (
//               <button
//                 key={tab.label}
//                 className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${
//                   activeTab === idx
//                     ? "bg-blue-800 shadow text-white"
//                     : "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
//                 }`}
//                 onClick={() => setActiveTab(idx)}
//                 style={{ textOverflow: 'ellipsis' }}
//               >
//                 <span className="mr-2 font-bold">{`0${idx+1}.`}</span>
//                 <span className="truncate block w-full">{tab.label}</span>
//               </button>
//             ))}
//           </div>
//           {/* Right: Skills Grid - Desktop */}
//           <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
//               {activeSkills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
//                 >
//                   <div className="w-8 h-8 flex items-center justify-center shrink-0">
//                     {skill.icon}
//                   </div>
//                   <span className="text-base font-medium text-black">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Mobile Carousel */}
//           <div className="w-full bg-[#efefef] dark:bg-white p-2 min-h-[110px] flex md:hidden items-center">
//             <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full">
//               {activeSkills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2 min-w-[110px] max-w-[130px] snap-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition text-neutral-800"
//                   style={{ flex: '0 0 60%' }}
//                 >
//                   <div className="w-8 h-8 flex items-center justify-center mb-1">
//                     {skill.icon}
//                   </div>
//                   <span className="text-sm font-semibold text-blue-900 text-center">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const techTabs = [
  {
    label: "UI/UX & Styling",
    skills: [
      { name: "Figma", icon: <Icon icon="logos:figma" className="w-7 h-7" /> },
      { name: "Adobe XD", icon: <Icon icon="logos:adobe-xd" className="w-7 h-7" /> },
      { name: "Sketch", icon: <Icon icon="logos:sketch" className="w-7 h-7" /> },
      { name: "Framer", icon: <Icon icon="logos:framer" className="w-7 h-7" /> },
      { name: "Zeplin", icon: <Icon icon="logos:zeplin" className="w-7 h-7" /> },
    ],
  },
  {
    label: "Frontend Development",
    skills: [
      { name: "React", icon: <Icon icon="logos:react" className="w-7 h-7" /> },
      { name: "HTML5", icon: <Icon icon="logos:html-5" className="w-7 h-7" /> },
      { name: "CSS3", icon: <Icon icon="logos:css-3" className="w-7 h-7" /> },
      { name: "TypeScript", icon: <Icon icon="logos:typescript-icon" className="w-7 h-7" /> },
      { name: "Redux", icon: <Icon icon="logos:redux" className="w-7 h-7" /> },
      { name: "Tailwind CSS", icon: <Icon icon="logos:tailwindcss-icon" className="w-7 h-7" /> },
      { name: "Sass", icon: <Icon icon="logos:sass" className="w-7 h-7" /> },
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
    label: "QA & Testing",
    skills: [
      { name: "Jest", icon: <Icon icon="logos:jest" className="w-7 h-7" /> },
      { name: "Mocha", icon: <Icon icon="logos:mocha" className="w-7 h-7" /> },
      { name: "Cypress", icon: <Icon icon="logos:cypress" className="w-7 h-7" /> },
      { name: "Selenium", icon: <Icon icon="logos:selenium" className="w-7 h-7" /> },
      { name: "Postman", icon: <Icon icon="logos:postman-icon" className="w-7 h-7" /> },
      { name: "Playwright", icon: <Icon icon="logos:playwright" className="w-7 h-7" /> },
      { name: "Cucumber", icon: <Icon icon="logos:cucumber" className="w-7 h-7" /> },
      { name: "Jira", icon: <Icon icon="logos:jira" className="w-7 h-7" /> },
      { name: "Bugzilla", icon: <Icon icon="mdi:bug
        " className="w-7 h-7" /> },
    ],
  },
  {
    label: "DevOps & Deployment",
    skills: [
      { name: "Docker", icon: <Icon icon="logos:docker-icon" className="w-7 h-7" /> },
      { name: "Kubernetes", icon: <Icon icon="logos:kubernetes" className="w-7 h-7" /> },
      { name: "AWS", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
      { name: "Vercel", icon: <Icon icon="logos:vercel-icon" className="w-7 h-7" /> },
      { name: "Netlify", icon: <Icon icon="logos:netlify" className="w-7 h-7" /> },
      { name: "GitHub Actions", icon: <Icon icon="logos:github-actions" className="w-7 h-7" /> },
      { name: "Jenkins", icon: <Icon icon="logos:jenkins" className="w-7 h-7" /> },
    ],
  },
];

export default function WebTechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  // Updated proper state hook declaration as you asked:
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto w-full max-w-[1100px] ">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
          {/* Desktop Tab Selector */}
          <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-500 hide-scrollbar hidden md:flex">
            {techTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`flex justify-between items-center px-4 py-3 rounded-md text-left transition-all font-semibold  text-lg tracking-wide ${activeTab === idx
                  ? "bg-blue-800 shadow-lg text-white"
                  : "hover:bg-blue-800/80 opacity-80 text-gray-200"
                  }`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="flex items-center">
                  {/* <span className={`mr-2 font-bold ${activeTab === idx ? 'text-white' : 'text-gray-300'}`}>{`0${idx + 1}.`}</span> */}
                  {tab.label}
                </span>
                {activeTab === idx && <span className="ml-2 text-lg">→</span>}
              </button>
            ))}

          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden flex flex-col gap-5 w-full bg-white dark:bg-gray-900 py-2">
            {techTabs.map((tab, idx) => (
              <div
                key={tab.label}
                className="bg-blue-900 rounded-lg shadow relative"
                style={{ borderRadius: '16px' }}
              >
                <button
                  className="flex items-center gap-3 w-full px-4 py-4 text-white font-semibold text-left"
                  style={{
                    minHeight: "56px",
                    fontSize: "1.13rem",
                  }}
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                >
                  {/* Serial Number as in the laptop view */}
                  {/* <span className="mr-2 font-bold text-white w-8 h-8 flex items-center justify-center">{`0${idx + 1}.`}</span> */}
                  <span>{tab.label}</span>
                  <span className="ml-auto">
                    <Icon
                      icon={openAccordion === idx ? "mdi:chevron-up" : "mdi:chevron-down"}
                      className="w-6 h-6"
                    />
                  </span>
                </button>
                {openAccordion === idx && (
                  <div className="bg-[#efefef] dark:bg-gray-800 px-4 py-4 rounded-b-lg transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      {tab.skills.map(skill => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm px-3 py-3 hover:bg-blue-50 dark:hover:bg-blue-600 hover:border-blue-200 dark:hover:border-blue-500 hover:shadow transition text-neutral-800 dark:text-white"
                        >
                          <div className="w-8 h-8 min-w-[32px] flex items-center justify-center shrink-0">
                            {skill.icon}
                          </div>
                          <span className="text-base font-medium text-black dark:text-white">{skill.name}</span>
                        </div>
                      ))}

                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Laptop/Desktop Skills Grid */}
          <div className="w-full bg-[#efefef]  dark:bg-gray-800 p-4 sm:p-6 min-h-[340px] items-center  justify-center hidden md:flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%]  sm:max-w-[90%] transition-all duration-300">
              {techTabs[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center dark:bg-gray-900 gap-3 bg-white border border-gray-800 rounded-md shadow-sm px-4 py-3 dark:hover:bg-gray-800 dark:hover:border-gray-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <span className="text-base font-medium dark:text-white text-black">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* GLOBAL Explore More Link - Always Visible */}
        {/* GLOBAL Explore More Button - Always Visible */}
        {/* <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => {
              // Add your click functionality here
              console.log("Explore More clicked");
            }}
          >
            Explore More
          </button>
        </div> */}
        <div className="mt-6 text-right">
          <a href="/technologies" className="text-red-600 font-semibold hover:underline">
            Explore More →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
