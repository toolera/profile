'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold z-20 transition-colors duration-300 ${
          isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'
        }`}>
          Ismat Samadov <span className={`hidden sm:inline font-normal text-sm transition-colors duration-300 ${
            isScrolled ? 'text-gray-700' : 'text-white/80'
          }`}>ML Engineer</span>
        </Link>
        
        {/* Mobile menu button - improved z-index */}
        <button 
          className={`md:hidden focus:outline-none z-20 transition-colors duration-300 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">ML Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#tech-profiles">Profiles</NavLink>
          <NavLink href="#projects">ML Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
      
      {/* Mobile navigation - improved with fixed positioning and better styling */}
      {isMenuOpen && (
        <nav className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-10 pt-16 pb-6 px-6 h-screen overflow-y-auto">
          <div className="flex flex-col space-y-6">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>ML Skills</MobileNavLink>
            <MobileNavLink href="#education" onClick={() => setIsMenuOpen(false)}>Education</MobileNavLink>
            <MobileNavLink href="#tech-profiles" onClick={() => setIsMenuOpen(false)}>Tech Profiles</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>ML Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </nav>
      )}
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link 
      href={href}
      className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
        isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link 
      href={href}
      className="text-gray-800 hover:text-primary transition-colors font-medium text-xl block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default Navbar