import React from "react"
import PageHeader from "@/components/page-header"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import Link from "next/link"

interface IndustryPageProps {
  params: { slug: string };
}

interface Industry {
  title: string
  slug: string
  description: string
  image: string
  longDescription?: string
  solutions?: string[]
  benefits?: string[]
}

const industries: Industry[] = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Innovative digital solutions for hospitals, clinics, and health tech startups, focusing on patient engagement, data security, and telemedicine.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    longDescription: "Our healthcare technology solutions are designed to transform patient care, streamline operations, and enhance the overall healthcare experience. We understand the unique challenges faced by healthcare providers and develop tailored solutions that address critical needs while ensuring compliance with healthcare regulations.",
    solutions: [
      "Electronic Health Records (EHR) Systems",
      "Telemedicine Platforms",
      "Patient Engagement Portals",
      "Healthcare Analytics",
      "Medical Device Integration",
      "Healthcare Mobile Apps",
      "Healthcare Security Solutions",
      "Healthcare IoT Solutions"
    ],
    benefits: [
      "Improved Patient Care",
      "Enhanced Operational Efficiency",
      "Better Data Security",
      "Regulatory Compliance",
      "Cost Reduction",
      "Improved Patient Experience",
      "Better Resource Management",
      "Enhanced Decision Making"
    ]
  },
  // Add more industries with their detailed information
]

export default async function IndustryPage({
  params,
}: IndustryPageProps) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    return (
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
        <p className="text-gray-600">The requested industry page could not be found.</p>
        <Link href="/industries" className="text-primary hover:underline mt-4 inline-block">
          Back to Industries
        </Link>
      </div>
    )
  }

  return (
    <React.Fragment>
      <PageHeader
        title={industry.title}
        description={industry.description}
      />
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide" delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold mb-4">About Our {industry.title} Solutions</h2>
                <p className="text-gray-700 mb-6">
                  {industry.longDescription}
                </p>
                {industry.solutions && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Our Solutions</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="flex items-center text-gray-700">
                          <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          <span className="text-sm font-medium">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {industry.benefits && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-700">
                          <span className="inline-block w-5 h-5 mr-2 bg-primary/20 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          <span className="text-sm font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </React.Fragment>
  )
} 