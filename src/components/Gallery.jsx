import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, Play, Image as ImageIcon, Music } from 'lucide-react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'concerts',
      title: 'Konser Performansı',
      description: 'Öğrencilerimizle birlikte sahne performansı',
      thumbnail: '🎭',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      type: 'video',
      category: 'lessons',
      title: 'Piyano Dersi',
      description: 'Bireysel piyano eğitimi örneği',
      thumbnail: '🎹',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      type: 'image',
      category: 'students',
      title: 'Öğrenci Başarıları',
      description: 'Sertifika töreni anları',
      thumbnail: '🏆',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      type: 'video',
      category: 'concerts',
      title: 'Şan Performansı',
      description: 'Öğrenci konser kaydı',
      thumbnail: '🎤',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      type: 'image',
      category: 'lessons',
      title: 'Grup Dersi',
      description: 'Ensemble çalışması',
      thumbnail: '👥',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      type: 'image',
      category: 'students',
      title: 'Müzik Teorisi',
      description: 'Nota okuma dersi',
      thumbnail: '📚',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 7,
      type: 'video',
      category: 'lessons',
      title: 'Gitar Eğitimi',
      description: 'Temel gitar teknikleri',
      thumbnail: '🎸',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      type: 'image',
      category: 'concerts',
      title: 'Yıl Sonu Konseri',
      description: 'Tüm öğrencilerin katıldığı konser',
      thumbnail: '🎊',
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const filters = [
    { key: 'all', label: 'Tümü' },
    { key: 'concerts', label: 'Konserler' },
    { key: 'lessons', label: 'Dersler' },
    { key: 'students', label: 'Öğrenciler' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gray-50" style={{padding:'20px'}}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 flex flex-col justify-center items-center gap-5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="gradient-text">Galeri</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Öğrencilerimizin başarıları, konser anları ve eğitim süreçlerinden kareler
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-6 mb-4"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-2 py-1 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filter.key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-100 hover:text-purple-600'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  index % 3 === 0 ? 'lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedMedia(item)}
              >
                {/* Background */}
                <div className={`w-full h-48 sm:h-56 md:h-64 ${index % 3 === 0 ? 'lg:h-80' : ''} bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl`}>
                  {item.thumbnail}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                    {item.type === 'video' ? (
                      <Play className="w-12 h-12 mx-auto mb-2" />
                    ) : (
                      <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                    )}
                    <p className="text-sm font-semibold">Görüntüle</p>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>

                {/* Type indicator */}
                <div className="absolute top-4 right-4">
                  {item.type === 'video' ? (
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Play className="w-3 h-3 mr-1" />
                      Video
                    </div>
                  ) : (
                    <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <ImageIcon className="w-3 h-3 mr-1" />
                      Fotoğraf
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Media content */}
                <div className={`w-full h-96 bg-gradient-to-br ${selectedMedia.color} flex items-center justify-center text-white text-8xl`}>
                  {selectedMedia.thumbnail}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedMedia.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">
                      {selectedMedia.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedMedia.type === 'video' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {selectedMedia.type === 'video' ? 'Video' : 'Fotoğraf'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery 