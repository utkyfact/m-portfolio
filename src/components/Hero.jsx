import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Music, Play, Volume2, Headphones } from 'lucide-react'
import { BsHandIndexThumb } from "react-icons/bs";

const Hero = () => {
  const ref = useRef(null)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const musicNotes = ['♪', '♫', '♬', '♩', '♭', '♯']

  // Scroll indicator visibility kontrolü
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // 100px scroll sonrası gizle, 50px'in altında tekrar göster
      if (scrollY > 100) {
        setShowScrollIndicator(false)
      } else if (scrollY < 50) {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: typeof window !== 'undefined' ? Math.random() * (window.innerWidth - 50) : Math.random() * 1150,
                y: typeof window !== 'undefined' ? Math.random() * (window.innerHeight - 50) : Math.random() * 750,
                opacity: 0
              }}
              animate={{ 
                y: [null, -100, -200],
                opacity: [1, 1, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute text-white/20 text-2xl"
              style={{
                maxWidth: '100%',
                left: `${Math.min(Math.random() * 90, 85)}%`
              }}
            >
              {musicNotes[Math.floor(Math.random() * musicNotes.length)]}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="block">Müziğin</span>
              <span className="block gradient-text">Büyülü Dünyası</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 px-4 sm:px-0"
          >
            Profesyonel müzik ve şan eğitimi ile hayallerinizi gerçeğe dönüştürün
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-3 w-full sm:w-auto min-w-[140px] sm:min-w-[160px] whitespace-nowrap"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Play size={16} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="flex-shrink-0">Hemen Başla</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-4 sm:px-6 py-3 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] sm:min-w-[180px] text-sm sm:text-base cursor-pointer whitespace-nowrap"
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
            >
              <Volume2 size={16} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="flex-shrink-0">Daha Fazla Bilgi</span>
            </motion.button>
          </motion.div>

          {/* Floating music icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 hidden sm:block"
            >
              <Music className="text-white/30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-1/3 right-1/4 hidden sm:block"
            >
              <Headphones className="text-white/30 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-1/3 left-1/3 hidden sm:block"
            >
              <Volume2 className="text-white/30 w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - Responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? 0 : 20
        }}
        transition={{ 
          duration: 0.3,
          delay: showScrollIndicator ? 1 : 0
        }}
        className="absolute bottom-15 left-1/2 transform -translate-x-1/2"
      >
        {/* Desktop - Mouse scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:flex w-6 h-10 border-2 border-white rounded-full justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>

        {/* Mobile - Swipe up indicator */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex sm:hidden flex-col items-center text-white"
        >
          {/* Parmak işareti */}
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-2xl mb-1"
          >
            <BsHandIndexThumb />
          </motion.div>
          
          {/* Yukarı ok */}
          <motion.div
            animate={{ 
              y: [0, -3, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sm font-light"
          >
            Kaydır
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 