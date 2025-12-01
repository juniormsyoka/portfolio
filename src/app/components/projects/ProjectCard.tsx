'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '@/app/lib/Projects';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6"
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center rounded-full bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-800">
          {project.category.toUpperCase()}
        </span>
      </div>

      {/* Project Image */}
      <div className="mb-6 h-48 overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="flex h-full items-center justify-center">
          <div className="text-6xl opacity-20">{"</>"}</div>
        </div>
      </div>

      {/* Project Info */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      {/* Technologies */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm hover:text-blue-400 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 group"
        >
          Details
          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;