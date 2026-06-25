import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("bg-primary text-white py-16 md:py-24", className)}>
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg text-white/90 max-w-2xl mx-auto">{description}</p>}
      </div>
    </div>
  )
}
