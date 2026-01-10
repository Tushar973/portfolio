"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { Badge, Card, FadeIn } from "@/components/ui-components";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center
      bg-gradient-to-b from-neutral-950 via-neutral-950 to-black
      px-4 py-20 md:px-8"
    >
      <div className="mx-auto w-full max-w-3xl space-y-16">

        {/* ================= HERO ================= */}
        <FadeIn>
          <div className="space-y-5">
            <h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl
              bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
              bg-clip-text text-transparent"
            >
              {RESUME_DATA.name}
            </h1>

            <p className="max-w-xl text-lg text-neutral-400">
              {RESUME_DATA.about}
            </p>

            <div className="flex gap-5 pt-2">
              <a
                href={RESUME_DATA.contact.social[0].url}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>

              <a
                href={RESUME_DATA.contact.social[1].url}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="text-neutral-400 hover:text-white transition"
              >
                <Mail size={20} />
              </a>

              {/* Resume icon link */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* ================= SKILLS ================= */}
        <FadeIn delay={0.1}>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Skills</h2>

            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>

            {/* Open to Opportunities Banner */}
            <div
              className="mt-8 rounded-xl border border-neutral-800
              bg-neutral-900/40 p-6 text-center backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">
                Open to ML, GenAI & Data Science Opportunities
              </h3>

              <p className="mt-2 text-sm text-neutral-400">
                Interested in ML, Data Science, and GenAI roles focused on real-world
                impact and scalable systems.
              </p>

              <div className="mt-6 flex justify-center gap-4">
                {/* ✅ THIS OPENS YOUR RESUME */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-white px-4 py-2 text-sm
                  font-medium text-black hover:bg-neutral-200 transition"
                >
                  Download Resume
                </a>

                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="rounded-md border border-neutral-700
                  px-4 py-2 text-sm font-medium text-white
                  hover:bg-neutral-900 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ================= EXPERIENCE ================= */}
        <FadeIn delay={0.2}>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Experience</h2>

            {RESUME_DATA.work.map((role) => (
              <div
                key={role.company}
                className="relative border-l border-neutral-800
                pl-6 pb-8 last:pb-0"
              >
                <div
                  className="absolute -left-[5px] top-1
                  h-2.5 w-2.5 rounded-full bg-neutral-700"
                />

                <div
                  className="flex flex-col sm:flex-row
                  sm:items-center sm:justify-between"
                >
                  <h3 className="text-lg font-medium text-white">
                    {role.title} ·{" "}
                    <span className="text-neutral-400">{role.company}</span>
                  </h3>

                  <span className="text-sm text-neutral-500">
                    {role.start} – {role.end}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-2">
                  {role.badges.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] text-neutral-400
                      border border-neutral-800 rounded
                      px-1.5 py-0.5"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  {role.description}
                </p>
              </div>
            ))}
          </section>
        </FadeIn>

        {/* ================= PROJECTS ================= */}
        <FadeIn delay={0.3}>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {RESUME_DATA.projects.map((project) => (
                <Card
                  key={project.title}
                  className="flex h-full flex-col
                  hover:border-neutral-700 hover:-translate-y-1
                  transition-all duration-300"
                >
                  <h3 className="font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-grow text-sm text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-neutral-800/50
                        text-neutral-400 border-transparent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1
                      text-xs text-blue-400 hover:text-blue-300"
                    >
                      View Code <FileText size={12} />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}
