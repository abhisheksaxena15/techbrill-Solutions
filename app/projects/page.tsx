import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1561715276-a2d08706f78c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A fully responsive e-commerce platform with integrated payment gateway and inventory management.",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A mobile application for healthcare providers to manage patient records and appointments.",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "An analytics dashboard that uses AI to provide insights and predictions based on business data.",
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1497496238764-27f965d3059c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A complete redesign of a corporate website with improved UX/UI and SEO optimization.",
    },
    {
      title: "Inventory Management System",
      category: "Enterprise Solutions",
      image: "https://images.unsplash.com/photo-1581092246471-6fa29806586d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A comprehensive inventory management system for a manufacturing company.",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1528109743509-d14ed07fbb2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A multi-platform social media campaign that increased brand awareness and engagement.",
    },
  ]

  return (
    <>
      <PageHeader title="Our Projects" description="Explore our portfolio of successful projects" />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="rounded-full">
              All
            </Button>
            <Button variant="outline" className="rounded-full">
              Web Development
            </Button>
            <Button variant="outline" className="rounded-full">
              Mobile Apps
            </Button>
            <Button variant="outline" className="rounded-full">
              AI & ML
            </Button>
            <Button variant="outline" className="rounded-full">
              Digital Marketing
            </Button>
            <Button variant="outline" className="rounded-full">
              Enterprise Solutions
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <span className="text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link href={`/projects/${index}`} className="text-primary font-medium flex items-center group">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help you achieve your business goals with our technology solutions.
            </p>
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
