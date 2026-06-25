"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const techTabs = [
  {
    label: "Test Automation Frameworks",
    skills: [
      {
        name: "Selenium",
        icon: <img src="https://selenium.dev/images/selenium_logo_square_green.png" alt="Selenium logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Cypress",
        icon: <img src="https://asset.brandfetch.io/idIq_kF0rb/idv3zwmSiY.jpeg" alt="Cypress logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Playwright",
        icon: <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "WebDriverIO",
        icon: <img src="https://webdriver.io/assets/images/robot-3677788dd63849c56aa5cb3f332b12d5.svg" alt="WebDriverIO logo" className="w-7 h-7 object-contain" />
      },
      // {
      //   name: "TestComplete",
      //   icon: <img src="https://smartbear.com/globalassets/smartbear/product-icons/testcomplete-icon.svg" alt="TestComplete logo" className="w-7 h-7 object-contain" />
      // },
      {
        name: "Appium",
        icon: <img src="https://appium.io/docs/en/2.1/assets/images/appium-logo-horiz.png" alt="Appium logo" className="w-7 h-7 object-contain" />
      },
    ]
  },
  {
    label: "Performance Testing Tools",
    skills: [
      {
        name: "JMeter",
        icon: <img src="https://jmeter.apache.org/images/jmeter.png" alt="JMeter logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "LoadRunner",
        icon: <img src="https://upload.wikimedia.org/wikipedia/en/6/61/HPE_LoadRunner_logo.png" alt="LoadRunner logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Gatling",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gatling-Logo.png/500px-Gatling-Logo.png" alt="Gatling logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "K6",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/K6_software_logo.svg/375px-K6_software_logo.svg.png" alt="K6 logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "BlazeMeter",
        icon: <img src="https://www.blazemeter.com/sites/default/files/logo-blazemeter-reg.svg" alt="BlazeMeter logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Artillery",
        icon: <img src="https://avatars.githubusercontent.com/u/12608521?v=4" alt="Artillery logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "API Testing Tools",
    skills: [
      {
        name: "Postman",
        icon: <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "REST Assured",
        icon: <img src="https://rest-assured.io/img/logo-transparent.png" alt="REST Assured logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Insomnia",
        icon: <img src="https://images.seeklogo.com/logo-png/39/1/insomnia-logo-png_seeklogo-398689.png" alt="Insomnia logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "SoapUI",
        icon: <img src="https://static1.smartbear.co/smartbearbrand/media/images/home/soapui-icon.svg" alt="SoapUI logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Newman CLI",
        icon: <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Newman logo" className="w-7 h-7 object-contain" />
      },
      // {
      //   name: "Karate DSL",
      //   icon: <img src="https://github.com/karatelabs/karate/raw/master/karate-logo.svg" alt="Karate DSL logo" className="w-7 h-7 object-contain" />
      // },
    ],
  },
  {
    label: "Security Testing Tools",
    skills: [
      // {
      //   name: "OWASP ZAP",
      //   icon: <img src="https://www.zaproxy.org/img/zap256x256.png" alt="OWASP ZAP logo" className="w-7 h-7 object-contain" />
      // },
      {
        name: "Burp Suite",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BurpSuite_Comunity_Edition.svg/330px-BurpSuite_Comunity_Edition.svg.png" alt="Burp Suite logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Nessus",
        icon: <img src="https://www.pngfind.com/pngs/m/415-4154792_today-i-will-write-to-you-about-nessus.png" alt="Nessus logo" className="w-7 h-7 object-contain" />
      },
      // {
      //   name: "SonarQube",
      //   icon: <img src="https://www.sonarqube.org/images/downloads/picto.svg" alt="SonarQube logo" className="w-7 h-7 object-contain" />
      // },
      {
        name: "Veracode",
        icon: <img src="https://mms.businesswire.com/media/20241202337994/en/811922/4/veracode-black-hires.jpg" alt="Veracode logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Checkmarx",
        icon: <img src="https://virtuoso-media.govexec.com/media/events/551/event/logo-lg-20230901230647-checkmarx_logo_large_v2.png" alt="Checkmarx logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Mobile App Testing Tools",
    skills: [
      {
        name: "Appium",
        icon: <img src="https://appium.io/docs/en/2.1/assets/images/appium-logo-horiz.png" alt="Appium logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Espresso",
        icon: <img src="https://developer.android.com/static/images/training/testing/espresso.png" alt="Espresso logo" className="w-7 h-7 object-contain" />
      },
      
      // {
      //   name: "Detox",
      //   icon: <img src="https://raw.githubusercontent.com/wix/Detox/master/docs/img/detox-logo.png" alt="Detox logo" className="w-7 h-7 object-contain" />
      // },
      {
        name: "BrowserStack",
        icon: <img src="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" alt="BrowserStack logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Sauce Labs",
        icon: <img src="https://saucelabs.com/images/logo-white.svg" alt="Sauce Labs logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Test Management & CI/CD",
    skills: [
      {
        name: "TestRail",
        icon: <img src="https://cdn.brandfetch.io/idTk1PqkG8/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747754183650" alt="TestRail logo" className="w-7 h-7 object-contain" />
      },
      // {
      //   name: "Zephyr",
      //   icon: <img src="https://smartbear.com/globalassets/smartbear/product-icons/zephyr-scale-icon.svg" alt="Zephyr logo" className="w-7 h-7 object-contain" />
      // },
      {
        name: "Jenkins",
        icon: <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" alt="Jenkins logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "GitHub Actions",
        icon: <img src="https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" alt="GitHub Actions logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Azure DevOps",
        icon: <img src="https://images.seeklogo.com/logo-png/43/1/azure-devops-logo-png_seeklogo-434055.png" alt="Azure DevOps logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Allure Report",
        icon: <img src="https://avatars.githubusercontent.com/u/5879127?s=200&v=4" alt="Allure Report logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Jira",
        icon: <img src = "https://jira.atlassian.com/static/images/jira-blue.svg" alt="Allure Report logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Bugzilla",
        icon: <img src = "https://www.bugzilla.org/assets/img/logo-header.svg" alt="Allure Report logo" className="w-7 h-7 object-contain" />
      }
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
        className="mt-12 sm:mt-16 lg:mt-20 px-3 sm:px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_2.2fr] gap-0 items-stretch rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
            {/* Tab Selector - Desktop Vertical */}
            <div className="bg-blue-900 dark:bg-gray-800 text-white p-4 sm:p-6 flex-col gap-3 sm:gap-4 overflow-y-auto max-h-[300px] sm:max-h-[340px] min-h-[300px] sm:min-h-[340px] custom-scrollbar hidden lg:flex">
              {techTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  className={`flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-left transition-all font-semibold text-base sm:text-lg tracking-wide ${activeTab === idx
                    ? "bg-blue-800 dark:bg-gray-700 shadow-lg text-white"
                    : "hover:bg-blue-800/80 dark:hover:bg-gray-700/80 opacity-80 text-gray-200 dark:text-gray-300"
                    }`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="flex items-center whitespace-nowrap">
                    {tab.label}
                  </span>
                  {activeTab === idx && <span className="ml-2 text-base sm:text-lg">→</span>}
                </button>
              ))}
            </div>

            {/* Tab Selector - Tablet Vertical */}
            <div className="bg-blue-900 dark:bg-gray-800 text-white p-4 flex-col gap-3 overflow-y-auto max-h-[280px] min-h-[280px] custom-scrollbar hidden md:flex lg:hidden">
              {techTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  className={`flex justify-between items-center px-3 py-2 rounded-lg text-left transition-all font-semibold text-sm tracking-wide ${activeTab === idx
                    ? "bg-blue-800 dark:bg-gray-700 shadow-lg text-white"
                    : "hover:bg-blue-800/80 dark:hover:bg-gray-700/80 opacity-80 text-gray-200 dark:text-gray-300"
                    }`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="flex items-center whitespace-nowrap text-xs sm:text-sm">
                    {tab.label}
                  </span>
                  {activeTab === idx && <span className="ml-2 text-sm">→</span>}
                </button>
              ))}
            </div>

            {/* Tab Selector - Mobile Horizontal */}
            <div className="bg-blue-900 dark:bg-gray-800 text-white p-3 sm:p-4 flex md:hidden flex-row gap-2 sm:gap-3 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
              {techTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  className={`flex items-center px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all snap-center min-w-[140px] sm:min-w-[160px] max-w-[160px] sm:max-w-[180px] flex-shrink-0 overflow-hidden ${activeTab === idx
                    ? "bg-blue-800 dark:bg-gray-700 shadow text-white"
                    : "bg-blue-700/70 dark:bg-gray-700/70 text-gray-200 dark:text-gray-300 hover:bg-blue-800/80 dark:hover:bg-gray-600/80"
                    }`}
                  onClick={() => setActiveTab(idx)}
                  style={{ textOverflow: 'ellipsis' }}
                >
                  <span className="truncate block w-full">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Right: Skills Grid - Desktop */}
            <div className="w-full bg-[#efefef] dark:bg-gray-900 p-4 sm:p-6 min-h-[300px] sm:min-h-[340px] items-center justify-center hidden lg:flex overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full max-w-[100%] sm:max-w-[90%] transition-all duration-300">
                {activeSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 sm:gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl shadow-sm px-3 sm:px-4 py-2 sm:py-3 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-200 dark:hover:border-gray-600 hover:shadow-md transition min-h-[48px] sm:min-h-[56px] text-neutral-800 dark:text-gray-200"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-sm sm:text-base font-medium text-black dark:text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Grid - Tablet */}
            <div className="w-full bg-[#efefef] dark:bg-gray-900 p-4 min-h-[280px] items-center justify-center hidden md:flex lg:hidden overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-2 gap-3 w-full max-w-[100%] transition-all duration-300">
                {activeSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-200 dark:hover:border-gray-600 hover:shadow-md transition min-h-[44px] text-neutral-800 dark:text-gray-200"
                  >
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-black dark:text-white truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Skills Grid */}
            <div className="w-full bg-[#efefef] dark:bg-gray-900 p-3 sm:p-4 min-h-[120px] sm:min-h-[140px] flex md:hidden items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
                {activeSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm px-2 sm:px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-200 dark:hover:border-gray-600 hover:shadow-md transition text-neutral-800 dark:text-gray-200 min-h-[80px] sm:min-h-[90px]"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center mb-1">
                      {skill.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-blue-900 dark:text-blue-300 text-center leading-tight">{skill.name}</span>
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