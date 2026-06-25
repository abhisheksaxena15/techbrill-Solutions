// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const TechStackSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const allTechnologies = [
//     // Blockchain Platforms (indices 0-4)
//     {
//       name: "Ethereum",
//       logo: "https://altcoinsbox.com/wp-content/uploads/2023/01/ethereum-logo-600x600.webp",
//       description: "The leading decentralized smart contract platform, enabling secure and programmable blockchain applications."
//     },
//     {
//       name: "Polygon",
//       logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//       description: "A scalable Layer 2 solution for Ethereum, providing fast and low-cost blockchain transactions."
//     },
//     {
//       name: "Solana",
//       logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
//       description: "High-performance blockchain supporting fast, low-fee decentralized applications and crypto projects."
//     },
//     {
//       name: "Hyperledger Fabric",
//       logo: "https://www.hyperledger.org/wp-content/uploads/2018/04/Hyperledger_Fabric_Logo_Color.png",
//       description: "Enterprise-grade permissioned blockchain framework for building secure, modular business networks."
//     },
//     {
//       name: "Avalanche",
//       logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
//       description: "A highly scalable blockchain platform for decentralized applications and custom blockchain networks."
//     },
//     // Blockchain Infrastructure & Dev Tools (indices 5-10)
//     {
//       name: "Infura",
//       logo: "https://avatars.githubusercontent.com/u/27917762?s=200&v=4",
//       description: "Scalable blockchain infrastructure providing instant, reliable API access to Ethereum and IPFS."
//     },
//     {
//       name: "Alchemy",
//       logo: "https://static.alchemyapi.io/images/branding/alchemy-logo-dark.svg",
//       description: "Powerful blockchain developer platform for building, monitoring, and scaling decentralized apps."
//     },
//     {
//       name: "Truffle Suite",
//       logo: "https://trufflesuite.com/img/truffle-logo-dark.svg",
//       description: "Development environment, testing framework, and asset pipeline for Ethereum smart contracts."
//     },
//     {
//       name: "Hardhat",
//       logo: "https://hardhat.org/hardhat-logo.svg",
//       description: "Flexible Ethereum development environment for compiling, deploying, testing, and debugging dApps."
//     },
//     {
//       name: "Chainlink",
//       logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
//       description: "Decentralized oracle network connecting smart contracts with real-world data and external APIs."
//     },
//     {
//       name: "The Graph",
//       logo: "https://cryptologos.cc/logos/the-graph-grt-logo.png",
//       description: "Decentralized protocol for indexing and querying blockchain data for dApps."
//     },
//     // Smart Contract Languages & Frameworks (indices 11-15)
//     {
//       name: "Solidity",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
//       description: "The most popular programming language for writing Ethereum smart contracts."
//     },
//     {
//       name: "Vyper",
//       logo: "https://vyper.readthedocs.io/en/stable/_static/vyper-logo.svg",
//       description: "A Pythonic smart contract language for Ethereum, focused on security and simplicity."
//     },
//     {
//       name: "OpenZeppelin",
//       logo: "https://avatars.githubusercontent.com/u/22668662?s=200&v=4",
//       description: "Open-source framework for building secure smart contracts using reusable libraries and tools."
//     },
//     {
//       name: "Remix IDE",
//       logo: "https://remix.ethereum.org/assets/img/icon.png",
//       description: "Web-based IDE for writing, testing, and deploying Ethereum smart contracts."
//     },
//     {
//       name: "Brownie",
//       logo: "https://raw.githubusercontent.com/eth-brownie/brownie/master/docs/images/brownie-logo.png",
//       description: "Python-based development and testing framework for Ethereum smart contracts."
//     },
//     // Blockchain Analytics & Explorers (indices 16-21)
//     {
//       name: "Etherscan",
//       logo: "https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Feth-diamond-purple.7929ed26.png&w=1920&q=75",
//       description: "Leading block explorer and analytics platform for Ethereum blockchain transactions and contracts."
//     },
//     {
//       name: "Dune Analytics",
//       logo: "https://cryptologos.cc/logos/dune-analytics-dune-logo.png",
//       description: "Powerful analytics platform for blockchain data, enabling custom dashboards and queries."
//     },
//     {
//       name: "Nansen",
//       logo: "https://pbs.twimg.com/profile_images/1412725954676752385/0Qw6g6g2_400x400.jpg",
//       description: "Blockchain analytics platform providing insights into on-chain activity, wallets, and trends."
//     },
//     {
//       name: "Blockchair",
//       logo: "https://blockchair.com/images/logo/blockchair-logo.svg",
//       description: "Universal blockchain explorer and analytics platform supporting multiple blockchains."
//     },
//     {
//       name: "Glassnode",
//       logo: "https://pbs.twimg.com/profile_images/1229367263777552384/0nQFQw8A_400x400.jpg",
//       description: "On-chain analytics platform delivering actionable insights for digital asset markets."
//     },
//     {
//       name: "Token Terminal",
//       logo: "https://pbs.twimg.com/profile_images/1430495208249210882/8Qn6eI2G_400x400.jpg",
//       description: "Financial analytics platform for crypto, tracking protocol revenues, fees, and user metrics."
//     }
//   ];

