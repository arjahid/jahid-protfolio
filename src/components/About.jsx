const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TailwindCSS",
    "REST APIs",
    "Git",
    "Machine Learning Basics",
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-panel">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <span className="eyebrow">About</span>
            <h2 className="section-title mt-4">
              Practical design, clean engineering.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              I'm <strong className="text-white">Md. Jahid Hasan</strong>, a Full Stack Developer creating robust, scalable, and user-focused web applications. I prefer interfaces that feel polished and purposeful, but I keep the implementation readable and maintainable.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
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

export default About;
