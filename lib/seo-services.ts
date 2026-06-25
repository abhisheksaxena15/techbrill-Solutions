export interface SeoService {
  title: string;
  points: string[];
}

export const seo_services: SeoService[] = [
  {
    title: "Technical SEO",
    points: ["Website Audit & Analysis", "Site Speed Optimization", "Mobile Optimization", "Indexability & Crawlability", "Structured Data Markup"],
  },
  {
    title: "On-Page SEO",
    points: ["Keyword Research & Strategy", "Content Optimization", "Meta Description & Title Tag Optimization", "Header Tag Implementation", "Image Optimization"],
  },
  {
    title: "Off-Page SEO",
    points: ["Backlink Building & Outreach", "Local SEO (Google My Business Optimization)", "Online Reputation Management", "Social Signal Building", "Content Promotion"],

  },
  {
    title: "Content Marketing for SEO",
    points: ["Blog Post Creation", "Landing Page Content", "Pillar Page & Topic Cluster Development", "Content Audits & Strategy", "On-going Content Optimization"],
  },
]; 