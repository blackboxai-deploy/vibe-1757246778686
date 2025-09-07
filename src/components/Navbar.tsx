"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/massage', label: 'Massage' },
    { href: '/hammam', label: 'Hammam' },
    { href: '/spa', label: 'Spa' },
    { href: '/about', label: 'À propos' },
    { href: '/gallery', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg font-playfair">C</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Clin d'oeil
              </h1>
              <p className="text-sm text-gray-600 -mt-1">SPA Casablanca</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-2 border-transparent hover:border-amber-300 transition-all duration-300 shadow-lg">
                Réserver
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center px-3 py-2 border rounded text-amber-600 border-amber-600 hover:bg-amber-50"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              {isMenuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-100">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 hover:bg-amber-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                    Réserver
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}