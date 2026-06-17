'use client';

const Skills = () => {
  const skillClusters = [
    {
      label: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    },
    {
      label: 'Android',
      skills: ['Jetpack Compose', 'Kotlin', 'Material 3', 'MVVM'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'ASP.NET', 'NestJS', 'REST APIs', 'C#'],
    },
    {
      label: 'Data & ML',
      skills: ['Python', 'TensorFlow', 'scikit-learn', 'LightGBM', 'Streamlit'],
    },
    {
      label: 'Database',
      skills: ['PostgreSQL', 'SQL Server', 'Supabase', 'SQLite', 'MongoDB'],
    },
    {
      label: 'Tools',
      skills: ['Git / GitHub', 'Vercel', 'Swagger', 'VS Code', 'Android Studio'],
    },
  ];

  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-6 py-20 border-t border-[rgba(240,237,232,0.08)]">
      <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#E8613A] mb-3">
        Tech stack
      </p>
      <h2 className="font-syne text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.025em] mb-1">
        What I work with
      </h2>
      <p className="text-[#9A9186] mb-12 max-w-[500px]">
        Tools and technologies I reach for to build things well.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillClusters.map((cluster) => (
          <div
            key={cluster.label}
            className="bg-[#161411] border border-[rgba(240,237,232,0.08)] rounded-lg p-6"
          >
            <p className="text-[0.7rem] tracking-[0.15em] uppercase text-[#C4803A] mb-4">
              {cluster.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cluster.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[0.78rem] px-3 py-1 border border-[rgba(240,237,232,0.08)] rounded-full text-[#F0EDE8] bg-[#1E1B17]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;