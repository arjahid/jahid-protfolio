import pic from '../assets/Gemini_Generated_Image_rx4ucmrx4ucmrx4u.png'
const Contact = () => {
  const contacts = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/jahidul.jahid.285226",
      icon: "fab fa-facebook-f",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ar__jahid/",
      icon: "fab fa-instagram",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/md-jahid-hasan-ba8873144/",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "GitHub",
      link: "https://github.com/arjahid",
      icon: "fab fa-github",
    },
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="section-panel text-center">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title mt-4">Let&apos;s build something</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <div className="glass-card overflow-hidden p-3">
              <img src={pic} alt="Contact" className="h-56 w-56 rounded-[1.5rem] object-cover md:h-64 md:w-64" />
            </div>
          </div>

          <div>
            <p className="section-copy">
              I&apos;m currently open to new opportunities and collaborations. If you want to discuss a project, an idea, or a role, reach out directly or through social channels.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:jhjahidhasanar@gmail.com"
            aria-label="Send email"
            className="secondary-action gap-3"
          >
            <i className="fas fa-envelope text-lg" aria-hidden="true" />
            <span>jhjahidhasanar@gmail.com</span>
          </a>

          <a
            href="tel:01782885378"
            aria-label="Call phone"
            className="secondary-action gap-3"
          >
            <i className="fas fa-phone text-lg" aria-hidden="true" />
            <span>01782-885378</span>
          </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              You can also check my GitHub and LinkedIn for recent projects and activity.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-chip gap-2 !rounded-2xl !px-4 !py-3"
                >
                  <i className={`${contact.icon} text-base`}></i>
                  {contact.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
