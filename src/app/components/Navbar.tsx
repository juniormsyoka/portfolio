'use client';

import { useState } from 'react';
import { Menu, X, Code2, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <Code2 className="h-6 w-6 text-blue-500" />
            <span>Musyoka John</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
  <a
    href="https://github.com/juniormsyoka"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="h-5 w-5 hover:text-blue-400 transition-colors" />
  </a>
  <a
    href="https://www.linkedin.com/in/john-musyoka-4a9107388"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="h-5 w-5 hover:text-blue-400 transition-colors" />
  </a>
</div>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;