import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Music, Mic, Users, BookOpen, Star, Clock } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [activeMobileCard, setActiveMobileCard] = useState(null)

  const services = [
    {
      icon: Mic,
      title: "Şan Dersleri",
      description: "Ses teknikleri, nefes kontrolü ve sahne performansı eğitimi",
      features: ["Ses teknikleri", "Nefes egzersizleri", "Sahne performansı", "Repertuar çalışması"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Music,
      title: "Enstrüman Eğitimi",
      description: "Piyano, gitar, keman ve daha birçok enstrümanda profesyonel eğitim",
      features: ["Bireysel dersler", "Grup dersleri", "Online eğitim", "Sertifika programı"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Müzik Teorisi",
      description: "Temel müzik teorisinden ileri seviye kompozisyona kadar",
      features: ["Nota okuma", "Armoni", "Kompozisyon", "Müzik analizi"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Grup Dersleri",
      description: "Arkadaşlarınızla birlikte öğrenmenin keyfini çıkarın",
      features: ["Küçük gruplar", "Ensemble çalışması", "Konser hazırlığı", "Sosyal öğrenme"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Star,
      title: "Konser Hazırlığı",
      description: "Sahne deneyimi ve performans becerilerinizi geliştirin",
      features: ["Sahne tecrübesi", "Performans teknikleri", "Özgüven geliştirme", "Repertuar seçimi"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Esnek Programlar",
      description: "Size uygun saatlerde, kendi hızınızda öğrenin",
      features: ["Esnek saatler", "Kişisel tempo", "Online seçenekler", "Telafi dersleri"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" ref={ref} className="py-20 bg-white" style={{padding:'20px'}}>
      <div className="flex flex-col justify-center items-center gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="gradient-text">Hizmetlerim</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Her seviyeden öğrenci için özel olarak tasarlanmış kapsamlı müzik eğitimi programları
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                activeMobileCard === index ? 'shadow-2xl -translate-y-2' : ''
              }`}
              onClick={() => {
                // Mobile cihazlarda kartı aktif/inaktif yap
                setActiveMobileCard(activeMobileCard === index ? null : index)
              }}
              onMouseEnter={() => {
                // Desktop'ta mouse enter olduğunda mobile state'i temizle
                setActiveMobileCard(null)
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                activeMobileCard === index ? 'opacity-10' : ''
              }`} />
              
              <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300 ${
                  activeMobileCard === index ? 'text-purple-600' : ''
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 px-6 bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-700 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Detaylı Bilgi Al
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${
                activeMobileCard === index ? 'opacity-20' : ''
              }`}>
                <div className="text-4xl">♪</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-4"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Müzik Yolculuğunuza Bugün Başlayın!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Ücretsiz deneme dersi için hemen iletişime geçin
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Ücretsiz Deneme Dersi
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 