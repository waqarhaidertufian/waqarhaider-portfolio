'use client'

import { motion } from 'framer-motion'
import { StackedCards, ProjectCardData } from '@/components/ui/stacked-cards'
import GradientShimmer from '@/components/ui/gradient-shimmer'

export default function Projects() {
  const projects: ProjectCardData[] = [
    {
      id: 1,
      slug: "mediscan-ai",
      title: "MediScan AI",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      description: "Clinical Medical Image Processing & Analytics platform using parallel Python backend.",
      fullOverview: "MediScan AI is a comprehensive medical imaging platform that processes clinical data with parallel processing capabilities. The system integrates advanced computer vision algorithms for medical diagnosis, patient monitoring, and healthcare analytics.",
      techStack: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      features: ["Real-time medical image analysis", "Parallel processing for batch operations", "Patient data integration", "Clinical decision support"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Healthcare AI",
      stats: {
        accuracy: "94.2%",
        speed: "Real-time",
        impact: "10K+ patients"
      }
    },
    {
      id: 2,
      slug: "affective-emotion-engine",
      title: "Affective Emotion Engine",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      description: "Real-time Human Emotion Recognition System using multimodal AI interfaces.",
      fullOverview: "Affective Emotion Engine utilizes advanced natural language processing and computer vision to detect human emotions in real-time. The system processes multiple modalities including facial expressions, voice patterns, and text analysis.",
      techStack: ["BERT", "RoBERTa", "PyTorch", "FastAPI"],
      features: ["Multimodal emotion detection", "Real-time sentiment analysis", "Facial expression recognition", "Voice pattern analysis"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Affective Computing",
      stats: {
        accuracy: "89.7%",
        speed: "50ms latency",
        impact: "Enterprise deployment"
      }
    },
    {
      id: 3,
      slug: "tufian-fitness-ai-coach",
      title: "Tufian Fitness AI Coach",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      description: "Pose Estimation & Exercise Posture Analysis using computer vision.",
      fullOverview: "Tufian Fitness AI Coach is an intelligent fitness assistant that uses pose estimation algorithms to analyze exercise form and provide real-time feedback. The system helps users maintain proper posture and prevent injuries during workouts.",
      techStack: ["YOLOv8", "OpenCV", "React", "TypeScript"],
      features: ["Real-time pose tracking", "Exercise form correction", "Workout analytics", "Personalized coaching"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Computer Vision",
      stats: {
        accuracy: "91.5%",
        speed: "30 FPS",
        impact: "5K+ active users"
      }
    },
    {
      id: 4,
      slug: "enterprise-knowledge-rag",
      title: "Enterprise Knowledge RAG",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      description: "LLM Context Retrieval & Search Interface for intelligent documentation search.",
      fullOverview: "Enterprise Knowledge RAG system leverages large language models and retrieval-augmented generation to provide intelligent document search and analysis. The platform processes enterprise knowledge bases and delivers contextually relevant answers.",
      techStack: ["Next.js", "LangChain", "Supabase", "Tailwind CSS"],
      features: ["Context-aware search", "Document indexing", "Enterprise integration", "Real-time processing"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Generative AI",
      stats: {
        accuracy: "87.3%",
        speed: "<200ms response",
        impact: "Enterprise scale"
      }
    },
    {
      id: 5,
      slug: "automated-microservices-pipeline",
      title: "Automated Microservices Pipeline",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      description: "Docker & n8n Scheduled Orchestration for scalable API pipeline automation.",
      fullOverview: "Automated Microservices Pipeline provides a comprehensive solution for API orchestration and automation. The system uses Docker containers and n8n workflows to create scalable, scheduled data processing pipelines.",
      techStack: ["Docker", "n8n", "FastAPI", "Node.js"],
      features: ["Container orchestration", "Workflow automation", "API integration", "Scheduled processing"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "DevOps / Infra",
      stats: {
        accuracy: "99.9% uptime",
        speed: "Auto-scaling",
        impact: "1000+ pipelines"
      }
    },
    {
      id: 6,
      slug: "predictive-clinical-mining",
      title: "Predictive Clinical Mining",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      description: "Healthcare Data Engineering Workflows for clinical and financial forecasting.",
      fullOverview: "Predictive Clinical Mining is a sophisticated data engineering platform designed for healthcare analytics. The system processes clinical and financial data to generate predictive insights for healthcare organizations.",
      techStack: ["KNIME", "Scikit-Learn", "Python", "PostgreSQL"],
      features: ["Predictive analytics", "Data pipeline automation", "Healthcare insights", "Financial forecasting"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Data Mining",
      stats: {
        accuracy: "92.1%",
        speed: "Batch processing",
        impact: "Healthcare providers"
      }
    },
    {
      id: 7,
      slug: "autonomous-vision-suite",
      title: "Autonomous Vision Suite",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop&q=80",
      description: "Industrial Tracking & Object Detection using real-time computer vision.",
      fullOverview: "Autonomous Vision Suite provides industrial-grade computer vision solutions for manufacturing and automation. The system performs real-time object detection, tracking, and quality control in industrial environments.",
      techStack: ["YOLOv8", "PyTorch", "OpenCV", "C++"],
      features: ["Real-time detection", "Industrial tracking", "Quality control", "Edge deployment"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Computer Vision",
      stats: {
        accuracy: "95.8%",
        speed: "60 FPS",
        impact: "Manufacturing"
      }
    },
    {
      id: 8,
      slug: "hardware-telemetry-platform",
      title: "Hardware Telemetry Platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
      description: "Real-time Mining Yield & System Dashboard for cryptocurrency mining operations.",
      fullOverview: "Hardware Telemetry Platform is a comprehensive monitoring solution for cryptocurrency mining operations. The system provides real-time telemetry data, yield calculations, and system health monitoring for mining rigs.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "WebSockets"],
      features: ["Real-time monitoring", "Yield tracking", "System health", "Automated alerts"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "FinTech",
      stats: {
        accuracy: "99.5%",
        speed: "Real-time",
        impact: "Mining operations"
      }
    },
    {
      id: 9,
      slug: "ai-media-generator-studio",
      title: "AI Media Generator Studio",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80",
      description: "Automated Video Clip Synthesizer for long-form to short-form content conversion.",
      fullOverview: "AI Media Generator Studio automates the conversion of long-form video content into engaging short-form clips. The system uses AI to identify key moments, create highlights, and generate optimized content for social media platforms.",
      techStack: ["Python", "FFmpeg", "OpenAI API", "Next.js"],
      features: ["Video segmentation", "AI highlight detection", "Automated editing", "Social media optimization"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Generative Media",
      stats: {
        accuracy: "88.9%",
        speed: "Batch processing",
        impact: "Content creators"
      }
    },
    {
      id: 10,
      slug: "neural-fraud-detection",
      title: "Neural Fraud Detection",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      description: "Real-time Transaction Anomaly Engine using deep neural networks.",
      fullOverview: "Neural Fraud Detection is a sophisticated fraud prevention system that uses deep neural networks to analyze transaction patterns in real-time. The system identifies suspicious activities and prevents fraudulent transactions before they complete.",
      techStack: ["TensorFlow", "PyTorch", "FastAPI", "Redis"],
      features: ["Real-time analysis", "Pattern recognition", "Automated blocking", "Fraud scoring"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Cybersecurity",
      stats: {
        accuracy: "96.4%",
        speed: "<100ms latency",
        impact: "Financial protection"
      }
    },
    {
      id: 11,
      slug: "smart-traffic-analytics",
      title: "Smart Traffic Analytics",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      description: "Edge Computer Vision Traffic Monitoring for urban traffic flow optimization.",
      fullOverview: "Smart Traffic Analytics uses edge computing and computer vision to monitor and optimize urban traffic flow. The system processes real-time traffic data to provide insights for traffic management and urban planning.",
      techStack: ["YOLOv8", "OpenCV", "Docker", "Python"],
      features: ["Traffic monitoring", "Flow optimization", "Edge processing", "Urban analytics"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Edge AI",
      stats: {
        accuracy: "93.2%",
        speed: "Edge real-time",
        impact: "Smart cities"
      }
    },
    {
      id: 12,
      slug: "saas-dropshipping-platform",
      title: "SaaS Dropshipping Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      description: "Automated E-Commerce Logistics Hub with supplier integration.",
      fullOverview: "SaaS Dropshipping Platform is a comprehensive e-commerce solution that automates logistics and supplier integration. The system handles inventory management, order processing, and supplier coordination for dropshipping businesses.",
      techStack: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
      features: ["Supplier integration", "Inventory management", "Order automation", "Payment processing"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Full-Stack Web",
      stats: {
        accuracy: "99.8%",
        speed: "Real-time sync",
        impact: "E-commerce"
      }
    },
    {
      id: 13,
      slug: "multimodal-document-ocr-parser",
      title: "Multimodal Document OCR Parser",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
      description: "Smart Contract Layout Extraction for legal and medical document processing.",
      fullOverview: "Multimodal Document OCR Parser uses advanced OCR and layout analysis to process complex documents. The system specializes in extracting structured data from legal and medical documents with high accuracy.",
      techStack: ["LayoutLM", "PyTorch", "React", "FastAPI"],
      features: ["Document OCR", "Layout extraction", "Structured data output", "Domain-specific parsing"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Document AI",
      stats: {
        accuracy: "97.1%",
        speed: "Batch processing",
        impact: "Legal/Medical"
      }
    },
    {
      id: 14,
      slug: "vocal-emotion-synthesizer",
      title: "Vocal Emotion Synthesizer",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
      description: "Acoustic Feature Extraction & Tone Analysis for voice emotion classification.",
      fullOverview: "Vocal Emotion Synthesizer analyzes acoustic features to classify emotions in voice recordings. The system uses advanced signal processing and machine learning to detect emotional states from speech patterns.",
      techStack: ["Librosa", "PyTorch", "Python", "WebAudio API"],
      features: ["Acoustic analysis", "Emotion classification", "Real-time processing", "Voice synthesis"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Audio AI",
      stats: {
        accuracy: "85.6%",
        speed: "Real-time",
        impact: "Voice applications"
      }
    },
    {
      id: 15,
      slug: "cyber-threat-intel-platform",
      title: "Cyber Threat Intel Platform",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
      description: "Automated Incident & Vulnerability Scanner for real-time threat detection.",
      fullOverview: "Cyber Threat Intel Platform provides automated security scanning and threat intelligence. The system continuously monitors for vulnerabilities, detects threats in real-time, and provides actionable security insights.",
      techStack: ["Python", "Docker", "React", "Tailwind CSS"],
      features: ["Vulnerability scanning", "Threat detection", "Security analytics", "Automated reporting"],
      githubUrl: "#",
      liveDemoUrl: "#",
      domain: "Security AI",
      stats: {
        accuracy: "94.8%",
        speed: "Continuous monitoring",
        impact: "Cybersecurity"
      }
    }
  ]

  return (
    <section id="projects" className="bg-black scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GradientShimmer 
            as="h2" 
            className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4" 
            gradient="tonic"
          >
            Featured Projects
          </GradientShimmer>
          <p className="text-white/60 max-w-2xl mx-auto">
            Selected projects showcasing AI engineering and full-stack development
          </p>
        </motion.div>

        <StackedCards projects={projects} />
      </div>
    </section>
  )
}