//   const cardConfigurations = [
//     {
//       techIndices: [0, 1, 2, 3, 4], // OpenAI, Dall E, Midjourney, Perplexity, Gemini
//       title: "Generative AIs"
//     },
//     {
//       techIndices: [5, 6, 7, 8, 9, 10], // langchain, ML flow, Comet ML, Metaflow, Evidently, Fiddler
//       title: "ML Ops"
//     },
//     {
//       techIndices: [11, 12, 13, 14, 15], // keras, hugging face, Pytorch lightning, fast.ai, TensorFlow
//       title: "Deep Learning Libraries"
//     },
//     {
//       techIndices: [16, 17, 18, 19, 20, 21], // pandas, numpy, matplotlib, seaborn, tableau, bokeh
//       title: "Data Analysis & Visualization"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % cardConfigurations.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + cardConfigurations.length) % cardConfigurations.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   // Responsive grid columns
//   const getGridCols = (count: number): string => {
//     if (count <= 2) return 'grid-cols-1 sm:grid-cols-2';
//     if (count <= 4) return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3';
//     return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3';
//   };

//   return (
//     <section className="min-h-[60vh] sm:min-h-[70vh] md:min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-500">
//       <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
//         <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">

//           {/* Left Side - Text Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}>
//                 Our Technology Stack
//               </motion.h2>
//               <div className="h-1 w-20 sm:w-28 bg-blue-800 mb-4 sm:mb-6" />
//               <motion.p
//                 className="text-xl text-gray-600 dark:text-gray-400"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 We leverage cutting-edge technologies to deliver exceptional digital solutions and drive innovation in every project we undertake.
//               </motion.p>

//               <motion.h2
//                 className="text-3xl md:text-4xl font-bold mb-2 text-black"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//               </motion.h2>
//             </div>
//           </div>

//           {/* Right Side - Tech Cards Display */}
//           <div className="relative">
//             {/* Navigation Arrows */}
//             <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 sm:px-4">
//               <button
//                 onClick={prevSlide}
//                 className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-2 sm:p-3 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-2 sm:p-3 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//             </div>

//             <div className="overflow-hidden rounded-2xl">
//               <div
//                 className="flex transition-transform duration-500 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {cardConfigurations.map((card, cardIndex) => {
//                   const cardTechnologies = card.techIndices.map(index => allTechnologies[index]);
//                   return (
//                     <div key={cardIndex} className="min-w-full">
//                       <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-4 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[380px] md:min-h-[400px] shadow-lg">
//                         <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 text-center">
//                           {card.title}
//                         </h3>
//                         <div className={`grid ${getGridCols(cardTechnologies.length)} gap-3 sm:gap-4 md:gap-6 h-full`}>
//                           {cardTechnologies.map((tech, techIndex) => (
//                             <div
//                               key={techIndex}
//                               className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2 md:space-y-4 hover:scale-105 transition-all duration-300 cursor-pointer group p-2 sm:p-4"
//                             >
//                               <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-1 sm:mb-2">
//                                 <img
//                                   src={tech.logo}
//                                   alt={`${tech.name} logo`}
//                                   className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
//                                   onError={(e) => {
//                                     (e.target as HTMLImageElement).style.display = 'none';
//                                   }}
//                                 />
//                               </div>
//                               <h4 className="font-semibold text-xs sm:text-base md:text-lg text-gray-800 dark:text-white">
//                                 {tech.name}
//                               </h4>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Navigation Dots */}
//             <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-8">
//               {cardConfigurations.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`h-2 w-6 sm:h-3 sm:w-8 rounded-full transition-all duration-300 ${index === currentIndex
//                       ? 'bg-blue-600 dark:bg-blue-400'
//                       : 'bg-gray-400 dark:bg-gray-600 hover:opacity-80'
//                     }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStackSection;




