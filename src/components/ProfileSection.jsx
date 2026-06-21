const ProfileSection = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      items: ["JavaScript","C", "C++", "Java", "Python(Basic)",],
    },
    {
      category: "Data Structures & Algorithms",
      items: ["Arrays", "Linked List", "Stacks", "Queues", "Sorting Algorithms"],
    },
    {
      category: "Object-Oriented Programming",
      items: ["Classes", "Inheritance", "Polymorphism", "Encapsulation"],
    },
    {
      category: "Development",
      items: ["Frontend", "Backend"],
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS","TailwindCss","DaisyUI", "JavaScript", "React","Next.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL(Basic)"],
    },
    {
        category:"Authentication",
        items:["Firebase Authentication","JWT"]
    },
    {
      category: "Tools & Others",
      items: ["Git","GitHub","Machine Learning Basics"],
    },
  ];

  const extracurricular = [
    "Active participant in university coding contests",
    "Clubs and hackathons participation",
    "Volunteering experience",
    "Join university’s career services for event management",
    "Robotics Seminar & Cybersecurity Awareness Seminar",
    "Secretary (Event Management), Software Engineering Club – Daffodil International University",
  ];

  const education = [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      year: "2022-2025",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rajshahi Government School and  College",
      year: "2018 - 2020",
    },
  ];

  return (
    <section className="section-shell">
      <div className="section-panel">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Profile</span>
          <h2 className="section-title mt-4">Profile Overview</h2>
          <p className="section-copy mt-4">
            A compact view of the skills, education, and activities that shape the way I work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Technical Skills */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4 text-slate-300">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <h4 className="mb-1 font-semibold text-amber-200">
                    {skill.category}:
                  </h4>
                  <p>{skill.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Extracurricular Activities
            </h3>
            <ul className="space-y-3 text-slate-300">
              {extracurricular.map((item, index) => (
                <li key={index} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Education
            </h3>
            <ul className="space-y-4 text-slate-300">
              {education.map((edu, index) => (
                <li key={index} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="font-semibold text-white">{edu.degree}</span>
                  <p className="mt-1">{edu.institution}</p>
                  <p className="text-sm text-slate-400">{edu.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
