import React from 'react';

const Footer = () => (
  <footer className="border-t border-white/5 py-16 text-sm text-gray-400">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="text-white tracking-wide font-light text-lg block mb-2">SOL PRACTICE</span>
        <span>© 2026 Jullian Baez, LCSW. All rights reserved.</span>
      </div>
      <div className="flex gap-8 uppercase tracking-widest text-xs">
        {['Instagram', 'LinkedIn', 'TikTok'].map((link) => (
          <a key={link} href="#" className="hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </div>
      <div className="flex gap-8 uppercase tracking-widest text-xs">
        {['Privacy', 'Terms'].map((link) => (
          <a key={link} href="#" className="hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
