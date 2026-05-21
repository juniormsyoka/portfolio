// app/components/sections/FeaturedProjects.tsx
import { getAllProjects } from '@/app/lib/getProjects';
import ProjectCard from '@/app/components/projects/ProjectCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = async () => {  // ← Add 'async'
  const allProjects = await getAllProjects();  // ← Fetch directly
  const featuredProjects = allProjects.filter(project => project.featured);

  return (
    <section className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-gray-400">A selection of my most impactful work</p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;