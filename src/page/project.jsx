import Navbar from "../components/Navbar";

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
   <div>
    <Navbar>
        
    </Navbar>
     <section id="projects" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-base-200 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-white bg-primary px-4 py-2 rounded-lg font-medium hover:bg-primary-focus transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default Projects;
