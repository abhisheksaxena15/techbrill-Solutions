
// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";

// const techTabs = [
//   {
//     label: "Artificial Intelligence - Machine Learning ",
//     skills: [
//       { name: "Smart insights", icon: <Icon icon="mdi:arrow-right-bold" className="w-5 h-5 text-gray-600" /> },
//       { name: "Adobe XD", icon: <Icon icon="mdi:arrow-right-bold" className="w-5 h-5 text-gray-600" /> },
//       { name: "Sketch", icon: <Icon icon="mdi:arrow-right-bold" className="w-5 h-5 text-gray-600" /> },
//       { name: "Framer", icon: <Icon icon="mdi:arrow-right-bold" className="w-5 h-5 text-gray-600" /> },
//       { name: "Zeplin", icon: <Icon icon="mdi:arrow-right-bold" className="w-5 h-5 text-gray-600" /> },
//     ],
//   },
//   {
//     label: "Blockchain Solutions",
//     skills: [
//       { name: "Seure", icon: <Icon icon="logos:react" className="w-7 h-7" /> },
//       { name: "Transplant", icon: <Icon icon="logos:html-5" className="w-7 h-7" /> },
//       { name: "Decentralized System", icon: <Icon icon="logos:css-3" className="w-7 h-7" /> },
//       { name: "TypeScript", icon: <Icon icon="logos:typescript-icon" className="w-7 h-7" /> },
//       { name: "Redux", icon: <Icon icon="logos:redux" className="w-7 h-7" /> },
//       { name: "Tailwind CSS", icon: <Icon icon="logos:tailwindcss-icon" className="w-7 h-7" /> },
//       { name: "Sass", icon: <Icon icon="logos:sass" className="w-7 h-7" /> },
//     ],
//   },
//   {
//     label: "Internet of Things (IoT)",
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
//     label: "AR/VR",
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
//     label: "Generative AI ",
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

// export default function TechnoTechToolsSection() {
//   const [activeTab, setActiveTab] = useState(0);
//   // Updated proper state hook declaration as you asked:
//   const [openAccordion, setOpenAccordion] = useState(null);

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
//           {/* Desktop Tab Selector */}
//           <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-500 hide-scrollbar hidden md:flex">
//             {techTabs.map((tab, idx) => (
//               <button
//                 key={tab.label}
//                 className={`flex justify-between items-center px-4 py-3 rounded-md text-left transition-all font-semibold text-lg tracking-wide ${
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

//           {/* Mobile Accordion */}
//           <div className="md:hidden flex flex-col gap-5 w-full bg-white py-2">
//             {techTabs.map((tab, idx) => (
//               <div
//                 key={tab.label}
//                 className="bg-blue-900 rounded-lg shadow relative"
//                 style={{ borderRadius: '16px' }}
//               >
//                 <button
//                   className="flex items-center gap-3 w-full px-4 py-4 text-white font-semibold text-left"
//                   style={{
//                     minHeight: "56px",
//                     fontSize: "1.13rem",
//                   }}
//                   onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
//                 >
//                   {/* Serial Number as in the laptop view */}
//                   <span className="mr-2 font-bold text-white w-8 h-8 flex items-center justify-center">{`0${idx + 1}.`}</span>
//                   <span>{tab.label}</span>
//                   <span className="ml-auto">
//                     <Icon
//                       icon={openAccordion === idx ? "mdi:chevron-up" : "mdi:chevron-down"}
//                       className="w-6 h-6"
//                     />
//                   </span>
//                 </button>
//                 {openAccordion === idx && (
//                   <div className="bg-[#efefef] dark:bg-white px-4 py-4 rounded-b-lg transition-all duration-300">
//                     <div className="flex flex-col gap-3">
//                       {tab.skills.map(skill => (
//                         <div
//                           key={skill.name}
//                           className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm px-3 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow transition text-neutral-800"
//                         >
//                           <div className="w-8 h-8 min-w-[32px] flex items-center justify-center shrink-0">
//                             {skill.icon}
//                           </div>
//                           <span className="text-base font-medium text-black">{skill.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Laptop/Desktop Skills Grid */}
//           <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
//               {techTabs[activeTab].skills.map((skill) => (
//                 <div
//                   key={skill.name}
//                   className="flex items-center gap-3 bg-white border border-gray-200 rounded-md shadow-sm px-4 py-3 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition min-h-[56px] text-neutral-800"
//                 >
//                   <div className="w-8 h-8 flex items-center justify-center shrink-0">
//                     {skill.icon}
//                   </div>
//                   <span className="text-base font-medium text-black">{skill.name}</span>
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

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// ADDED: centralize the bullet arrow with transition-ready classes
// Centralized bullet icon for all skills

