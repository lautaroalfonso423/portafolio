import type { Certification, Experience, Project, TechLogo } from "./types.ts";

export const AboutMe = [
  "¡Hola! Soy desarrollador Back-End con sólidas habilidades en Full Stack, especializado en la creación de APIs robustas y escalables. Mi stack técnico principal se centra en Node.js, Nest.js y TypeScript, complementado con bases de datos como PostgreSQL y MongoDB, y React.js en el front-end.",
  "He consolidado mi experiencia en proyectos intensivos dentro de Henry, donde diseñé la arquitectura back-end de aplicaciones, desarrollé APIs RESTful y gestioné la lógica de negocio y bases de datos. Además, mi background de 2 años en atención al cliente me permite programar con un enfoque claro en la experiencia del usuario y la eficiencia del sistema.",
  "Actualmente busco mi primera oportunidad profesional como Desarrollador Back-End o Full Stack, listo para aportar mi perspectiva única, adaptabilidad y compromiso para crear soluciones técnicas funcionales."
];

export const Info = {
  name: "Lautaro Alfonso",
  email: "sebastiansosa3011@gmail.com",
  github: "https://github.com/lautaroalfonso423",
  linkedin: "https://www.linkedin.com/in/lautaro-sebastian-alfonso-sosa-b13b19323/",
};

export const Works: Experience[] = [
  {
    company: "Devoteam",
    client: "HENRY - Proyecto Final",
    logo: "companies/logo-henry.png",
    role: "Backend Developer",
    start: "Nov 2025",
    end: "Dic 2025",
    highlights: [
  "Diseñé e implementé la arquitectura backend utilizando Nest.js y PostgreSQL para una plataforma de gestión de turnos y administración integral de gimnasios.",
  "Lideré la integración de Mercado Pago como pasarela de pago, gestionando de forma segura las transacciones de los usuarios y las suscripciones a clases.",
  "Dockericé la aplicación completa para estandarizar los entornos de desarrollo y simplificar el flujo de despliegue, logrando una puesta en producción exitosa en Render.",
  "Desarrollé la interfaz visual del panel de administración (Front-End) y realicé la conexión y consumo eficiente de las APIs RESTful.",
  "Colaboré en un equipo ágil para diseñar e implementar flujos de negocio críticos, como el sistema de reserva múltiple de clases y el alta de entrenadores."
],
  },
  // {
  //   company: "Devoteam",
  //   client: "BMW - Critical Techworks",
  //   logo: "companies/bmw-group.png",
  //   role: "Full-Stack Developer",
  //   start: "Oct 2021",
  //   end: "Feb 2023",
  //   highlights: [
  //     "Built full-stack features for a modular widget-based dashboard platform with real-time integrations.",
  //     "Developed Quarkus + NestJS APIs with GraphQL and resources persistence in CosmosDB + PostgreSQL.",
  //     "Managed Kubernetes deployments via Helmfile with Jenkins/ArgoCD pipelines.",
  //     "Delivered reusable widgets (dashboards, car errors visualization, Teams integration, etc.).",
  //   ],
  // },
  // {
  //   company: "Devoteam",
  //   client: "Ellucian - Morphis Tech",
  //   logo: "companies/ellucian.png",
  //   role: "Full-Stack Developer",
  //   start: "Mar 2021",
  //   end: "Sep 2021",
  //   highlights: [
  //     "Modernized legacy Oracle Forms into web-based systems for better maintainability and UX.",
  //     "Worked with AngularJS, Groovy on Grails, and Oracle SQL with GitLab/Jenkins deployments.",
  //     "Rebuilt resources workflows using JSON to improve front-end/back-end communication.",
  //     "Refactored legacy tax/business logic and improved DB access performance.",
  //   ],
  // },
];

