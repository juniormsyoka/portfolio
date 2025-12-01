'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  Coffee, 
  ExternalLink,
  Code2,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // You can integrate with an email service here
      console.log('Subscribed with:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/juniormsyoka',
      color: 'hover:text-gray-300',
      bgColor: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'www.linkedin.com/in/john-musyoka-4a9107388',
      color: 'hover:text-blue-400',
      bgColor: 'bg-blue-900/30 hover:bg-blue-900/50'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/silvestrejuan35',
      color: 'hover:text-sky-400',
      bgColor: 'bg-sky-900/30 hover:bg-sky-900/50'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:juniormsyoka35@gmail.com',
      color: 'hover:text-red-400',
      bgColor: 'bg-red-900/30 hover:bg-red-900/50'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/#skills' },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'ASP.NET',
    'SQL',
    'React Native',
    'Tailwind CSS'
  ];

  return (
    <footer className="mt-20 border-t border-gray-800 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Code2 className="h-8 w-8 text-blue-500 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Musyoka John
              </span>
            </Link>
            <p className="text-gray-400">
              Full-stack developer specializing in building exceptional digital experiences
              with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} p-2 rounded-lg transition-all hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className={`h-5 w-5 ${social.color}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Navigation
              <ChevronUp className="ml-2 h-4 w-4 text-gray-500" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-px bg-blue-500 group-hover:w-4 mr-2 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-900/50 text-gray-300 rounded-lg text-sm border border-gray-800 hover:border-blue-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get notified about new projects and technical insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
                <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {subscribed ? 'Subscribed! 🎉' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-500 text-sm flex items-center">
            <span>© {new Date().getFullYear()} YourName. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500 fill-current" /> and{' '}
              <Coffee className="h-3 w-3 mx-1 text-amber-600" />
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="https://github.com/juniormsyoka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors flex items-center"
            >
              View GitHub <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors group"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-gray-800 transition-colors"
            >
              <ChevronUp className="h-4 w-4" />
            </motion.div>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 pt-6 border-t border-gray-900">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Projects Completed', value: '15+' },
              { label: 'Happy Collaborators', value: '10+' },
              { label: 'Years Experience', value: '2+' },
              { label: 'Coffee Cups', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;