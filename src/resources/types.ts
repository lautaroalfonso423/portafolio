export type Project = {
    title: string;
    description: string;
    tags: string[];
    projectUrls: string[];
    demoUrl?: string;
    screenshots?: string[];
};
export type TechLogo = {
    name: string;
    src: string;
};

export type Certification = {
    name: string;
    issuer: string;
    logo: string;
    date: string;
    fileName: string;
}

export type Experience = {
    company: string;
    client?: string;
    location?: string;
    logo?: string;
    role: string;
    start: string;
    end: string;
    highlights: string[];
};
