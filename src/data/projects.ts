export type Project = {
    title: string;
    description: string;
    tags: string[];
    projectUrls: string[];
    demoUrl?: string;
    screenshots?: string[];
};

export const FEATURED_PROJECTS: Project[] = [
    {
        title: "Travel Planner",
        description: "Search for hotels and restaurants and make (fake) reservations from Trip Advisor API. Add reviews on each place you go, and mark the favorite ones.",
        tags: ["Java", "Spring Boot", "Maven", "PostgreSQL", "Docker", "Kubernetes", "Angular", "Typescript", "PrimeNG"],
        projectUrls: ["https://github.com/WilsonRCosta/travel-planner-api", "https://github.com/WilsonRCosta/travel-planner-app"],
        screenshots: ["/src/assets/travel-planner-screenshot.png"]
    },
    {
        title: "Dish Master",
        description: "Catalog to create meals of different types and countries with ingredients. Displays recipes step-by-step, showing also the nutrition table of each ingredient.",
        tags: ["Java", "Spring Boot", "Spring Web Flux", "Gradle", "Elastic Search", "Docker", "Angular", "Typescript", "PrimeNG"],
        projectUrls: ["https://github.com/WilsonRCosta/dish-master-service", "https://github.com/WilsonRCosta/dish-master-ui"],
        screenshots: ["/src/assets/chatllama-screenshot.png"]
    },
    {
        title: "Shinning Code",
        description: "Clothing e-Commerce store. Create pieces of clothing, add them to the whishlist or to the shopping cart when ready to buy.",
        tags: ["NodeJS", "ExpressJS", "Javascript", "React", "MongoDB"],
        projectUrls: ["https://github.com/WilsonRCosta/shining-code"],
        demoUrl: "https://shining-code.onrender.com",
        screenshots: ["/src/assets/shinning-code-screenshot.png"],
    },
    {
        title: "Cats",
        description: "Simple Web App to evaluate cats.",
        tags: ["React", "Kotlin", "Spring Boot", "Docker", "Gradle"],
        projectUrls: ["https://github.com/WilsonRCosta/cats-kotlin"],
        demoUrl: "https://cats-kotlin.onrender.com/",
        screenshots: ["/src/assets/cats-screenshot.png"],
    },
    {
        title: "Chatllama",
        description: "Simple chatbot using Ollama models with a backend service and a React UI.",
        tags: ["Ollama", "Java", "React"],
        projectUrls: ["https://github.com/WilsonRCosta/chatllama"],
        screenshots: ["/src/assets/chatllama-screenshot.png"]
    },

];