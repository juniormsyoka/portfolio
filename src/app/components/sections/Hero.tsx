'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center max-w-[1200px] mx-auto px-6 pt-32 pb-16 gap-16 flex-col-reverse md:flex-row">
      {/* Left Content */}
      <div className="flex-1">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 border border-[rgba(196,128,58,0.3)] rounded px-3 py-1.5 text-[0.75rem] text-[#C4803A] tracking-[0.05em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4803A] animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <p className="font-syne text-[clamp(1.1rem,2vw,1.3rem)] font-normal text-[#9A9186] mb-1 flex items-center gap-3">
          <span className="w-10 h-[1.5px] bg-[#E8613A]" />
          I'm Musyoka
        </p>

        {/* Headline */}
        <h1 className="font-syne text-[clamp(2.8rem,6vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4">
          <span className="block">
            Hello<span className="text-[#E8613A]">.</span>
          </span>
        </h1>

        {/* Role */}
        <p className="font-syne text-[clamp(1.4rem,3vw,2rem)] font-bold text-[#F0EDE8] mb-4">
          Software Engineer &<br />Android Developer
        </p>

        {/* Bio */}
        <p className="text-[#9A9186] max-w-[460px] mb-8 text-[0.95rem] leading-relaxed">
          Final-year CS student at Technical University of Mombasa building full-stack web apps, Android experiences, 
          and ML-powered tools. Passionate about clean architecture and real-world impact.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="#projects"
            className="bg-[#E8613A] text-white border-none px-6 py-3 font-syne font-semibold text-[0.9rem] rounded transition-all hover:bg-[#d4522e] hover:-translate-y-px"
          >
            See my work
          </Link>
          <Link
            href="#contact"
            className="bg-transparent text-[#F0EDE8] border border-[rgba(240,237,232,0.25)] px-6 py-3 font-syne font-semibold text-[0.9rem] rounded transition-all hover:border-[rgba(240,237,232,0.5)] hover:-translate-y-px"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Right - Photo */}
      <div className="flex-none flex items-center justify-center relative">
        <div className="relative w-[280px] h-[280px]">
          {/* Rings */}
          <div className="absolute inset-[-10px] rounded-full border-2 border-[#E8613A] opacity-60" />
          <div className="absolute inset-[-22px] rounded-full border border-[rgba(232,97,58,0.2)]" />
          
          {/* Photo Inner */}
          <div className="w-full h-full rounded-full bg-[#1E1B17] flex items-center justify-center overflow-hidden relative">
            <span className="font-syne text-[5rem] font-extrabold text-[rgba(240,237,232,0.06)] select-none absolute">
              JM
            </span>
            <Image
              src="/John.jpeg"
              alt="Musyoka"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Brackets */}
        <span className="absolute left-[-48px] top-1/2 -translate-y-1/2 font-syne text-[3.5rem] font-light text-[rgba(232,97,58,0.25)] select-none">
          &lt;
        </span>
        <span className="absolute right-[-48px] top-1/2 -translate-y-1/2 font-syne text-[3.5rem] font-light text-[rgba(232,97,58,0.25)] select-none">
          &gt;
        </span>
      </div>
    </section>
  );
};

export default Hero;