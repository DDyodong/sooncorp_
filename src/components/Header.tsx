import React from 'react'
import { Code2 } from 'lucide-react'

function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center text-2xl font-bold text-gray-800">
          <Code2 className="mr-2 text-blue-500" />
          Company Name
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-600 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-600 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
