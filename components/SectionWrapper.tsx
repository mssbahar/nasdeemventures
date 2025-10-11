'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const SectionWrapper = ({ children, className = '', id }: SectionWrapperProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={`py-16 lg:py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper

