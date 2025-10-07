import React, { useState } from "react";
import {
  FiHome, FiUser, FiBriefcase, FiGrid, FiMail,
  FiGithub, FiLinkedin, FiMenu, FiX
} from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#", label: "Home", icon: <FiHome /> },
    { href: "#about", label: "About", icon: <FiUser /> },
    { href: "#services", label: "Services", icon: <FiBriefcase /> },
    { href: "#projects", label: "Portfolio", icon: <FiGrid /> }, // <-- My Work
    { href: "#contact", label: "Contact", icon: <FiMail /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0f]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 min-w-0">
          <div className="leading-tight">
            <p className="text-2xl font-bold text-blue-500 tracking-tight">
              MahamNasimDurrani
            </p>
            <p className="text-xs text-blue-400">Code. Learn. Predict. Repeat.</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
            >
              <span className="transition-transform group-hover:-translate-y-0.5">
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Socials */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
          >
            Connect With Me
          </a>
          <div className="ml-1 flex items-center gap-3">
            <a
              href="https://github.com/MahamNasimDurrani-01"
              className="text-blue-400 hover:text-blue-300"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahamnasimdurrani699/"
              className="text-blue-400 hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-blue-400 md:hidden hover:text-blue-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0b0b0f] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-2 py-3 text-blue-400 hover:bg-white/5 hover:text-blue-300"
                onClick={() => setOpen(false)}
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}

            <div className="mt-2 flex items-center justify-between px-2">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white"
              >
                Connect With Me
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/MahamNasimDurrani-01"
                  className="text-blue-400 hover:text-blue-300"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahamnasimdurrani699/"
                  className="text-blue-400 hover:text-blue-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
