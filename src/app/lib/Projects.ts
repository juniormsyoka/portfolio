// lib/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'fullstack' | 'mobile' | 'backend' | 'frontend' | 'ml';
  featured: boolean;
  imageUrl: string;
  challenges: string[];
  solutions: string[];
};

export const projects: Project[] = [
  // ============ FULL-STACK PROJECTS ============
  {
    id: 1,
    title: "Medical Assistant Platform",
    description: "HIPAA-compliant healthcare management system for clinics",
    longDescription: "End-to-end medical platform handling 500+ concurrent users with real-time appointment scheduling, electronic health records, and telemedicine capabilities. Features role-based dashboards for doctors, nurses, and patients with secure messaging and prescription management. Achieved 99.9% uptime and sub-200ms API response times.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Redis", "JWT", "Docker"],
    githubUrl: "https://github.com/juniormsyoka/med-assistant-front",
    liveUrl: "https://medical-assistant-demo.vercel.app",
    category: "fullstack",
    featured: true,
    imageUrl: "/projects/medical-platform.png",
    challenges: [
      "Real-time synchronization of medical records across multiple clinics",
      "HIPAA compliance for sensitive patient data encryption and audit trails",
      "Handling large medical imaging files with efficient streaming uploads"
    ],
    solutions: [
      "Implemented WebSockets for live updates and Redis pub/sub for event-driven architecture",
      "Used field-level encryption with audit logging and automatic data retention policies",
      "Integrated AWS S3 with chunked uploads and CDN delivery for medical images"
    ]
  },
  {
    id: 2,
    title: "Campus Market",
    description: "Student marketplace handling 1000+ daily transactions",
    longDescription: "Full-stack campus commerce platform with geolocation-based product discovery, secure messaging, and campus verification. Features real-time notifications, rating systems, and escrow payment processing. Successfully processed 50,000+ transactions with fraud detection algorithms achieving 99.5% accuracy.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "WebSockets", "Stripe", "Mapbox"],
    githubUrl: "https://github.com/juniormsyoka/campus-market",
    liveUrl: "https://campus-markett.vercel.app",
    category: "fullstack",
    featured: true,
    imageUrl: "/projects/campus-market.png",
    challenges: [
      "Geolocation-based product discovery with campus boundary restrictions",
      "Real-time chat system for buyer-seller negotiations with file sharing",
      "Fraud prevention for campus-only user verification"
    ],
    solutions: [
      "Implemented geo-fencing with Mapbox API and custom polygon campus boundaries",
      "Built WebSocket chat with message persistence, typing indicators, and image compression",
      "Created campus email verification system with rate limiting and anomaly detection"
    ]
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Scalable online store with 10,000+ product catalog",
    longDescription: "Complete e-commerce solution featuring product management, inventory tracking, user reviews, and AI-powered recommendations. Supports multiple payment gateways, shipping integrations, and real-time order tracking. Handled 500+ concurrent users during flash sales with optimized database queries.",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe API", "Elasticsearch", "Redis Cache"],
    githubUrl: "https://github.com/juniormsyoka/CommerceFront",
    liveUrl: "https://campus-markett.vercel.app",
    category: "fullstack",
    featured: false,
    imageUrl: "/projects/ecommerce-platform.png",
    challenges: [
      "Real-time inventory synchronization during high-traffic flash sales",
      "Personalized product recommendations based on user behavior",
      "Multi-vendor support with commission tracking"
    ],
    solutions: [
      "Implemented Redis caching with write-through pattern and inventory reservation system",
      "Built collaborative filtering algorithm using user-item interaction matrix",
      "Created vendor dashboard with automated payout calculations and performance analytics"
    ]
  },
  
  // ============ MOBILE PROJECTS ============
  {
    id: 4,
    title: "Music Player Pro",
    description: "Cross-platform music app with 100,000+ song libraries",
    longDescription: "Advanced music player featuring cloud playlist synchronization, AI-powered recommendations, and social sharing. Includes 10-band equalizer, lyrics display, sleep timer, and car mode. Achieved 60 FPS smooth scrolling for 50,000+ song libraries with efficient memory management.",
    technologies: ["React Native", "TypeScript", "Expo", "SQLite", "Firebase", "TensorFlow Lite", "FFmpeg"],
    githubUrl: "https://github.com/juniormsyoka/Expo-Music-Player-V2",
    liveUrl:"", //"https://expo.dev/@yourusername/music-player",
    category: "mobile",
    featured: true,
    imageUrl: "/projects/music-player-pro.png",
    challenges: [
      "Cross-device playlist synchronization with offline conflict resolution",
      "On-device ML inference for real-time music recommendations",
      "Background audio playback with system media controls integration"
    ],
    solutions: [
      "Implemented CRDT-based sync engine with automatic merge resolution and version vectors",
      "Used TensorFlow Lite for lightweight neural network inference on mobile devices",
      "Integrated with react-native-track-player for robust background audio on iOS/Android"
    ]
  },
  {
    id: 5,
    title: "TaskFlow Mobile",
    description: "Productivity app with team collaboration features",
    longDescription: "Task management application supporting project timelines, team assignments, file attachments, and progress tracking. Features include push notifications, offline mode, and integration with calendar apps. Achieved 4.8-star rating with 10,000+ downloads on app stores.",
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications", "SQLite", "Calendar API"],
    githubUrl: "https://github.com/juniormsyoka/Task-AppRN",
    liveUrl: "https://expo.dev/@yourusername/taskflow",
    category: "mobile",
    featured: false,
    imageUrl: "/projects/taskflow-mobile.png",
    challenges: [
      "Real-time task synchronization across multiple team members",
      "Offline-first architecture with conflict resolution",
      "Battery-efficient background sync and notifications"
    ],
    solutions: [
      "Implemented Firebase Realtime Database with optimistic updates and conflict handlers",
      "Used SQLite for local storage with differential sync algorithm",
      "Optimized background fetch intervals based on battery level and network conditions"
    ]
  },
  {
    id: 6,
    title: "Stream Music",
    description: "Music streaming app with social features",
    longDescription: "Modern music streaming application with curated playlists, artist radio, and social features including shared listening sessions. Features high-quality audio streaming, adaptive bitrate, and personalized daily mixes. Reduced initial load time by 40% through code splitting.",
    technologies: ["React Native", "Redux Saga", "Audio Streaming", "Social Login", "Cloud Storage", "Analytics"],
    githubUrl: "https://github.com/juniormsyoka/Music_App-ReactNative-",
    liveUrl: "",//"https://expo.dev/@yourusername/stream-music",
    category: "mobile",
    featured: false,
    imageUrl: "/projects/stream-music.png",
    challenges: [
      "Adaptive audio streaming based on network conditions",
      "Social features with real-time listening party synchronization",
      "Memory optimization for large cover art caching"
    ],
    solutions: [
      "Implemented adaptive bitrate streaming with network quality detection",
      "Built WebSocket-based listening parties with synchronized playback controls",
      "Used FastImage library with memory-aware caching strategy"
    ]
  },
  
  // ============ BACKEND PROJECTS ============
  {
    id: 7,
    title: "Medical Backend API",
    description: "Healthcare API processing 1M+ monthly requests",
    longDescription: "High-performance REST API for medical applications featuring appointment management, patient records, billing integration, and telemedicine support. Built with microservices architecture, achieving 99.99% uptime and horizontal scalability. Implements OAuth 2.0, rate limiting, and comprehensive monitoring.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/juniormsyoka/med-assistant-backend",
    liveUrl:"",// "https://api-medical-demo.herokuapp.com/docs",
    category: "backend",
    featured: false,
    imageUrl: "/projects/medical-backend-api.png",
    challenges: [
      "Database schema optimization for complex medical relationships",
      "Real-time data synchronization across distributed services",
      "Compliance with healthcare data retention and deletion regulations"
    ],
    solutions: [
      "Designed normalized schema with appropriate indexes and query optimization",
      "Implemented event sourcing pattern with Apache Kafka for eventual consistency",
      "Built automated data lifecycle management with audit trails"
    ]
  },
  {
    id: 8,
    title: "Diagnosis Intelligence API",
    description: "AI-powered diagnostic assistant with 85% accuracy",
    longDescription: "Machine learning API analyzing symptoms and medical history to suggest potential diagnoses with confidence scores. Combines rule-based medical knowledge graphs with ensemble ML models trained on clinical datasets. Features multi-language support and integration with EHR systems, processing 5000+ requests daily.",
    technologies: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "Redis", "Celery", "Docker", "Swagger"],
    githubUrl: "https://github.com/juniormsyoka/Diagnosis_Api",
    liveUrl: "",//"https://diagnosis-api-demo.onrender.com/docs",
    category: "backend",
    featured: false,
    imageUrl: "/projects/diagnosis-intelligence.png",
    challenges: [
      "Medical terminology normalization across different input formats",
      "Balancing model accuracy with inference speed for clinical use",
      "Handling ambiguous or conflicting symptom presentations"
    ],
    solutions: [
      "Built medical synonym mapper using SNOMED CT and UMLS terminology systems",
      "Implemented model quantization and Redis caching for sub-second response times",
      "Added Bayesian probability scoring and differential diagnosis ranking"
    ]
  },
  {
    id: 9,
    title: "E-Commerce Microservices",
    description: ".NET API handling 10,000+ products with microservices",
    longDescription: "Scalable e-commerce backend built with clean architecture and microservices pattern. Features include inventory management, order processing, payment gateway integration (Stripe/PayPal), shipping calculator, and recommendation engine. Supports A/B testing and handles 10,000+ concurrent users during peak seasons.",
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Redis", "Docker", "RabbitMQ", "Ocelot"],
    githubUrl: "https://github.com/juniormsyoka/CommerceApi",
    liveUrl: "",//"https://commerce-api-demo.azurewebsites.net/swagger",
    category: "backend",
    featured: false,
    imageUrl: "/projects/ecommerce-microservices.png",
    challenges: [
      "Distributed transaction management across microservices",
      "Real-time inventory synchronization during flash sales",
      "Payment processing security and PCI compliance"
    ],
    solutions: [
      "Implemented Saga pattern with compensation transactions and idempotency keys",
      "Used Redis pub/sub for inventory updates and distributed locking mechanism",
      "Integrated tokenization and followed OWASP security guidelines with penetration testing"
    ]
  },
  {
    id: 10,
    title: "Campus Market Backend",
    description: "Marketplace API with geofencing and fraud detection",
    longDescription: "Backend service powering campus-specific marketplace with location verification, secure messaging, and transaction coordination. Features include campus boundary validation, rating systems, and moderation tools. Successfully prevented 95% of fraudulent listings through ML-based anomaly detection.",
    technologies: ["Node.js", "Nest.js", "MongoDB", "Socket.io", "JWT", "Redis", "Docker", "Mapbox API"],
    githubUrl: "https://github.com/juniormsyoka/campus-market-backend",
    liveUrl:"", //"https://campus-api-demo.herokuapp.com/api-docs",
    category: "backend",
    featured: false,
    imageUrl: "/projects/campus-backend.png",
    challenges: [
      "Campus-specific geofencing for location-based services",
      "Real-time messaging system with file sharing capabilities",
      "Scalability during campus event peaks (orientation, finals week)"
    ],
    solutions: [
      "Implemented polygon-based geofencing with Mapbox API and spatial indexing",
      "Built WebSocket chat with message queuing, presence indicators, and media compression",
      "Used horizontal scaling with load balancers and database read replicas"
    ]
  },
  {
    id: 11,
    title: "Student Records System API",
    description: "Educational management API for 50,000+ student records",
    longDescription: "Comprehensive backend for student information management including admissions, course registration, grading, attendance, and transcript generation. Features role-based access control, audit logging, and reporting capabilities. Successfully handled 1000+ concurrent users during registration periods.",
    technologies: ["Node.js", "Express", "SSMS (SQL)", "Redis", "JWT", "PDF Generation", "Email Service"],
    githubUrl: "https://github.com/juniormsyoka/Student-Records-Management-API",
    liveUrl:"", //"https://student-api-demo.onrender.com/api-docs",
    category: "backend",
    featured: false,
    imageUrl: "/projects/student-records-api.png",
    challenges: [
      "Complex data relationships between students, courses, and faculty",
      "Batch processing for grade calculations and report generation",
      "Data privacy compliance (FERPA) for educational records"
    ],
    solutions: [
      "Designed normalized database schema with foreign key constraints and materialized views",
      "Implemented background job processing with Bull queues and worker threads",
      "Built data masking and access logging for compliance auditing"
    ]
  },
  {
    id: 12,
    title: "Web Services Backend",
    description: "Modular API framework with 50+ reusable endpoints",
    longDescription: "General-purpose backend framework featuring authentication, file management, email services, and utility APIs. Built with plugin architecture allowing easy extension. Includes comprehensive documentation, testing suite, and deployment scripts. Used as foundation for 10+ production applications.",
    technologies: ["Node.js", "JWT", "Multer", "Nodemailer", "Jest", "Swagger"],
    githubUrl: "https://github.com/juniormsyoka/Web-BackEnd-",
    liveUrl: "https://web-backend-demo.herokuapp.com/api-docs",
    category: "backend",
    featured: false,
    imageUrl: "/projects/web-backend.png",
    challenges: [
      "Creating flexible architecture for diverse use cases",
      "Comprehensive error handling and logging system",
      "API versioning and backward compatibility"
    ],
    solutions: [
      "Implemented middleware-based plugin system with dependency injection",
      "Built centralized error handling with structured logging and monitoring integration",
      "Used semantic versioning with deprecation warnings and migration guides"
    ]
  },
  
  // ============ FRONTEND PROJECTS ============
  {
    id: 13,
    title: "Student Management Dashboard",
    description: "Education dashboard managing 10,000+ student records",
    longDescription: "Comprehensive admin dashboard for educational institutions featuring student profiles, course management, grade books, and attendance tracking. Implements data visualization, bulk operations, and export functionalities. Reduced administrative workload by 60% through automation features.",
    technologies: ["React", "TypeScript", "Material-UI", "Chart.js", "Redux", "React Query", "PDF Export"],
    githubUrl: "https://github.com/juniormsyoka/Student-Management-system-Frontend",
    liveUrl: "",//"https://student-dashboard-demo.vercel.app",
    category: "frontend",
    featured: false,
    imageUrl: "/projects/student-dashboard.png",
    challenges: [
      "Performance optimization for large data tables with filtering and sorting",
      "Real-time updates for attendance and grade changes",
      "Accessibility compliance for diverse user needs"
    ],
    solutions: [
      "Implemented virtualized lists with windowing and memoized components",
      "Used WebSocket connections for live updates and optimistic UI patterns",
      "Achieved WCAG 2.1 AA compliance with keyboard navigation and screen reader support"
    ]
  },
  {
    id: 14,
    title: "Real Estate Platform",
    description: "Property listing site with 5000+ active listings",
    longDescription: "Modern real estate platform featuring property search with advanced filters, virtual tours, mortgage calculators, and agent matching. Includes map integration, saved searches, and notification system. Increased user engagement by 40% through personalized recommendations.",
    technologies: ["React", "TypeScript",  " CSS", "Mapbox", "Framer Motion", "SWR"],
    githubUrl: "https://github.com/juniormsyoka/juniormsyoka-RealEstateFrontEnd",
    liveUrl: "",//"https://real-estate-demo.vercel.app",
    category: "frontend",
    featured: false,
    imageUrl: "/projects/real-estate-platform.png",
    challenges: [
      "Map integration with thousands of property markers and clustering",
      "Advanced search filters with complex query building",
      "Image optimization for high-resolution property photos"
    ],
    solutions: [
      "Implemented Mapbox GL with marker clustering and custom heatmap layers",
      "Built dynamic query builder with URL state synchronization and debounced search",
      "Used Next.js Image optimization with lazy loading and responsive image sizes"
    ]
  },
  
  // ============ ML/AI PROJECTS ============
  {
    id: 15,
    title: "Flight Delay Predictor",
    description: "ML model with 92% accuracy forecasting flight disruptions",
    longDescription: "Time-series forecasting system predicting flight delays and cancellations using weather data, historical patterns, and airport operations. Features include real-time predictions, risk scoring, and alternative routing suggestions. Deployed as scalable microservice processing 10,000+ predictions daily.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "FastAPI", "Docker", "Prometheus"],
    githubUrl: "https://github.com/juniormsyoka/flight-cancellation",
    liveUrl: "",//"https://flight-predictor-demo.streamlit.app",
    category: "ml",
    featured: false,
    imageUrl: "/projects/flight-delay-predictor.png",
    challenges: [
      "Handling imbalanced dataset with rare cancellation events",
      "Feature engineering from heterogeneous data sources",
      "Model interpretability for operational decisions"
    ],
    solutions: [
      "Applied SMOTE oversampling and focal loss for class imbalance handling",
      "Created temporal features like :seasonality patterns and sweather trend derivatives",
      "Implemented SHAP values and partial dependence plots for model explanation"
    ]
  },
  {
    id: 16,
    title: "Startup Success Predictor",
    description: "AI platform predicting startup outcomes with 85% accuracy",
    longDescription: "Machine learning platform analyzing startup characteristics (funding, team, market) to predict acquisition or failure probability. Trained on Crunchbase dataset with feature engineering for funding velocity, market timing, and team composition. Provides investment recommendations and risk assessments.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "LightGBM", "SHAP", "Plotly", "Docker"],
    githubUrl: "https://github.com/juniormsyoka/startup-success-predictor",
    liveUrl: "",//"https://startup-predictor.streamlit.app",
    category: "ml",
    featured: true,
    imageUrl: "/projects/startup-predictor.png",
    challenges: [
      "Data quality issues in startup funding and exit data",
      "Feature selection from high-dimensional startup attributes",
      "Model deployment with real-time inference requirements"
    ],
    solutions: [
      "Built data validation pipeline with imputation strategies and outlier detection",
      "Used recursive feature elimination with cross-validation for optimal feature set",
      "Containerized model with FastAPI backend for scalable inference serving"
    ]
  }
];