'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data - replace with your actual projects data
const projectsData = [
  {
    id: 1,
    tag: 'ML / Deep Learning',
    title: 'Brain Tumor Classifier',
    description: 'CNN-based MRI image classifier for brain tumor detection. Achieves high accuracy using transfer learning, built to support clinical decision-making.',
    stack: ['Python', 'TensorFlow', 'CNN', 'MRI Imaging'],
    github: 'https://github.com/juniormsyoka/Brain-Tumor-Classification',
    live: null,
  },
  {
    id: 2,
    tag: 'React Native / Expo',
    title: 'Mombasa Stays',
    description: 'A cross-platform mobile application for discovering and booking accommodations in Mombasa. Built with React Native and Expo for a seamless user experience across iOS and Android.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Node.js'],
    github: 'https://github.com/juniormsyoka/Mombasa-Stays',
    live: null,
  },
  {
    id: 3,
    tag: 'ML / Data Science',
    title: 'Startup Success Predictor',
    description: 'AI platform predicting startup outcomes with 85% accuracy using LightGBM and ensemble methods. Deployed via Streamlit for interactive exploration.',
    stack: ['Python', 'LightGBM', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/juniormsyoka/startup-success-predictor',
    live: null,
  },
  {
    id: 4,
    tag: 'Full-Stack',
    title: 'Medical Assistant Platform',
    description: 'HIPAA-compliant healthcare management system for clinics — appointment scheduling, records, and patient communication in one platform.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/juniormsyoka/med-assistant-front',
    live: 'https://medical-assistant-demo.vercel.app',
  },
  {
    id: 5,
    tag: 'Full-Stack',
    title: 'Campus Market',
    description: 'Student marketplace handling 1,000+ daily transactions. Built with real-time listings, authentication, and a PostgreSQL backend.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    github: 'https://github.com/juniormsyoka/campus-market',
    live: 'https://campus-markett.vercel.app',
  },
  {
    id: 6,
    tag: 'Mobile',
    title: 'Music Player Pro',
    description: 'Cross-platform music app with support for music playbacks, offline playback, and custom playlists. Built with React Native and Expo.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    github: 'https://github.com/juniormsyoka/Expo-Music-Player-V2',
    live: null,
  },
];

const FeaturedProjects = () => {
  const [projects] = useState(projectsData);

  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[rgba(240,237,232,0.08)]">
      <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#E8613A] mb-3">
        Selected work
      </p>
      <h2 className="font-syne text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.025em] mb-1">
        Projects that matter
      </h2>
      <p className="text-[#9A9186] mb-12 max-w-[500px]">
        Real problems, real solutions — from healthcare to music to AI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#161411] border border-[rgba(240,237,232,0.08)] rounded-lg p-7 transition-all hover:border-[rgba(240,237,232,0.18)] hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8613A] opacity-0 transition-opacity hover:opacity-100" />
            
            {/* Tag */}
            <span className="inline-block text-[0.68rem] tracking-[0.1em] uppercase text-[#E8613A] bg-[rgba(232,97,58,0.12)] px-2.5 py-0.5 rounded mb-4">
              {project.tag}
            </span>
            
            {/* Title */}
            <h3 className="font-syne text-[1.1rem] font-bold mb-2">
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-[0.85rem] text-[#9A9186] mb-4 leading-relaxed">
              {project.description}
            </p>
            
            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[0.72rem] px-2.5 py-0.5 border border-[rgba(240,237,232,0.08)] rounded-full text-[#9A9186]"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.8rem] text-[#9A9186] no-underline flex items-center gap-1 transition-colors hover:text-[#E8613A]"
              >
                ↗ GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.8rem] text-[#9A9186] no-underline flex items-center gap-1 transition-colors hover:text-[#E8613A]"
                >
                  ↗ Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;