import pic from '../assets/Gemini_Generated_Image_rx4ucmrx4ucmrx4u.png'
import Navbar from '../components/Navbar';
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
    <div>
        <Navbar>

        </Navbar>
        <section id="contact" className="py-20 bg-base-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Contact Me
        </h2>
        <img src={pic} alt="Contact" className="mx-auto mb-6 w-48 h-48 rounded-full object-cover shadow-lg" />
        <p className="text-gray-700 mb-4">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center flex-wrap gap-4 mb-4">
          <a
            href="mailto:jhjahidhasanar@gmail.com"
            aria-label="Send email"
            className="flex items-center gap-3 px-4 py-3 bg-primary/20 text-primary rounded-lg font-medium shadow hover:bg-primary hover:text-white transition"
          >
            <i className="fas fa-envelope text-lg" aria-hidden="true" />
            <span>jhjahidhasanar@gmail.com</span>
          </a>

          <a
            href="tel:01782885378"
            aria-label="Call phone"
            className="flex items-center gap-3 px-4 py-3 bg-primary/20 text-primary rounded-lg font-medium shadow hover:bg-primary hover:text-white transition"
          >
            <i className="fas fa-phone text-lg" aria-hidden="true" />
            <span>01782-885378</span>
          </a>
        </div>
        <p className="text-gray-700 mb-8">
          You can reach me via social media or check my GitHub for projects.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-primary/20 text-primary rounded-lg font-medium shadow hover:bg-primary hover:text-white transition"
            >
              <i className={`${contact.icon} text-lg`}></i>
              {contact.name}
            </a>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
