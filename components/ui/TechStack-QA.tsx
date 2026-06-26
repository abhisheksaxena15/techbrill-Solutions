"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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
                  className=""
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
    </>
  );
}