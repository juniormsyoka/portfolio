// lib/projects.ts

export type Project = {
  id: number;
  name: string;              // GitHub repo name
  title: string;             // Formatted display title
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'fullstack' | 'mobile' | 'backend' | 'frontend' | 'ml';
  featured: boolean;
  imageUrl: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
  createdAt?: string;
  language?: string;
  challenges?: string[];
  solutions?: string[];
};

export type ProjectOverride = {
  title?: string;
  longDescription?: string;
  technologies?: string[];
  liveUrl?: string;
  category?: Project['category'];
  featured?: boolean;
  imageUrl?: string;
  challenges?: string[];
  solutions?: string[];
};

export const defaultProjectImage = "/projects/placeholder.png";