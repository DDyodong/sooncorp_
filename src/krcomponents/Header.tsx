import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center text-2xl font-bold text-gray-800">
          <img 
          src='/img/sooncorplogo.png'
          alt= 'logo'
          className='h-8 w-auto mr-2'></img>
          SOONCORPORATION
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/App"  className="text-gray-600 hover:text-blue-500">
                En
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
