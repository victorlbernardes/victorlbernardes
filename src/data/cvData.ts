export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CVContent {
  personal: {
    name: string;
    displayName: string;
    headline: string;
    subheadline: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    itchio: string;
    about: string;
    stats: { label: string; value: string }[];
  };
  ui: {
    nav: {
      about: string;
      experience: string;
      skills: string;
      projects: string;
      education: string;
      contact: string;
      talk: string;
    };
    hero: {
      statusBadge: string;
      headline1: string;
      headlineGradient: string;
      viewProjects: string;
      viewExperience: string;
      openLinkedIn: string;
    };
    about: {
      sectionBadge: string;
      title: string;
      languagesTitle: string;
      highlights: {
        title: string;
        description: string;
      }[];
    };
    experience: {
      sectionBadge: string;
      title: string;
      subtitle: string;
      filters: {
        all: string;
        leadership: string;
        backend: string;
        game: string;
      };
      currentBadge: string;
      stackLabel: string;
    };
    skills: {
      sectionBadge: string;
      title: string;
      subtitle: string;
    };
    projects: {
      sectionBadge: string;
      title: string;
      subtitle: string;
    };
    education: {
      sectionBadge: string;
      title: string;
      subtitle: string;
    };
    contact: {
      sectionBadge: string;
      title: string;
      subtitle: string;
      emailCard: {
        title: string;
        sendBtn: string;
      };
      linkedinCard: {
        title: string;
        subtitle: string;
        btn: string;
      };
      itchioCard: {
        title: string;
        subtitle: string;
        btn: string;
      };
      footerNote: string;
    };
  };
  languages: { name: string; level: string }[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}

export const cvDataEn: CVContent = {
  personal: {
    name: "Victor Luiz Bernardes da Silva",
    displayName: "Victor Bernardes",
    headline: "Technical Lead & Senior Software Engineer",
    subheadline: "Primary Stack: Java • C++ • TypeScript | Distributed Systems, High-Performance Backends & Game Engineering",
    email: "victorlbernardes@gmail.com",
    phone: "+55 (27) 99709-5028",
    location: "Vitória / Serra - ES, Brazil",
    github: "https://github.com/victorlbernardes",
    linkedin: "https://www.linkedin.com/in/victor-luiz-bernardes-da-silva-36bb53a3/",
    itchio: "https://victorlbernardes.itch.io/delta-v-docking-simulator",
    about: `Senior Software Engineer and Technical Lead with over a decade of hands-on experience designing, scaling, and maintaining mission-critical distributed architectures and microservices. Proven track record leading engineering squads, fostering engineering excellence (DDD, TDD, Clean Architecture), and driving high availability and resilience.

Programming Languages: Java, TypeScript, JavaScript, C++, and Rust.

Core enterprise expertise centered around Java & Spring Boot, event-driven messaging (Apache Kafka), client applications with React and React Native, AWS Cloud, and proactive observability with Grafana & Prometheus.`,
    stats: [
      { label: "Years of Experience", value: "10+" },
      { label: "Engineers Mentored / Led", value: "10+" },
      { label: "Enterprise Projects", value: "15+" },
      { label: "Languages Spoken", value: "4" }
    ]
  },

  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      talk: "Let's Talk"
    },
    hero: {
      statusBadge: "Available for High-Impact Technical Leadership & Engineering",
      headline1: "Architecting Resilient",
      headlineGradient: "Distributed Systems & Systems",
      viewProjects: "Explore Projects",
      viewExperience: "View Experience",
      openLinkedIn: "LinkedIn Profile"
    },
    about: {
      sectionBadge: "About Me",
      title: "Engineering Leadership with Deep Technical Roots",
      languagesTitle: "Languages & Fluency",
      highlights: [
        {
          title: "Technical Leadership & Mentoring",
          description: "Direct leadership of engineering teams up to 10+ devs, establishing onboarding frameworks, structured learning paths, and high engineering bars."
        },
        {
          title: "Distributed Systems & Scalability",
          description: "Design of event-driven architectures (Kafka), sync-over-async payment gateways, reactive streaming (AWS Kinesis), and high-throughput microservices."
        },
        {
          title: "Rust & High-Performance Systems",
          description: "Applying memory safety, low-level concurrency, and high-performance system design with Rust, C/C++, and modern backend architectures."
        },
        {
          title: "Interactive AI & Game Engineering",
          description: "Developing local AI-powered games (Guardian-RPG) with WebSockets and gameplay architecture with Unreal Engine 5 & C++."
        }
      ]
    },
    experience: {
      sectionBadge: "Career Journey",
      title: "Professional Experience & Track Record",
      subtitle: "A chronological timeline of technical leadership, architectural transformations, and mission-critical software engineering.",
      filters: {
        all: "All Roles",
        leadership: "Tech Lead & Leadership",
        backend: "Backend & Systems",
        game: "Game & AI Projects"
      },
      currentBadge: "Current Role",
      stackLabel: "Stack:"
    },
    skills: {
      sectionBadge: "Technical Toolkit",
      title: "Skills, Frameworks & Tooling",
      subtitle: "A comprehensive overview of the technologies, architectures, and development practices I utilize to deliver enterprise-grade software."
    },
    projects: {
      sectionBadge: "Featured Work",
      title: "Highlighted Architectures & Projects",
      subtitle: "Selected platforms, distributed systems, and technical initiatives demonstrating scalable software design and execution."
    },
    education: {
      sectionBadge: "Academic Background",
      title: "Education & Specializations",
      subtitle: "Academic foundation combining formal computer science principles with executive project management."
    },
    contact: {
      sectionBadge: "Get In Touch",
      title: "Let's Build Something Impactful",
      subtitle: "Whether you have an architectural challenge, an engineering leadership opportunity, or want to discuss scalable distributed systems, feel free to reach out.",
      emailCard: {
        title: "Email",
        sendBtn: "Send Email"
      },
      linkedinCard: {
        title: "LinkedIn",
        subtitle: "Connect on LinkedIn",
        btn: "Open Profile"
      },
      itchioCard: {
        title: "itch.io",
        subtitle: "Play Delta-V & Space Sims",
        btn: "View on itch.io"
      },
      footerNote: "Based in Vitória / Serra - ES, Brazil — Open to Remote & Relocation opportunities."
    }
  },

  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "Italian", level: "Advanced" },
    { name: "Spanish", level: "Intermediate" }
  ],

  skillCategories: [
    {
      title: "Core Stack: Java • C++ • TypeScript",
      skills: ["Java (Spring Boot, Microservices)", "C++ (Drogon Framework, Systems, UE5)", "TypeScript (React, React Native, Node)", "RESTful APIs", "GraphQL (BFF)", "Camunda BPM", "TDD / JUnit"]
    },
    {
      title: "Distributed Architecture & Cloud",
      skills: ["Apache Kafka", "AWS (Lambda, SQS, Kinesis)", "Event-Driven Architecture", "Docker", "Sync-over-Async", "High-Throughput Systems"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "PL-SQL", "Relational & NoSQL Modeling"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "React Native", "TypeScript", "Tailwind CSS", "WebSockets"]
    },
    {
      title: "Observability & Quality",
      skills: ["Grafana", "Prometheus", "SonarQube", "Jenkins CI/CD", "Alerting & Metrics", "Selenium", "OpenAPI / Swagger"]
    },
    {
      title: "Game Development & Local AI",
      skills: ["Unreal Engine 5", "C++ Engine API", "Blueprints", "WebSockets Real-time", "AI Narrator Integration", "Gameplay Systems"]
    }
  ],

  experiences: [
    {
      id: "zup-lead-2025",
      role: "Technical Lead",
      company: "Zup Innovation",
      location: "São Paulo, Brazil (Remote)",
      period: "Sep 2025 - Present",
      current: true,
      description: "Technical Lead for cross-platform and backend initiatives, steering architectural decisions and team delivery.",
      achievements: [
        "Lead an engineering squad of 10 developers, ensuring technical alignment, high delivery standards, and fostering continuous improvement.",
        "Define and evolve system architecture across client applications and Java backend services to guarantee scalability and resilience.",
        "Provide hands-on mentoring, structured learning paths, and technical onboarding frameworks for engineers.",
        "Deliver Proofs of Concept (POCs) to evaluate new architectural patterns and emerging technologies.",
        "Implemented end-to-end observability using Grafana and Prometheus dashboards and proactive alerting to improve uptime."
      ],
      technologies: ["Java", "Spring Boot", "Grafana", "Prometheus", "Docker", "AWS", "Scrum"]
    },
    {
      id: "digibee-2024",
      role: "Software Engineer & Backend Chapter Lead",
      company: "DigiBee",
      location: "Fort Lauderdale, USA (Remote)",
      period: "Sep 2024 - Sep 2025",
      description: "Specialist Backend Engineer on enterprise Integration Platform as a Service (iPaaS).",
      achievements: [
        "Acted as Backend Chapter Lead, standardizing engineering guidelines and evaluating new tech stacks through POCs.",
        "Architected and maintained RESTful endpoints for enterprise integrations, optimizing scalability and throughput.",
        "Built and maintained a Backend-for-Frontend (BFF) layer using GraphQL, significantly cutting down network roundtrips for frontend clients.",
        "Standardized OpenAPI/Swagger contracts across integration modules, accelerating cross-team feature adoption."
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "MongoDB", "GraphQL", "OpenAPI (Swagger)", "REST APIs"]
    },
    {
      id: "zup-lead-2022",
      role: "Technical Lead & Senior Engineer",
      company: "Zup Innovation",
      location: "São Paulo, Brazil",
      period: "Mar 2022 - Jun 2024",
      description: "Technical Lead on mobile ecosystems and real-time streaming web applications.",
      achievements: [
        "Led engineering team of 10 developers across client and backend microservices.",
        "Architected real-time video streaming WebApp using Angular, Java, WebRTC, and AWS Kinesis Video Streams with sub-second latency.",
        "Conducted code reviews, defined CI/CD quality gates, and integrated proactive monitoring with Grafana."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "AWS Kinesis Video Streams", "RxJS", "WebRTC", "MySQL", "Grafana"]
    },
    {
      id: "zup-se-2021",
      role: "Software Engineer",
      company: "Zup Innovation",
      location: "São Paulo, Brazil",
      period: "Mar 2021 - Mar 2022",
      description: "Engineered high-load payment gateway infrastructure and financial rule engines.",
      achievements: [
        "Engineered sync-over-async payment gateway processing high-volume transactions with fault-tolerant Kafka messaging.",
        "Integrated Camunda as a dynamic business rule engine for real-time transaction validation and fraud prevention.",
        "Guaranteed regulatory compliance and secured sensitive financial data across microservices."
      ],
      technologies: ["Java", "Spring Boot", "Kafka", "Camunda", "MongoDB", "React.js"]
    },
    {
      id: "avenue-code-2020",
      role: "Software Engineer",
      company: "Avenue Code",
      location: "San Francisco, USA (Remote)",
      period: "Sep 2020 - Mar 2021",
      description: "Developed marketplace microservices and automated workflow integration engines.",
      achievements: [
        "Developed and maintained microservices architecture ensuring high scalability and resiliency.",
        "Integrated payment gateways and 3rd-party product suppliers via resilient REST APIs."
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "REST APIs", "Microservices"]
    },
    {
      id: "liftbank-2019",
      role: "Software Engineer",
      company: "LiftBank",
      location: "Vitória, Brazil",
      period: "Oct 2019 - Sep 2020",
      description: "Full-stack engineer building cloud-native digital banking and payment solutions for entrepreneurs.",
      achievements: [
        "Implemented serverless backend services using AWS Lambda, Amazon SQS, Java, and Node.js.",
        "Contributed to mobile banking app features with React Native and web admin portals with React."
      ],
      technologies: ["Java", "Node.js", "AWS Lambda", "AWS SQS", "React", "React Native", "Spring Boot"]
    },
    {
      id: "collective-health-2019",
      role: "Software Engineer",
      company: "Collective Health",
      location: "San Francisco, USA (Remote)",
      period: "Mar 2019 - Oct 2019",
      description: "Backend engineer focused on scalable architectural design for the US private healthcare benefits system.",
      achievements: [
        "Engineered core backend modules prioritizing scalability and high throughput for medical claims handling.",
        "Collaborated remotely with California-based engineering teams under agile methodologies."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "AngularJS", "REST APIs"]
    },
    {
      id: "conexos-2017",
      role: "Software Engineer",
      company: "Conexos Consultoria e Sistemas",
      location: "Vitória, Brazil",
      period: "Feb 2017 - Mar 2019",
      description: "Engineered web-based ERP systems and led enterprise database migration.",
      achievements: [
        "Migrated legacy OracleForms systems into modern web architectures using Java, PL-SQL, and AngularJS.",
        "Applied Test Driven Development (TDD) across critical ERP business modules."
      ],
      technologies: ["Java", "PL-SQL", "Oracle", "AngularJS", "TDD"]
    },
    {
      id: "etaure-2014",
      role: "Software Engineer (Intern to Full)",
      company: "Etaure TI & Automação",
      location: "Vitória, Brazil",
      period: "May 2014 - Feb 2017",
      description: "Industrial automation systems development for enterprise clients like ArcelorMittal.",
      achievements: [
        "Engineered automation and data acquisition systems using C/C++, Java, PostgreSQL, and Oracle.",
        "Configured Jenkins CI and SonarQube quality analyzers to establish automated code quality standards."
      ],
      technologies: ["Java", "C / C++", "PostgreSQL", "Oracle", "Jenkins", "SonarQube"]
    },
    {
      id: "cant-afford-2025",
      role: "Unreal Game Developer",
      company: "Can't Afford Studios",
      location: "USA (Remote)",
      period: "Mar 2025 - Present",
      description: "Designing and engineering core gameplay systems using Unreal Engine 5 with C++.",
      achievements: [
        "Architected modular character movement, camera systems, input handling, and combat interactions.",
        "Integrated C++ base classes with Blueprints for high performance and rapid designer iteration.",
        "Applied object-oriented principles within Unreal's GameFramework."
      ],
      technologies: ["Unreal Engine 5", "C++", "Blueprints", "OOP", "Event-Driven Gameplay"]
    }
  ],

  projects: [
    {
      title: "Delta-V: Docking Simulator",
      description: "Orbital space docking simulation game published on itch.io. Accurately simulates realistic Newtonian physics, 6-DOF orbital maneuvering, rotational inertia, and precision docking in zero gravity.",
      tags: ["Game Dev", "Physics Simulation", "itch.io", "Orbital Mechanics", "Space Sim"],
      link: "https://victorlbernardes.itch.io/delta-v-docking-simulator",
      featured: true
    },
    {
      title: "Guardian-RPG (Local AI Tabletop RPG)",
      description: "Local tabletop RPG platform powered by an intelligent AI Narrator (Dungeon Master) engine. Built with Drogon Framework (C++) for an ultra-fast, non-blocking WebSocket backend providing real-time synchronized gameplay across mobile (React Native) and web interfaces.",
      tags: ["C++", "Drogon Framework", "WebSockets", "AI / LLM", "React Native", "Web", "High-Throughput"],
      featured: true
    },
    {
      title: "Arena ESporte Platform",
      description: "Sports journalism & media ecosystem composed of a modular Spring Boot backend (DDD/Hexagonal architecture), a React 18 + Vite editorial studio, a Next.js public portal, and a dedicated design system.",
      tags: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "PostgreSQL", "Design System"],
      github: "https://github.com/victorlbernardes/arena-esporte",
      featured: true
    },
    {
      title: "Enterprise iPaaS & GraphQL BFF",
      description: "Backend-for-Frontend layer and high-throughput microservices integrating multi-tenant enterprise data flows with OpenAPI specification compliance.",
      tags: ["Java", "Spring Boot", "GraphQL", "Node.js", "MongoDB", "Swagger"],
      featured: true
    },
    {
      title: "Real-Time Video Streaming WebApp",
      description: "Ultra-low latency real-time video communication web app integrated with AWS Kinesis Video Streams, WebRTC, and reactive frontends.",
      tags: ["AWS Kinesis", "WebRTC", "Angular", "RxJS", "Java", "Spring Boot"],
      featured: true
    },
    {
      title: "Sync-over-Async Payment Gateway",
      description: "Resilient payment processing system utilizing Apache Kafka for reliable asynchronous order orchestration and Camunda for dynamic fraud & compliance rules.",
      tags: ["Kafka", "Camunda", "Java", "Spring Boot", "MongoDB", "FinTech"],
      featured: true
    },
    {
      title: "Java Game Matchmaking Backend",
      description: "Low-latency multiplayer matchmaking service handling concurrent player matchmaking queues, rating calculations, and session assignment.",
      tags: ["Java", "Concurrency", "WebSockets", "Distributed Systems"],
      github: "https://github.com/victorlbernardes",
      featured: true
    },
    {
      title: "Unreal Engine 5 Gameplay Mechanics",
      description: "Modular first-person and third-person character locomotion, dynamic combat mechanics, and custom component-based gameplay architecture in UE5.",
      tags: ["Unreal Engine 5", "C++", "Blueprints", "Game Architecture"],
      featured: true
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Systems",
      institution: "Instituto Federal do Espírito Santo (IFES)",
      location: "Serra - ES, Brazil",
      period: "2011 - 2016",
      details: "Comprehensive training in software engineering, algorithms, database systems, distributed networks, and computer science fundamentals."
    },
    {
      degree: "Master of Business Administration (MBA) in Project Management",
      institution: "Multivix",
      location: "Vitória - ES, Brazil",
      period: "2017 - 2019",
      details: "Executive specialization in agile project delivery, team leadership, risk management, and strategic technology management."
    }
  ]
};

