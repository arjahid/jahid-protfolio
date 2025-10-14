import { useState } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className=" w-full z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6 bg-white/70 dark:bg-slate-900/60 border-b border-slate-100">
        <a href="/" className="flex items-center gap-3">
         
          <span className="text-lg font-semibold text-slate-900">Md. Jahid Hasan</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                end={item.link === '/'}
                className={({ isActive }) =>
                  `px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary/30 transition ${
                    isActive ? 'text-primary font-semibold' : 'text-slate-700 hover:text-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-slate-100 shadow-lg">
          <ul className="text-center py-4 space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  end={item.link === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `block text-base transition px-4 py-3 touch-manipulation ${isActive ? 'text-primary font-semibold' : 'text-slate-700 hover:text-primary'}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
