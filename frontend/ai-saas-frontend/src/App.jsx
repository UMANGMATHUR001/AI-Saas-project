import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Tracker from "./components/Tracker.jsx";
import Pricing from "./components/Pricing.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const leftPlans = [
    { title: "Starter", desc: "Perfect for beginners exploring AI tools." },
    { title: "Pro", desc: "Best for professionals and freelancers." },
    { title: "Enterprise", desc: "For teams and businesses that need scale." },
  ];

  const featuresLeft = [
    "AI Resume Builder",
    "Proposal Generator",
    "Basic Templates",
  ];

  const featuresRight = [
    "Priority Support",
    "Advanced Templates",
    "Unlimited Projects",
  ];

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tracker />
        <Pricing
          leftPlans={leftPlans}
          featuresLeft={featuresLeft}
          featuresRight={featuresRight}
        />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
