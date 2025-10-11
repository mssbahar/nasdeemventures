import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
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
            <p className="text-muted-foreground text-sm">
              Proudly Malaysia's Leading Bumiputera Company in Scheduled Waste Management & Industrial Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/our-story" className="text-muted-foreground hover:text-secondary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/our-team" className="text-muted-foreground hover:text-secondary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-muted-foreground hover:text-secondary transition-colors">
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
                <Link href="/services/scheduled-waste-management" className="text-muted-foreground hover:text-secondary transition-colors">
                  Waste Management
                </Link>
              </li>
              <li>
                <Link href="/services/petroleum-products" className="text-muted-foreground hover:text-secondary transition-colors">
                  Petroleum Products
                </Link>
              </li>
              <li>
                <Link href="/services/demolitions-works" className="text-muted-foreground hover:text-secondary transition-colors">
                  Demolitions Works
                </Link>
              </li>
              <li>
                <Link href="/services/transportations-logistics" className="text-muted-foreground hover:text-secondary transition-colors">
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
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  1033, Lengkok Perindustrian Bukit Minyak 2,<br />
                  Taman Perindustrian Bukit Minyak,<br />
                  14100 Simpang Ampat, Pulau Pinang
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>604-5010800</p>
                  <p>604-5010801</p>
                  <p>604-5010802</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">general@nasdeemventures.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>Mon–Fri: 8:30 AM–5:30 PM</p>
                  <p>Sat: 8:30 AM–1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nasdeem Ventures Sdn Bhd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
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

