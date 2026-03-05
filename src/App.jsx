import React, { useState, useEffect, useRef } from 'react';

const retreats = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1170&auto=format&fit=crop',
    title: 'Raíces',
    date: 'October 12–18 • Medellín, Colombia',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1064&auto=format&fit=crop',
    title: 'Coastal Renewal',
    date: 'January 05–12 • Big Sur, California',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1074&auto=format&fit=crop',
    title: 'Desert Origins',
    date: 'March 22–28 • Sedona, Arizona',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop',
    title: 'Alpine Clarity',
    date: 'June 10–16 • Swiss Alps',
  },
];

const services = [
  {
    id: 1,
    number: '01',
    title: 'Somatic Mindfulness',
    description:
      'Reconnect with your body through guided sensation tracking and nervous system regulation. We work with what you carry — not just what you think about.',
  },
  {
    id: 2,
    number: '02',
    title: 'Cognitive Reframing',
    description:
      'Identify the narratives that keep you stuck. Then rewrite them — not with affirmations, but with real tools rooted in clinical practice.',
  },
  {
    id: 3,
    number: '03',
    title: 'Breathwork & Regulation',
    description:
      'Practical breathing protocols that lower cortisol in real time. The kind of grounding you can use in a meeting, on a train, or at 3 AM.',
  },
  {
    id: 4,
    number: '04',
    title: 'Psychotherapy',
    description:
      'Individual therapy grounded in CBT, ACT, and Prolonged Exposure for trauma. Telehealth and in-person. A safe space to be seen, validated, and empowered to live authentically.',
  },
];

