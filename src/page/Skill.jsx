const Skills = () => {
  const technicalSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "DaisyUI",

    "JavaScript",
    "Node.js",
    "React.js",
    "Next.js",
    "Express.js",
    "RESTful APIs",
    "Firebase",
    "Java",
    "C",
    "C++",
    "C#(Beginner)",
    "Python (Beginner)",
    "MongoDB",
    "MySQL (Beginner)",
    "Git",
    "GitHub",
  ];

  const professionalSkills = [
     "Software Development",
       "Problem Solving",
    "Critical Thinking",
    "Team Collaboration",
    "Cyber Security",
    "Social Engineering",
  

   
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-panel">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title mt-4">My Skills</h2>
          <p className="section-copy mt-4">
            A practical stack shaped by frontend, backend, and problem-solving work.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Technical Skills */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="soft-chip"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="soft-chip"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
