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
    <section id="about" className="min-h-screen flex items-center bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Centered professional summary */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
          I'm <strong>Md. Jahid Hasan</strong>, a Full Stack Developer creating
          robust, scalable, and user-focused web applications. I write clean,
          maintainable code and deliver practical digital solutions with attention
          to detail.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block text-xs sm:text-sm px-4 py-2 bg-white text-gray-800 rounded-md shadow-sm hover:bg-primary hover:text-white transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
