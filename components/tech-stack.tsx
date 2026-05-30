"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BarChart2, Globe, Headphones, Wrench, Briefcase } from "lucide-react";

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = {
    leadership: {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership & Management",
      description: "Team support, coaching, and delegation",
      skills: [
        { name: "Team Coaching", level: 90 },
        { name: "Conflict Resolution", level: 88 },
        { name: "SME / Floor Support", level: 92 },
        { name: "Escalation Handling", level: 95 },
        { name: "Delegation", level: 85 },
      ],
    },
    operations: {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Operations Support",
      description: "Queue monitoring, WFM coordination, KPI tracking",
      skills: [
        { name: "Real-Time Monitoring", level: 95 },
        { name: "WFM Coordination", level: 88 },
        { name: "KPI Tracking", level: 90 },
        { name: "Intraday Reporting", level: 92 },
        { name: "Action Planning", level: 85 },
      ],
    },
    languages: {
      icon: <Globe className="h-6 w-6" />,
      title: "Languages",
      description: "Multilingual communication across cultures",
      skills: [
        { name: "Arabic (Native)", level: 100 },
        { name: "Turkish (C1)", level: 90 },
        { name: "English (B2)", level: 75 },
      ],
    },
    customerService: {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Service",
      description: "B2B/B2C support, complaint resolution",
      skills: [
        { name: "Complaint Resolution", level: 95 },
        { name: "Service Quality", level: 92 },
        { name: "B2B/B2C Support", level: 90 },
        { name: "Client Satisfaction", level: 93 },
        { name: "Chat Support", level: 88 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Technical Tools",
      description: "Office, CRM, and productivity tools",
      skills: [
        { name: "MS Excel", level: 85 },
        { name: "Google Sheets", level: 85 },
        { name: "MS Word", level: 90 },
        { name: "CRM Tools", level: 80 },
        { name: "PowerPoint", level: 82 },
        { name: "Photoshop", level: 65 },
      ],
    },
    soft: {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Soft Skills",
      description: "Professional and interpersonal capabilities",
      skills: [
        { name: "Problem-Solving", level: 92 },
        { name: "Communication", level: 95 },
        { name: "Adaptability", level: 90 },
        { name: "Time Management", level: 88 },
        { name: "Mentoring", level: 90 },
      ],
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20">
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
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Competencies</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setSelectedCategory(selectedCategory === key ? null : key)
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">
                          +{category.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
