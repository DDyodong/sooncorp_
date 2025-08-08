import React from 'react'
import { Code, Brush, Server } from 'lucide-react'

function Services() {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Code className="text-blue-500 mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Web Development
            </h3>
            <p className="text-gray-600">
              We offer custom web development services tailored to your specific
              needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Brush className="text-blue-500 mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Graphic Design
            </h3>
            <p className="text-gray-600">
              Our graphic design services will help you create a visually
              stunning brand identity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Server className="text-blue-500 mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Cloud Solutions
            </h3>
            <p className="text-gray-600">
              We provide reliable and scalable cloud solutions to help your
              business grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