const events = [
  {
    id: 1,
    date: 'Oct 24 • Virtual',
    title: 'The Anxious Achiever',
    description:
      'A 90-minute session on transmuting high-functioning anxiety into something sustainable. No toxic positivity.',
    cta: 'Register Interest',
    delay: '0s',
  },
  {
    id: 2,
    date: 'Nov 12 • Brooklyn',
    title: 'Somatic Leadership',
    description:
      'Half-day in-person workshop on body awareness, presence, and emotional regulation — for people who lead and feel everything.',
    cta: 'Book Seat',
    delay: '0.1s',
  },
  {
    id: 3,
    date: 'Dec 01 • Virtual',
    title: 'Year-End Reset',
    description:
      'Guided planning and meditation to close the year with intention. Reflection without the pressure. Clarity without the hustle.',
    cta: 'Join Waitlist',
    delay: '0.2s',
  },
];

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a href="#" className="flex items-center gap-3 whitespace-nowrap">
          <img src="/sol-logo.svg" alt="Sol Practice" className="w-8 h-8" />
          <span className="text-xl font-light tracking-wide text-white">SOL PRACTICE</span>
        </a>
        <div className="hidden md:flex gap-10 text-sm tracking-widest font-medium uppercase text-gray-300">
          {['About', 'Programs', 'Events', 'Coaching'].map((item) => (
            <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} />
          ))}
        </div>
        <a
          href="#book"
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
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#0f1012]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40">
          {['About', 'Programs', 'Events', 'Coaching'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-light text-white tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
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

const NavLink = ({ href, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
        src="/hero-bg.png"
        className="w-full h-full object-cover opacity-70"
        alt="Silhouette"
        style={{ objectPosition: 'center 20%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-[#0f1012]/30 to-transparent" />
    </div>
    <div className="relative z-10 text-center max-w-5xl px-6">
      <RevealElement>
        <h1
          className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tight mb-8 leading-[0.9] text-white"
          style={{ textWrap: 'balance' }}
        >
          Come Back to{' '}
          <span className="italic font-normal text-[#D4C5A5]">Yourself</span>
        </h1>
      </RevealElement>
      <RevealElement delay="0.1s">
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-12 font-light leading-relaxed">
          Therapy, breathwork, and retreat experiences for people navigating real life. Culturally
          grounded. Clinically informed. No gatekeeping.
        </p>
      </RevealElement>
      <RevealElement delay="0.2s">
        <a
          href="#start"
          className="inline-block px-10 py-4 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all border border-white/10"
        >
          Start Your Journey
        </a>
      </RevealElement>
    </div>
    <div className="absolute bottom-12 right-12 md:right-24 hidden md:flex items-center gap-4 text-xs tracking-widest text-gray-400 opacity-70">
      <span>SCROLL TO EXPLORE</span>
      <div className="h-px w-12 bg-gray-600" />
    </div>
  </header>
);

const RetreatsSection = () => {
  const carouselRef = useRef(null);
  const scrollLeft = () => carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth' });

  return (
    <section id="programs" className="py-32 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
        <RevealElement>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
              Immersive Experiences
            </span>
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
        className="flex gap-6 overflow-x-auto pb-12 max-w-[1440px] mx-auto px-6 md:px-12"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
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
          alt={retreat.title}
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
          <p className="text-sm text-gray-400">{retreat.date}</p>
        </div>
        <span
          className="w-8 h-8 rounded-full border flex items-center justify-center transition-all shrink-0"
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
  <section id="about" className="py-24 md:py-32">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <RevealElement className="relative">
        <img
          src="/julian-baez.jpg"
          className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-top"
          alt="Julian Baez, LCSW"
        />
        <div
          className="absolute -bottom-6 -right-6 w-48 h-48 p-6 flex flex-col justify-between"
          style={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span className="text-4xl font-light text-[#D4C5A5]">LCSW</span>
          <span className="text-sm text-gray-400 uppercase tracking-widest">
            Licensed Clinical
            <br />
            Social Worker
          </span>
        </div>
      </RevealElement>
      <RevealElement className="md:pl-12">
        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
          Rooted in science.
          <br />
          <span className="text-gray-400 italic">Built for real people.</span>
        </h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
          I'm Julian Baez, a licensed clinical social worker specializing in mindfulness-based
          therapy and somatic healing. My practice is built for people who've been told to "just
          meditate" but never felt seen in those spaces. Whether you're first-gen, code-switching
          through corporate life, or just tired of wellness that wasn't made with you in mind —
          this is your room.
        </p>
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-3xl font-light text-white mb-2">92%</h4>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Report Reduced Anxiety
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-light text-white mb-2">450+</h4>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Retreat Alumni
            </p>
          </div>
        </div>
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-[#D4C5A5] pb-1 hover:text-[#D4C5A5] transition-colors text-white"
        >
          Read Full Bio
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center relative z-10">
        <h3
          className="text-2xl md:text-3xl font-light transition-transform duration-500 text-white"
          style={{ transform: hovered ? 'translateX(16px)' : 'translateX(0)' }}
        >
          {service.title}
        </h3>
        <span className="text-gray-500 text-sm transition-opacity" style={{ opacity: hovered ? 1 : 0 }}>
          {service.number}
        </span>
      </div>
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ height: hovered ? '128px' : '0px' }}
      >
        <p className="pt-6 text-gray-400 font-light max-w-lg pl-4 border-l border-[#D4C5A5]">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [hoveredList, setHoveredList] = useState(false);
  return (
    <section id="coaching" className="py-32 relative overflow-hidden bg-[#0a0a0c]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <RevealElement className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
            Core Modalities
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
            Pathways to
            <br />
            Wholeness
          </h2>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm">
            Explore the methods we use to meet you where you are. No one-size-fits-all. No
            spiritual bypassing. Just honest, grounded work.
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
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = hoveredList ? '0.3' : '1')}
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
      <blockquote
        className="text-3xl md:text-5xl font-light leading-snug mb-10 text-white"
        style={{ textWrap: 'balance' }}
      >
        "I came looking for a break from my life. I found a way to actually live it."
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#D4C5A5] text-lg font-light">
          S
        </div>
        <div className="text-left">
          <div className="text-sm font-semibold text-white">Sarah M.</div>
          <div className="text-xs text-gray-400 uppercase tracking-widest">Retreat Alumni</div>
        </div>
      </div>
    </RevealElement>
  </section>
);

const EventCard = ({ event }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <RevealElement delay={event.delay} className="h-full">
      <div
        className="p-8 transition-all border border-white/5 h-full flex flex-col"
        style={{
          backgroundColor: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="text-[#D4C5A5] text-xs font-bold uppercase tracking-widest mb-6">
          {event.date}
        </div>
        <h3
          className="text-xl font-light mb-4 transition-colors"
          style={{ color: hovered ? '#D4C5A5' : 'white' }}
        >
          {event.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{event.description}</p>
        <a
          href="#"
          className="text-sm pb-1 transition-colors text-white border-b border-gray-700 hover:border-white self-start"
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
          <h2 className="text-4xl font-light text-white">Workshops & Events</h2>
        </RevealElement>
        <a href="#" className="hidden md:block text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section id="book" className="py-32 flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
        className="w-full h-full object-cover opacity-15"
        alt="Ocean"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-[#0f1012]/80 to-transparent" />
    </div>
    <div className="relative z-10 text-center px-6">
      <RevealElement>
        <h2 className="text-5xl md:text-7xl font-light mb-8 text-white">Begin the Work</h2>
      </RevealElement>
      <RevealElement delay="0.1s">
        <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
          Whether through 1:1 sessions or an immersive retreat, the path to a quieter mind starts
          with showing up. You already know it's time.
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
  <footer className="border-t border-white/5 py-16 text-sm text-gray-400">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <span className="text-white tracking-wide font-light text-lg block mb-2">SOL PRACTICE</span>
        <span>© 2026 Julian Baez, LCSW. All rights reserved.</span>
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

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f1012] text-[#f5f5f7] font-[Manrope] antialiased overflow-x-hidden">
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
