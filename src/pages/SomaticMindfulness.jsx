import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const SomaticMindfulness = () => (
  <ServicePageLayout
    title="Somatic Mindfulness"
    heroImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400&auto=format&fit=crop"
    metaTitle="Somatic Mindfulness Therapy | Sol Practice — Jullian Baez, LCSW Philadelphia"
    metaDescription="Somatic mindfulness therapy in Philadelphia with Jullian Baez, LCSW. Reconnect with your body through guided sensation tracking and nervous system regulation. In-person and telehealth."
    description={[
      "Somatic mindfulness is the practice of tuning into your body's signals — not to fix them, but to understand them. Trauma, stress, and unprocessed emotions don't just live in your head. They settle into your shoulders, your jaw, your chest. This work is about learning to read those signals and respond with intention instead of reaction.",
      "In sessions, we use guided body scans, sensation tracking, and gentle movement awareness to help you reconnect with parts of yourself you may have learned to shut down. This isn't about forcing relaxation or performing calm. It's about building a relationship with your nervous system that feels honest and sustainable.",
      "Research in somatic psychology shows that body-based interventions can significantly reduce symptoms of PTSD, chronic anxiety, and dissociation. When we address the body alongside the mind, healing becomes more integrated — not just intellectual understanding, but felt safety.",
      "Whether you're someone who lives in your head, struggles with chronic tension, or just feels disconnected from your physical experience, somatic mindfulness gives you a concrete way back in. No incense required."
    ]}
    experience={[
      { title: 'Body Scan & Sensation Mapping', text: 'Learn to identify where emotions and stress live in your body. Build a personal map of your nervous system responses.' },
      { title: 'Nervous System Regulation', text: 'Practice techniques that shift you from fight-or-flight into a grounded, present state — tools you can use anywhere.' },
      { title: 'Mindful Movement Integration', text: 'Gentle, guided movements that help release stored tension without pushing past your window of tolerance.' },
      { title: 'Interoceptive Awareness Building', text: 'Develop the ability to notice internal signals — hunger, fatigue, emotion — before they become overwhelming.' },
    ]}
    whoItsFor="People who feel disconnected from their body. Overthinkers who can't seem to get out of their head. Anyone carrying tension they can't explain. If you've tried talk therapy and felt like something was missing, somatic work might be the piece. It's especially effective for those with trauma histories, chronic anxiety, or burnout — and for anyone who's tired of being told to 'just breathe' without being shown how."
  />
);

export default SomaticMindfulness;
