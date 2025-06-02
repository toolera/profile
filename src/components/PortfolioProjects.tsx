'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projectsData = [
  {
    title: 'Chest Cancer Detection Platform',
    githubUrl: 'https://github.com/Ismat-Samadov/chest_cancer_detection',
    description: 'Medical imaging AI system using DenseNet121 with attention mechanisms for chest cancer detection. Features automated DICOM preprocessing, model serving infrastructure, and web-based diagnostic interface with explainable AI capabilities.',
    tags: ['Computer Vision', 'Medical AI', 'DenseNet121', 'DICOM Processing'],
    metrics: '94.2% Accuracy',
    category: 'Healthcare AI'
  },
  {
    title: 'Tree Disease Detection System', 
    githubUrl: 'https://github.com/Ismat-Samadov/crop_desease_detection',
    description: 'YOLOv8-based real-time agricultural disease detection achieving 93.3% mAP50 on UAV imagery. Includes optimized inference pipeline, REST API deployment, and automated model retraining with performance monitoring.',
    tags: ['Computer Vision', 'YOLOv8', 'Agriculture AI', 'Real-time Detection'],
    metrics: '93.3% mAP50',
    category: 'Computer Vision'
  },
  {
    title: 'Azerbaijani NER Engine',
    githubUrl: 'https://github.com/Ismat-Samadov/Named_Entity_Recognition',
    description: 'Custom Named Entity Recognition system for low-resource Azerbaijani language. Built with FastAPI microservices, containerized deployment, and real-time inference with custom tokenization and model fine-tuning.',
    tags: ['NLP', 'Named Entity Recognition', 'Low-resource Languages', 'FastAPI'],
    metrics: 'Custom Tokenization',
    category: 'Natural Language Processing'
  },
  {
    title: 'Enterprise PD Scoring API',
    githubUrl: 'https://github.com/Ismat-Samadov/probability_default',
    description: 'Production-grade Probability of Default system with Basel III & IFRS 9 compliance. Multi-segment ML models with sub-100ms latency, batch processing capabilities, and comprehensive monitoring dashboard.',
    tags: ['Financial ML', 'Risk Modeling', 'Basel III', 'Production API'],
    metrics: '<100ms Latency',
    category: 'Financial ML'
  },
  {
    title: 'Azerbaijani GPT Implementation',
    githubUrl: 'https://github.com/Ismat-Samadov/GPT',
    description: 'Transformer-based language model trained on Azerbaijani Wikipedia corpus. Features custom tokenization, inference optimization, and distributed training pipeline with model performance tracking.',
    tags: ['Language Models', 'Transformers', 'Custom Training', 'Azerbaijani NLP'],
    metrics: 'Custom LM',
    category: 'Language Models'
  },
  {
    title: 'Intelligent Agent Framework',
    githubUrl: 'https://github.com/Ismat-Samadov/agent_implementation',
    description: 'Production-ready framework for intelligent agents with containerized deployment. Implements multiple agent types (Simple Reflex, Model-Based, Utility-Based, Q-Learning) with interactive visualization.',
    tags: ['AI Agents', 'Reinforcement Learning', 'Framework Design', 'Containerization'],
    metrics: 'Multi-Agent System',
    category: 'AI Systems'
  },
  {
    title: 'Real-time Fraud Detection',
    githubUrl: 'https://github.com/Ismat-Samadov/fraud_detection',
    description: 'Streaming ML system for transaction fraud detection with adaptive learning. Features synthetic data generation, real-time feature engineering, and anomaly detection with low-latency inference.',
    tags: ['Fraud Detection', 'Streaming ML', 'Anomaly Detection', 'Real-time Systems'],
    metrics: '99.5% Accuracy',
    category: 'Financial ML'
  },
  {
    title: 'CLV Prediction Engine',
    githubUrl: 'https://github.com/Ismat-Samadov/clv_model',
    description: 'Scalable Customer Lifetime Value prediction using gradient boosting algorithms. Includes automated feature engineering, A/B testing framework, and real-time model serving with drift detection.',
    tags: ['Customer Analytics', 'Gradient Boosting', 'MLOps', 'A/B Testing'],
    metrics: 'Enterprise Scale',
    category: 'Business Intelligence'
  }
]

const PortfolioProjects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4">ML Engineering Portfolio</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Production-ready machine learning systems spanning computer vision, NLP, financial modeling, 
            and AI infrastructure. Built with modern MLOps practices and deployed at scale.
          </p>
          
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                githubUrl={project.githubUrl}
                description={project.description}
                tags={project.tags}
                metrics={project.metrics}
                category={project.category}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in ML Collaboration?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm passionate about building production ML systems that solve real-world problems. 
              Let's discuss how we can leverage AI to drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center bg-primary text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/Ismat-Samadov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors"
              >
                <FaGithub className="mr-2" />
                View All Projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string;
  githubUrl: string;
  description: string;
  tags: string[];
  metrics: string;
  category: string;
  index: number;
}

const ProjectCard = ({ title, githubUrl, description, tags, metrics, category, index }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
              {category}
            </span>
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {metrics}
            </span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 text-sm md:text-base line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white hover:bg-gray-900 transition-colors text-sm font-medium py-2 px-4 rounded-md flex-1 justify-center"
          >
            <FaGithub className="mr-2" />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioProjects