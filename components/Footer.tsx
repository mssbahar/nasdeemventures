import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/assets/images/nasdeemlogo.png" 
                  alt="Nasdeem Ventures Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">Nasdeem Ventures</span>
            </div>
            <p className="text-gray-300 text-sm">
              Proudly Malaysia's Leading Bumiputera Company in Scheduled Waste Management & Industrial Solutions.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com/NasdeemVenturesSB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-10 h-10" />
              </a>
              <a 
                href="https://www.instagram.com/nasdeemventures/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-10 h-10" />
              </a>
              <a 
                href="https://www.tiktok.com/@nasdeemventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/nasdeem-ventures-sdn-bhd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/our-story" className="text-gray-300 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/our-team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-300 hover:text-white transition-colors">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/scheduled-waste-management" className="text-gray-300 hover:text-white transition-colors">
                  Waste Management
                </Link>
              </li>
              <li>
                <Link href="/services/petroleum-products" className="text-gray-300 hover:text-white transition-colors">
                  Petroleum Products
                </Link>
              </li>
              <li>
                <Link href="/services/demolitions-works" className="text-gray-300 hover:text-white transition-colors">
                  Demolitions Works
                </Link>
              </li>
              <li>
                <Link href="/services/palm-oil-supply" className="text-gray-300 hover:text-white transition-colors">
                  Palm Oil Supply
                </Link>
              </li>
              <li>
                <Link href="/services/transportations-logistics" className="text-gray-300 hover:text-white transition-colors">
                  Transportation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  1033, Lengkok Perindustrian Bukit Minyak 2,<br />
                  Taman Perindustrian Bukit Minyak,<br />
                  14100 Simpang Ampat, Pulau Pinang
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>604-5010800</p>
                  <p>604-5010801</p>
                  <p>604-5010802</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-gray-300 text-sm">general@nasdeemventures.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon–Fri: 8:30 AM–5:30 PM</p>
                  <p>Sat: 8:30 AM–1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} Nasdeem Ventures Sdn Bhd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

