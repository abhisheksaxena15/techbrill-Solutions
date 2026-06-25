'use client';

import React from 'react';
import PageHeader from '@/components/page-header'; // Assuming a PageHeader component
import { Button } from '@/components/ui/button'; // Assuming a Button component
import { ArrowRight } from 'lucide-react'; // Assuming lucide-react icons

// You might have a layout component wrapping your pages for consistent branding
// import Layout from '@/components/layout'; 

export default function ITServicesLandingPage() {
  return (
    // <Layout>
    <div> {/* Replace with Layout if available */}
      <PageHeader 
        title="IT Services" 
        description="Comprehensive IT solutions tailored to your business needs"
      />

      {/* Service Explanation Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">What are IT Services?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {/* Placeholder: Explain what IT services entail */}
            Provide a clear and concise explanation of the IT services offered.
          </p>
          {/* Add more detailed explanation and maybe sub-service descriptions */}
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Key Benefits of Our IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder: List key benefits */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Benefit 1 Title</h3>
              <p className="text-gray-700 dark:text-gray-300">Explanation of Benefit 1.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Benefit 2 Title</h3>
              <p className="text-gray-700 dark:text-gray-300">Explanation of Benefit 2.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Benefit 3 Title</h3>
              <p className="text-gray-700 dark:text-gray-300">Explanation of Benefit 3.</p>
            </div>
            {/* Add more benefits as needed */}
          </div>
        </div>
      </section>

      {/* Customer Pain Points Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Addressing Your IT Challenges</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-4">
            {/* Placeholder: List common pain points and how your service addresses them */}
            <li>Pain Point 1: Briefly describe the pain point and your solution.</li>
            <li>Pain Point 2: Briefly describe the pain point and your solution.</li>
            <li>Pain Point 3: Briefly describe the pain point and your solution.</li>
            {/* Add more pain points as needed */}
          </ul>
        </div>
      </section>

      {/* Statistics and Data Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">IT Services by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder: Include relevant statistics */}
            <div>
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-gray-700 dark:text-gray-300">Years of Experience</p>
            </div>
             <div>
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-gray-700 dark:text-gray-300">Successful Projects</p>
            </div>
             <div>
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-gray-700 dark:text-gray-300">Client Satisfaction (Placeholder Stat)</p>
            </div>
            {/* Add more statistics as needed */}
          </div>
        </div>
      </section>

      {/* Our Unique Approach Section */}
       <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Our Approach to IT Services</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {/* Placeholder: Describe your unique approach and methodology */}
            Detail your process, values, and what sets your IT services apart.
          </p>
           {/* Maybe add steps or key aspects of your process */}
        </div>
      </section>

      {/* Case Studies/Success Stories Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Case Studies & Success Stories</h2>
          {/* Placeholder: Showcase relevant case studies or testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Case Study Title 1</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Brief description of the case study and results.</p>
              <a href="#" className="text-primary font-medium">Read More</a>
            </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Case Study Title 2</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Brief description of the case study and results.</p>
              <a href="#" className="text-primary font-medium">Read More</a>
            </div>
            {/* Add more case studies or testimonials */} 
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-lg mb-8">Contact us today to learn how our IT services can benefit your business.</p>
          <Button variant="secondary" size="lg" className="group">
            Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

    </div> // Closing the main div, assuming no Layout component is used yet
    // </Layout> // Uncomment and replace the div with Layout when ready
  );
} 