import { Database, Shield, GraduationCap, Building, Laptop, Factory, HeartPulse, Scale, Server } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export const HOME_METRICS = [
  { value: '100+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years of Experience' },
  { value: '50+', label: 'Happy Clients' },
];

export const HOME_SERVICES = [
  { 
    title: 'Data & Analytics', 
    description: 'Data Analysis, Engineering, ETL, Data Pipelines, and EDA designed for intelligent insights.',
    imageId: 'service-data',
  },
  { 
    title: 'ISO & Risk Standards', 
    description: 'Expert implementation, Gap Assessments, and readiness for major global standards spanning ISO, SOC 2, HIPAA, NCA, and PDPL.',
    imageId: 'service-iso',
  },
  { 
    title: 'Assessments & Training', 
    description: 'End-to-end compliance audits and professional Awareness, Implementer, and Auditor training.',
    imageId: 'service-training',
  },
];

export const SERVICES = [
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Leverage the power of your data with comprehensive solutions including Exploratory Data Analysis (EDA), Data Engineering, robust ETL processes, and scalable Data Pipelines to drive intelligent decision-making.",
    technologies: ["Data Analysis", "Data Engineering", "ETL", "Data Pipelines", "EDA"]
  },
  {
    icon: Shield,
    title: "ISO Standards & Compliance Standards",
    description: "End-to-end implementation starting with Scoping, Gap Assessment, and Design & Development of documentation. We guide your implementation and perform internal audits for readiness before the final certification audit.",
    technologies: ["ISO/IEC 27001", "ISO 9001", "SOC 2", "HIPAA", "NCA", "SAMA", "PDPL", "NDMO"]
  },
  {
    icon: GraduationCap,
    title: "Compliance Assessments & Training",
    description: "Ensure ongoing adherence to standards with comprehensive Assessments, Audit & Compliance reviews. We also deliver targeted Training programs including general Awareness, advanced Implementer, and Auditor tracks.",
    technologies: ["Gap Assessment", "Compliance Audit", "Awareness Training", "Implementer Training", "Auditor Training"]
  }
];

export const ALL_ISO_STANDARDS = [
  "ISO/IEC 20000-1", "ISO/IEC 27001", "ISO/IEC 27701", "ISO/IEC 42001", 
  "ISO 9001", "ISO 18295", "ISO 14001", "ISO 45001", "ISO 50001", "ISO 55001",
  "NCA", "SAMA", "PDPL", "NDMO", "SOC 2", "HIPAA"
];

export const HOME_INDUSTRIES = [
  "IT & Telecom",
  "Healthcare IT",
  "Education",
  "Financial Services",
  "Manufacturing",
  "BPO & Call Centers",
];

export const INDUSTRIES = [
  {
    name: 'IT & Telecommunications',
    icon: Laptop,
    useCases: [
      {
        title: 'Tech Solutions',
        description: 'Internet Service Providers, Software Houses, IT Services & Consulting, Data Centers, and Cloud Service Providers.',
      },
      {
        title: 'Compliance Focus',
        description: 'Implementing ISO/IEC 27001, SOC 2, and NCA to secure critical digital infrastructure.',
      },
    ],
  },
  {
    name: 'Healthcare IT & Education',
    icon: HeartPulse,
    useCases: [
      {
        title: 'Digital Health & EdTech',
        description: 'Software development for healthcare solutions and Academic Institutions.',
      },
      {
        title: 'Regulatory Alignment',
        description: 'Gap assessment and engineering for HIPAA and regional standard data privacy acts (PDPL).',
      },
    ],
  },
  {
    name: 'Finance & Public Sector',
    icon: Scale,
    useCases: [
      {
        title: 'Empowering Finance',
        description: 'Supporting Capital Markets, Financial Services, and Public Sector advisory.',
      },
      {
        title: 'Strict Architecture',
        description: 'Deep SAMA, NDMO, and ISO 27701 standards to secure highly sensitive financial and citizen data.',
      },
    ],
  },
  {
    name: 'Manufacturing & BPO',
    icon: Factory,
    useCases: [
      {
        title: 'Industrial & Support Systems',
        description: 'Consumer Goods, Manufacturing, Call Centers, BPO, and Security Surveillance operations.',
      },
      {
        title: 'Process Automation',
        description: 'Streamlining facilities with ISO 9001 and ISO 14001, backed by efficient operational Data Pipelines.',
      },
    ],
  },
];

export const TECH_STACK = [
  {
    category: 'Data & Pipelines',
    icon: Database,
    imageId: 'tech-data',
    items: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'dbt', 'BigQuery', 'Snowflake'],
  },
  {
    category: 'Standards & Governance',
    icon: Shield,
    imageId: 'tech-standards',
    items: ['ISO 27001', 'ISO 9001', 'SOC 2', 'NCA', 'SAMA', 'PDPL', 'NDMO', 'HIPAA'],
  },
  {
    category: 'Cloud Infrastructure',
    icon: Server,
    imageId: 'tech-cloud',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  },
];
