import { Code, Server, Database, Smartphone, Cpu, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'ASP.NET', 'Nest JS', 'REST APIs', 'Authentication'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['SQL', 'SQLite', 'Supabase', 'PostgreSQL', 'Database Design', 'Authentication', 'Row-Level Security'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Expo', 'iOS/Android', 'Mobile UI', 'APIs'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tools',
      icon: Cpu,
      skills: ['Git', 'GitHub', 'VS Code', 'Swagger UI', 'Vercel'],
      color: 'from-gray-500 to-gray-700',
    },
  ];

  return (
    <section className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Technical Skills
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-4 text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between bg-gray-900/50 px-4 py-2 rounded-lg"
                >
                  <span className="text-gray-300">{skill}</span>
                  <div className="h-2 w-16 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      style={{ width: `${80 + Math.random() * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;