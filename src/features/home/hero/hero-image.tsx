'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import heroImg from '../../../../public/assets/items/Grilled Salmon Bowl.png'

/**
 * Hero product shot. It is the page's LCP element, so it loads eagerly through next/image
 * (resized and served as WebP/AVIF instead of the 4096px PNG) and stays visible from the
 * first paint — the entrance animation only scales it, it never starts hidden.
 */
const HeroImage = () => {
  return (
    <div className='relative order-first flex items-center justify-center md:order-last lg:min-h-[500px]'>
      {/* Soft halo behind the product shot */}
      <div className='pointer-events-none absolute aspect-square w-[280px] rounded-full bg-brand/10 blur-2xl lg:w-[420px] xl:w-[500px]' />
      <motion.div
        className='relative w-[280px] lg:w-[420px] xl:w-[500px]'
        initial={{ scale: 0.94 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ animation: 'float 6s ease-in-out infinite' }}
      >
        <Image
          src={heroImg}
          alt='Healthy grilled chicken bowl'
          priority
          sizes='(min-width: 1280px) 500px, (min-width: 1024px) 420px, 280px'
          className='h-auto w-full object-contain'
        />
      </motion.div>
    </div>
  )
}

export default HeroImage
