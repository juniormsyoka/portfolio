'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Smartphone, Database } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const techIcons = [
    { icon: Code, label: 'Frontend' },
    { icon: Server, label: 'Backend' },
    { icon: Database, label: 'Database' },
    { icon: Smartphone, label: 'Mobile' },
  ];

  return (
    <section className="container mx-auto px-6 pt-12 md:pt-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              CS Major &{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-400">
              Building scalable applications with <span className="text-blue-400">React</span>,{' '}
              <span className="text-green-400">Node.js</span>,{' '}
              <span className="text-purple-400">ASP.NET</span>, and{' '}
              <span className="text-cyan-400">React Native</span>.
              Currently creating impactful solutions across web and mobile platforms.
            </p>

            {/* Tech Stack Icons */}
            <div className="mt-8 flex flex-wrap gap-6">
              {techIcons.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg"
                >
                  <item.icon className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors group"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Stats */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          {[
            { value: '15+', label: 'Projects Built' },
            { value: 'Full-Stack', label: 'Specialization' },
            { value: '4+', label: 'Tech Stacks' },
            { value: '100%', label: 'Passion' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
            >
              <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="mt-2 text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;