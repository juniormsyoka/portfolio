'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 py-8 border-t border-[rgba(240,237,232,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[0.8rem] text-[#9A9186]">
        © 2025 John Musyoka. Mombasa, Kenya.
      </p>
      <div className="flex gap-6">
        <a
          href="https://github.com/juniormsyoka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8rem] text-[#9A9186] no-underline transition-colors hover:text-[#E8613A]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/john-musyoka-4a9107388"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8rem] text-[#9A9186] no-underline transition-colors hover:text-[#E8613A]"
        >
          LinkedIn
        </a>
        <a
          href="mailto:juniormsyoka35@gmail.com"
          className="text-[0.8rem] text-[#9A9186] no-underline transition-colors hover:text-[#E8613A]"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;