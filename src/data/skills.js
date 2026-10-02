import { Server, Layout, Database, Shield, Wrench, Layers } from "lucide-react";

export const skillCategories = [
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description: "Building robust, well-structured server-side applications.",
    level: "Advanced",
    technologies: ["Laravel", "PHP", "Eloquent ORM", "REST API", "API Authentication"],
  },
  {
    id: "frontend",
    icon: Layout,
    title: "Frontend Development",
    description: "Crafting responsive, interactive interfaces that feel effortless to use.",
    level: "Strong",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite", "Axios"],
  },
  {
    id: "database",
    icon: Database,
    title: "Database",
    description: "Designing schemas that stay reliable as an application grows.",
    level: "Strong",
    technologies: ["MySQL", "Database Design", "Migrations", "Relationships", "Query Optimization"],
  },
  {
    id: "auth",
    icon: Shield,
    title: "Authentication & Security",
    description: "Implementing secure access control across API-driven applications.",
    level: "Proficient",
    technologies: ["Laravel Sanctum", "RBAC", "API Authentication", "Authorization", "Validation"],
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Development Tools",
    description: "Working efficiently with the everyday tools of the trade.",
    level: "Proficient",
    technologies: ["Git", "GitHub", "Composer", "npm", "Linux", "VS Code"],
  },
  {
    id: "architecture",
    icon: Layers,
    title: "Architecture",
    description: "Structuring codebases around clear, maintainable patterns.",
    level: "Working Knowledge",
    technologies: ["MVC", "REST", "API First", "Clean Architecture", "SaaS Concepts"],
  },
];
