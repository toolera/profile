'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa'
import DownloadButton from './DownloadButton'

const educationData = [
  {
    institution: 'Azerbaijan State University of Economics',
    degree: 'Master of Business Administration (MBA)',
    field: 'Artificial Intelligence',
    period: 'Current',
    description: 'Advanced studies in AI applications for business, machine learning systems design, and enterprise AI strategy.'
  },
  {
    institution: 'Mingachevir State University',
    degree: 'Bachelor',
    field: 'Management of Industry',
    period: '2012 - 2016',
    description: 'Foundation in business management with focus on process optimization and analytical thinking.'
  }
]

const certificationData = [
  {
    title: 'Oracle Database SQL Certified Associate',
    issuer: 'Oracle',
    id: '290631207OCASQL12C',
    date: 'May 2022',
    pdfUrl: '/public/certificates/others/OCA.pdf',
    verificationUrl: 'https://catalog-education.oracle.com/apex/f?p=1010:2:100683567337903::::P2_AUTHCODE,P2_AUTH_KEY,P2_ARG_INVALID_CNT:Ph156118hV47D,cOpJB156046UbeO4312onHs,0',
    description: 'Advanced SQL optimization and database design for ML feature engineering and data pipelines.'
  }
]

const mlLearningData = [
  {
    title: 'Machine Learning Engineering',
    platform: 'Self-Directed & Open Source',
    focus: 'Production ML Systems',
    achievements: [
      'Built 15+ production-ready ML systems',
      'Contributed to Azerbaijani NLP research',
      'Developed computer vision models with 93%+ accuracy',
      'Implemented enterprise-grade MLOps pipelines'
    ]
  },
  {
    title: 'Deep Learning Specialization',
    platform: 'Research & Implementation',
    focus: 'Neural Networks & AI',
    achievements: [
      'Custom transformer architecture for Azerbaijani language',
      'Medical imaging AI with DICOM processing',
      'Multi-agent reinforcement learning systems',
      'Real-time inference optimization'
    ]
  }
]

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 md:mb-12">Education & ML Expertise</h2>
          
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {/* Formal Education */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
                <FaGraduationCap className="mr-2 text-primary" />
                Formal Education
              </h3>
              <div className="space-y-4 md:space-y-6">
                {educationData.map((edu, index) => (
                  <EducationItem 
                    key={index}
                    institution={edu.institution}
                    degree={edu.degree}
                    field={edu.field}
                    period={edu.period}
                    description={edu.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center">
                <FaCertificate className="mr-2 text-primary" />
                Professional Certifications
              </h3>
              <div className="space-y-4 md:space-y-6">
                {certificationData.map((cert, index) => (
                  <CertificationItem 
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    id={cert.id}
                    date={cert.date}
                    description={cert.description}
                    pdfUrl={cert.pdfUrl}
                    verificationUrl={cert.verificationUrl}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ML Learning & Research */}
          <div className="mt-12">
            <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
              </svg>
              Machine Learning Research & Development
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mlLearningData.map((learning, index) => (
                <MLLearningItem
                  key={index}
                  title={learning.title}
                  platform={learning.platform}
                  focus={learning.focus}
                  achievements={learning.achievements}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Core ML Engineering Competencies</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-700">Production ML Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-gray-700">Years in Data & Analytics</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-gray-700">ML Domains (CV, NLP, Finance)</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface EducationItemProps {
  institution: string
  degree: string
  field: string
  period: string
  description: string
  index: number
}

const EducationItem = ({ institution, degree, field, period, description, index }: EducationItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
    >
      <h4 className="text-base md:text-lg font-bold mb-1">{institution}</h4>
      <p className="text-primary font-medium text-sm md:text-base">{degree} • {field}</p>
      <p className="text-gray-600 text-xs md:text-sm mt-2">{period}</p>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
    </motion.div>
  )
}

interface CertificationItemProps {
  title: string
  issuer: string
  id: string
  date: string
  description: string
  pdfUrl?: string
  verificationUrl?: string
  index: number
}

const CertificationItem = ({ title, issuer, id, date, description, pdfUrl, verificationUrl, index }: CertificationItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
    >
      <h4 className="text-base md:text-lg font-bold mb-1">{title}</h4>
      <p className="text-primary font-medium text-sm md:text-base">{issuer}</p>
      <p className="text-gray-600 text-xs md:text-sm mt-2">ID: {id}</p>
      <p className="text-gray-600 text-xs md:text-sm">Issued: {date}</p>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
      
      <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
        {pdfUrl && (
          <DownloadButton 
            filePath={pdfUrl}
            label="Download Certificate"
            variant="secondary"
            className="text-sm py-2 px-3"
            documentType="certificate"
          />
        )}
        
        {verificationUrl && (
          <a 
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-3 rounded-md transition-colors text-sm"
          >
            Verify Certificate <FaExternalLinkAlt className="ml-1 text-xs" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

interface MLLearningItemProps {
  title: string
  platform: string
  focus: string
  achievements: string[]
  index: number
}

const MLLearningItem = ({ title, platform, focus, achievements, index }: MLLearningItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
    >
      <h4 className="text-base md:text-lg font-bold mb-1">{title}</h4>
      <p className="text-primary font-medium text-sm md:text-base">{platform}</p>
      <p className="text-gray-600 text-xs md:text-sm mt-1">Focus: {focus}</p>
      
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-800 mb-2">Key Achievements:</p>
        <ul className="text-xs md:text-sm text-gray-700 space-y-1">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Education