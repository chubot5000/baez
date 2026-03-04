import React, { useState, useEffect, useRef } from 'react';

const customStyles = {
  root: {
    '--bg-dark': '#0f1012',
    '--text-light': '#f5f5f7',
    '--text-muted': '#888890',
    '--accent-gold': '#D4C5A5',
    '--accent-sage': '#8da399',
    '--surface': 'rgba(255,255,255,0.03)',
    '--border': 'rgba(255,255,255,0.08)',
  }
};

const retreats = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1064&auto=format&fit=crop',
    title: 'The Highland Silence',
    date: 'October 12-18 • Scottish Highlands',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1031&auto=format&fit=crop',
    title: 'Coastal Renewal',
    date: 'January 05-12 • Big Sur, California',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1596706037009-4ce49909241e?q=80&w=870&auto=format&fit=crop',
    title: 'Desert Origins',
    date: 'March 22-28 • Sedona, Arizona',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=987&auto=format&fit=crop',
    title: 'Alpine Clarity',
    date: 'June 10-16 • Swiss Alps',
  },
];

const services = [
  {
    id: 1,
    number: '01',
    title: 'Somatic Mindfulness',
    description: "Reconnect with the body's innate wisdom through guided sensation tracking and nervous system regulation techniques.",
  },
  {
    id: 2,
    number: '02',
    title: 'Cognitive Restructuring',
    description: 'Identify and rewrite limiting belief patterns that sabotage professional performance and personal satisfaction.',
  },
  {
    id: 3,
    number: '03',
    title: 'Executive Breathwork',
    description: 'Advanced respiratory protocols designed to lower cortisol immediately and enhance focus during high-pressure states.',
  },
  {
    id: 4,
    number: '04',
    title: 'Nature Immersion',
    description: 'Leveraging the biophilic effect to reset circadian rhythms and reduce mental fatigue through structured outdoor exposure.',
  },
];

const events = [
  {
    id: 1,
    date: 'Oct 24 • Virtual',
    title: 'The Anxious Achiever',
    description: 'A 90-minute masterclass on transmuting high-functioning anxiety into sustainable drive.',
    cta: 'Register Interest',
    delay: '0s',
  },
  {
    id: 2,
    date: 'Nov 12 • London',
    title: 'Somatic Leadership',
    description: 'Half-day in-person workshop focused on body language, presence, and regulation in the boardroom.',
    cta: 'Book Seat',
    delay: '0.1s',
  },
  {
    id: 3,
    date: 'Dec 01 • Virtual',
    title: 'Year-End Reset',
    description: 'Guided planning and meditation session to close the year with intention and clarity.',
    cta: 'Join Waitlist',
    delay: '0.2s',
  },
];

const Navbar = ({ scrolled }) => {
  const navStyle = scrolled
    ? {
        backgroundColor: 'rgba(15,16,18,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottomColor: 'rgba(255,255,255,0.05)',
        padding: '16px 0',
      }
    : {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        padding: '24px 0',
      };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s',
        borderBottom: '1px solid',
        ...navStyle,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="w-32">
          <a href="#" className="text-xl font-light tracking-wide text-white">DR. VOSS</a>
        </div>

        <div className="hidden md:flex gap-10 text-sm tracking-widest font-medium uppercase text-gray-300">
          {['About', 'Programs', 'Events', 'Coaching'].map((item) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} />
          ))}
        </div>

        <div className="w-32 flex justify-end">
          <a
            href="#book"
            className="px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-white text-black hover:bg-[#D4C5A5] transition-colors duration-300 rounded-sm"
          >
            Book Session
          </a>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: '-4px',
          left: '50%',
          width: hovered ? '100%' : '0',
          height: '1px',
          backgroundColor: '#D4C5A5',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: 'translateX(-50%)',
          display: 'block',
        }}
      />
    </a>
  );
};

