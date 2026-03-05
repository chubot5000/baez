import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealElement from '../components/RevealElement';

const certifications = [
  'Master of Social Work, SLU',
  'BA in Psychology, DePaul',
  'LCSW, Pennsylvania',
  'Prolonged Exposure License',
  '1 Giant Mind Meditation Certification',
];

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Meet Jullian Baez, LCSW | Sol Practice — Therapist in Philadelphia';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Meet Jullian Baez, Licensed Clinical Social Worker in Philadelphia. Culturally grounded therapy rooted in empathy, evidence-based care, and lived experience. Specializing in anxiety, trauma, and life transitions.';
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
        <div className="max-w-[1440px] mx-auto md:px-12 text-center">
          <RevealElement>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
              Meet Your Therapist
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6">
              Jullian Baez
            </h1>
            <p className="text-gray-400 text-lg font-light max-w-lg mx-auto">
              Licensed Clinical Social Worker · Philadelphia, PA
            </p>
          </RevealElement>
        </div>
      </header>

      {/* Background */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealElement>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
                01
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Background</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                Hi, I'm Jullian Baez, a Licensed Clinical Social Worker based in Philadelphia. My
                approach to therapy is grounded in empathy, cultural awareness, and evidence-based
                care. I work with adults navigating anxiety, trauma, substance use, life
                transitions, and relationship stress — and I welcome people of all backgrounds,
                with a special focus on those seeking a therapist who understands the importance
                of identity and lived experience.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                As someone of African American and Puerto Rican descent, I hold space for people
                of color who may feel more comfortable working with someone who shares aspects of
                their cultural story. I believe therapy should be a place where you can show up
                fully and feel understood without having to explain the foundation of who you are.
              </p>
            </div>
          </RevealElement>
          <RevealElement delay="0.1s">
            <img
              src="/julian-baez.jpg"
              className="w-full aspect-[4/5] object-cover object-top"
              alt="Jullian Baez, LCSW"
            />
          </RevealElement>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 md:py-32 bg-[#0C1A05]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealElement>
            <img
              src="/jullian-meditation.jpg"
              className="w-full aspect-[4/5] object-cover"
              alt="Jullian Baez meditating"
            />
          </RevealElement>
          <RevealElement delay="0.1s">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
                02
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Certifications</h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-5 py-2.5 text-sm text-gray-300 border border-white/10 rounded-full transition-all duration-300 hover:border-[#D4C5A5] hover:text-[#D4C5A5] hover:bg-[#D4C5A5]/10 hover:-translate-y-0.5 cursor-default"
                  >
                    {cert}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                I'm certified in Prolonged Exposure (PE) therapy for trauma and PTSD, and draw
                from a wide range of clinical tools — humanistic, psychodynamic, CBT, motivational
                interviewing, and mindfulness — to meet each client where they are. I also teach
                meditation through the 1 Giant Mind technique, which I integrate into therapy when
                it serves your path toward balance and resilience.
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Over the years, I've worked in a variety of settings — from hospitals to schools to
                community programs — and now focus on outpatient work with adults, both in-person
                and virtually. I'm here to help you reconnect with yourself, move through what's
                heavy, and step into a version of life that feels more aligned.
              </p>
            </div>
          </RevealElement>
        </div>
      </section>

      {/* Personal Life */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealElement>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
                03
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Personal Life</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                Outside the therapy space, I co-lead wellness retreats in Medellín, Colombia, where
                I help guide mindfulness, movement, and community connection in a beautiful and
                restorative environment. I also spend my free time meditating, reading, lifting
                weights, and exploring new places.
              </p>

              <h3 className="text-3xl md:text-4xl font-light text-white italic mb-10 leading-snug">
                Wherever you're starting from,
                <br />
                <span className="text-[#D4C5A5]">I'm glad you're here.</span>
              </h3>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/#book"
                  className="inline-block bg-[#D4C5A5] text-black px-8 py-4 rounded-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors text-sm"
                >
                  Contact Jullian
                </a>
              </div>
            </div>
          </RevealElement>
          <RevealElement delay="0.1s">
            <img
              src="/jullian-retreat.jpg"
              className="w-full aspect-[4/5] object-cover object-top"
              alt="Jullian Baez with retreat group in Medellín"
            />
          </RevealElement>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
