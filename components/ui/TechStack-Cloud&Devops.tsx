"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const techTabs = [
  {
    label: "Cloud Platforms",
    skills: [
      {
        name: "Amazon Web Services (AWS)",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Microsoft Azure",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Google Cloud Platform (GCP)",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_logo.svg" alt="GCP logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "IBM Cloud",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_Cloud_logo.svg" alt="IBM Cloud logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Oracle Cloud",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle Cloud logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Infrastructure as Code (IaC)",
    skills: [
      {
        name: "Terraform",
        icon: <img src="https://www.vectorlogo.zone/logos/hashicorp_terraform/hashicorp_terraform-icon.svg" alt="Terraform logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "AWS CloudFormation",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/AWS_CloudFormation_Logo.svg" alt="CloudFormation logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Pulumi",
        icon: <img src="https://avatars.githubusercontent.com/u/28699204?s=200&v=4" alt="Pulumi logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Ansible",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg" alt="Ansible logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Chef",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Chef_logo.svg" alt="Chef logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Puppet",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Puppet_Logo.svg" alt="Puppet logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Containers & Orchestration",
    skills: [
      {
        name: "Docker",
        icon: <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Kubernetes",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Amazon ECS",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Amazon_Elastic_Container_Service_logo.svg" alt="Amazon ECS logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Amazon EKS",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Amazon_Elastic_Kubernetes_Service_logo.svg" alt="Amazon EKS logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Azure Kubernetes Service (AKS)",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="AKS logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Google Kubernetes Engine (GKE)",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_logo.svg" alt="GKE logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Helm",
        icon: <img src="https://helm.sh/img/helm.svg" alt="Helm logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "CI/CD & Automation",
    skills: [
      {
        name: "Jenkins",
        icon: <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" alt="Jenkins logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "GitHub Actions",
        icon: <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Actions logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "GitLab CI",
        icon: <img src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" alt="GitLab CI logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Azure DevOps",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Microsoft_Azure_DevOps_Logo.svg" alt="Azure DevOps logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "CircleCI",
        icon: <img src="https://seeklogo.com/images/C/circleci-logo-FAA5B7EDEF-seeklogo.com.png" alt="CircleCI logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "ArgoCD",
        icon: <img src="https://argo-cd.readthedocs.io/en/stable/assets/logo.png" alt="ArgoCD logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Monitoring, Logging & Cost Optimization",
    skills: [
      {
        name: "Prometheus",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg" alt="Prometheus logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Grafana",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg" alt="Grafana logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Datadog",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Datadog_logo.png" alt="Datadog logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "ELK Stack",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Elastic_Stack_logo.svg" alt="ELK Stack logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "AWS CloudWatch",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Amazon_CloudWatch_Logo.svg" alt="CloudWatch logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Azure Monitor",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure Monitor logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Google Operations Suite",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_logo.svg" alt="Google Operations Suite logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "CloudHealth",
        icon: <img src="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/products/cloudhealth/cloudhealth-logo.png" alt="CloudHealth logo" className="w-7 h-7 object-contain" />
      },
    ],
  },
  {
    label: "Cloud Security & Compliance",
    skills: [
      {
        name: "HashiCorp Vault",
        icon: <img src="https://www.vectorlogo.zone/logos/hashicorp_vault/hashicorp_vault-icon.svg" alt="Vault logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "AWS IAM",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS IAM logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Azure Active Directory",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure AD logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Google Cloud IAM",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_logo.svg" alt="Google Cloud IAM logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Prisma Cloud",
        icon: <img src="https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/images/logos/prisma-cloud-logo.png" alt="Prisma Cloud logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Aqua Security",
        icon: <img src="https://www.aquasec.com/wp-content/uploads/2021/07/aqua-logo-horizontal-blue.png" alt="Aqua Security logo" className="w-7 h-7 object-contain" />
      },
      {
        name: "Open Policy Agent (OPA)",
        icon: <img src="https://avatars.githubusercontent.com/u/25561113?s=200&v=4" alt="OPA logo" className="w-7 h-7 object-contain" />
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