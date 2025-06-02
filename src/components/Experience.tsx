'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    title: 'SQL Developer & ML Engineer',
    company: 'Kapital Bank',
    period: 'Feb 2023 - Present',
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
    <section id="experience" className="py-16 md:py-20 bg-white">
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
            className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Independent ML Engineering Projects</h3>
            <p className="text-gray-700 mb-4">
              Actively developing production-ready machine learning systems and contributing to open-source AI projects:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
  responsibilities: string[]
  index: number
}

const ExperienceItem = ({ title, company, period, responsibilities, index }: ExperienceItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item"
    >
      <div className="timeline-date">{period}</div>
      <h3 className="timeline-title">{title}</h3>
      <h4 className="timeline-subtitle">{company}</h4>
      <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 mt-3">
        {responsibilities.map((item, i) => (
          <li key={i} className="timeline-content text-sm md:text-base">{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Experience