"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const roles = [
    "Real Time Analyst",
    "Customer Service Specialist",
    "Turkish–English Specialist",
    "Team Leader (Acting)",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentRole = roles[roleIndex];
    setText("");
    const typingInterval = setInterval(() => {
      if (i < currentRole.length) {
        setText(currentRole.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary">
                Mohamed <span className="text-destructive">Hassan</span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-10">
              <span className="text-foreground">{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Multilingual Customer Service Specialist trusted with managerial
              responsibilities in fast-paced BPO environments. Fluent in Arabic,
              Turkish (C1), and English (B2). Seeking to transition into a Team
              Manager role.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("experience")}>
                View Experience
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
              <Button size="lg" variant="secondary" className="group" asChild>
                <a href="/Mohamed_Hassan_CV.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nasr City, Egypt</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+201201186342" className="hover:text-primary transition-colors">
                  +20 120 118 6342
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:mohamedmansour8720@gmail.com" className="hover:text-primary transition-colors">
                  mohamedmansour8720@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-destructive/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full border-2 border-primary/20 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-2">MH</div>
                  <div className="text-muted-foreground text-sm">Mohamed Hassan</div>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {["🇪🇬 Arabic", "🇹🇷 Turkish", "🇺🇸 English"].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  );
}
