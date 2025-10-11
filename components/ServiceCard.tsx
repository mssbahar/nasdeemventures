'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
  index?: number
}

const ServiceCard = ({ title, description, image, link, index = 0 }: ServiceCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          unoptimized
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-accent hover:text-secondary font-medium transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard

