import type { Certification, Experience, Project, TechLogo } from "./types.ts";

export const AboutMe = [
  "Hello there, I’m a software engineer with over 5 years of experience who enjoys building full-stack applications and scalable backend services — from clean APIs and data pipelines to modern, responsive UIs.",
  "My work is mainly on distributed systems in production, focusing on performance, reliability, and developer experience. I like solving real problems, improving systems over time, and keeping things simple and maintainable.",
  "Outside of work, I’m always experimenting with new ideas, building side projects, and learning new tools and technologies.",
];

export const Info = {
  name: "Wilson Costa",
  email: "wilson.ruben97@gmail.com",
  github: "https://github.com/WilsonRCosta",
  linkedin: "https://www.linkedin.com/in/wilson-costa-9a6b96159/",
};

export const Works: Experience[] = [
  {
    company: "Devoteam",
    client: "BMW - Critical Techworks",
    logo: "companies/bmw-group.png",
    role: "Backend Engineer & Scrum Master",
    start: "Feb 2023",
    end: "Nov 2025",
    highlights: [
      "Senior backend engineer working on a distributed microservices platform built with Quarkus and PostgreSQL, deployed on Kubernetes with CI/CD pipelines and infrastructure automation (Terraform/Terragrunt on Azure).",
      "Served as Scrum Master in a team of 7 engineers, facilitating sprint ceremonies and coordinating cross-functional delivery in hybrid and remote environments while maintaining full engineering responsibilities.",
      "Led the design of a Kafka-based async migration pipeline processing thousands of ~2MB events in near real-time, replacing legacy batch workflows and eliminating processing bottlenecks.",
      "Re-architected import pipelines using optimized SQL strategies and in-memory graph traversal, achieving an 80× performance improvement (20 minutes to 15 seconds per event) and reducing full migration timelines from multiple days to a few hours.",
      "Designed advanced PostgreSQL partitioning and indexing strategies, achieving ~500ms queries on 10M+ row tables.",
      "Implemented complex scheduled processing and logical selection engines enabling millions of vehicle variant assignments to be filtered without combinatorial explosion.",
      "Improved reliability of multi-service deployments by redesigning CI/CD workflows and production rollout strategies reducing build times by 20%.",
    ],
  },
  {
    company: "Devoteam",
    client: "BMW - Critical Techworks",
    logo: "companies/bmw-group.png",
    role: "Full-Stack Developer",
    start: "Oct 2021",
    end: "Feb 2023",
    highlights: [
      "Built full-stack features for a modular widget-based dashboard platform with real-time integrations.",
      "Developed Quarkus + NestJS APIs with GraphQL and resources persistence in CosmosDB + PostgreSQL.",
      "Managed Kubernetes deployments via Helmfile with Jenkins/ArgoCD pipelines.",
      "Delivered reusable widgets (dashboards, car errors visualization, Teams integration, etc.).",
    ],
  },
  {
    company: "Devoteam",
    client: "Ellucian - Morphis Tech",
    logo: "companies/ellucian.png",
    role: "Full-Stack Developer",
    start: "Mar 2021",
    end: "Sep 2021",
    highlights: [
      "Modernized legacy Oracle Forms into web-based systems for better maintainability and UX.",
      "Worked with AngularJS, Groovy on Grails, and Oracle SQL with GitLab/Jenkins deployments.",
      "Rebuilt resources workflows using JSON to improve front-end/back-end communication.",
      "Refactored legacy tax/business logic and improved DB access performance.",
    ],
  },
];

export const SkillCategories: Record<string, TechLogo[]> = {
  Languages: [
    { name: "Java", src: "/tech/java.png" },
    { name: "Kotlin", src: "/tech/kotlin.png" },
    { name: "TypeScript", src: "/tech/typescript.png" },
    { name: "JavaScript", src: "/tech/javascript.png" },
  ],

  Frameworks: [
    { name: "Spring Boot", src: "/tech/spring.png" },
    { name: "Quarkus", src: "/tech/quarkus.png" },
    { name: "NodeJS", src: "/tech/nodejs.png" },
    { name: "React", src: "/tech/react.png" },
    { name: "Angular", src: "/tech/angular.png" },
  ],

  Infrastructure: [
    { name: "Docker", src: "/tech/docker.png" },
    { name: "Kubernetes", src: "/tech/kubernetes.png" },
    { name: "Kafka", src: "/tech/kafka.png" },
    { name: "GraphQL", src: "/tech/graphql.png" },
    { name: "Azure", src: "/tech/azure.png" },
    { name: "AWS", src: "/tech/aws.png" },
  ],

  Databases: [
    { name: "PostgreSQL", src: "/tech/postgresql.png" },
    { name: "MySQL", src: "/tech/mysql.png" },
    { name: "MongoDB", src: "/tech/mongodb.png" },
    { name: "Elasticsearch", src: "/tech/elastic.png" },
  ],
};

export const MyProjects: Project[] = [
  {
    title: "Travel Planner",
    description:
      "Search for hotels and restaurants and make (fake) reservations from Trip Advisor API. Add reviews on each place you go, and mark the favorite ones.",
    tags: [
      "Java",
      "Spring Boot",
      "Maven",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Angular",
      "Typescript",
      "PrimeNG",
    ],
    projectUrls: [
      "https://github.com/WilsonRCosta/travel-planner-api",
      "https://github.com/WilsonRCosta/travel-planner-app",
    ],
    screenshots: ["projects/travel-planner-screenshot.png"],
  },
  {
    title: "Shining Code",
    description:
      "Clothing e-commerce store with authentication + cart. Create pieces of clothing, add them to the whishlist or to the shopping cart when ready to buy.",
    tags: ["NodeJS", "ExpressJS", "Javascript", "React", "MongoDB"],
    projectUrls: ["https://github.com/WilsonRCosta/shining-code"],
    demoUrl: "https://shining-code.onrender.com",
    screenshots: ["projects/shining-code-screenshot.png"],
  },
  {
    title: "Dish Master",
    description:
      "Catalog to create meals of different types and countries with ingredients. Displays recipes step-by-step, showing also the nutrition table of each ingredient.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Web Flux",
      "Gradle",
      "Elastic Search",
      "Docker",
      "Angular",
      "Typescript",
      "PrimeNG",
    ],
    projectUrls: [
      "https://github.com/WilsonRCosta/dish-master-service",
      "https://github.com/WilsonRCosta/dish-master-ui",
    ],
  },
  {
    title: "Cats",
    description: "Simple Web App to evaluate cats.",
    tags: ["React", "Kotlin", "Spring Boot", "Docker", "Gradle"],
    projectUrls: ["https://github.com/WilsonRCosta/cats-kotlin"],
    demoUrl: "https://cats-kotlin.onrender.com/",
    screenshots: ["projects/cats-screenshot.png"],
  },
  {
    title: "Chatllama",
    description: "Simple chatbot using Ollama models with a backend service and a React UI.",
    tags: ["Ollama", "Java", "React"],
    projectUrls: ["https://github.com/WilsonRCosta/chatllama"],
    screenshots: ["projects/chatllama-screenshot.png"],
  },
];

export const Certifications: Certification[] = [
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    logo: "certs/logos/psm1.png",
    date: "2024-09-07",
    fileName: "certs/PSM1.pdf",
  },
  {
    name: "Certified Cloud Practitioner",
    issuer: "AWS",
    logo: "certs/logos/aws-cp.png",
    date: "2022-10-22",
    fileName: "certs/AWS-CP.pdf",
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    logo: "certs/logos/gca.png",
    date: "2021-03-05",
    fileName: "certs/GCA.pdf",
  },
];
