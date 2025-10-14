import Navbar from "../components/Navbar";

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
    <div>
          <Navbar></Navbar>
  <section id="skills" className="py-20 bg-base-200">
      
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {professionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;
