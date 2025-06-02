'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaChartBar, FaTools, FaBrain, FaRobot } from 'react-icons/fa'

const skillsData = {
  mlEngineering: [
    'TensorFlow',
    'PyTorch', 
    'Scikit-learn',
    'XGBoost',
    'Hugging Face',
    'Model Optimization'
  ],
  computerVision: [
    'YOLOv8',
    'OpenCV',
    'Medical Imaging',
    'Object Detection',
    'Image Classification',
    'DICOM Processing'
  ],
  nlpAI: [
    'Transformers',
    'Named Entity Recognition',
    'Custom Tokenization',
    'Language Models',
    'Text Classification',
    'Multilingual NLP'
  ],
  mlOpsInfrastructure: [
    'MLflow',
    'Docker',
    'Kubernetes',
    'FastAPI',
    'Model Serving',
    'Pipeline Automation'
  ],
  dataEngineering: [
    'SQL Optimization',
    'PostgreSQL',
    'ETL Pipelines',
    'Feature Engineering',
    'Data Validation',
    'Real-time Processing'
  ],
  financialML: [
    'Risk Modeling',
    'Fraud Detection',
    'Credit Scoring',
    'Time Series Analysis',
    'Basel III Compliance',
    'Regulatory ML'
  ]
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 md:mb-12">ML Engineering Expertise</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <SkillCategory 
              title="ML Frameworks"
              icon={<FaBrain />}
              skills={skillsData.mlEngineering}
              delay={0}
            />
            
            <SkillCategory 
              title="Computer Vision"
              icon={<FaChartBar />}
              skills={skillsData.computerVision}
              delay={0.1}
            />
            
            <SkillCategory 
              title="NLP & AI"
              icon={<FaRobot />}
              skills={skillsData.nlpAI}
              delay={0.2}
            />
            
            <SkillCategory 
              title="MLOps & Infrastructure"
              icon={<FaTools />}
              skills={skillsData.mlOpsInfrastructure}
              delay={0.3}
            />
            
            <SkillCategory 
              title="Data Engineering"
              icon={<FaDatabase />}
              skills={skillsData.dataEngineering}
              delay={0.4}
            />
            
            <SkillCategory 
              title="Financial ML"
              icon={<FaCode />}
              skills={skillsData.financialML}
              delay={0.5}
            />
          </div>

          {/* Technical Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-2">93.3%</div>
              <div className="text-sm text-gray-700">mAP50 Accuracy in Computer Vision Models</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-gray-700">Daily Predictions in Production Systems</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-2">&lt;100ms</div>
              <div className="text-sm text-gray-700">Real-time Model Inference Latency</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: string[]
  delay: number
}

const SkillCategory = ({ title, icon, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-50 rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
        <span className="text-primary mr-2">{icon}</span>
        {title}
      </h3>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills