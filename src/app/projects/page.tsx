// app/projects/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/app/lib/Projects';
import ProjectCard from '@/app/components/projects/ProjectCard';
import { Filter, Code, Smartphone, Server, Layout, Brain } from 'lucide-react';

type Category = 'all' | 'fullstack' | 'mobile' | 'backend' | 'frontend' | 'ml';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  // Count projects by category
  const categoryCounts = useMemo(() => {
    const counts = {
      all: projects.length,
      fullstack: 0,
      mobile: 0,
      backend: 0,
      frontend: 0,
      ml: 0,
    };
    
    projects.forEach(project => {
      counts[project.category]++;
    });
    
    return counts;
  }, []);

  const categories = [
    { id: 'all', label: 'All', icon: Filter, count: categoryCounts.all, color: 'bg-gray-700 hover:bg-gray-600' },
    { id: 'fullstack', label: 'Full-Stack', icon: Code, count: categoryCounts.fullstack, color: 'bg-blue-600 hover:bg-blue-700' },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, count: categoryCounts.mobile, color: 'bg-green-600 hover:bg-green-700' },
    { id: 'backend', label: 'Backend', icon: Server, count: categoryCounts.backend, color: 'bg-purple-600 hover:bg-purple-700' },
    { id: 'frontend', label: 'Frontend', icon: Layout, count: categoryCounts.frontend, color: 'bg-cyan-600 hover:bg-cyan-700' },
    { id: 'ml', label: 'ML/AI', icon: Brain, count: categoryCounts.ml, color: 'bg-orange-600 hover:bg-orange-700' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">
            A collection of {projects.length} projects showcasing my skills across full-stack web development, 
            mobile applications, backend APIs, and machine learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Filter className="h-5 w-5 text-gray-400 mr-3" />
            <h2 className="text-xl font-semibold">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? `${category.color.replace('hover:', '')} text-white scale-105`
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
                <span className="ml-2 px-2 py-0.5 bg-black/30 rounded text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' 
                ? 'All Projects' 
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Projects`
              }
              <span className="ml-3 text-gray-400 text-lg font-normal">
                ({filteredProjects.length} projects)
              </span>
            </h2>
            
            {/* Category Description */}
            <div className="hidden md:block">
              <p className="text-gray-400 text-sm">
                {selectedCategory === 'all' && 'Showing all projects across all categories'}
                {selectedCategory === 'fullstack' && 'Complete applications with both frontend and backend'}
                {selectedCategory === 'mobile' && 'React Native and Expo mobile applications'}
                {selectedCategory === 'backend' && 'API services, databases, and server-side applications'}
                {selectedCategory === 'frontend' && 'User interfaces and web applications'}
                {selectedCategory === 'ml' && 'Machine learning models and data science projects'}
              </p>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-800 rounded-xl">
              <div className="text-gray-500 text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8 text-center">Projects Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-blue-400">{projects.length}</div>
              <div className="text-gray-400 mt-2">Total Projects</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-green-400">{categoryCounts.fullstack}</div>
              <div className="text-gray-400 mt-2">Full-Stack Apps</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-purple-400">{categoryCounts.mobile}</div>
              <div className="text-gray-400 mt-2">Mobile Apps</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-cyan-400">{categoryCounts.backend}</div>
              <div className="text-gray-400 mt-2">Backend APIs</div>
            </div>
          </div>
          
          {/* Technology Distribution */}
          <div className="mt-12">
            <h4 className="text-xl font-bold mb-6">Technology Distribution</h4>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(projects.flatMap(p => p.technologies)))
                .slice(0, 20) // Show top 20 technologies
                .map((tech, index) => {
                  const count = projects.filter(p => 
                    p.technologies.includes(tech)
                  ).length;
                  
                  // Color based on technology type
                  const getColor = (tech: string) => {
                    if (tech.includes('React') || tech.includes('TypeScript')) return 'bg-blue-900/30 text-blue-400 border-blue-800';
                    if (tech.includes('Node') || tech.includes('Express')) return 'bg-green-900/30 text-green-400 border-green-800';
                    if (tech.includes('SQL') || tech.includes('Mongo')) return 'bg-purple-900/30 text-purple-400 border-purple-800';
                    if (tech.includes('Python') || tech.includes('ML')) return 'bg-orange-900/30 text-orange-400 border-orange-800';
                    return 'bg-gray-800 text-gray-300 border-gray-700';
                  };
                  
                  return (
                    <div
                      key={tech}
                      className={`px-4 py-2 rounded-lg border ${getColor(tech)} flex items-center`}
                    >
                      <span>{tech}</span>
                      <span className="ml-2 px-1.5 py-0.5 bg-black/30 rounded text-xs">
                        {count}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-950 rounded-2xl border border-gray-800 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to see the code?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            All projects are available on GitHub with detailed READMEs, setup instructions, and source code.
          </p>
          <a
            href="https://github.com/juniormsyoka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold"
          >
            <Code className="h-5 w-5 mr-2" />
            View All on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}