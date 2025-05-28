import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Clock, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const stats = [
    { icon: Users, number: "500+", label: "Mutlu Öğrenci" },
    { icon: Clock, number: "10+", label: "Yıl Deneyim" },
    { icon: Award, number: "50+", label: "Ödül & Sertifika" },
    { icon: Heart, number: "100%", label: "Tutkulu Eğitim" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50">
      <div className="flex justify-center items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{
            padding: '0 20px',
          }}
        >
          {/* Left side - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="w-full h-96 sm:h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                  🎵
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl"
              >
                🎼
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl"
              >
                🎤
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center lg:text-left"
              >
                Müziğe <span className="gradient-text">Tutkuyla</span> Adanmış
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-center lg:text-left"
              >
                10 yılı aşkın deneyimimle, müziğin büyülü dünyasında öğrencilerimi 
                yeteneklerini keşfetmeye ve geliştirmeye yardımcı oluyorum. Her yaştan 
                öğrenciye özel yaklaşımlarla, müzik teorisinden performansa kadar 
                kapsamlı eğitim sunuyorum.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left"
              >
                Amacım sadece teknik beceri kazandırmak değil, aynı zamanda müziğe 
                olan sevgiyi ve tutkuyu da aktarmak. Çünkü müzik, sadece notalar değil, 
                ruhun dilidir.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8"
              style={{
                margin: '10px 0',
              }}
            >
              {stats.map((stat, index) => (
                                  <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Benimle İletişime Geç
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 