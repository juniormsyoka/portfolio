'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0D0C0B]/88 backdrop-blur-[12px] border-b border-[rgba(240,237,232,0.08)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-syne font-bold text-[1.1rem] text-[#F0EDE8] no-underline tracking-[-0.02em]">
        Musyoka<span className="text-[#E8613A]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 list-none">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#9A9186] text-[0.875rem] font-medium tracking-[0.03em] no-underline transition-colors hover:text-[#F0EDE8]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F0EDE8]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0C0B] border-t border-[rgba(240,237,232,0.08)] px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#9A9186] text-[0.875rem] font-medium tracking-[0.03em] no-underline transition-colors hover:text-[#F0EDE8] py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;