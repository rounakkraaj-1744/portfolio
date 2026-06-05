export interface NavLink {
    name: string
    href: string
}

export interface ExperienceItem {
    tag: string
    type: "problem" | "solution" | "impact" | "result"
    text: string
}

export interface Experience {
    company: string
    role: string
    period: string
    location: string
    status: string
    items: ExperienceItem[]
}

export interface ProjectItem {
    tag: string
    type: "problem" | "solution" | "result"
    text: string
}

export interface Project {
    title: string
    emoji: string
    description: string
    items: ProjectItem[]
    tags: string[]
    github: string
    image?: string
}

export interface SkillItem {
    name: string
    sub: string
}

export interface SkillColumn {
    header: string
    items: SkillItem[]
}

export interface DebuggingStory {
    title: string
    label?: string
    description: string
    url: string
}

export interface Article {
    title: string
    description: string
    url: string
    date: string
    readTime: string
    tag: string
    publication: string
    thumbnail: string
}

export interface PersonalInfo {
    name: string
    role: string
    email: string
    github: string
    linkedin: string
    baseUrl: string
}