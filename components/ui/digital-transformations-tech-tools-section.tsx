"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techTabs = [
    {
        label: "Cloud & Infrastructure",
        skills: [
            { name: "AWS", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
            { name: "Microsoft Azure", icon: <Icon icon="logos:microsoft-azure" className="w-7 h-7" /> },
            { name: "Google Cloud", icon: <Icon icon="logos:google-cloud" className="w-7 h-7" /> },
            { name: "Kubernetes", icon: <Icon icon="logos:kubernetes" className="w-7 h-7" /> },
            { name: "Docker", icon: <Icon icon="logos:docker-icon" className="w-7 h-7" /> },
            { name: "Terraform", icon: <Icon icon="logos:terraform-icon" className="w-7 h-7" /> },
            { name: "Jenkins", icon: <Icon icon="logos:jenkins" className="w-7 h-7" /> },
        ],
    },
    {
        label: "Data & Analytics",
        skills: [
            { name: "Apache Spark", icon: <Icon icon="logos:apache-spark" className="w-7 h-7" /> },
            { name: "Apache Kafka", icon: <Icon icon="logos:apache-kafka" className="w-7 h-7" /> },
            { name: "Snowflake", icon: <Icon icon="logos:snowflake-icon" className="w-7 h-7" /> },
            { name: "Databricks", icon: <Icon icon="simple-icons:databricks" className="w-7 h-7" /> },
            { name: "Power BI", icon: <Icon icon="logos:microsoft-power-bi" className="w-7 h-7" /> },
            { name: "Tableau", icon: <Icon icon="logos:tableau" className="w-7 h-7" /> },
            { name: "Apache Airflow", icon: <Icon icon="logos:airflow-icon" className="w-7 h-7" /> },
        ],
    },
    {
        label: "AI & Machine Learning",
        skills: [
            { name: "TensorFlow", icon: <Icon icon="logos:tensorflow" className="w-7 h-7" /> },
            { name: "PyTorch", icon: <Icon icon="logos:pytorch-icon" className="w-7 h-7" /> },
            { name: "OpenAI", icon: <Icon icon="simple-icons:openai" className="w-7 h-7" /> },
            { name: "Azure AI", icon: <Icon icon="logos:microsoft-azure" className="w-7 h-7" /> },
            { name: "AWS SageMaker", icon: <Icon icon="logos:aws" className="w-7 h-7" /> },
            { name: "Hugging Face", icon: <Icon icon="simple-icons:huggingface" className="w-7 h-7" /> },
            { name: "MLflow", icon: <Icon icon="simple-icons:mlflow" className="w-7 h-7" /> },
        ],
    },
    {
        label: "DevOps & Automation",
        skills: [
            { name: "GitLab CI/CD", icon: <Icon icon="logos:gitlab" className="w-7 h-7" /> },
            { name: "GitHub Actions", icon: <Icon icon="logos:github-actions" className="w-7 h-7" /> },
            { name: "Ansible", icon: <Icon icon="logos:ansible" className="w-7 h-7" /> },
            { name: "Puppet", icon: <Icon icon="logos:puppet-icon" className="w-7 h-7" /> },
            { name: "Chef", icon: <Icon icon="logos:chef" className="w-7 h-7" /> },
            { name: "Prometheus", icon: <Icon icon="logos:prometheus" className="w-7 h-7" /> },
            { name: "Grafana", icon: <Icon icon="logos:grafana" className="w-7 h-7" /> },
        ],
    },
    {
        label: "Integration & APIs",
        skills: [
            { name: "MuleSoft", icon: <Icon icon="simple-icons:mulesoft" className="w-7 h-7" /> },
            { name: "Apache Camel", icon: <Icon icon="simple-icons:apache" className="w-7 h-7" /> },
            { name: "Kong", icon: <Icon icon="simple-icons:kong" className="w-7 h-7" /> },
            { name: "Postman", icon: <Icon icon="logos:postman-icon" className="w-7 h-7" /> },
            { name: "Swagger", icon: <Icon icon="logos:swagger" className="w-7 h-7" /> },
            { name: "GraphQL", icon: <Icon icon="logos:graphql" className="w-7 h-7" /> },
            { name: "Zapier", icon: <Icon icon="logos:zapier-icon" className="w-7 h-7" /> },
        ],
    },
    {
        label: "Digital Experience",
        skills: [
            { name: "Salesforce", icon: <Icon icon="logos:salesforce" className="w-7 h-7" /> },
            { name: "Microsoft 365", icon: <Icon icon="logos:microsoft-office" className="w-7 h-7" /> },
            { name: "SharePoint", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
            { name: "Dynamics 365", icon: <Icon icon="logos:microsoft-icon" className="w-7 h-7" /> },
            { name: "ServiceNow", icon: <Icon icon="simple-icons:servicenow" className="w-7 h-7" /> },
            { name: "Workday", icon: <Icon icon="simple-icons:workday" className="w-7 h-7" /> },
            { name: "Slack", icon: <Icon icon="logos:slack-icon" className="w-7 h-7" /> },
        ],
    },
];

export default function DigitalTransformationsTechToolsSection() {
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
                className="mt-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mx-auto w-full max-w-[1100px]">
                    <div className="flex flex-col md:grid md:grid-cols-[1fr_2.3fr] gap-0 items-stretch rounded-3xl overflow-hidden shadow-sm">
                        {/* Tab Selector - Desktop Vertical */}
                        <div className="bg-blue-900 text-white p-4 flex-col gap-4 overflow-y-auto max-h-[340px] min-h-[340px] custom-scrollbar hidden md:flex">
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
                        <div className="bg-blue-900 text-white p-2 flex md:hidden flex-row gap-3 overflow-x-auto mobile-scrollbar snap-x snap-mandatory w-full">
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
                        <div className="w-full bg-[#efefef] dark:bg-white p-2 min-h-[110px] flex md:hidden items-center">
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