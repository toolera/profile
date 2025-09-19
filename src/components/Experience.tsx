'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    title: 'SQL Developer & ML Engineer',
    company: 'Kapital Bank',
    period: 'Feb 2023 - Sep 2025',
    location: 'Baku, Azerbaijan',
    responsibilities: [
      'Developing machine learning systems for fraud detection and risk assessment using SQL-based feature engineering and model deployment',
      'Building automated ML pipelines for transaction monitoring and anomaly detection with real-time inference capabilities',
      'Implementing data extraction and transformation processes for financial ML models and predictive analytics',
      'Creating production-ready stored procedures and database optimization for high-throughput ML feature serving',
      'Collaborating with data science teams to deploy enterprise ML solutions meeting Basel III and IFRS 9 compliance requirements'
    ]
  },
  {
    title: 'Business Analytics & Data Science',
    company: 'Unibank',
    period: 'Dec 2021 - Feb 2023',
    location: 'Baku, Azerbaijan',
    responsibilities: [
      'Developed predictive models and machine learning solutions for customer behavior analysis and business intelligence',
      'Built automated reporting systems and ML-powered dashboards for tracking key performance indicators and customer metrics',
      'Implemented advanced analytics using SQL and statistical methods to identify patterns in large-scale financial datasets',
      'Created data preprocessing pipelines and feature engineering frameworks for business intelligence and predictive modeling',
      'Designed A/B testing frameworks and statistical analysis methods to measure business impact of ML-driven initiatives'
    ]
  },
  {
    title: 'Risk Analyst & Data Specialist',
    company: 'Unibank',
    period: 'Sep 2019 - Dec 2021',
    location: 'Baku, Azerbaijan',
    responsibilities: [
      'Applied statistical methods and early ML techniques for credit risk assessment and loan portfolio optimization',
      'Developed data analysis frameworks for evaluating applicant profiles using feature engineering and risk scoring models',
      'Built automated reporting systems for loan performance tracking and risk metric calculation',
      'Implemented data quality checks and validation procedures for ML model inputs and credit decision systems',
      'Collaborated with fraud prevention teams on data analysis and pattern recognition for application verification'
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 md:mb-12">Professional Experience</h2>
          
          <div className="space-y-10 md:space-y-12">
            {experienceData.map((job, index) => (
              <ExperienceItem 
                key={index}
                title={job.title}
                company={job.company}
                period={job.period}
                location={job.location}
                responsibilities={job.responsibilities}
                index={index}
              />
            ))}
          </div>

          {/* Add ML Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4">Independent ML Engineering Projects</h3>
            <p className="text-blue-100 mb-4">
              Actively developing production-ready machine learning systems and contributing to open-source AI projects:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-blue-100">
              <li><strong>Healthcare AI Systems:</strong> Built chest cancer detection and medical imaging analysis platforms</li>
              <li><strong>Computer Vision:</strong> Developed tree disease detection using YOLOv8 with 93.3% mAP50 accuracy</li>
              <li><strong>NLP Engineering:</strong> Created Azerbaijani language processing tools and custom NER systems</li>
              <li><strong>Financial ML:</strong> Implemented probability of default models and customer lifetime value prediction engines</li>
              <li><strong>MLOps Frameworks:</strong> Built intelligent agent systems and automated ML pipeline architectures</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
  index: number
}

const ExperienceItem = ({ title, company, period, location, responsibilities, index }: ExperienceItemProps) => {
  const getLogoPath = (companyName: string) => {
    if (companyName.toLowerCase().includes('kapital')) return '/logo/birbank.png'
    if (companyName.toLowerCase().includes('unibank')) return '/logo/unibank.jpeg'
    return null
  }

  const logoPath = getLogoPath(company)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, x: 10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 group"
    >
      <div className="timeline-date text-indigo-600 font-semibold">{period} • {location}</div>
      <div className="flex items-start gap-4">
        {logoPath && (
          <img 
            src={logoPath} 
            alt={`${company} logo`}
            className="w-16 h-16 object-contain rounded-lg flex-shrink-0 mt-2 bg-white/50 p-2"
          />
        )}
        <div className="flex-1">
          <h3 className="timeline-title group-hover:text-indigo-700 transition-colors">{title}</h3>
          <h4 className="timeline-subtitle text-indigo-600">{company}</h4>
          <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 mt-3">
            {responsibilities.map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="timeline-content text-sm md:text-base group-hover:text-gray-800 transition-colors"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience