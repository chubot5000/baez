import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealElement from '../components/RevealElement';

const blogPosts = [
  {
    id: 1,
    slug: 'what-somatic-therapy-actually-looks-like',
    title: 'What Somatic Therapy Actually Looks Like (No, It\'s Not Just Deep Breathing)',
    excerpt: 'If you\'ve ever been told to "just breathe" during a panic attack and wanted to scream — this one\'s for you. Here\'s what somatic work actually involves, and why it works when talk therapy alone doesn\'t cut it.',
    category: 'Somatic Healing',
    date: 'March 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1099&auto=format&fit=crop',
  },
  {
    id: 2,
    slug: 'therapy-for-first-gen-professionals',
    title: 'Therapy for First-Gen Professionals: When Success Feels Like Survival',
    excerpt: 'You made it. Degree, career, apartment in the city. So why does everything still feel like you\'re one wrong move from losing it all? The first-gen experience in therapy — and why your nervous system hasn\'t caught up to your résumé.',
    category: 'Identity & Culture',
    date: 'February 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1074&auto=format&fit=crop',
  },
  {
    id: 3,
    slug: 'nervous-system-regulation-philadelphia',
    title: '5 Ways to Regulate Your Nervous System on the Broad Street Line',
    excerpt: 'Philadelphia commutes hit different. Between SEPTA delays, overcrowded cars, and the sensory overload of Center City — here are real, practical tools you can use between stops.',
    category: 'Breathwork',
    date: 'February 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1169&auto=format&fit=crop',
  },
  {
    id: 4,
    slug: 'high-functioning-anxiety-signs',
    title: 'High-Functioning Anxiety: When Everyone Thinks You\'re Fine',
    excerpt: 'You\'re productive, organized, always early. People call you "driven." But underneath the spreadsheets and to-do lists, your chest is tight and you haven\'t slept through the night in months. Sound familiar?',
    category: 'Anxiety',
    date: 'January 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1124&auto=format&fit=crop',
  },
  {
    id: 5,
    slug: 'telehealth-therapy-pennsylvania',
    title: 'Is Telehealth Therapy Actually Effective? A Philly Therapist\'s Honest Take',
    excerpt: 'After years of offering both in-person and telehealth sessions across Pennsylvania, here\'s what I\'ve learned about when virtual therapy works, when it doesn\'t, and how to make it work for you.',
    category: 'Telehealth',
    date: 'January 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1074&auto=format&fit=crop',
  },
  {
    id: 6,
    slug: 'cbt-vs-act-which-therapy-right-for-you',
    title: 'CBT vs. ACT: Which Therapy Approach Is Right for You?',
    excerpt: 'Two of the most evidence-based therapeutic frameworks, explained without the clinical jargon. What they share, where they differ, and how to figure out which one fits your brain.',
    category: 'Psychotherapy',
    date: 'December 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=1168&auto=format&fit=crop',
  },
];

const categories = ['All', 'Somatic Healing', 'Identity & Culture', 'Breathwork', 'Anxiety', 'Telehealth', 'Psychotherapy'];

const BlogCard = ({ post, featured = false }) => {
  const [hovered, setHovered] = useState(false);

  if (featured) {
    return (
      <RevealElement>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5]">{post.category}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-light mb-4 leading-snug transition-colors"
              style={{ color: hovered ? '#D4C5A5' : 'white' }}
            >
              {post.title}
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6">{post.excerpt}</p>
            <span className="text-sm uppercase tracking-widest text-gray-300 border-b border-gray-700 self-start pb-1">
              Read More
            </span>
          </div>
        </div>
      </RevealElement>
    );
  }

  return (
    <RevealElement className="h-full">
      <div
        className="cursor-pointer h-full flex flex-col"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="aspect-[16/10] overflow-hidden mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
          />
        </div>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5]">{post.category}</span>
          <span className="text-xs text-gray-500">{post.readTime}</span>
        </div>
        <h3
          className="text-xl font-light mb-3 leading-snug transition-colors flex-1"
          style={{ color: hovered ? '#D4C5A5' : 'white' }}
        >
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm font-light leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
        <span className="text-xs uppercase tracking-widest text-gray-500 mt-auto">{post.date}</span>
      </div>
    </RevealElement>
  );
};

const Blog = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Blog | Sol Practice — Therapy, Breathwork & Wellness in Philadelphia';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = 'Explore articles on therapy, somatic healing, breathwork, anxiety, and mental wellness from Jullian Baez, LCSW in Philadelphia. Culturally grounded insights for real life.';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="bg-[#0f1012] text-[#f5f5f7] font-[Manrope] antialiased overflow-x-hidden min-h-screen">
      <Navbar scrolled={scrolled} />

      {/* Hero */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-[1440px] mx-auto md:px-12">
          <RevealElement>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4C5A5] mb-4 block">
              Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">The Blog</h1>
            <p className="text-gray-400 text-lg font-light max-w-xl">
              Honest writing on therapy, nervous system work, and what it actually means to heal —
              from a Philly therapist who gets it.
            </p>
          </RevealElement>
        </div>
      </header>

      {/* Category Filter */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 text-xs uppercase tracking-widest rounded-full border transition-all"
              style={{
                borderColor: activeCategory === cat ? '#D4C5A5' : 'rgba(255,255,255,0.1)',
                backgroundColor: activeCategory === cat ? '#D4C5A5' : 'transparent',
                color: activeCategory === cat ? '#0f1012' : '#9ca3af',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {featured && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 border-b border-white/5 pb-20">
          <BlogCard post={featured} featured />
        </div>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <RevealElement>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Stay in the Loop</h2>
            <p className="text-gray-400 font-light mb-8">
              New articles on therapy, breathwork, and mental wellness — delivered when they're ready,
              not on a schedule. No spam, no fluff.
            </p>
            <a
              href="/#book"
              className="inline-block bg-[#D4C5A5] text-black px-10 py-4 rounded-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors text-sm"
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

export default Blog;
