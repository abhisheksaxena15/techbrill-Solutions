import PageHeader from "@/components/page-header"
import AboutPreview from "@/components/about-preview"

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description="Learn more about TechBrill Solutions and our mission" />

      <AboutPreview />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of skilled professionals with years of experience in their respective fields.",
              },
              {
                title: "Client-Focused Approach",
                description: "We prioritize understanding your business needs to deliver tailored solutions.",
              },
              {
                title: "Innovative Solutions",
                description: "We stay ahead of industry trends to provide cutting-edge technology solutions.",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing ensures our deliverables meet the highest quality standards.",
              },
              {
                title: "Timely Delivery",
                description: "We respect deadlines and ensure projects are completed on schedule.",
              },
              {
                title: "Ongoing Support",
                description: "Our relationship doesn't end at delivery; we provide continuous support and maintenance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              From our humble beginnings to where we are today, our journey has been defined by growth and innovation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  year: "2017",
                  title: "Foundation",
                  description: "TechBrill Solutions was founded with a vision to provide innovative IT solutions.",
                },
                {
                  year: "2019",
                  title: "Expansion",
                  description:
                    "Expanded our team and service offerings to include mobile app development and digital marketing.",
                },
                {
                  year: "2021",
                  title: "Global Reach",
                  description:
                    "Started serving international clients and established partnerships with global technology providers.",
                },
                {
                  year: "2023",
                  title: "Innovation Hub",
                  description: "Launched our innovation hub focusing on AI, ML, and emerging technologies.",
                },
                {
                  year: "2025",
                  title: "Future Forward",
                  description: "Continuing to evolve and adapt to the changing technology landscape.",
                },
              ].map((item, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? "left-timeline" : "right-timeline"}`}>
                  <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <span className="text-primary font-bold text-xl">{item.year}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
