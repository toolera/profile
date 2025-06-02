// src/components/StructuredData.tsx
export function PersonStructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismat Samadov',
    description: 'Machine Learning Engineer & AI Systems Developer specializing in production ML systems, computer vision, NLP, and MLOps infrastructure',
    url: 'https://ismat.pro',
    image: 'https://ismat.pro/images/ismat-samadov.jpg',
    jobTitle: 'Machine Learning Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Kapital Bank',
      url: 'https://kapitalbank.az'
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Azerbaijan State University of Economics',
        url: 'https://unec.edu.az/',
        description: 'MBA in Artificial Intelligence'
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Mingachevir State University',
        url: 'https://mdu.edu.az/',
        description: 'Bachelor in Management of Industry'
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Oracle Database SQL Certified Associate',
        credentialCategory: 'Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Oracle',
          url: 'https://www.oracle.com'
        },
        validFor: 'Lifetime',
        dateCreated: '2022-05'
      }
    ],
    sameAs: [
      'https://github.com/Ismat-Samadov',
      'https://huggingface.co/IsmatS',
      'https://www.kaggle.com/ismetsemedov',
      'https://www.hackerrank.com/profile/IsmatSamadov',
      'https://medium.com/@ismatsamadov',
      'https://leetcode.com/u/ismetsemedov/',
      'https://www.linkedin.com/in/ismat-samadov/'
    ],
    knowsAbout: [
      'Machine Learning Engineering',
      'Deep Learning Systems',
      'Computer Vision',
      'Natural Language Processing',
      'Medical AI',
      'Financial ML',
      'MLOps',
      'Model Deployment',
      'TensorFlow',
      'PyTorch',
      'YOLOv8',
      'Transformers',
      'Named Entity Recognition',
      'Fraud Detection',
      'Real-time Inference',
      'Feature Engineering',
      'Data Pipelines',
      'SQL Optimization',
      'FastAPI',
      'Docker',
      'Kubernetes',
      'Production ML Systems',
      'AI Infrastructure',
      'Model Optimization',
      'Healthcare AI',
      'Azerbaijani NLP',
      'Low-resource Languages',
      'Enterprise AI Solutions',
      'Regulatory Compliance ML',
      'Basel III',
      'IFRS 9'
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en'
      },
      {
        '@type': 'Language',
        name: 'Azerbaijani',
        alternateName: 'az'
      },
      {
        '@type': 'Language',
        name: 'Russian',
        alternateName: 'ru'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressRegion: 'Baku',
      addressCountry: 'Azerbaijan'
    },
    email: 'mailto:ismetsemedov@gmail.com',
    // Professional achievements
    award: [
      'Production ML Systems serving 1M+ daily predictions',
      '93.3% mAP50 accuracy in computer vision models',
      'Sub-100ms latency real-time inference systems',
      'Basel III compliant risk models',
      'Custom NLP solutions for low-resource languages'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema)
      }}
    />
  );
}

// Project structured data component for ML projects
interface ProjectStructuredDataProps {
  title: string;
  description: string;
  url: string;
  repositoryUrl: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  author: string;
  technologies: string[];
  applicationCategory: string;
  accuracy?: string;
}

export function MLProjectStructuredData({
  title,
  description,
  url,
  repositoryUrl,
  imageUrl,
  datePublished,
  dateModified,
  author,
  technologies,
  applicationCategory,
  accuracy
}: ProjectStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: title,
    description: description,
    url: url,
    codeRepository: repositoryUrl,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://ismat.pro'
    },
    programmingLanguage: technologies,
    applicationCategory: applicationCategory,
    keywords: [...technologies, 'Machine Learning', 'AI', 'Production ML', 'Deep Learning'],
    license: 'MIT License',
    operatingSystem: ['Linux', 'macOS', 'Windows'],
    runtimePlatform: 'Python',
    additionalProperty: accuracy ? [
      {
        '@type': 'PropertyValue',
        name: 'Model Accuracy',
        value: accuracy
      }
    ] : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

// Website structured data
export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ismat Samadov | Machine Learning Engineer & AI Systems Developer',
    alternateName: 'Ismat Samadov ML Portfolio',
    url: 'https://ismat.pro',
    description: 'Machine Learning Engineer specializing in production AI systems, computer vision, NLP, and MLOps. Building scalable ML solutions for healthcare, finance, and enterprise applications.',
    inLanguage: ['en-US', 'az-AZ', 'ru-RU'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ismat.pro/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Person',
      name: 'Ismat Samadov',
      url: 'https://ismat.pro'
    },
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Ismat Samadov'
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Machine Learning Engineering',
        description: 'Production ML systems and AI infrastructure'
      },
      {
        '@type': 'Thing',
        name: 'Computer Vision',
        description: 'Medical imaging AI and object detection systems'
      },
      {
        '@type': 'Thing',
        name: 'Natural Language Processing',
        description: 'NLP systems and low-resource language processing'
      },
      {
        '@type': 'Thing',
        name: 'Financial ML',
        description: 'Risk modeling and fraud detection systems'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}

// Organization structured data for professional work
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ismat Samadov ML Engineering Services',
    description: 'Machine Learning Engineering and AI Systems Development Services',
    url: 'https://ismat.pro',
    founder: {
      '@type': 'Person',
      name: 'Ismat Samadov',
      url: 'https://ismat.pro'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Global'
    },
    serviceType: [
      'Machine Learning Engineering',
      'AI Systems Development',
      'Computer Vision Solutions',
      'NLP Engineering',
      'MLOps Infrastructure',
      'Production ML Deployment',
      'Medical AI Development',
      'Financial ML Systems'
    ],
    priceRange: 'Consultation Available',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressRegion: 'Baku',
      addressCountry: 'Azerbaijan'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}