export const cvDataPt: CVContent = {
  personal: {
    name: "Victor Luiz Bernardes da Silva",
    displayName: "Victor Bernardes",
    headline: "Technical Lead & Senior Software Engineer",
    subheadline: "Stack Principal: Java • C++ • TypeScript | Sistemas Distribuídos, Backends de Alta Performance & Engenharia de Jogos",
    email: "victorlbernardes@gmail.com",
    phone: "+55 (27) 99709-5028",
    location: "Vitória / Serra - ES, Brasil",
    github: "https://github.com/victorlbernardes",
    linkedin: "https://www.linkedin.com/in/victor-luiz-bernardes-da-silva-36bb53a3/",
    itchio: "https://victorlbernardes.itch.io/delta-v-docking-simulator",
    about: `Engenheiro de Software e Líder Técnico com mais de 10 anos de experiência prática projetando, escalando e sustentando arquiteturas distribuídas e microsserviços de missão crítica. Histórico comprovado liderando squads de engenharia, promovendo excelência técnica (DDD, TDD, Clean Architecture) e garantindo alta disponibilidade e resiliência.

Linguagens de Programação: Java, TypeScript, JavaScript, C++ e Rust.

Atuação central no ecossistema corporativo com Java & Spring Boot, mensageria orientada a eventos (Apache Kafka), aplicações cliente com React e React Native, computação em nuvem AWS e observabilidade proativa com Grafana e Prometheus.`,
    stats: [
      { label: "Anos de Experiência", value: "10+" },
      { label: "Engenheiros Liderados / Mentorados", value: "10+" },
      { label: "Projetos Corporativos", value: "15+" },
      { label: "Idiomas Falados", value: "4" }
    ]
  },

  ui: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Habilidades",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
      talk: "Fale Comigo"
    },
    hero: {
      statusBadge: "Disponível para Liderança Técnica e Engenharia de Alto Impacto",
      headline1: "Arquitetando Sistemas",
      headlineGradient: "Distribuídos & Resilientes",
      viewProjects: "Explorar Projetos",
      viewExperience: "Ver Experiência",
      openLinkedIn: "Perfil no LinkedIn"
    },
    about: {
      sectionBadge: "Sobre Mim",
      title: "Liderança Técnica com Raízes Sólidas de Engenharia",
      languagesTitle: "Idiomas & Fluência",
      highlights: [
        {
          title: "Liderança Técnica & Mentoria",
          description: "Liderança direta de squads com mais de 10 desenvolvedores, estabelecendo esteiras de onboarding, trilhas de aprendizado e altos padrões de código."
        },
        {
          title: "Sistemas Distribuídos & Escalabilidade",
          description: "Desenho de arquiteturas orientadas a eventos (Kafka), gateways de pagamento sync-over-async, streaming reativo (AWS Kinesis) e microsserviços."
        },
        {
          title: "Rust & Sistemas de Alta Performance",
          description: "Segurança de memória, concorrência de baixo nível e design de sistemas velozes com Rust, C/C++ e arquiteturas modernas de backend."
        },
        {
          title: "IA Interativa & Engenharia de Jogos",
          description: "Criação de jogos com IA narradora local (Guardian-RPG) via WebSockets e arquitetura de gameplay com Unreal Engine 5 & C++."
        }
      ]
    },
    experience: {
      sectionBadge: "Carreira",
      title: "Experiência Profissional & Trajetória",
      subtitle: "Linha do tempo cronológica de liderança técnica, transformações arquiteturais e engenharia de software de missão crítica.",
      filters: {
        all: "Todas as Posições",
        leadership: "Liderança & Tech Lead",
        backend: "Backend & Sistemas",
        game: "Jogos & IA"
      },
      currentBadge: "Posição Atual",
      stackLabel: "Stack:"
    },
    skills: {
      sectionBadge: "Arsenal Técnico",
      title: "Habilidades, Frameworks & Ferramentas",
      subtitle: "Visão detalhada das tecnologias, arquiteturas e práticas de desenvolvimento que utilizo para entregar softwares enterprise confiáveis."
    },
    projects: {
      sectionBadge: "Projetos em Destaque",
      title: "Arquiteturas & Iniciativas Relevantes",
      subtitle: "Plataformas, sistemas distribuídos e projetos técnicos selecionados que demonstram arquitetura de software escalável e execução de ponta."
    },
    education: {
      sectionBadge: "Formação Acadêmica",
      title: "Educação & Especializações",
      subtitle: "Base acadêmica sólida unindo ciência da computação formal e gestão executiva de projetos."
    },
    contact: {
      sectionBadge: "Contato",
      title: "Vamos Construir Algo de Impacto?",
      subtitle: "Se você tem um desafio arquitetural, uma oportunidade de liderança técnica ou quer trocar ideias sobre sistemas distribuídos, entre em contato.",
      emailCard: {
        title: "E-mail",
        sendBtn: "Enviar E-mail"
      },
      linkedinCard: {
        title: "LinkedIn",
        subtitle: "Conecte-se no LinkedIn",
        btn: "Abrir Perfil"
      },
      itchioCard: {
        title: "itch.io",
        subtitle: "Jogar Delta-V e Projetos de Jogos",
        btn: "Acessar itch.io"
      },
      footerNote: "Residindo em Vitória / Serra - ES, Brasil — Disponível para atuação remota e oportunidades globais."
    }
  },

  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado" },
    { name: "Italiano", level: "Avançado" },
    { name: "Espanhol", level: "Intermediário" }
  ],

  skillCategories: [
    {
      title: "Stack Principal: Java • C++ • TypeScript",
      skills: ["Java (Spring Boot, Microsserviços)", "C++ (Drogon Framework, Sistemas, UE5)", "TypeScript (React, React Native, Node)", "APIs RESTful", "GraphQL (BFF)", "Camunda BPM", "TDD / JUnit"]
    },
    {
      title: "Arquitetura Distribuída & Nuvem",
      skills: ["Apache Kafka", "AWS (Lambda, SQS, Kinesis)", "Arquitetura Orientada a Eventos", "Docker", "Sync-over-Async", "Sistemas de Alta Vazão"]
    },
    {
      title: "Bancos de Dados & Persistência",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "PL-SQL", "Modelagem Relacional e NoSQL"]
    },
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "React Native", "TypeScript", "Tailwind CSS", "WebSockets"]
    },
    {
      title: "Observabilidade & Qualidade",
      skills: ["Grafana", "Prometheus", "SonarQube", "Jenkins CI/CD", "Métricas & Alertas", "Selenium", "OpenAPI / Swagger"]
    },
    {
      title: "Desenvolvimento de Jogos & IA Local",
      skills: ["Unreal Engine 5", "API C++ Unreal", "Blueprints", "WebSockets em Tempo Real", "IA Narradora Integrada", "Gameplay Systems"]
    }
  ],

  experiences: [
    {
      id: "zup-lead-2025",
      role: "Technical Lead",
      company: "Zup Innovation",
      location: "São Paulo, Brasil (Remoto)",
      period: "Set 2025 - Presente",
      current: true,
      description: "Líder técnico de iniciativas mobile e backend, liderando decisões de arquitetura e entregas da squad.",
      achievements: [
        "Liderança de time com 10 desenvolvedores, assegurando alinhamento técnico, altos padrões de entrega e cultura de melhoria contínua.",
        "Definição e evolução da arquitetura de sistemas conectando aplicações cliente e microsserviços Java com resiliência.",
        "Mentoria técnica diária, criação de programas de treinamento e workflows de onboarding para acelerar a formação dos engenheiros.",
        "Desenvolvimento de Provas de Conceito (POCs) para avaliação de novas tecnologias e padrões de arquitetura.",
        "Implementação de soluções de observabilidade com Grafana e Prometheus, criando dashboards e alertas proativos."
      ],
      technologies: ["Java", "Spring Boot", "Grafana", "Prometheus", "Docker", "AWS", "Scrum"]
    },
    {
      id: "digibee-2024",
      role: "Software Engineer & Backend Chapter Lead",
      company: "DigiBee",
      location: "Fort Lauderdale, EUA (Remoto)",
      period: "Set 2024 - Set 2025",
      description: "Engenheiro backend especialista em plataforma de integração corporativa como serviço (iPaaS).",
      achievements: [
        "Atuação como Chapter Lead de Backend, com foco em melhoria contínua e POCs de novas ferramentas.",
        "Desenvolvimento de endpoints RESTful com alta vazão e documentação unificada com Swagger/OpenAPI.",
        "Construção de camada Backend for Frontend (BFF) com GraphQL, otimizando as requisições dos frontends.",
        "Resolução de gargalos e estabilização de serviços críticos em produção."
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "MongoDB", "GraphQL", "OpenAPI (Swagger)", "REST APIs"]
    },
    {
      id: "zup-lead-2022",
      role: "Technical Lead & Senior Engineer",
      company: "Zup Innovation",
      location: "São Paulo, Brasil",
      period: "Mar 2022 - Jun 2024",
      description: "Líder técnico em aplicações web de streaming de vídeo em tempo real e ecossistema mobile.",
      achievements: [
        "Liderança de time de 10 desenvolvedores no desenho de microsserviços e aplicações cliente.",
        "Arquitetura de WebApp de vídeo em tempo real com Angular, Java, WebRTC e AWS Kinesis Video Streams com baixa latência.",
        "Implementação de boas práticas de engenharia, revisões de código e monitoramento em produção com Grafana."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "AWS Kinesis Video Streams", "RxJS", "WebRTC", "MySQL", "Grafana"]
    },
    {
      id: "zup-se-2021",
      role: "Software Engineer",
      company: "Zup Innovation",
      location: "São Paulo, Brasil",
      period: "Mar 2021 - Mar 2022",
      description: "Engenharia de gateways de pagamento e motores de regras para o setor financeiro.",
      achievements: [
        "Desenvolvimento de gateway de pagamento com arquitetura sync over async utilizando mensageria Kafka.",
        "Integração do Camunda como motor de regras de negócio dinâmico para validação de transações e prevenção a fraudes.",
        "Garantia de conformidade com regulamentações financeiras e processamento seguro de pagamentos."
      ],
      technologies: ["Java", "Spring Boot", "Kafka", "Camunda", "MongoDB", "React.js"]
    },
    {
      id: "avenue-code-2020",
      role: "Software Engineer",
      company: "Avenue Code",
      location: "San Francisco, EUA (Remoto)",
      period: "Set 2020 - Mar 2021",
      description: "Desenvolvimento de microsserviços para marketplace e automatização de rotinas.",
      achievements: [
        "Construção e sustentação de microsserviços escaláveis e tolerantes a falhas.",
        "Integrações de API com parceiros externos, incluindo gateways de pagamento e provedores terceiros."
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "REST APIs", "Microsserviços"]
    },
    {
      id: "liftbank-2019",
      role: "Software Engineer",
      company: "LiftBank",
      location: "Vitória, Brasil",
      period: "Out 2019 - Set 2020",
      description: "Engenheiro full stack no setor financeiro construindo banco digital para empreendedores.",
      achievements: [
        "Implementação de serviços em nuvem AWS (Lambda, Simple Queue Service - SQS), Java e Node.js.",
        "Desenvolvimento de funcionalidades para aplicativo mobile com React Native e web com React."
      ],
      technologies: ["Java", "Node.js", "AWS Lambda", "AWS SQS", "React", "React Native", "Spring Boot"]
    },
    {
      id: "collective-health-2019",
      role: "Software Engineer",
      company: "Collective Health",
      location: "San Francisco, EUA (Remoto)",
      period: "Mar 2019 - Out 2019",
      description: "Engenheiro backend focado em arquitetura e performance para o sistema de saúde suplementar americano.",
      achievements: [
        "Desenvolvimento de partes estratégicas do sistema visando alta escalabilidade.",
        "Atuação remota em equipe distribuída entre Califórnia e Brasil seguindo metodologias ágeis."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "AngularJS", "REST APIs"]
    },
    {
      id: "conexos-2017",
      role: "Software Engineer",
      company: "Conexos Consultoria e Sistemas",
      location: "Vitória, Brasil",
      period: "Fev 2017 - Mar 2019",
      description: "Modernização de sistemas ERP e migração de bases de dados legadas.",
      achievements: [
        "Migração de sistema ERP de OracleForms para a web utilizando Java, PL-SQL e AngularJS.",
        "Aplicação de Test Driven Development (TDD) para garantir cobertura e confiabilidade das regras de negócio."
      ],
      technologies: ["Java", "PL-SQL", "Oracle", "AngularJS", "TDD"]
    },
    {
      id: "etaure-2014",
      role: "Software Engineer (Estágio a Efetivo)",
      company: "Etaure TI & Automação",
      location: "Vitória, Brasil",
      period: "Mai 2014 - Fev 2017",
      description: "Sistemas de automação industrial para grandes clientes como ArcelorMittal.",
      achievements: [
        "Desenvolvimento de sistemas de automação utilizando C/C++, Java, PostgreSQL e Oracle.",
        "Criação de esteiras de qualidade de código com Jenkins CI e SonarQube."
      ],
      technologies: ["Java", "C / C++", "PostgreSQL", "Oracle", "Jenkins", "SonarQube"]
    },
    {
      id: "cant-afford-2025",
      role: "Unreal Game Developer",
      company: "Can't Afford Studios",
      location: "EUA (Remoto)",
      period: "Mar 2025 - Presente",
      description: "Engenharia de sistemas de gameplay em Unreal Engine 5 com C++.",
      achievements: [
        "Desenvolvimento de mecânicas de locomoção, sistemas de câmera, input e combate em primeira e terceira pessoa.",
        "Integração profunda de classes base em C++ com o sistema de Blueprints para modularidade e iteração rápida.",
        "Arquitetura de gameplay seguindo o Unreal Framework (GameMode, PlayerController, Character Components)."
      ],
      technologies: ["Unreal Engine 5", "C++", "Blueprints", "OOP", "Event-Driven Gameplay"]
    }
  ],

  projects: [
    {
      title: "Delta-V: Docking Simulator",
      description: "Simulador de acoplamento orbital e física espacial publicado no itch.io. Simula mecânica newtoniana realista, manobras orbitais com 6 graus de liberdade (6-DOF), inércia e acoplamento de precisão em gravidade zero.",
      tags: ["Game Dev", "Simulação Física", "itch.io", "Mecânica Orbital", "Space Sim"],
      link: "https://victorlbernardes.itch.io/delta-v-docking-simulator",
      featured: true
    },
    {
      title: "Guardian-RPG (RPG de Mesa com IA Narradora)",
      description: "Plataforma de RPG de mesa local com motor de IA Narradora (Dungeon Master). Desenvolvido com Drogon Framework (C++) para fornecer um backend WebSocket ultra-rápido e não-bloqueante, sincronizando em tempo real a experiência entre mobile (React Native) e web.",
      tags: ["C++", "Drogon Framework", "WebSockets", "IA / LLM", "React Native", "Web", "Alta Performance"],
      featured: true
    },
    {
      title: "Plataforma Arena ESporte",
      description: "Ecossistema de mídia esportiva composto por backend modular em Spring Boot (arquitetura DDD/Hexagonal), studio editorial em React 18 + Vite, portal público Next.js e design system compartilhado.",
      tags: ["Java", "Spring Boot", "React", "Next.js", "TypeScript", "PostgreSQL", "Design System"],
      github: "https://github.com/victorlbernardes/arena-esporte",
      featured: true
    },
    {
      title: "iPaaS Corporativo & GraphQL BFF",
      description: "Camada Backend for Frontend e microsserviços integrando fluxos de dados enterprise multi-tenant com padronização via OpenAPI/Swagger.",
      tags: ["Java", "Spring Boot", "GraphQL", "Node.js", "MongoDB", "Swagger"],
      featured: true
    },
    {
      title: "WebApp de Streaming de Vídeo em Tempo Real",
      description: "Aplicação web de comunicação por vídeo com latência ultra-baixa integrada com AWS Kinesis Video Streams, WebRTC e frontend reativo.",
      tags: ["AWS Kinesis", "WebRTC", "Angular", "RxJS", "Java", "Spring Boot"],
      featured: true
    },
    {
      title: "Gateway de Pagamento Sync-over-Async",
      description: "Sistema resiliente de processamento de pagamentos usando Apache Kafka para orquestração assíncrona e Camunda para validação dinâmica de regras contra fraude.",
      tags: ["Kafka", "Camunda", "Java", "Spring Boot", "MongoDB", "FinTech"],
      featured: true
    },
    {
      title: "Matchmaking Backend em Java",
      description: "Serviço de matchmaking multijogador de baixa latência gerenciando filas concorrentes de jogadores, cálculo de rating e criação de salas.",
      tags: ["Java", "Concorrência", "WebSockets", "Sistemas Distribuídos"],
      github: "https://github.com/victorlbernardes",
      featured: true
    },
    {
      title: "Sistemas de Gameplay em Unreal Engine 5",
      description: "Locomoção modular em 1ª e 3ª pessoa, mecânicas dinâmicas de combate e arquitetura de componentes em C++ no Unreal Framework.",
      tags: ["Unreal Engine 5", "C++", "Blueprints", "Game Architecture"],
      featured: true
    }
  ],

  education: [
    {
      degree: "Bacharelado em Sistemas de Informação",
      institution: "Instituto Federal do Espírito Santo (IFES)",
      location: "Serra - ES, Brasil",
      period: "2011 - 2016",
      details: "Formação integral em engenharia de software, estruturas de dados, algoritmos, sistemas de banco de dados e computação distribuída."
    },
    {
      degree: "MBA em Gestão de Projetos",
      institution: "Multivix",
      location: "Vitória - ES, Brasil",
      period: "2017 - 2019",
      details: "Especialização executiva em entrega ágil de projetos, liderança de equipes, gestão de riscos e governança tecnológica."
    }
  ]
};
