import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const Psychotherapy = () => (
  <ServicePageLayout
    title="Psychotherapy"
    heroImage="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1400&auto=format&fit=crop"
    metaTitle="Psychotherapy in Philadelphia | CBT, ACT, Trauma Therapy — Julian Baez, LCSW"
    metaDescription="Individual psychotherapy in Philadelphia with Julian Baez, LCSW. CBT, ACT, and Prolonged Exposure for trauma. Telehealth and in-person sessions available. Culturally grounded care."
    description={[
      "Psychotherapy at Sol Practice is individual therapy grounded in evidence-based modalities — Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), and Prolonged Exposure (PE) for trauma. These aren't buzzwords. They're the approaches with the strongest research backing for anxiety, depression, PTSD, and the kind of existential stuck-ness that doesn't always fit neatly into a diagnosis.",
      "CBT helps you understand the connection between your thoughts, feelings, and behaviors — and gives you concrete tools to change patterns that aren't serving you. ACT takes a different angle: instead of fighting difficult thoughts, you learn to hold them with flexibility while moving toward what actually matters to you. For trauma, Prolonged Exposure is one of the most effective treatments available — it helps you process traumatic memories in a structured, safe way so they stop running your life.",
      "What makes this practice different is the lens. Therapy here is culturally grounded — we talk about identity, systemic pressures, code-switching, intergenerational patterns, and the weight of navigating spaces that weren't built for you. Your therapist gets it because he's lived it.",
      "Sessions are available both in-person in Philadelphia and via telehealth for anyone in Pennsylvania. Whether you're in Center City, commuting from the suburbs, or logging on from your apartment — the work meets you where you are. Literally."
    ]}
    experience={[
      { title: 'Comprehensive Assessment', text: 'We start by understanding your full picture — history, goals, what you\'ve tried before, and what you actually need right now. No cookie-cutter intake.' },
      { title: 'Personalized Treatment Planning', text: 'Based on your assessment, we build a plan using CBT, ACT, PE, or a combination — tailored to your specific patterns and goals.' },
      { title: 'Structured Weekly Sessions', text: 'Consistent 50-minute sessions focused on skill-building, processing, and real progress. In-person in Philadelphia or telehealth across Pennsylvania.' },
      { title: 'Between-Session Integration', text: 'Therapy doesn\'t end when the session does. You\'ll leave with specific practices and experiments to carry the work into your daily life.' },
    ]}
    whoItsFor="Anyone ready to do real therapeutic work — not just vent, but actually change. People dealing with anxiety, depression, trauma, identity questions, relationship patterns, burnout, or the particular exhaustion of being a high-functioning person who's barely holding it together. If you're first-gen, BIPOC, queer, or someone who's felt unseen in traditional therapy — this space was built with you in mind. Available in-person in Philadelphia and via telehealth throughout Pennsylvania."
  />
);

export default Psychotherapy;
