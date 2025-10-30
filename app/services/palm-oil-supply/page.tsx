import HeroSection from '@/components/HeroSection'
import SectionWrapper from '@/components/SectionWrapper'
import Image from 'next/image'
import { CheckCircle, Leaf, Shield, Truck, Award, Globe } from 'lucide-react'

export default function PalmOilSupplyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Palm Oil Supply"
        subtitle="Reliable palm oil supply chain management with quality assurance"
        backgroundImage="/assets/images/palmoil.jpg"
        showButtons={true}
        buttonText="Get Quote"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      {/* Licensing & Trust Badge Section */}
      <SectionWrapper id="services" className="bg-secondary/10 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-secondary/40 bg-white/60 shadow-md px-6 py-3 mb-5 animate-float">
              <span className="relative w-12 h-12">
                <Image src="/assets/images/mpob.svg" alt="MPOB" fill className="object-contain" />
              </span>
              <span className="text-base font-bold text-primary uppercase tracking-wide">MPOB-licensed Exporter</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-3">Malaysia’s Trusted Palm Oil Partner</h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
              <div className="bg-white/80 rounded-xl px-4 py-2 shadow border text-xs font-bold text-secondary">100% Compliance</div>
              <div className="bg-white/80 rounded-xl px-4 py-2 shadow border text-xs font-bold text-accent">20+ Partners</div>
              <div className="bg-white/80 rounded-xl px-4 py-2 shadow border text-xs font-bold text-primary">Nationwide Reach</div>
              <div className="bg-white/80 rounded-xl px-4 py-2 shadow border text-xs font-bold text-secondary">Global Exports</div>
            </div>
            <p className="text-muted-foreground mt-4 max-w-xl">Fully MPOB authorized, audited yearly, and trusted by leading refineries and buyers. We bring supply security, traceability, and rigorous standards to every batch.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/assets/images/palmoil.jpg" alt="Palm Oil" width={400} height={400} className="rounded-2xl shadow-xl object-cover aspect-square" />
          </div>
        </div>
      </SectionWrapper>

      {/* Journey/Process Roadmap Section */}
      <SectionWrapper className="relative bg-none py-16">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/palmoil.jpg" alt="Palm Oil Plantation" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 drop-shadow">From Plantation to Port—Our Palm Oil Journey</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className="flex flex-col items-center flex-1">
              <Leaf className="w-12 h-12 text-white mb-2 animate-bounce drop-shadow" />
              <span className="font-black text-white drop-shadow">Ethical Sourcing</span>
              <span className="text-xs text-white/90">From certified plantations</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Globe className="w-12 h-12 text-white mb-2 animate-bounce drop-shadow" />
              <span className="font-black text-white drop-shadow">Global Quality</span>
              <span className="text-xs text-white/90">Food-grade & traceable</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Truck className="w-12 h-12 text-white mb-2 animate-bounce drop-shadow" />
              <span className="font-black text-white drop-shadow">Expert Logistics</span>
              <span className="text-xs text-white/90">From port to delivery</span>
            </div>
            <div className="flex flex-col items-center flex-1">
              <Shield className="w-12 h-12 text-white mb-2 animate-bounce drop-shadow" />
              <span className="font-black text-white drop-shadow">Full Compliance</span>
              <span className="text-xs text-white/90">Audited, export-ready</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Products/Services with Engaging Cards */}
      <SectionWrapper className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">Our Palm Oil Portfolio</h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">Choose from top-tier palm oil products, each crafted for reliability, safety, and excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CPO */}
            <div className="rounded-2xl bg-secondary/10 shadow-lg border-2 border-secondary/30 group overflow-hidden hover:scale-105 transition-transform cursor-pointer relative">
              <div className="relative h-48 overflow-hidden">
                <Image src="/assets/images/crude.jpg" alt="Crude Palm Oil (CPO)" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-3 py-1 text-xs rounded-full">Industrial</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-secondary">Crude Palm Oil (CPO)</h4>
                <p className="text-sm text-muted-foreground my-2">Perfect for refining, manufacturing, and bulk processing. Unmatched freshness, ready for your needs.</p>
              </div>
            </div>
            {/* PPO */}
            <div className="rounded-2xl bg-accent/10 shadow-lg border-2 border-accent/20 group overflow-hidden hover:scale-105 transition-transform cursor-pointer relative">
              <div className="relative h-48 overflow-hidden">
                <Image src="/assets/images/processpalm.jpg" alt="Processed Palm Oil (PPO)" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-3 py-1 text-xs rounded-full">Edible</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-accent">Processed Palm Oil (PPO)</h4>
                <p className="text-sm text-muted-foreground my-2">Imagine premium, refined palm oil for your food business. Fresh, safe, and always quality-tested.</p>
              </div>
            </div>
            {/* SPO */}
            <div className="rounded-2xl bg-primary/10 shadow-lg border-2 border-primary/20 group overflow-hidden hover:scale-105 transition-transform cursor-pointer relative">
              <div className="relative h-48 overflow-hidden">
                <Image src="/assets/images/wastepalm.jpg" alt="Sludge Palm Oil (SPO)" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 text-xs rounded-full">Eco & Industrial</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary">Sludge Palm Oil (SPO)</h4>
                <p className="text-sm text-muted-foreground my-2">Go green with our SPO, ideal for biodiesel, renewables, and eco-industry applications.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Impact & Purpose Band */}
      <SectionWrapper className="relative py-16 mt-0 bg-none">
        <div className="absolute inset-0 z-0">
          <Image src="/assets/images/environment.jpg" alt="Palm Oil Impact" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow mb-2">Supplying the World — Responsibly</h3>
          <p className="text-lg text-white drop-shadow leading-snug">Our mission: An honest, sustainable palm oil supply chain—supporting both people and the planet for generations to come.</p>
          <div className="flex flex-row gap-6 mt-4">
            <Leaf className="w-9 h-9 text-white animate-pulse drop-shadow" />
            <Shield className="w-9 h-9 text-white animate-shake drop-shadow" />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section (mirrors petroleum products style) */}
      <SectionWrapper className="bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ready for Premium Palm Oil Supply?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a compliant, high-quality palm oil supply solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors hover:text-yellow-500"
            >
              Contact Us
            </a>
            <a
              href="tel:604-5010800"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-yellow-500 transition-colors"
            >
              Call: 604-5010800
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}


