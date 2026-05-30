import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Mohamed Hassan | Portfolio",
  description: "Multilingual Customer Service Specialist & Real Time Analyst",
  keywords: [
    "Mohamed Hassan",
    "Customer Service Specialist",
    "Real Time Analyst",
    "BPO",
    "Turkish English",
    "Team Manager",
    "Workforce Management",
    "Foundever",
    "Nasr City Egypt",
    "Multilingual",
    "Operations Support",
    "KPI Tracking",
    "Escalation Handling",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
