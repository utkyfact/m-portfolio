import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ayşe Yılmaz",
      role: "Öğrenci Velisi",
      content: "Kızım 6 yaşında piyano derslerine başladı. Öğretmenimizin sabırlı ve sevgi dolu yaklaşımı sayesinde müziğe olan ilgisi her geçen gün artıyor. Artık evde sürekli piyano çalıyor!",
      rating: 5,
      image: "👩‍💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      role: "Yetişkin Öğrenci",
      content: "40 yaşında gitar öğrenmeye başladım. Hiç geç olmadığını kanıtladım! Öğretmenimin motivasyonu ve profesyonel yaklaşımı sayesinde hayallerimi gerçekleştiriyorum.",
      rating: 5,
      image: "👨‍💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Zeynep Demir",
      role: "Şan Öğrencisi",
      content: "Şan derslerinde sadece teknik değil, sahne performansı da öğreniyorum. Özgüvenim arttı ve artık sahnede rahatça performans sergileyebiliyorum. Harika bir deneyim!",
      rating: 5,
      image: "🎤",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Ali Özkan",
      role: "Öğrenci Velisi",
      content: "Oğlum müzik teorisi derslerinde çok ilerleme kaydetti. Artık notaları rahatlıkla okuyor ve kendi bestelerini yapıyor. Öğretmenimize çok teşekkür ederiz.",
      rating: 5,
      image: "👨‍👦",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Fatma Şen",
      role: "Piyano Öğrencisi",
      content: "Grup derslerinde hem öğreniyor hem de yeni arkadaşlar ediniyorum. Birlikte müzik yapmak çok keyifli. Ensemble çalışmaları favorim!",
      rating: 5,
      image: "🎹",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Emre Yıldız",
      role: "Gitar Öğrencisi",
      content: "Online dersler de çok verimli geçiyor. Esnek program sayesinde iş yoğunluğuma rağmen müzik eğitimimi sürdürebiliyorum. Teknoloji kullanımı mükemmel!",
      rating: 5,
      image: "🎸",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

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
    <section id="testimonials" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute text-6xl text-purple-600"
            style={{
              left: `${Math.min(Math.random() * 85, 80)}%`,
              top: `${Math.min(Math.random() * 85, 80)}%`,
              maxWidth: '100%'
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            <span className="gradient-text">Öğrenci Yorumları</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Öğrencilerimizin ve velilerimizin deneyimlerini dinleyin
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-200" />

              {/* Content */}
              <div className="text-center">
                {/* Avatar */}
                <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6`}>
                  {testimonials[currentIndex].image}
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic px-2 sm:px-0">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-600 font-semibold">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-purple-50 transition-colors duration-200 cursor-pointer opacity-50"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-purple-50 transition-colors duration-200 cursor-pointer opacity-50"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>
        </motion.div>

        {/* Testimonial indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center space-x-2 mb-12"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-purple-600 w-8'
                  : 'bg-gray-300 hover:bg-purple-300'
                }`}
            />
          ))}
        </motion.div>

        {/* Mini testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white text-lg mr-4`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.content.substring(0, 100)}..."
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 