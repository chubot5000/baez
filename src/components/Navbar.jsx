import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ href, label, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={href} className="relative">
        {label}
        <span
          className="absolute -bottom-1 left-1/2 h-px bg-[#D4C5A5] block"
          style={{
            width: hovered ? '100%' : '0',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: 'translateX(-50%)',
          }}
        />
      </a>
      {children && hovered && children}
    </div>
  );
};

const servicePages = [
  { path: '/somatic-mindfulness', label: 'Somatic Mindfulness' },
  { path: '/cognitive-reframing', label: 'Cognitive Reframing' },
  { path: '/breathwork-regulation', label: 'Breathwork & Regulation' },
  { path: '/psychotherapy', label: 'Psychotherapy' },
];

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getHref = (hash) => isHome ? `#${hash}` : `/#${hash}`;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(15,16,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        padding: scrolled ? '16px 0' : '24px 0',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 whitespace-nowrap">
          <img src="/sol-logo.svg" alt="Sol Practice" className="w-8 h-8" />
          <span className="text-xl font-light tracking-wide text-white">SOL PRACTICE</span>
        </Link>
        <div className="hidden md:flex gap-10 text-sm tracking-widest font-medium uppercase text-gray-300">
          <NavLink href={getHref('about')} label="About">
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
              style={{ minWidth: '220px' }}
            >
              <div className="bg-[#1a1a1c]/95 backdrop-blur-xl border border-white/10 rounded-md py-3 px-2 animate-fadeIn">
                {servicePages.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-4 py-2.5 text-xs tracking-wider text-gray-300 hover:text-[#D4C5A5] hover:bg-white/5 rounded transition-colors normal-case"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </NavLink>
          <NavLink href={getHref('programs')} label="Programs" />
          <NavLink href={getHref('events')} label="Events" />
          <div className="relative">
            <Link to="/about" className="relative group">
              COACHING
              <span className="absolute -bottom-1 left-1/2 h-px bg-[#D4C5A5] block w-0 group-hover:w-full transition-all duration-400 -translate-x-1/2" />
            </Link>
          </div>
          <div className="relative">
            <Link to="/blog" className="relative group">
              BLOG
              <span className="absolute -bottom-1 left-1/2 h-px bg-[#D4C5A5] block w-0 group-hover:w-full transition-all duration-400 -translate-x-1/2" />
            </Link>
          </div>
        </div>
        <a
          href={getHref('book')}
          className="hidden md:inline-block px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-[#D4C5A5] transition-colors duration-300 rounded-sm whitespace-nowrap"
        >
          Book a Session
        </a>
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#0f1012]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 z-40">
          {['About', 'Programs', 'Events'].map((item) => (
            <a
              key={item}
              href={getHref(item.toLowerCase())}
              className="text-2xl font-light text-white tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Link
            to="/about"
            className="text-2xl font-light text-white tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Coaching
          </Link>
          <Link
              to="/blog"
              className="text-2xl font-light text-white tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          <div className="w-16 h-px bg-white/10 my-2" />
          {servicePages.map((s) => (
            <Link
              key={s.path}
              to={s.path}
              className="text-lg font-light text-gray-400 tracking-wide hover:text-[#D4C5A5] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <a
            href={getHref('book')}
            className="mt-4 px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-semibold rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