const techTabs = [
  {
    label: "Artificial Intelligence",
    skills: [
      {
        name: "Smart insights",
        icon: (
          <Icon
            icon="devicon:google"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Automation",
        icon: (
          <Image
            src="/images/techno_logo/automation.svg"
            alt="Automation"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Personalization",
        icon: (
          <Image
            src="/images/techno_logo/team.png"
            alt="Personalization"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Model serving",
        icon: (
          <Icon
            icon="devicon:tensorflow"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "A/B experimentation",
        icon: (
          <Icon
            icon="logos:google-optimize"
            className="w-7 h-7"
          />
        ),
      },
    ],
  },
  {
    label: "Machine Learning",
    skills: [
      {
        name: "Data Preprocessing",
        icon: (
          <Icon
            icon="devicon:apache"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Model Development & Training",
        icon: (
          <Icon
            icon="devicon:jupyter"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Predictive Analytics",
        icon: (
          <Icon
            icon="devicon:apachespark"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Natural Language Processing (NLP)",
        icon: (
          <Icon
            icon="logos:hugging-face"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Model Deployment & MLOps",
        icon: (
          <Icon
            icon="logos:docker-icon"
            className="w-7 h-7"
          />
        ),
      },
    ],
  },
  {
    label: "Blockchain Solutions",
    skills: [
      {
        name: "Smart Contracts",
        icon: (
          <Icon
            icon="logos:ethereum"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Decentralized Applications (DApps)",
        icon: (
          <Icon
            icon="devicon:solidity"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Consensus Mechanisms",
        icon: (
          <Image
            src="/images/techno_logo/team.png"
            alt="Consensus Mechanisms"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Cryptographic Security",
        icon: (
          <Image
            src="/images/techno_logo/encryption-icon.svg"
            alt="Cryptographic Security"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Interoperability & Cross-chain",
        icon: (
          <Image
            src="/images/techno_logo/service_1681505.png"
            alt="Interoperability & Cross-chain"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ),
      },
    ],
  },
  {
    label: "Internet of Things (IoT)",
    skills: [
      {
        name: "Device Integration & Management",
        icon: (
          <Icon
            icon="logos:aws"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "IoT Platform Development",
        icon: (
          <Icon
            icon="devicon:azure"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Smart ecosystems",
        icon: (
          <Icon
            icon="devicon:raspberrypi"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Sensor Data Analytics",
        icon: (
          <Icon
            icon="devicon:apachekafka"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Predictive Maintenance",
        icon: (
          <Icon
            icon="logos:ibm"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Cybersecurity for IoT",
        icon: (
          <Icon
            icon="devicon:c"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Embedded Systems Programming",
        icon: (
          <Icon
            icon="devicon:arduino"
            className="w-7 h-7"
          />
        ),
      },
    ],
  },
  {
    label: "AR/VR",
    skills: [
      {
        name: "3D scene design",
        icon: (
          <Icon
            icon="devicon:blender"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Interaction systems",
        icon: (
          <Icon
            icon="devicon:unity"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Spatial mapping",
        icon: (
          <Image
            src="/images/techno_logo/location.jpg"
            alt="Spatial mapping"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Performance tuning",
        icon: (
          <Icon
            icon="devicon:grafana"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Cross-platform builds",
        icon: (
          <Icon
            icon="devicon:flutter"
            className="w-7 h-7"
          />
        ),
      },
    ],
  },
  {
    label: "Generative AI",
    skills: [
      {
        name: "Prompt engineering",
        icon: (
          <Icon
            icon="logos:openai-icon"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Advanced automation",
        icon: (
          <Icon
            icon="logos:zapier-icon"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Fine-tuning",
        icon: (
          <Icon
            icon="logos:hugging-face"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Content generation",
        icon: (
          <Icon
            icon="logos:midjourney"
            className="w-7 h-7"
          />
        ),
      },
      {
        name: "Data analysis",
        icon: (
          <Icon
            icon="devicon:numpy"
            className="w-7 h-7"
          />
        ),
      },
    ],
  },
];
export default function TechnoTechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

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

          {/* Desktop Tab Selector - This block will now be hidden on mobile */}
          <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] 
     scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-300 hidden md:flex">            {techTabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`flex justify-between items-center px-4 py-3 rounded-md text-left transition-all font-semibold text-lg tracking-wide ${activeTab === idx
                  ? "bg-blue-800 shadow-lg text-white"
                  : "hover:bg-blue-800/80 opacity-80 text-gray-200"
                }`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="flex items-center">{tab.label}</span>
              {activeTab === idx && <span className="ml-2 text-lg">→</span>}
            </button>
          ))}
          </div>

          {/* Mobile Accordion - This block will now be hidden on desktop */}
          <div className="md:hidden flex flex-col gap-5 w-full bg-white dark:bg-gray-900 py-2">
            {techTabs.map((tab, idx) => (
              <div
                key={tab.label}
                className="bg-blue-900 rounded-lg shadow relative"
                style={{ borderRadius: "16px" }}
              >
                <button
                  className="flex items-center gap-3 w-full px-4 py-4 text-white font-semibold text-left"
                  style={{
                    minHeight: "56px",
                    fontSize: "1.13rem",
                  }}
                  onClick={() =>
                    setOpenAccordion(openAccordion === idx ? null : idx)
                  }
                >
                  <span>{tab.label}</span>
                  <span className="ml-auto">
                    <Icon
                      icon={
                        openAccordion === idx ? "mdi:chevron-up" : "mdi:chevron-down"
                      }
                      className="w-6 h-6"
                    />
                  </span>
                </button>

                {openAccordion === idx && (
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-4 rounded-b-lg transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      {tab.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm px-3 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition text-neutral-800 dark:text-gray-200"
                        >
                          <div className="w-8 h-8 min-w-[32px] flex items-center justify-center shrink-0">
                            {skill.icon}
                          </div>
                          <span className="text-base font-medium text-black dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Laptop/Desktop Skills Grid */}
          <div className="w-full bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {techTabs[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition min-h-[56px] text-neutral-800 dark:text-gray-200"
                >
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <span className="text-base font-medium text-black dark:text-white">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}