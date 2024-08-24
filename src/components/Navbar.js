import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/images/logo/logo-text.png'
import { FaSignInAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div id='offer' className='md:h-16 sm:h-14 sm:text:sm md:text-lg text-white sm:flex px-4 py-3 items-center justify-center' style={{background:'#4E01BD'}}>Celebrating 1 years of GeekNomix! Avail benefits upto ₹1,20,000 | 23 seats left | <Link to='#' className='text-white'>Apply Now</Link></div>
      <nav className="w-full bg-white" id='navbar'>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link to='/' className="inline-flex items-center space-x-2">
            <img src={logo} className='h-8' alt='navbar-logo'/>
          </Link>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 mt-3 inline-flex space-x-8 items-center justify-center">
              <li>
                <Link to='/home'
                  className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'
                  className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to='/courses'
                  className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to='/placements'
                  className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
                >
                  Placements
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:flex">
            <button
              type="button"
              className="hover:text-white flex items-center rounded-[4px] p-2 px-4"
              style={{border:"1px solid #3D088B"}}
            >
              <FaSignInAlt className='mr-1' /> Sign up / Sign In
            </button>
            <button
              type="button"
              className='p-2 px-4 rounded-[4px] text-white'
              style={{background:'#3D088B'}}>
              Explore
            </button>
          </div>
          <div className="lg:hidden">
            <IoMenu className='h-10 w-10 cursor-pointer' onClick={toggleMenu} />
          </div>
        </div>
      </nav>
      <div className={`lg:hidden absolute w-full z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-start gap-4 w-full bg-white p-4">
          <li>
            <Link to='/home'
              className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'
              className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link to='/courses'
              className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link to='/placements'
              className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-gray-900 no-underline"
            >
              Placements
            </Link>
          </li>
          <button
            type="button"
            className='p-2 px-4 rounded-[4px] text-white'
            style={{background:'#3D088B'}}>
            Sign up / Sign In
          </button>
        </ul>
      </div>
    </>
  )
}

export default Navbar
