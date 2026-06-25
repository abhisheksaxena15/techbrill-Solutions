"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const techTabs = [
  {
    label: "Data Visualization & BI Tools",
    skills: [
      {
        name: "Tableau",
        icon: <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" alt="Tableau logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Power BI",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Looker",
        icon: <img src="https://seeklogo.com/images/L/looker-logo-6A3C1B6B2C-seeklogo.com.png" alt="Looker logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Google Data Studio",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Google_Data_Studio_Logo.png" alt="Google Data Studio logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Apache Superset",
        icon: <img src="https://superset.apache.org/images/superset-logo-horiz.png" alt="Apache Superset logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Database Tools",
    skills: [
      {
        name: "MySQL",
        icon: <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "PostgreSQL",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "MongoDB",
        icon: <img src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" alt="MongoDB logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Microsoft SQL Server",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL Server logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Snowflake",
        icon: <img src="https://assets-global.website-files.com/5e9aa66fd3886c1ecb1d4c3b/5e9aa66fd3886c3a2d1d4c6a_Snowflake%20Logo%20-%20Full%20Color.png" alt="Snowflake logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Google BigQuery",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Google_BigQuery_Logo.png" alt="BigQuery logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Amazon Redshift",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Amazon-Redshift-Logo.png" alt="Redshift logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Oracle",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Data Processing & Analysis",
    skills: [
      {
        name: "Pandas",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/250px-Pandas_mark.svg.png" alt="Pandas logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "NumPy",
        icon: <img src="https://numpy.org/images/logo.svg" alt="NumPy logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "R",
        icon: <img src="https://www.r-project.org/logo/Rlogo.png" alt="R logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Python",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "SQL",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Jupyter",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" alt="Jupyter logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Matplotlib",
        icon: <img src="https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" alt="Matplotlib logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Seaborn",
        icon: <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="Seaborn logo" className="w-7 h-7 object-contain" />
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