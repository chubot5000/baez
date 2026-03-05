import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const BreathworkRegulation = () => (
  <ServicePageLayout
    title="Breathwork & Regulation"
    heroImage="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1400&auto=format&fit=crop"
    metaTitle="Breathwork & Nervous System Regulation | Sol Practice — Jullian Baez, LCSW Philadelphia"
    metaDescription="Clinical breathwork and nervous system regulation in Philadelphia with Jullian Baez, LCSW. Practical breathing protocols that lower cortisol and build resilience. Telehealth available."
    description={[
      "Breathwork isn't a trend — it's one of the most direct pathways to your nervous system. Your breath is the only autonomic function you can consciously control, which makes it one of the most powerful tools for regulation you already have. The problem is, most people have never been taught how to actually use it.",
      "In this practice, we go beyond 'take a deep breath.' We work with specific breathing protocols backed by research — techniques that measurably lower cortisol, activate your vagus nerve, and shift your nervous system from survival mode into a state where you can actually think, feel, and connect.",
      "Sessions are practical and personalized. We identify your baseline nervous system patterns — are you someone who runs anxious and activated, or do you tend to shut down and dissociate? From there, we build a breathing toolkit that matches your physiology, your lifestyle, and the specific situations where you need it most.",
      "This is grounding you can use in a meeting, on the subway, at 3 AM when your mind won't stop. No apps, no special equipment. Just you and your breath, doing what it was designed to do."
    ]}
    experience={[
      { title: 'Nervous System Assessment', text: 'Understand your default stress response — fight, flight, freeze, or fawn — and how it shows up in your daily life.' },
      { title: 'Protocol Training', text: 'Learn specific breathing patterns for different states: calming activation, lifting shutdown, building focus, and preparing for sleep.' },
      { title: 'Real-Time Regulation Practice', text: 'Practice using breathwork in simulated stressful scenarios so the skills transfer to your actual life.' },
      { title: 'Integration Planning', text: 'Build a personalized daily practice that takes 5-10 minutes and fits into your real routine — not an idealized one.' },
    ]}
    whoItsFor="Anyone who feels like their body is running the show — racing heart in meetings, shallow breathing during conflict, insomnia that won't quit. People with anxiety, panic symptoms, or trauma responses who want tangible tools they can use immediately. Also effective for athletes, performers, and anyone in high-pressure environments who needs to regulate on demand."
  />
);

export default BreathworkRegulation;
