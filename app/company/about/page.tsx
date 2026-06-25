"use client"

import React from "react"
import PageHeader from "@/components/page-header"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader
        title="Who We Are"
        description="Learn more about TechBrill&apos;s journey, expertise, and commitment to excellence"
      />

      {/* Company Story Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide" delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded in 2017 in Noida, India, TechBrill Solutions has rapidly grown into a leading IT service
                  provider and brand communication company. Our journey began with a simple yet powerful vision: to
                  transform businesses through innovative technology solutions.
                </p>
                <p className="text-gray-700 mb-6">
                  Over the years, we&apos;ve evolved from a small team of passionate developers into a full-service digital
                  agency, serving clients across various industries. Our growth has been driven by our commitment to
                  excellence, innovation, and client success.
                </p>
                <p className="text-gray-700 mb-8">
                  Today, we&apos;re proud to be trusted technology partners for businesses worldwide, delivering solutions
                  that drive real business growth and digital transformation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2}>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
                  alt="Our Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="container">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <AnimatedText
                text="Our Expertise"
                className="text-3xl font-bold mb-4"
              />
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                We combine technical expertise with creative innovation to deliver comprehensive digital solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade" delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Custom web applications, e-commerce solutions, and enterprise platforms built with cutting-edge technologies.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">Mobile Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Native and cross-platform mobile applications that deliver exceptional user experiences across devices.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade" delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Comprehensive digital marketing strategies to enhance online presence and drive business growth.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#101c36]">
        <div className="container">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <span className="uppercase text-primary font-semibold tracking-wider text-sm">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-2 text-white">
                Meet the <span className="text-primary italic">Experts</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-300">
                Our team of skilled professionals brings together diverse expertise and a shared passion for technology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
              },
              {
                name: "Jane Smith",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
              },
              {
                name: "Mike Johnson",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
              },
              {
                name: "Sarah Williams",
                role: "Design Director",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
              },
            ].map((member, idx) => (
              <AnimatedSection key={member.name} animation="fade" delay={0.1 * idx}>
                <Card className="bg-gray-800 border-gray-700">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{member.name}</CardTitle>
                    <p className="text-primary">{member.role}</p>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </React.Fragment>
  )
} 