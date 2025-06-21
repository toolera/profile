'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import DownloadButton from './DownloadButton'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const titles = ['Machine Learning Engineer', 'AI Systems Developer', 'Computer Vision Expert', 'MLOps Specialist']
    const typeSpeed = isDeleting ? 50 : 100
    const currentTitle = titles[titleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setTypedText(currentTitle.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentTitle.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTitleIndex((titleIndex + 1) % titles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  return (
    <section
      id="home"
      className="relative pt-16 pb-20 flex flex-col justify-center min-h-[100vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Name and title with typing animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-none">Ismat</span> <span className="text-white">Samadov</span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-cyan-300 drop-shadow-lg h-8">
            <span className="font-semibold">{typedText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Production ML Systems', 'Computer Vision', 'NLP', 'MLOps'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-800 border border-white/50 shadow-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Description with glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl"
          >
            <p className="text-slate-700 mb-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Building scalable AI systems and production-ready ML pipelines with expertise in computer vision, 
              natural language processing, and end-to-end model deployment across banking and healthcare sectors.
            </p>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Currently developing enterprise ML solutions at Kapital Bank while creating open-source 
              AI frameworks and contributing to low-resource language processing for Azerbaijani NLP.
            </p>
          </motion.div>

          {/* Buttons - improved for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-cyan-400/20"
              aria-label="View my ML projects and systems"
            >
              View ML Projects
            </motion.a>

            <DownloadButton
              filePath="/ISMAT SAMADOV.pdf"
              label="Download CV"
              className="w-full sm:w-auto py-3 px-6 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 border border-white/50 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              variant="secondary"
              documentType="cv"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-lg blur-lg"
        />
        <motion.div
          animate={{ 
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-10 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm"
        />
      </div>

      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 sm:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white opacity-95"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero