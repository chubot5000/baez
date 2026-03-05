import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RevealElement from './RevealElement';

const ServicePageLayout = ({ title, heroImage, description, experience, whoItsFor, metaTitle, metaDescription }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = metaDescription;
    window.scrollTo(0, 0);
  }, [metaTitle, metaDescription]);

  return (
    <div className="bg-[#0f1012] text-[#f5f5f7] font-[Manrope] antialiased overflow-x-hidden">
      <Navbar scrolled={scrolled} />

      {/* Hero */}
      <header className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} className="w-full h-full object-cover opacity-50" alt={title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-[#0f1012]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pb-16 w-full">
          <RevealElement>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">Sol Practice</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">{title}</h1>
          </RevealElement>
        </div>
      </header>

      {/* Description */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {description.map((p, i) => (
            <RevealElement key={i} delay={`${i * 0.1}s`}>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">{p}</p>
            </RevealElement>
          ))}
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-24 bg-[#0a0a0c]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <RevealElement>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-12">What You'll Experience</h2>
          </RevealElement>
          <div className="space-y-8">
            {experience.map((item, i) => (
              <RevealElement key={i} delay={`${i * 0.1}s`}>
                <div className="flex gap-6 items-start">
                  <span className="text-[#D4C5A5] text-2xl font-light shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <RevealElement>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Who This Is For</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">{whoItsFor}</p>
          </RevealElement>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-[#0a0a0c]">
        <RevealElement>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Ready to Begin?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto px-6">
            You don't need to have it all figured out. You just need to show up.
          </p>
          <a
            href="/#book"
            className="inline-block bg-[#D4C5A5] text-black px-12 py-5 rounded-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors"
          >
            Book a Consultation
          </a>
        </RevealElement>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
