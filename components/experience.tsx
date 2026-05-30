"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Real Time Analyst",
    company: "Foundever Egypt",
    period: "November 2025 – Present",
    type: "work",
    highlights: [
      "Monitor real-time performance across queues to ensure service-level targets are achieved",
      "Analyze intraday trends and identify risks such as high AHT, call spikes, and agent unavailability",
      "Execute real-time actions to optimize performance",
      "Coordinate with WFM and operations for staffing adjustments",
      "Generate intraday and EOD reports",
    ],
  },
  {
    role: "Technical Support Specialist (Turkish–English, B2B/B2C)",
    company: "Foundever Egypt",
    period: "April 2025 – November 2025",
    type: "work",
    highlights: [
      "Acted as delegated team lead — handling escalations, queue management, and attendance reporting",
      "Monitored dashboards to identify abandoned/hold calls and created action plans",
      "Provided floor support and training for new hires in live environments",
      "Collaborated with WFM for queue adjustments and workload balancing",
      "Performed call evaluations and provided quality feedback",
    ],
  },
  {
    role: "Customer Service Representative (Turkish–English)",
    company: "Teleperformance Egypt",
    period: "September 2024 – April 2025",
    type: "work",
    highlights: [
      "Resolved customer issues across chat with empathy and efficiency",
      "Assisted supervisors with onboarding and peer mentoring of new agents",
      "Maintained top scores in quality audits and customer satisfaction surveys",
    ],
  },
  {
    role: "Turkish Instructor",
    company: "Elzatona Courses Center",
    period: "March 2024 – August 2024",
    type: "teaching",
    highlights: [
      "Delivered structured Turkish lessons for beginners and intermediate learners",
      "Acted as mentor to junior instructors and supported curriculum development",
    ],
  },
  {
    role: "Founder & CEO",
    company: "Yudum Türkçe (Online Platform)",
    period: "July 2023 – Present",
    type: "entrepreneurship",
    highlights: [
      "Founded and managed an online Turkish language learning platform",
      "Oversaw operations, instructor management, and student services",
      "Trained and mentored learners, building a trusted and growing student community",
    ],
  },
  {
    role: "Turkish Translator",
    company: "Oktob Publishing House",
    period: "July 2022 – Present",
    type: "teaching",
    highlights: [
      "Translated books and documents from Turkish to Arabic",
    ],
  },
  {
    role: "Turkish Instructor",
    company: "The First Courses Center",
    period: "September 2022 – January 2024",
    type: "teaching",
    highlights: [
      "Taught Turkish to students of varying levels, enhancing communication and comprehension",
    ],
  },
];

const typeColors: Record<string, string> = {
  work: "bg-primary/10 text-primary border-primary/20",
  teaching: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  entrepreneurship: "bg-destructive/10 text-destructive border-destructive/20",
};

const typeLabels: Record<string, string> = {
  work: "BPO / Operations",
  teaching: "Language & Education",
  entrepreneurship: "Entrepreneurship",
};

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Career
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {Object.entries(typeLabels).map(([type, label]) => (
              <span
                key={type}
                className={`px-3 py-1 rounded-full border text-sm font-medium ${typeColors[type]}`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 mt-6 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                <Card
                  className={`ml-10 md:ml-0 md:w-1/2 hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3 gap-2 flex-wrap">
                      <div>
                        <h3 className="text-lg font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full border text-xs font-medium flex-shrink-0 ${typeColors[exp.type]}`}
                      >
                        {typeLabels[exp.type]}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4">
              Education
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Academic Background</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">BA in Turkish Language</h3>
                    <p className="text-primary font-medium">Faculty of Arts, Tanta University</p>
                    <p className="text-muted-foreground text-sm mt-1">2018 – 2022 · Grade: Very Good</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary">Turkish Linguistics</Badge>
                      <Badge variant="secondary">Translation</Badge>
                      <Badge variant="secondary">Arabic–Turkish</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
