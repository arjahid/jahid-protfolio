import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">© 2025 Md. Jahid Hasan. All rights reserved.</p>
        <div className="flex space-x-4 text-2xl">
          <a href="https://www.linkedin.com/in/jahid-hasan-ba8873144/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/arjahid" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/ar__jahid/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/jahidul.jahid.285226" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
