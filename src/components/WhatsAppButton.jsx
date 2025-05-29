import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const openWhatsApp = () => {
    // WhatsApp numaranızı buraya ekleyin (90 ülke kodu olmadan)
    const phoneNumber = "5551234567" // Örnek numara
    const message = "Merhaba! Müzik dersleri hakkında bilgi almak istiyorum 🎵"
    const whatsappUrl = `https://wa.me/90${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
              >
                <span className="font-medium">🎵 Müzik Dersleri</span>
                <br />
                <span className="text-gray-300">WhatsApp'tan yazın!</span>
                {/* Arrow */}
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(34, 197, 94, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
            aria-label="WhatsApp ile iletişim"
          >
            {/* Arka plan dalgası */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-green-400 rounded-full"
            />

            {/* WhatsApp Icon */}
            <motion.div
              animate={{ 
                rotate: [0, -15, 15, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>

            {/* Hover efekti için parlayan halka */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Floating müzik notaları */}
            <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.span
                animate={{ 
                  x: [-5, -15, -5],
                  y: [-5, -15, -5],
                  opacity: [0, 1, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-xs text-green-200"
              >
                ♫
              </motion.span>
            </div>

            {/* İkinci müzik notası */}
            <div className="absolute -bottom-1 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.span
                animate={{ 
                  x: [5, 15, 5],
                  y: [5, 15, 5],
                  opacity: [0, 1, 0],
                  rotate: [0, -360, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="text-xs text-green-200"
              >
                ♪
              </motion.span>
            </div>

            {/* Pulse efekti */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 border-2 border-green-400 rounded-full"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppButton 