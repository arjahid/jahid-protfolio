const Projects = () => {
  const projects = [
    {
      title: "Multi-Vendor E-commerce Website",
      description:
        "A full-featured MERN stack e-commerce platform with live chat support and AI-based fraud detection.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      link: "https://github.com/arjahid/Multi-Vendor-Ecommerce-Website-frontend-",
    },
    {
      title: "AI Smart Restaurant Management System",
      description:
        "A restaurant management system with AI-powered recommendations, order management, and analytics dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      link: "https://github.com/arjahid/Ai-Smart-Resturant",
    },
    {
      title: "Job Portal Platform",
      description:
        "A job portal allowing employers to post jobs and job seekers to apply with resume uploads.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
      link: "https://github.com/arjahid/job-portal-site",
    },
  ];

  return (
    <section id="projects" className="section-shell">
      <div className="section-panel">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title mt-4">Selected Work</h2>
          <p className="section-copy mt-4">
            A few projects that show how I approach product structure, interface polish, and practical backend work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="mb-4 text-slate-300">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="soft-chip"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="primary-action"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