export const SkillCategories: Record<string, TechLogo[]> = {
  Languages: [
    // { name: "Java", src: "/tech/java.png" },
    // { name: "Kotlin", src: "/tech/kotlin.png" },
    { name: "TypeScript", src: "/tech/typescript.png" },
    { name: "JavaScript", src: "/tech/javascript.png" },
  ],

  Frameworks: [
    // { name: "Spring Boot", src: "/tech/spring.png" },
    { name: "Nest.js", src: "/tech/NestJS.svg" },
    { name: "NodeJS", src: "/tech/nodejs.png" },
    { name: "React", src: "/tech/react.png" },
    { name: "Next.Js", src: "/tech/nextjs-logo.png" },
  ],

  Infrastructure: [
    { name: "Docker", src: "/tech/docker.png" },
    { name: "Adminer", src: "/tech/images.png" },
    // { name: "Kafka", src: "/tech/kafka.png" },
    // { name: "GraphQL", src: "/tech/graphql.png" },
    // { name: "Azure", src: "/tech/azure.png" },
    // { name: "AWS", src: "/tech/aws.png" },
  ],

  Databases: [
    { name: "PostgreSQL", src: "/tech/postgresql.png" },
    // { name: "MySQL", src: "/tech/mysql.png" },
    { name: "MongoDB", src: "/tech/mongodb.png" },
    // { name: "Elasticsearch", src: "/tech/elastic.png" },
  ],
};

export const MyProjects: Project[] = [
  {
    title: "TrainX",
    description:
      "Search for hotels and restaurants and make (fake) reservations from Trip Advisor API. Add reviews on each place you go, and mark the favorite ones.",
    tags: [
      "JavaScript",
      "NestJs",
      "PostgreSQL",
      "Docker",
      "NextJs",
      "Typescript",
    ],
    projectUrls: [
      "https://github.com/lautaroalfonso423/Train-X/tree/main/TrainX-back",
      "https://github.com/lautaroalfonso423/Train-X/tree/main/trainx-front",
    ],
    screenshots: ["projects/trainx.jpg"],
  },
  {
    title: "Vigilant",
    description:
      "Clothing e-commerce store with authentication + cart. Create pieces of clothing, add them to the whishlist or to the shopping cart when ready to buy.",
    tags: ["NodeJS", "ExpressJS", "Javascript", "React", "MongoDB", "cronJobs"],
    projectUrls: ["https://github.com/lautaroalfonso423/web-defender"],
    // demoUrl: "https://shining-code.onrender.com",
    screenshots: ["projects/vigilant.jpg"],
  },
  // {
  //   title: "Dish Master",
  //   description:
  //     "Catalog to create meals of different types and countries with ingredients. Displays recipes step-by-step, showing also the nutrition table of each ingredient.",
  //   tags: [
  //     "Java",
  //     "Spring Boot",
  //     "Spring Web Flux",
  //     "Gradle",
  //     "Elastic Search",
  //     "Docker",
  //     "Angular",
  //     "Typescript",
  //     "PrimeNG",
  //   ],
  //   projectUrls: [
  //     "https://github.com/WilsonRCosta/dish-master-service",
  //     "https://github.com/WilsonRCosta/dish-master-ui",
  //   ],
  // },
  // {
  //   title: "Cats",
  //   description: "Simple Web App to evaluate cats.",
  //   tags: ["React", "Kotlin", "Spring Boot", "Docker", "Gradle"],
  //   projectUrls: ["https://github.com/WilsonRCosta/cats-kotlin"],
  //   demoUrl: "https://cats-kotlin.onrender.com/",
  //   screenshots: ["projects/cats-screenshot.png"],
  // },
  // {
  //   title: "Chatllama",
  //   description: "Simple chatbot using Ollama models with a backend service and a React UI.",
  //   tags: ["Ollama", "Java", "React"],
  //   projectUrls: ["https://github.com/WilsonRCosta/chatllama"],
  //   screenshots: ["projects/chatllama-screenshot.png"],
  // },
];

export const Certifications: Certification[] = [
  {
    name: "Full Stack Developer",
    issuer: "",
    logo: "certs/logos/henry.jpeg",
    date: "2025-12-12",
    fileName: "certs/logos/henry.jpeg",
  },
  // {
  //   name: "Certified Cloud Practitioner",
  //   issuer: "AWS",
  //   logo: "certs/logos/aws-cp.png",
  //   date: "2022-10-22",
  //   fileName: "certs/AWS-CP.pdf",
  // },
  // {
  //   name: "Associate Cloud Engineer",
  //   issuer: "Google Cloud",
  //   logo: "certs/logos/gca.png",
  //   date: "2021-03-05",
  //   fileName: "certs/GCA.pdf",
  // },
];
