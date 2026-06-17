import Hero from '@/app/components/sections/Hero';
import FeaturedProjects from '@/app/components/sections/FeaturedProjects';
import Skills from '@/app/components/sections/Skills';
import Contact from '@/app/components/sections/Contact';


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
}