"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const techTabs = [
  {
    label: "Generative AIs",
    skills: [
      // Blockchain Platforms
      {
        name: "Ethereum",
        icon: <img src="https://altcoinsbox.com/wp-content/uploads/2023/01/ethereum-logo-600x600.webp" alt="Ethereum logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Polygon",
        icon: <img src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt="Polygon logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Solana",
        icon: <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Avalanche",
        icon: <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="Avalanche logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Hyperledger Fabric",
        icon: <img src="https://www.hyperledger.org/wp-content/uploads/2018/04/Hyperledger_Fabric_Logo_Color.png" alt="Hyperledger Fabric logo" className="w-7 h-7 object-contain" />
      },
    ]
  },
  {
    label: "DEv tools & Infra",
    skills: [
      {
        name: "Infura",
        icon: <img src="https://avatars.githubusercontent.com/u/27917762?s=200&v=4" alt="Infura logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Alchemy",
        icon: <img src="https://static.alchemyapi.io/images/branding/alchemy-logo-dark.svg" alt="Alchemy logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Truffle Suite",
        icon: <img src="https://trufflesuite.com/img/truffle-logo-dark.svg" alt="Truffle Suite logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Hardhat",
        icon: <img src="https://hardhat.org/hardhat-logo.svg" alt="Hardhat logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Chainlink",
        icon: <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="Chainlink logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "The Graph",
        icon: <img src="https://cryptologos.cc/logos/the-graph-grt-logo.png" alt="The Graph logo" className="w-7 h-7 object-contain" />
      },
  
      
  
    ],
  },
  {
    label: "Smart Contract Languages & IDEs",
    skills: [
      // Smart Contract Languages & IDEs
      {
        name: "Solidity",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg" alt="Solidity logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Vyper",
        icon: <img src="https://vyper.readthedocs.io/en/stable/_static/vyper-logo.svg" alt="Vyper logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "OpenZeppelin",
        icon: <img src="https://avatars.githubusercontent.com/u/22668662?s=200&v=4" alt="OpenZeppelin logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Remix IDE",
        icon: <img src="https://remix.ethereum.org/assets/img/icon.png" alt="Remix IDE logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Brownie",
        icon: <img src="https://raw.githubusercontent.com/eth-brownie/brownie/master/docs/images/brownie-logo.png" alt="Brownie logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Blockchain Analytics",
    skills: [
      {
        name: "Etherscan",
        icon: <img src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Feth-diamond-purple.7929ed26.png&w=1920&q=75" alt="Etherscan logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Dune Analytics",
        icon: <img src="https://cryptologos.cc/logos/dune-analytics-dune-logo.png" alt="Dune Analytics logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Nansen",
        icon: <img src="https://pbs.twimg.com/profile_images/1412725954676752385/0Qw6g6g2_400x400.jpg" alt="Nansen logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Blockchair",
        icon: <img src="https://blockchair.com/images/logo/blockchair-logo.svg" alt="Blockchair logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Glassnode",
        icon: <img src="https://pbs.twimg.com/profile_images/1229367263777552384/0nQFQw8A_400x400.jpg" alt="Glassnode logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Token Terminal",
        icon: <img src="https://pbs.twimg.com/profile_images/1430495208249210882/8Qn6eI2G_400x400.jpg" alt="Token Terminal logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
];

export default function ITConsultancyTechToolsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeSkills = techTabs[activeTab].skills;

  return (
    <>
      {/* Add custom scrollbar styles */}

      <style jsx global>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 8px;
					height: 8px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: rgba(59, 130, 246, 0.1);
					border-radius: 4px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(59, 130, 246, 0.5);
					border-radius: 4px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(59, 130, 246, 0.7);
				}

				.mobile-scrollbar::-webkit-scrollbar {
					width: 4px;
					height: 4px;
				}
				.mobile-scrollbar::-webkit-scrollbar-track {
					background: rgba(59, 130, 246, 0.1);
					border-radius: 2px;
				}
				.mobile-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(59, 130, 246, 0.4);
					border-radius: 2px;
				}
				.mobile-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(59, 130, 246, 0.6);
				}
			`}</style>

      

        <motion.div
          className="mt-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto w-full max-w-[1100px]">
            <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
              {/* Tab Selector - Desktop Vertical */}
              <div className="bg-blue-900 text-white p-6 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] custom-scrollbar hidden md:flex">
                {techTabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    className={`flex justify-between items-center px-4 py-3 rounded-xl text-left transition-all font-semibold text-lg tracking-wide ${activeTab === idx
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
              <div className="bg-blue-900 text-white p-4 flex md:hidden flex-row gap-3 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
                {techTabs.map((tab, idx) => (
                  <button
                    key={tab.label}
                    className={`flex items-center px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[180px] max-w-[220px] flex-shrink-0 overflow-hidden ${activeTab === idx
                      ? "bg-blue-800 shadow text-white"
                      : "bg-blue-700/70 text-gray-200 hover:bg-blue-800/80"
                      }`}
                    onClick={() => setActiveTab(idx)}
                    style={{ textOverflow: 'ellipsis' }}
                  >
                    <span className="mr-2 font-bold">{`0${idx + 1}.`}</span>
                    <span className="truncate block w-full">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Right: Skills Grid - Desktop */}
              <div className="w-full bg-[#efefef] dark:bg-white p-4 sm:p-6 min-h-[340px] items-center justify-center hidden md:flex overflow-y-auto custom-scrollbar">
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
              <div className="w-full bg-[#efefef] dark:bg-white p-4 min-h-[110px] flex md:hidden items-center">
                <div className="flex flex-row gap-4 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
                  {activeSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-2 mb-4 min-w-[110px] max-w-[130px] snap-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition text-neutral-800"
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
      </>
      );
}