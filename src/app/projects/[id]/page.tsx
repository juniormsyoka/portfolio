// src/app/projects/[id]/page.tsx
'use client';

import { notFound, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { projects } from '@/app/lib/Projects'; // ← CAPITAL P
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Code,
  Server,
  Smartphone,
  Layout,
  Brain,
  Cpu
} from 'lucide-react';

// Type for project
interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
  imageUrl: string;
  challenges: string[];
  solutions: string[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [project, setProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!id) return;
    
    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  // Simple category mapping
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'fullstack': return Code;
      case 'mobile': return Smartphone;
      case 'backend': return Server;
      case 'frontend': return Layout;
      case 'ml': return Brain;
      default: return Cpu;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="min-h-screen bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-900/30 rounded-lg">
              <CategoryIcon className="h-5 w-5 text-blue-400" />
            </div>
            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium">
              {project.category.toUpperCase()}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-sm font-medium">
                FEATURED
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              View Code on GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Long Description */}
            <div className="mb-8 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Challenges & Solutions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge: string, index: number) => (
                  <div key={index} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className="h-2 w-2 bg-red-500 rounded-full mr-3"></div>
                        <h3 className="font-semibold text-lg">Challenge</h3>
                      </div>
                      <p className="text-gray-300 ml-5">{challenge}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                        <h3 className="font-semibold text-lg">Solution</h3>
                      </div>
                      <p className="text-gray-300 ml-5">{project.solutions[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className="font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Featured</span>
                  <span className={project.featured ? "text-green-400" : "text-gray-400"}>
                    {project.featured ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technologies</span>
                  <span>{project.technologies.length}</span>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Similar Projects</h3>
              <div className="space-y-3">
                {projects
                  .filter(p => p.category === project.category && p.id !== project.id)
                  .slice(0, 2)
                  .map((related) => (
                    <Link
                      key={related.id}
                      href={`/projects/${related.id}`}
                      className="block p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <div className="font-medium mb-1">{related.title}</div>
                      <div className="text-sm text-gray-400 truncate">{related.description}</div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}