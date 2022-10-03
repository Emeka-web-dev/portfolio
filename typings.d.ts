interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    updateAt: string;
}

interface Image extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    role: string;
    profilePic: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    image: Image;
    progress: number;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}
export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

