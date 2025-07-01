'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaExternalLinkAlt, FaCertificate, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useState } from 'react'
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

const featuredCertificationData = [
  {
    title: 'Oracle Database SQL Certified Associate',
    issuer: 'Oracle',
    id: '290631207OCASQL12C',
    date: 'May 2022',
    pdfUrl: '/certificates/others/OCA.pdf',
    verificationUrl: 'https://catalog-education.oracle.com/apex/f?p=1010:2:100683567337903::::P2_AUTHCODE,P2_AUTH_KEY,P2_ARG_INVALID_CNT:Ph156118hV47D,cOpJB156046UbeO4312onHs,0',
    description: 'Advanced SQL optimization and database design for ML feature engineering and data pipelines.'
  }
]

const additionalCertifications = {
  'Kaggle': {
    color: 'from-blue-500 to-cyan-500',
    icon: '🏆',
    description: 'Machine Learning & Data Science Micro-Courses',
    certificates: [
      { name: 'Advanced SQL', file: '/certificates/kaggle/Ismat Samadov - Advanced SQL.png' },
      { name: 'Computer Vision', file: '/certificates/kaggle/Ismat Samadov - Computer Vision.png' },
      { name: 'Data Cleaning', file: '/certificates/kaggle/Ismat Samadov - Data Cleaning.png' },
      { name: 'Data Visualization', file: '/certificates/kaggle/Ismat Samadov - Data Visualization.png' },
      { name: 'Feature Engineering', file: '/certificates/kaggle/Ismat Samadov - Feature Engineering.png' },
      { name: 'Geospatial Analysis', file: '/certificates/kaggle/Ismat Samadov - Geospatial Analysis.png' },
      { name: 'Intermediate Machine Learning', file: '/certificates/kaggle/Ismat Samadov - Intermediate Machine Learning.png' },
      { name: 'Intro to Deep Learning', file: '/certificates/kaggle/Ismat Samadov - Intro to Deep Learning.png' },
      { name: 'Game AI and Reinforcement Learning', file: '/certificates/kaggle/Ismat Samadov - Intro to Game AI and Reinforcement Learning.png' },
      { name: 'Intro to Machine Learning', file: '/certificates/kaggle/Ismat Samadov - Intro to Machine Learning.png' },
      { name: 'Intro to Programming', file: '/certificates/kaggle/Ismat Samadov - Intro to Programming.png' },
      { name: 'Intro to SQL', file: '/certificates/kaggle/Ismat Samadov - Intro to SQL.png' },
      { name: 'Pandas', file: '/certificates/kaggle/Ismat Samadov - Pandas.png' },
      { name: 'Python', file: '/certificates/kaggle/Ismat Samadov - Python.png' },
      { name: 'Time Series', file: '/certificates/kaggle/Ismat Samadov - Time Series.png' }
    ]
  },
  'Udemy': {
    color: 'from-purple-500 to-pink-500',
    icon: '📚',
    description: 'Comprehensive Online Courses',
    certificates: [
      { name: 'Algebra Fundamentals', file: '/certificates/udemy/udemy-algebra.pdf' },
      { name: 'Calculus', file: '/certificates/udemy/udemy-calculus.pdf' },
      { name: 'Data Science Complete Course', file: '/certificates/udemy/udemy-data-science.pdf' },
      { name: 'Django Web Development', file: '/certificates/udemy/udemy-django.pdf' },
      { name: 'Data Science Bootcamp', file: '/certificates/udemy/udemy-ds.pdf' },
      { name: 'GitHub Mastery', file: '/certificates/udemy/udemy-github.pdf' },
      { name: 'iOS Development', file: '/certificates/udemy/udemy-ios.pdf' },
      { name: 'Java Masterclass', file: '/certificates/udemy/udemy-java-mc.pdf' },
      { name: 'Java Programming', file: '/certificates/udemy/udemy-java.pdf' },
      { name: 'Machine Learning A-Z', file: '/certificates/udemy/udemy-machine-learning.pdf' },
      { name: 'PL/SQL Programming', file: '/certificates/udemy/udemy-pl_sql.pdf' },
      { name: 'PL/SQL Advanced', file: '/certificates/udemy/udemy-plsql.pdf' },
      { name: 'Power BI Mastery', file: '/certificates/udemy/udemy-powerbi.pdf' },
      { name: 'Probability & Statistics', file: '/certificates/udemy/udemy-probablity.pdf' },
      { name: 'Python Bootcamp', file: '/certificates/udemy/udemy-python.pdf' },
      { name: 'React Development', file: '/certificates/udemy/udemy-react.pdf' },
      { name: 'Rust Programming', file: '/certificates/udemy/udemy-rust.pdf' },
      { name: 'Scrum Methodology', file: '/certificates/udemy/udemy-scrum.pdf' },
      { name: 'SQL Mastery', file: '/certificates/udemy/udemy-sql.pdf' },
      { name: 'Time Series Analysis', file: '/certificates/udemy/udemy-time-series.pdf' },
      { name: 'Web Scraping', file: '/certificates/udemy/udemy-web-scrap.pdf' },
      { name: 'Web Scraping Advanced', file: '/certificates/udemy/udemy-websscrping.pdf' }
    ]
  },
  'HackerRank': {
    color: 'from-green-500 to-emerald-500',
    icon: '💻',
    description: 'Programming Skills Assessment',
    certificates: [
      { name: 'Java Basic', file: '/certificates/hackerrank/hackerrank-java-basic.png' },
      { name: 'Python', file: '/certificates/hackerrank/hackerrank-python.pdf' },
      { name: 'SQL Basic', file: '/certificates/hackerrank/hackerrank-sql-basic.png' }
    ]
  },
  'Data So Cool': {
    color: 'from-orange-500 to-red-500',
    icon: '📊',
    description: 'Data Analytics & Visualization',
    certificates: [
      { name: 'Power BI', file: '/certificates/data-so-cool/datasocool-powerbi.pdf' },
      { name: 'Python for Data', file: '/certificates/data-so-cool/datasocool-python.pdf' },
      { name: 'SQL for Data', file: '/certificates/data-so-cool/datasocool-sql.pdf' }
    ]
  },
  'Others': {
    color: 'from-gray-500 to-slate-600',
    icon: '🎯',
    description: 'Specialized Certifications',
    certificates: [
      { name: 'Dataiku Core Designer', file: '/certificates/others/dataiku-core-designer.pdf' },
      { name: 'Hyperskill Java', file: '/certificates/others/hyperskill-java.pdf' }
    ]
  }
}

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
                {featuredCertificationData.map((cert, index) => (
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
                
                {/* Additional Certifications */}
                <AdditionalCertificationsSection />
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
  const getLogoPath = (institutionName: string) => {
    if (institutionName.includes('Mingachevir')) return '/logo/mdu.jpg'
    if (institutionName.includes('Azerbaijan State University of Economics')) return '/logo/unec.jpeg'
    return null
  }

  const logoPath = getLogoPath(institution)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        {logoPath && (
          <img 
            src={logoPath} 
            alt={`${institution} logo`}
            className="w-12 h-12 object-contain rounded-md flex-shrink-0 mt-1"
          />
        )}
        <div className="flex-1">
          <h4 className="text-base md:text-lg font-bold mb-1">{institution}</h4>
          <p className="text-primary font-medium text-sm md:text-base">{degree} • {field}</p>
          <p className="text-gray-600 text-xs md:text-sm mt-2">{period}</p>
          <p className="text-gray-700 text-sm mt-2">{description}</p>
        </div>
      </div>
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
  const getLogoPath = (issuerName: string) => {
    if (issuerName.toLowerCase().includes('oracle')) return '/logo/oracle.jpeg'
    return null
  }

  const logoPath = getLogoPath(issuer)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        {logoPath && (
          <img 
            src={logoPath} 
            alt={`${issuer} logo`}
            className="w-12 h-12 object-contain rounded-md flex-shrink-0 mt-1"
          />
        )}
        <div className="flex-1">
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
        </div>
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

const AdditionalCertificationsSection = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [showAll, setShowAll] = useState(false)

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const totalCertificates = Object.values(additionalCertifications).reduce(
    (sum, category) => sum + category.certificates.length, 0
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-md p-4 md:p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-base md:text-lg font-bold mb-1">Additional Certifications</h4>
          <p className="text-sm text-gray-600">{totalCertificates} certificates across 5 platforms</p>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
        >
          {showAll ? 'Hide All' : 'View All'}
          {showAll ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {showAll && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {Object.entries(additionalCertifications).map(([platform, data]) => (
            <div key={platform} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(platform)}
                className={`w-full px-4 py-3 bg-gradient-to-r ${data.color} text-white flex items-center justify-between hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{data.icon}</span>
                  <div className="text-left">
                    <h5 className="font-semibold">{platform}</h5>
                    <p className="text-xs opacity-90">{data.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {data.certificates.length} certs
                  </span>
                  {expandedSections[platform] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              
              {expandedSections[platform] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 bg-gray-50"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {data.certificates.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h6 className="font-medium text-sm mb-2 text-gray-800">{cert.name}</h6>
                        <DownloadButton 
                          filePath={cert.file}
                          label="Download"
                          variant="secondary"
                          className="text-xs py-1 px-2 w-full"
                          documentType="certificate"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg text-center"
          >
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-primary">{totalCertificates} certificates</span> completed across multiple platforms,
              demonstrating continuous learning and skill development in ML, data science, and software engineering.
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Education