import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Zap, Target, BarChart3 } from 'lucide-react'
import GradientShimmer from '@/components/ui/gradient-shimmer'

// Simulated project data - in production this would come from a database or CMS
const projectsData = [
  {
    id: 1,
    slug: "mediscan-ai",
    title: "MediScan AI",
    subtitle: "Clinical Medical Image Processing & Analytics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    description: "Clinical Medical Image Processing & Analytics platform using parallel Python backend.",
    fullOverview: "MediScan AI is a comprehensive medical imaging platform that processes clinical data with parallel processing capabilities. The system integrates advanced computer vision algorithms for medical diagnosis, patient monitoring, and healthcare analytics. Built with a focus on accuracy and performance, MediScan AI processes thousands of medical images daily, providing healthcare professionals with real-time insights and diagnostic support.",
    techStack: ["Python", "OpenCV", "PyTorch", "FastAPI", "TensorFlow", "NumPy", "Pandas", "Docker"],
    features: [
      "Real-time medical image analysis with 94.2% accuracy",
      "Parallel processing for batch operations on large datasets",
      "Patient data integration with secure HIPAA compliance",
      "Clinical decision support system with AI recommendations",
      "Automated report generation and medical documentation",
      "Multi-modality support for X-ray, MRI, CT, and ultrasound"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Healthcare AI",
    stats: {
      accuracy: "94.2%",
      speed: "Real-time",
      impact: "10K+ patients",
      uptime: "99.9%"
    }
  },
  {
    id: 2,
    slug: "affective-emotion-engine",
    title: "Affective Emotion Engine",
    subtitle: "Real-time Human Emotion Recognition System",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    description: "Real-time Human Emotion Recognition System using multimodal AI interfaces.",
    fullOverview: "Affective Emotion Engine utilizes advanced natural language processing and computer vision to detect human emotions in real-time. The system processes multiple modalities including facial expressions, voice patterns, and text analysis. This multimodal approach enables highly accurate emotion detection across various contexts, making it ideal for customer service, mental health applications, and user experience optimization.",
    techStack: ["BERT", "RoBERTa", "PyTorch", "FastAPI", "OpenCV", "Librosa", "TensorFlow", "React"],
    features: [
      "Multimodal emotion detection from face, voice, and text",
      "Real-time sentiment analysis with 89.7% accuracy",
      "Facial expression recognition using deep learning",
      "Voice pattern analysis and acoustic feature extraction",
      "Cross-platform API integration",
      "Enterprise-grade security and data privacy"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Affective Computing",
    stats: {
      accuracy: "89.7%",
      speed: "50ms latency",
      impact: "Enterprise deployment",
      uptime: "99.8%"
    }
  },
  {
    id: 3,
    slug: "tufian-fitness-ai-coach",
    title: "Tufian Fitness AI Coach",
    subtitle: "Pose Estimation & Exercise Posture Analysis",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&auto=format&fit=crop&q=80",
    description: "Pose Estimation & Exercise Posture Analysis using computer vision.",
    fullOverview: "Tufian Fitness AI Coach is an intelligent fitness assistant that uses pose estimation algorithms to analyze exercise form and provide real-time feedback. The system helps users maintain proper posture and prevent injuries during workouts. By leveraging advanced computer vision and machine learning, the AI coach can detect subtle form issues and provide corrective guidance, making it an invaluable tool for both beginners and experienced athletes.",
    techStack: ["YOLOv8", "OpenCV", "React", "TypeScript", "PyTorch", "MediaPipe", "TensorFlow", "FastAPI"],
    features: [
      "Real-time pose tracking with 30 FPS performance",
      "Exercise form correction and feedback",
      "Comprehensive workout analytics and progress tracking",
      "Personalized coaching based on user performance",
      "Multi-exercise support for various fitness routines",
      "Integration with wearables and health devices"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Computer Vision",
    stats: {
      accuracy: "91.5%",
      speed: "30 FPS",
      impact: "5K+ active users",
      uptime: "99.7%"
    }
  },
  {
    id: 4,
    slug: "enterprise-knowledge-rag",
    title: "Enterprise Knowledge RAG",
    subtitle: "LLM Context Retrieval & Search Interface",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "LLM Context Retrieval & Search Interface for intelligent documentation search.",
    fullOverview: "Enterprise Knowledge RAG system leverages large language models and retrieval-augmented generation to provide intelligent document search and analysis. The platform processes enterprise knowledge bases and delivers contextually relevant answers with citations. This system revolutionizes how organizations access and utilize their institutional knowledge, reducing information retrieval time by up to 80% while improving accuracy and relevance.",
    techStack: ["Next.js", "LangChain", "Supabase", "Tailwind CSS", "OpenAI", "Pinecone", "PostgreSQL", "Redis"],
    features: [
      "Context-aware search with semantic understanding",
      "Automated document indexing and processing",
      "Enterprise integration with existing systems",
      "Real-time processing with sub-200ms response times",
      "Multi-format document support (PDF, DOCX, etc.)",
      "Citation and source attribution for transparency"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Generative AI",
    stats: {
      accuracy: "87.3%",
      speed: "<200ms response",
      impact: "Enterprise scale",
      uptime: "99.9%"
    }
  },
  {
    id: 5,
    slug: "automated-microservices-pipeline",
    title: "Automated Microservices Pipeline",
    subtitle: "Docker & n8n Scheduled Orchestration",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    description: "Docker & n8n Scheduled Orchestration for scalable API pipeline automation.",
    fullOverview: "Automated Microservices Pipeline provides a comprehensive solution for API orchestration and automation. The system uses Docker containers and n8n workflows to create scalable, scheduled data processing pipelines. This infrastructure enables teams to automate complex workflows, reduce manual intervention, and ensure consistent data processing across microservices architecture.",
    techStack: ["Docker", "n8n", "FastAPI", "Node.js", "Kubernetes", "Redis", "PostgreSQL", "Nginx"],
    features: [
      "Container orchestration with Docker and Kubernetes",
      "Visual workflow automation using n8n",
      "API integration with 100+ services",
      "Scheduled processing with cron-based triggers",
      "Auto-scaling based on workload demands",
      "Comprehensive monitoring and alerting"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "DevOps / Infra",
    stats: {
      accuracy: "99.9% uptime",
      speed: "Auto-scaling",
      impact: "1000+ pipelines",
      uptime: "99.9%"
    }
  },
  {
    id: 6,
    slug: "predictive-clinical-mining",
    title: "Predictive Clinical Mining",
    subtitle: "Healthcare Data Engineering Workflows",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    description: "Healthcare Data Engineering Workflows for clinical and financial forecasting.",
    fullOverview: "Predictive Clinical Mining is a sophisticated data engineering platform designed for healthcare analytics. The system processes clinical and financial data to generate predictive insights for healthcare organizations. By leveraging advanced machine learning algorithms and data mining techniques, the platform helps healthcare providers optimize resource allocation, predict patient outcomes, and improve financial planning.",
    techStack: ["KNIME", "Scikit-Learn", "Python", "PostgreSQL", "Apache Spark", "TensorFlow", "Pandas", "Airflow"],
    features: [
      "Predictive analytics for patient outcomes",
      "Data pipeline automation with scheduled workflows",
      "Healthcare insights and trend analysis",
      "Financial forecasting and cost optimization",
      "Integration with electronic health records (EHR)",
      "HIPAA-compliant data handling and security"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Data Mining",
    stats: {
      accuracy: "92.1%",
      speed: "Batch processing",
      impact: "Healthcare providers",
      uptime: "99.8%"
    }
  },
  {
    id: 7,
    slug: "autonomous-vision-suite",
    title: "Autonomous Vision Suite",
    subtitle: "Industrial Tracking & Object Detection",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=1200&auto=format&fit=crop&q=80",
    description: "Industrial Tracking & Object Detection using real-time computer vision.",
    fullOverview: "Autonomous Vision Suite provides industrial-grade computer vision solutions for manufacturing and automation. The system performs real-time object detection, tracking, and quality control in industrial environments. This technology enables manufacturers to improve quality control, reduce defects, and optimize production lines through automated visual inspection and analysis.",
    techStack: ["YOLOv8", "PyTorch", "OpenCV", "C++", "TensorRT", "CUDA", "Docker", "ROS"],
    features: [
      "Real-time detection at 60 FPS performance",
      "Industrial tracking for production line monitoring",
      "Automated quality control and defect detection",
      "Edge deployment for low-latency processing",
      "Integration with industrial automation systems",
      "Custom model training for specific use cases"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Computer Vision",
    stats: {
      accuracy: "95.8%",
      speed: "60 FPS",
      impact: "Manufacturing",
      uptime: "99.9%"
    }
  },
  {
    id: 8,
    slug: "hardware-telemetry-platform",
    title: "Hardware Telemetry Platform",
    subtitle: "Real-time Mining Yield & System Dashboard",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80",
    description: "Real-time Mining Yield & System Dashboard for cryptocurrency mining operations.",
    fullOverview: "Hardware Telemetry Platform is a comprehensive monitoring solution for cryptocurrency mining operations. The system provides real-time telemetry data, yield calculations, and system health monitoring for mining rigs. This platform enables mining operators to optimize their operations, detect hardware issues early, and maximize profitability through data-driven decision making.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "Node.js", "InfluxDB", "Grafana", "Docker"],
    features: [
      "Real-time monitoring of mining rig performance",
      "Yield tracking and profitability calculations",
      "System health monitoring with automated alerts",
      "Historical data analysis and trend visualization",
      "Multi-rig management and fleet optimization",
      "Integration with mining pools and exchanges"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "FinTech",
    stats: {
      accuracy: "99.5%",
      speed: "Real-time",
      impact: "Mining operations",
      uptime: "99.9%"
    }
  },
  {
    id: 9,
    slug: "ai-media-generator-studio",
    title: "AI Media Generator Studio",
    subtitle: "Automated Video Clip Synthesizer",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80",
    description: "Automated Video Clip Synthesizer for long-form to short-form content conversion.",
    fullOverview: "AI Media Generator Studio automates the conversion of long-form video content into engaging short-form clips. The system uses AI to identify key moments, create highlights, and generate optimized content for social media platforms. This tool revolutionizes content creation by enabling creators to efficiently repurpose long-form content into viral-ready short clips.",
    techStack: ["Python", "FFmpeg", "OpenAI API", "Next.js", "Whisper", "MoviePy", "TensorFlow", "Redis"],
    features: [
      "Video segmentation and scene detection",
      "AI-powered highlight identification",
      "Automated editing with smart transitions",
      "Social media optimization for various platforms",
      "Batch processing for multiple videos",
      "Customizable templates and styles"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Generative Media",
    stats: {
      accuracy: "88.9%",
      speed: "Batch processing",
      impact: "Content creators",
      uptime: "99.7%"
    }
  },
  {
    id: 10,
    slug: "neural-fraud-detection",
    title: "Neural Fraud Detection",
    subtitle: "Real-time Transaction Anomaly Engine",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    description: "Real-time Transaction Anomaly Engine using deep neural networks.",
    fullOverview: "Neural Fraud Detection is a sophisticated fraud prevention system that uses deep neural networks to analyze transaction patterns in real-time. The system identifies suspicious activities and prevents fraudulent transactions before they complete. By leveraging advanced machine learning and behavioral analysis, the platform provides financial institutions with a powerful tool to combat fraud while minimizing false positives.",
    techStack: ["TensorFlow", "PyTorch", "FastAPI", "Redis", "Kafka", "PostgreSQL", "Scikit-Learn", "Docker"],
    features: [
      "Real-time analysis with sub-100ms latency",
      "Pattern recognition using deep neural networks",
      "Automated blocking of suspicious transactions",
      "Fraud scoring and risk assessment",
      "Adaptive learning from new fraud patterns",
      "Integration with payment gateways and banking systems"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Cybersecurity",
    stats: {
      accuracy: "96.4%",
      speed: "<100ms latency",
      impact: "Financial protection",
      uptime: "99.9%"
    }
  },
  {
    id: 11,
    slug: "smart-traffic-analytics",
    title: "Smart Traffic Analytics",
    subtitle: "Edge Computer Vision Traffic Monitoring",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    description: "Edge Computer Vision Traffic Monitoring for urban traffic flow optimization.",
    fullOverview: "Smart Traffic Analytics uses edge computing and computer vision to monitor and optimize urban traffic flow. The system processes real-time traffic data to provide insights for traffic management and urban planning. By deploying AI-powered analytics at the edge, cities can reduce congestion, improve safety, and make data-driven infrastructure decisions.",
    techStack: ["YOLOv8", "OpenCV", "Docker", "Python", "TensorRT", "CUDA", "Kafka", "Grafana"],
    features: [
      "Traffic monitoring with real-time analytics",
      "Flow optimization and congestion prediction",
      "Edge processing for low-latency response",
      "Urban analytics and trend visualization",
      "Integration with traffic management systems",
      "Adaptive signal control optimization"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Edge AI",
    stats: {
      accuracy: "93.2%",
      speed: "Edge real-time",
      impact: "Smart cities",
      uptime: "99.8%"
    }
  },
  {
    id: 12,
    slug: "saas-dropshipping-platform",
    title: "SaaS Dropshipping Platform",
    subtitle: "Automated E-Commerce Logistics Hub",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    description: "Automated E-Commerce Logistics Hub with supplier integration.",
    fullOverview: "SaaS Dropshipping Platform is a comprehensive e-commerce solution that automates logistics and supplier integration. The system handles inventory management, order processing, and supplier coordination for dropshipping businesses. This platform enables entrepreneurs to launch and scale dropshipping operations with minimal manual intervention and maximum efficiency.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Stripe", "Shopify API", "Node.js", "PostgreSQL", "Redis"],
    features: [
      "Supplier integration with automated ordering",
      "Inventory management with real-time tracking",
      "Order automation and fulfillment processing",
      "Payment processing with Stripe integration",
      "Multi-platform sales channel management",
      "Analytics dashboard for business insights"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Full-Stack Web",
    stats: {
      accuracy: "99.8%",
      speed: "Real-time sync",
      impact: "E-commerce",
      uptime: "99.9%"
    }
  },
  {
    id: 13,
    slug: "multimodal-document-ocr-parser",
    title: "Multimodal Document OCR Parser",
    subtitle: "Smart Contract Layout Extraction",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80",
    description: "Smart Contract Layout Extraction for legal and medical document processing.",
    fullOverview: "Multimodal Document OCR Parser uses advanced OCR and layout analysis to process complex documents. The system specializes in extracting structured data from legal and medical documents with high accuracy. By combining traditional OCR with modern layout analysis and NLP, the platform transforms unstructured documents into structured, searchable data.",
    techStack: ["LayoutLM", "PyTorch", "React", "FastAPI", "Tesseract", "Spacy", "PostgreSQL", "Docker"],
    features: [
      "Document OCR with multi-language support",
      "Layout extraction and structure recognition",
      "Structured data output in various formats",
      "Domain-specific parsing for legal and medical",
      "Batch processing for large document volumes",
      "API integration with existing document systems"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Document AI",
    stats: {
      accuracy: "97.1%",
      speed: "Batch processing",
      impact: "Legal/Medical",
      uptime: "99.8%"
    }
  },
  {
    id: 14,
    slug: "vocal-emotion-synthesizer",
    title: "Vocal Emotion Synthesizer",
    subtitle: "Acoustic Feature Extraction & Tone Analysis",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80",
    description: "Acoustic Feature Extraction & Tone Analysis for voice emotion classification.",
    fullOverview: "Vocal Emotion Synthesizer analyzes acoustic features to classify emotions in voice recordings. The system uses advanced signal processing and machine learning to detect emotional states from speech patterns. This technology has applications in customer service, mental health monitoring, and voice interface design, enabling more natural and emotionally aware interactions.",
    techStack: ["Librosa", "PyTorch", "Python", "WebAudio API", "TensorFlow", "FastAPI", "React", "Redis"],
    features: [
      "Acoustic analysis with advanced feature extraction",
      "Emotion classification with high accuracy",
      "Real-time processing for live applications",
      "Voice synthesis with emotional tone",
      "Multi-language support and dialect recognition",
      "Integration with voice assistants and chatbots"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Audio AI",
    stats: {
      accuracy: "85.6%",
      speed: "Real-time",
      impact: "Voice applications",
      uptime: "99.7%"
    }
  },
  {
    id: 15,
    slug: "cyber-threat-intel-platform",
    title: "Cyber Threat Intel Platform",
    subtitle: "Automated Incident & Vulnerability Scanner",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
    description: "Automated Incident & Vulnerability Scanner for real-time threat detection.",
    fullOverview: "Cyber Threat Intel Platform provides automated security scanning and threat intelligence. The system continuously monitors for vulnerabilities, detects threats in real-time, and provides actionable security insights. By leveraging AI-powered analysis and threat intelligence feeds, the platform helps organizations stay ahead of emerging threats and maintain robust security postures.",
    techStack: ["Python", "Docker", "React", "Tailwind CSS", "Elasticsearch", "Kibana", "Snort", "Suricata"],
    features: [
      "Vulnerability scanning with automated assessment",
      "Threat detection using AI-powered analysis",
      "Security analytics and trend visualization",
      "Automated reporting and incident response",
      "Integration with threat intelligence feeds",
      "Continuous monitoring with real-time alerts"
    ],
    githubUrl: "#",
    liveDemoUrl: "#",
    domain: "Security AI",
    stats: {
      accuracy: "94.8%",
      speed: "Continuous monitoring",
      impact: "Cybersecurity",
      uptime: "99.9%"
    }
  }
]

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/80 to-black" />
        <div className="relative container mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                {project.domain}
              </span>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Production Ready</span>
              </div>
            </div>

            <GradientShimmer
              as="h1"
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              gradient="tonic"
            >
              {project.title}
            </GradientShimmer>

            <p className="text-xl lg:text-2xl text-zinc-300 mb-8 leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-white/10 bg-zinc-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{project.stats.accuracy}</p>
                <p className="text-sm text-zinc-400">Accuracy</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{project.stats.speed}</p>
                <p className="text-sm text-zinc-400">Performance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{project.stats.impact}</p>
                <p className="text-sm text-zinc-400">Impact</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <CheckCircle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{project.stats.uptime}</p>
                <p className="text-sm text-zinc-400">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[50vh] lg:h-[60vh]">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover rounded-3xl z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        </div>
      </div>

      {/* Overview & Architecture */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            {project.fullOverview}
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Key Features</h2>
          <div className="space-y-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-xl border border-white/10"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-zinc-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.techStack.map((tech) => (
              <div
                key={tech}
                className="p-4 bg-zinc-900/50 rounded-xl border border-white/10 text-center hover:border-white/20 transition-all hover:bg-zinc-900/80"
              >
                <p className="text-white font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 bg-zinc-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-zinc-400 text-sm">
              © 2024 WaqarHaider. All rights reserved.
            </p>
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
