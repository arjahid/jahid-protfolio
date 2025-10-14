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
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Profile Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-primary mb-1">
                    {skill.category}:
                  </h4>
                  <p className="text-gray-700">{skill.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Extracurricular Activities
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {extracurricular.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Education
            </h3>
            <ul className="space-y-4 text-gray-700">
              {education.map((edu, index) => (
                <li key={index}>
                  <span className="font-semibold">{edu.degree}</span>
                  <p>{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
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
