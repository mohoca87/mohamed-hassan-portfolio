"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Globe, GraduationCap } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Leadership & Mentoring",
      description:
        "Acting as delegated team lead — coaching new hires, handling escalations, and driving performance improvements.",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Operations & WFM",
      description:
        "Real-time queue monitoring, KPI tracking, and workforce management coordination to hit service-level targets.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Multilingual Communication",
      description:
        "Native Arabic, C1 Turkish, and B2 English — delivering support and translation across cultures and contexts.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Teaching & Entrepreneurship",
      description:
        "Founded Yudum Türkçe, an online Turkish learning platform, and instructed hundreds of students at multiple centers.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">
              A Multilingual BPO Professional
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a multilingual Customer Service Specialist with hands-on
              experience in fast-paced BPO environments, currently working as a
              Real Time Analyst at Foundever Egypt. I have been trusted with
              managerial responsibilities — from handling escalations and
              monitoring queues to training new agents and coordinating with
              Workforce Management.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey began with a passion for languages. I earned a BA in
              Turkish Language from Tanta University (Very Good), taught Turkish
              at multiple institutions, translated books from Turkish to Arabic,
              and eventually founded my own online language learning platform,
              Yudum Türkçe.
            </p>
            <p className="text-muted-foreground">
              I am now focused on leveraging my operations expertise, leadership
              skills, and multilingual abilities to step into a formal Team
              Manager role where I can make a measurable impact.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Real Time Analysis",
                "Escalation Handling",
                "Queue Management",
                "WFM Coordination",
                "Team Coaching",
                "KPI Tracking",
                "Turkish C1",
                "English B2",
                "Arabic Native",
              ].map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                variants={fadeIn}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
