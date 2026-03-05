import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealElement from '../components/RevealElement';

const coachingServices = [
  {
    number: '01',
    title: '1 Giant Mind Meditation',
    description:
      'A simple, effortless meditation technique rooted in the Vedic tradition. No apps, no gimmicks — just a practice you can carry with you for life. Jullian is a certified 1 Giant Mind teacher and integrates meditation into clinical work when it serves the client.',
    details: ['Personalized mantra instruction', 'Weekly group meditation sessions', 'Integration with therapy goals', 'Suitable for complete beginners'],
  },
  {
    number: '02',
    title: 'Breathwork Sessions',
    description:
      'Clinical breathwork protocols designed to regulate your nervous system in real time. These aren\'t trendy breathing exercises — they\'re evidence-based techniques that lower cortisol, reduce anxiety, and build resilience you can access anywhere.',
    details: ['Box breathing & coherent breathing', 'Vagal toning techniques', 'Panic & anxiety intervention tools', 'Corporate & group sessions available'],
  },
  {
    number: '03',
    title: 'Mindfulness Coaching',
    description:
      'Structured mindfulness coaching for individuals and groups who want to build a sustainable awareness practice. Not about clearing your mind — about learning to be with it. Practical, grounded, and rooted in clinical evidence.',
    details: ['Body scan & sensation tracking', 'Mindful movement integration', 'Stress reduction frameworks', '4-week and 8-week programs'],
  },
  {
    number: '04',
    title: 'Retreat Facilitation',
    description:
      'Jullian co-leads immersive wellness retreats that combine meditation, breathwork, movement, and community. Past retreats in Medellín, Colombia have brought together diverse groups for transformative experiences in beautiful, restorative environments.',
    details: ['Multi-day immersive programs', 'Mindfulness & movement integration', 'Community-centered design', 'Domestic & international locations'],
  },
];

const Coaching = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    document.title = 'Coaching & Meditation | Sol Practice — Jullian Baez, LCSW Philadelphia';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Meditation coaching, breathwork sessions, and mindfulness programs with Jullian Baez, LCSW in Philadelphia. 1 Giant Mind certified. Individual, group, and retreat offerings.';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f1012] text-[#f5f5f7] font-[Manrope] antialiased overflow-x-hidden min-h-screen">
      <Navbar scrolled={scrolled} />

      {/* Hero */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto md:px-12">
          <RevealElement>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
              Coaching & Meditation
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Still the Mind.
              <br />
              <span className="text-[#D4C5A5] italic">Move the Body.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-xl">
              Beyond therapy — meditation instruction, breathwork protocols, and mindfulness
              coaching for individuals and groups. Grounded in science, delivered with warmth.
            </p>
          </RevealElement>
        </div>
      </header>

      {/* Services */}
      <section className="py-24 bg-[#060D03]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <RevealElement>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-16">What We Offer</h2>
          </RevealElement>
          {coachingServices.map((service) => {
            const isExpanded = expandedId === service.number;
            return (
              <RevealElement key={service.number}>
                <div
                  className="border-b border-white/10 py-10 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : service.number)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <span className="text-[#D4C5A5] text-sm font-light">{service.number}</span>
                      <h3 className="text-2xl md:text-3xl font-light text-white">{service.title}</h3>
                    </div>
                    <span
                      className="text-2xl text-gray-500 transition-transform duration-300"
                      style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0)' }}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{ maxHeight: isExpanded ? '400px' : '0px', opacity: isExpanded ? 1 : 0 }}
                  >
                    <p className="pt-6 text-gray-400 font-light max-w-2xl leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {service.details.map((d) => (
                        <span
                          key={d}
                          className="px-4 py-2 text-sm text-gray-300 border border-white/10 rounded-full"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealElement>
            );
          })}
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealElement>
            <img
              src="/jullian-meditation.jpg"
              className="w-full aspect-[4/5] object-cover"
              alt="Jullian Baez leading meditation"
            />
          </RevealElement>
          <RevealElement delay="0.1s">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
              The Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Not Wellness Fluff.
              <br />
              <span className="text-gray-400 italic">Real Tools.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              Every coaching offering is informed by clinical training and real-world application.
              Jullian doesn't teach meditation from a script — he teaches it from years of personal
              practice and professional integration with therapy clients.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
              Whether you're looking for a personal meditation practice, want to bring breathwork
              into your workplace, or are ready for an immersive retreat experience — this is
              grounded work that meets you where you are.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-[#D4C5A5] pb-1 hover:text-[#D4C5A5] transition-colors text-white"
            >
              Meet Jullian
            </Link>
          </RevealElement>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#060D03]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <RevealElement>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Ready to Begin?</h2>
            <p className="text-gray-400 text-lg font-light mb-10">
              Whether it's your first meditation or your thousandth — there's always somewhere
              deeper to go. Let's find it together.
            </p>
            <a
              href="/#book"
              className="inline-block bg-[#D4C5A5] text-black px-12 py-5 rounded-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors"
            >
              Book a Session
            </a>
          </RevealElement>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coaching;
