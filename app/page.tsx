import Hero from "@/components/hero"
import FastGrowingServices from "@/components/fast-growing-services"
import TechnologyStack from "@/components/technology-stack"
import ServicesOverview from "@/components/services-overview"
import AboutPreview from "@/components/about-preview"
import IndustriesSection from "@/components/industries-section"
import WorkProcess from "@/components/work-process"
import ProjectsPreview from "@/components/projects-preview"
import CTASection from "@/components/cta-section"
import ConsultationSection from "@/components/ConsultationSection"
import AdvancedServicesClient from "@/components/AdvancedServicesClient"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <AdvancedServicesClient />
      <FastGrowingServices />
      <TechnologyStack />
      <IndustriesSection />
      <WorkProcess />
      <ProjectsPreview />
      <CTASection />
      <ConsultationSection />
    </>
  )
}
