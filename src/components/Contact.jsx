import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Music, Instagram, Facebook, Youtube } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 555 123 45 67",
      description: "Haftanın 7 günü arayabilirsiniz"
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@muzikatolyesi.com",
      description: "24 saat içinde yanıtlıyoruz"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Müzik Sokak No:123, İstanbul",
      description: "Merkezi konumumuzda bizi bulun"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cumartesi",
      description: "09:00 - 21:00"
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", color: "from-pink-500 to-purple-500" },
    { icon: Facebook, href: "#", color: "from-blue-600 to-blue-700" },
    { icon: Youtube, href: "#", color: "from-red-500 to-red-600" }
  ]

  const services = [
    "Piyano Dersleri",
    "Gitar Dersleri",
    "Şan Dersleri",
    "Keman Dersleri",
    "Müzik Teorisi",
    "Grup Dersleri",
    "Online Eğitim",
    "Konser Hazırlığı"
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
    <section id="contact" ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className="absolute text-4xl text-purple-600"
            style={{
              left: `${Math.min(Math.random() * 85, 80)}%`,
              top: `${Math.min(Math.random() * 85, 80)}%`,
              maxWidth: '100%'
            }}
          >
            {['♪', '♫', '♬', '♩', '♭', '♯'][Math.floor(Math.random() * 6)]}
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
            <span className="gradient-text">İletişime Geçin</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Müzik yolculuğunuza başlamak için bugün bizimle iletişime geçin
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="flex items-center mb-8">
              <Music className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Mesaj Gönderin</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="E-posta adresinizi girin"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Telefon numaranızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Hizmet seçin</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Mesaj Gönder</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-xl">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-purple-600 font-semibold mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Sosyal Medyada Takip Edin
              </h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Konumumuz
              </h4>
              <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Harita Görünümü</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © 2024 Müzik Atölyesi. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 