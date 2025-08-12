import React from 'react'
import { Code2 } from 'lucide-react'

function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center text-2xl font-bold text-gray-800">
          <Code2 className="mr-2 text-blue-500" />
          순코퍼레이션
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-600 hover:text-blue-500">
                회사 소개
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-600 hover:text-blue-500">
                서비스
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-500">
                연락처
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