const RevealElement = ({ children, delay = '0s', className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => (
  <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
        className="w-full h-full object-cover opacity-60"
        alt="Misty mountain landscape"
        style={{ objectPosition: 'center 40%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-black/30" />
    </div>

    <div className="relative z-10 text-center max-w-5xl px-6">
      <RevealElement>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight mb-8 leading-[0.9]" style={{ textWrap: 'balance' }}>
          Restore Your <br />
          <span className="italic font-normal text-[#D4C5A5]">Natural Rhythm</span>
        </h1>
      </RevealElement>
      <RevealElement delay="0.1s">
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-12 font-light leading-relaxed">
          Integrative therapy and retreat experiences for leaders seeking clarity, resilience, and profound calm.
        </p>
      </RevealElement>
      <RevealElement delay="0.2s">
        <a
          href="#start"
          className="inline-block px-10 py-4 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          Start Your Journey
        </a>
      </RevealElement>
    </div>

    <div className="absolute bottom-12 right-12 md:right-24 flex items-center gap-4 text-xs tracking-widest text-gray-400 opacity-70">
      <span>SCROLL TO EXPLORE</span>
      <div className="h-[1px] w-12 bg-gray-600" />
    </div>
  </header>
);

const RetreatsSection = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-32 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <RevealElement>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">Immersive Experiences</span>
            <h2 className="text-4xl md:text-5xl font-light text-white">Upcoming Retreats</h2>
          </div>
        </RevealElement>
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-12"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {retreats.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>
    </section>
  );
};

const RetreatCard = ({ retreat }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="min-w-[85vw] md:min-w-[450px] cursor-pointer"
      style={{ scrollSnapAlign: 'start' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[4/5] overflow-hidden mb-6 relative">
        <div
          className="absolute inset-0 z-10 transition-colors"
          style={{ backgroundColor: hovered ? 'transparent' : 'rgba(0,0,0,0.2)' }}
        />
        <img
          src={retreat.img}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          alt="Retreat"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3
            className="text-2xl font-light mb-2 transition-colors"
            style={{ color: hovered ? '#D4C5A5' : 'white' }}
          >
            {retreat.title}
          </h3>
          <p className="text-sm text-gray-500">{retreat.date}</p>
        </div>
        <span
          className="w-8 h-8 rounded-full border flex items-center justify-center transition-all"
          style={{
            borderColor: hovered ? '#D4C5A5' : 'rgba(255,255,255,0.1)',
            backgroundColor: hovered ? '#D4C5A5' : 'transparent',
            color: hovered ? 'black' : 'white',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
};

const AboutSection = () => (
  <section className="py-24 md:py-32">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <RevealElement className="relative">
        <img
          src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320b?q=80&w=2079&auto=format&fit=crop"
          className="w-full aspect-[4/5] md:aspect-[3/4] object-cover opacity-90 hover:grayscale-0 transition-all duration-1000"
          style={{ filter: 'grayscale(100%)' }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
          onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(100%)')}
          alt="Dr Elena Voss"
        />
        <div
          className="absolute -bottom-6 -right-6 w-48 h-48 p-6 flex flex-col justify-between"
          style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span className="text-4xl font-light text-[#D4C5A5]">15+</span>
          <span className="text-sm text-gray-400 uppercase tracking-widest">
            Years of<br />Clinical Practice
          </span>
        </div>
      </RevealElement>

      <RevealElement className="md:pl-12">
        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
          Evidence-based methods.<br />
          <span className="text-gray-500 italic">Human-centered healing.</span>
        </h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
          We move beyond talk therapy into somatic processing and cognitive restructuring. My approach bridges the gap between modern neuroscience and ancient contemplative practices.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-3xl font-light text-white mb-2">92%</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500">Report Reduced Anxiety</p>
          </div>
          <div>
            <h4 className="text-3xl font-light text-white mb-2">450+</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500">Retreat Alumni</p>
          </div>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-[#D4C5A5] pb-1 hover:text-[#D4C5A5] transition-colors text-white"
        >
          Read Biography
        </a>
      </RevealElement>
    </div>
  </section>
);

const ServiceItem = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border-b border-white/10 py-10 cursor-pointer relative overflow-hidden"
      style={{ opacity: 1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center relative z-10">
        <h3
          className="text-3xl font-light transition-transform duration-500 text-white"
          style={{ transform: hovered ? 'translateX(16px)' : 'translateX(0)' }}
        >
          {service.title}
        </h3>
        <span
          className="text-gray-600 text-sm transition-opacity"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {service.number}
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ height: hovered ? '128px' : '0px' }}
      >
        <p className="pt-6 text-gray-400 font-light max-w-lg pl-4" style={{ borderLeft: '1px solid #D4C5A5' }}>
          {service.description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [hoveredList, setHoveredList] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <RevealElement className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">Core Modalities</span>
          <h2 className="text-5xl font-light mb-8 text-white">
            Pathways to<br />Wholeness
          </h2>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm">
            Select a pathway to explore the methodologies we will use to dismantle your stress and rebuild your cognitive resilience.
          </p>
        </RevealElement>

        <div
          className="lg:col-span-7"
          onMouseEnter={() => setHoveredList(true)}
          onMouseLeave={() => setHoveredList(false)}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{ opacity: hoveredList ? 0.3 : 1, transition: 'opacity 0.4s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = hoveredList ? '0.3' : '1'; }}
            >
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => (
  <section className="py-32 relative">
    <RevealElement className="max-w-4xl mx-auto px-6 text-center">
      <svg className="w-12 h-12 mx-auto mb-8 text-[#D4C5A5] opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.914 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 7.552 14.017 7V3H19.017C20.674 3 22.017 4.343 22.017 6V15C22.017 16.657 20.674 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.896 5.9136 16 7.0166 16H10.0166C10.5686 16 11.0166 15.552 11.0166 15V9C11.0166 8.448 10.5686 8 10.0166 8H6.0166C5.4646 8 5.0166 7.552 5.0166 7V3H10.0166C11.6736 3 13.0166 4.343 13.0166 6V15C13.0166 16.657 11.6736 18 10.0166 18H7.0166V21H5.0166Z" />
      </svg>
      <blockquote className="text-3xl md:text-5xl font-light leading-snug mb-10 text-white" style={{ textWrap: 'balance' }}>
        "I came looking for a break from my career. I found a way to live my life without needing to escape from it."
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-12 h-12 rounded-full object-cover"
          style={{ filter: 'grayscale(100%)' }}
          alt="Client"
        />
        <div className="text-left">
          <div className="text-sm font-semibold text-white">Sarah Jenkins</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Chief Operating Officer, TechFin</div>
        </div>
      </div>
    </RevealElement>
  </section>
);

const EventCard = ({ event }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <RevealElement delay={event.delay}>
      <div
        className="p-8 transition-all border border-white/5"
        style={{
          backgroundColor: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
          cursor: 'default',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="text-[#D4C5A5] text-xs font-bold uppercase tracking-widest mb-6">{event.date}</div>
        <h3
          className="text-xl font-light mb-4 transition-colors"
          style={{ color: hovered ? '#D4C5A5' : 'white' }}
        >
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">{event.description}</p>
        <a
          href="#"
          className="text-sm pb-1 transition-colors text-white"
          style={{ borderBottom: '1px solid #374151' }}
          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = '#374151')}
        >
          {event.cta}
        </a>
      </div>
    </RevealElement>
  );
};

const EventsSection = () => (
  <section id="events" className="py-24 border-t border-white/5">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="flex justify-between items-end mb-16">
        <RevealElement>
          <h2 className="text-4xl font-light text-white">Workshops &amp; Events</h2>
        </RevealElement>
        <a href="#" className="hidden md:block text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
          View All Schedule
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-32 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1518135114454-9a56391a27eb?q=80&w=2069&auto=format&fit=crop"
        className="w-full h-full object-cover opacity-20"
        style={{ filter: 'grayscale(100%)' }}
        alt="Texture"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-[#0f1012]/80 to-transparent" />
    </div>

    <div className="relative z-10 text-center px-6">
      <RevealElement>
        <h2 className="text-5xl md:text-7xl font-light mb-8 text-white">Begin the Work</h2>
      </RevealElement>
      <RevealElement delay="0.1s">
        <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
          Whether through 1:1 coaching or our immersive retreats, the path to a quieter mind starts with a single decision.
        </p>
      </RevealElement>
      <RevealElement delay="0.2s">
        <a
          href="#book"
          className="inline-block bg-[#D4C5A5] text-black px-12 py-5 rounded-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors"
        >
          Book a Consultation
        </a>
      </RevealElement>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-16 text-sm text-gray-500">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="text-white tracking-wide font-light text-lg block mb-2">DR. VOSS</span>
        <span>© 2024 Elena Voss, PhD. All rights reserved.</span>
      </div>

      <div className="flex gap-8 uppercase tracking-widest text-xs">
        {['Instagram', 'LinkedIn', 'Spotify'].map((link) => (
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

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        background-color: #0f1012;
        color: #f5f5f7;
        font-family: 'Manrope', sans-serif;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
      }
      ::selection { background: #D4C5A5; color: black; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #0f1012; }
      ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap');
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const noiseStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9000,
    opacity: 0.03,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
  };

  return (
    <div style={{ backgroundColor: '#0f1012', color: '#f5f5f7', fontFamily: "'Manrope', sans-serif" }}>
      <div style={noiseStyle} />
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <RetreatsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <EventsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;