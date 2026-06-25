import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  icon?: string
  className?: string
}

export default function ServiceCard({ title, description, image, icon, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all",
        className,
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <Link
          href={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-primary font-medium flex items-center group"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
