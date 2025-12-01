// src/app/about/page.tsx
import { 
  GraduationCap, 
  Code, 
  Globe, 
  BookOpen,
  Award,
  Users
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            CS Major passionate about building scalable applications and solving real-world problems
            through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="h-6 w-6 mr-3 text-blue-400" />
                My Journey
              </h2>
              <p className="text-gray-300 mb-4">
                As a Computer Science student, I've dedicated myself to mastering full-stack development,
                with a particular focus on creating efficient, user-friendly applications. My journey began
                with frontend development and quickly expanded to include backend systems, databases, and mobile applications.
              </p>
              <p className="text-gray-300">
                What excites me most about development is the ability to transform ideas into functional,
                impactful software. I enjoy the entire process—from designing intuitive user interfaces
                to architecting robust backend systems.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-3 text-green-400" />
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="font-bold text-lg">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-400">Expected Graduation: 2025</p>
                  <p className="text-gray-300 mt-2">Focus on Software Engineering, Databases, and Web Technologies</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="font-bold text-lg">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-gray-800 rounded-lg">Data Structures</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-lg">Algorithms</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-lg">Database Systems</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-lg">Web Development</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-lg">Mobile App Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Interests */}
          <div className="space-y-8">
            {/* Development Philosophy */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3 text-yellow-400" />
                Development Philosophy
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">Write clean, maintainable code</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">Focus on user experience</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">Prioritize scalability and performance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-300">Continuous learning and improvement</span>
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-purple-400" />
                Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-lg">Open Source</span>
                <span className="px-4 py-2 bg-green-900/30 text-green-400 rounded-lg">Tech Communities</span>
                <span className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-lg">UI/UX Design</span>
                <span className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-lg">Mobile Development</span>
                <span className="px-4 py-2 bg-orange-900/30 text-orange-400 rounded-lg">Cloud Computing</span>
                <span className="px-4 py-2 bg-pink-900/30 text-pink-400 rounded-lg">AI/ML</span>
              </div>
            </div>

            {/* Connect */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 mr-3 text-green-400" />
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-4">
                I'm always open to discussing technology, collaboration opportunities, or just chatting about development.
              </p>
              <a
                href="#contact"
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}