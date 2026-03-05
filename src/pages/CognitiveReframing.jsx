import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const CognitiveReframing = () => (
  <ServicePageLayout
    title="Cognitive Reframing"
    heroImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1400&auto=format&fit=crop"
    metaTitle="Cognitive Reframing Therapy | Sol Practice — Jullian Baez, LCSW Philadelphia"
    metaDescription="Cognitive reframing therapy in Philadelphia with Jullian Baez, LCSW. Identify and rewrite the thought patterns keeping you stuck. Evidence-based, culturally grounded."
    description={[
      "Cognitive reframing isn't about toxic positivity or slapping an affirmation over pain. It's about seeing clearly. The stories we tell ourselves — about who we are, what we deserve, what's possible — shape everything. And most of those stories were written by someone else: family systems, cultural expectations, past experiences that taught us to shrink.",
      "In this work, we identify the automatic thought patterns that run your life on autopilot. The inner critic that sounds like a parent. The catastrophizing that feels like preparation. The people-pleasing that disguises itself as kindness. We name these patterns, understand where they came from, and then — with real clinical tools — we start building new ones.",
      "This approach draws from cognitive behavioral therapy (CBT) and acceptance and commitment therapy (ACT), adapted for people who need more than a worksheet. We look at how identity, culture, and systemic pressures shape your thinking — because your brain doesn't operate in a vacuum.",
      "The goal isn't to think positive. The goal is to think clearly — and to choose your responses instead of being chosen by your reactions."
    ]}
    experience={[
      { title: 'Thought Pattern Identification', text: 'Learn to catch automatic negative thoughts in real time. Understand the difference between feelings, facts, and narratives.' },
      { title: 'Core Belief Excavation', text: 'Dig into the deeper beliefs underneath surface-level anxiety — the ones about worthiness, safety, and belonging.' },
      { title: 'Values-Based Reframing', text: 'Build new thought patterns aligned with who you actually want to be, not who you were trained to be.' },
      { title: 'Behavioral Experiments', text: 'Test your assumptions in real life. Challenge avoidance patterns with structured, supported action.' },
    ]}
    whoItsFor="Overthinkers, perfectionists, and people who know they're stuck in a loop but can't seem to break it. If you second-guess every decision, carry guilt about boundaries, or hear a harsh inner voice that never lets up — this work is designed for you. Especially effective for first-gen professionals, code-switchers, and anyone whose anxiety looks like high performance on the outside."
  />
);

export default CognitiveReframing;
