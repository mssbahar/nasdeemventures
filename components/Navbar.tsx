'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isLightBackground, setIsLightBackground] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleBackgroundChange = () => {
      // Check if we're on a page with dark background (like hero sections)
      const heroSection = document.querySelector('section[class*="bg-gradient"]')
      const isOnDarkPage = heroSection && window.scrollY < window.innerHeight
      setIsLightBackground(!isOnDarkPage)
    }

    window.addEventListener('scroll', () => {
      handleScroll()
      handleBackgroundChange()
    })
    
    // Check initial state
    handleBackgroundChange()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleBackgroundChange)
    }
  }, [])

  const aboutItems = [
    { name: 'Our Story', href: '/about/our-story' },
    { name: 'Our Team', href: '/about/our-team' },
    { name: 'Certifications', href: '/about/certifications' },
  ]

  const servicesItems = [
    { name: 'Scheduled Waste Management', href: '/services/scheduled-waste-management' },
    { name: 'Petroleum Products', href: '/services/petroleum-products' },
    { name: 'Demolitions Works', href: '/services/demolitions-works' },
    { name: 'Palm Oil Supply', href: '/services/palm-oil-supply' },
    { name: 'Transportations & Logistics', href: '/services/transportations-logistics' },
  ]

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#', hasDropdown: true, items: aboutItems },
    { name: 'Services', href: '/services', hasDropdown: true, items: servicesItems },
    { name: 'Media', href: '/media' },
    { name: 'Career', href: '/career' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : isLightBackground
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/assets/images/nasdeemlogo.png" 
                alt="Nasdeem Ventures Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className={`text-2xl font-bold ${
              isScrolled 
                ? 'text-primary' 
                : isLightBackground 
                ? 'text-primary' 
                : 'text-white'
            }`}>
              Nasdeem Ventures
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isScrolled
                      ? 'text-primary hover:text-accent'
                      : isLightBackground
                      ? 'text-primary hover:text-accent'
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border py-2"
                      >
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-base text-primary hover:bg-muted hover:text-accent transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Button - match link color */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isScrolled
                  ? 'text-primary hover:text-accent'
                  : isLightBackground
                  ? 'text-primary hover:text-accent'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${
                isScrolled 
                  ? 'text-primary' 
                  : isLightBackground 
                  ? 'text-primary' 
                  : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 ${
                isScrolled 
                  ? 'text-primary' 
                  : isLightBackground 
                  ? 'text-primary' 
                  : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-lg font-medium text-primary hover:text-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && item.items && (
                      <div className="ml-4 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-base text-muted-foreground hover:text-accent"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-secondary text-secondary-foreground px-3 py-2 rounded-lg font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

