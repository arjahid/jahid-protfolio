import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <a href="/" className="group flex items-center gap-3">
          
          <span className="text-base font-semibold tracking-wide text-white md:text-lg">
            Md. Jahid Hasan
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-2 md:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                end={item.link === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-300/30 ${
                    isActive
                      ? 'bg-white/10 text-white shadow-inner shadow-white/10'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-amber-300/30 hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-2xl shadow-slate-950/40">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  end={item.link === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `block rounded-2xl px-4 py-3 text-base transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
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
