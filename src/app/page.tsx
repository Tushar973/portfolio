"use client";

import { RESUME_DATA } from "@/data/resume-data";
import { Badge, Card, FadeIn } from "@/components/ui-components";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-neutral-950 via-neutral-950 to-black px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-4xl space-y-20">

        {/* ================= HERO ================= */}
        <FadeIn>
          <section className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {RESUME_DATA.name}
            </h1>

            <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed">
              {RESUME_DATA.about}
            </p>

            <div className="flex gap-5">
              <a href={RESUME_DATA.contact.social[0].url} target="_blank">
                <Github className="text-neutral-400 hover:text-white" />
              </a>
              <a href={RESUME_DATA.contact.social[1].url} target="_blank">
                <Linkedin className="text-neutral-400 hover:text-blue-400" />
              </a>
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <Mail className="text-neutral-400 hover:text-white" />
              </a>
              <a href={RESUME_DATA.contact.resume} target="_blank">
                <FileText className="text-neutral-400 hover:text-white" />
              </a>
            </div>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {RESUME_DATA.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 text-center"
                >
                  <p className="text-xl font-semibold text-white">{h.value}</p>
                  <p className="text-xs text-neutral-400 mt-1">{h.label}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ================= SKILLS ================= */}
        <FadeIn delay={0.1}>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Skills</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {Object.entries(RESUME_DATA.skillGroups).map(
                ([group, skills]) => (
                  <div
                    key={group}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
                  >
                    <h3 className="mb-3 text-sm font-semibold text-neutral-300">
                      {group}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                )
              )}
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
                className="relative border-l border-neutral-800 pl-6"
              >
                <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-700" />

                <div className="flex justify-between flex-wrap">
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
                      className="text-[10px] text-neutral-400 border border-neutral-800 rounded px-1.5 py-0.5"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-neutral-400">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </FadeIn>

        {/* ================= PROJECTS ================= */}
        <FadeIn delay={0.3}>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>

            <div className="grid gap-4 md:grid-cols-2">
              {RESUME_DATA.projects.map((project) => (
                <Card
                  key={project.title}
                  className="hover:-translate-y-1 transition-all"
                >
                  <p className="text-sm font-medium text-white">
                    {project.impact}
                  </p>

                  <h3 className="mt-1 font-semibold text-lg text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <a
                    href={project.link.href}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Code <FileText size={14} />
                  </a>
                </Card>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ================= CTA ================= */}
        <FadeIn delay={0.4}>
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Interested in working together?
            </h2>
            <p className="mt-2 text-neutral-400">
              I’m open to ML, GenAI, and Data Science roles with real-world impact.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={RESUME_DATA.contact.resume}
                target="_blank"
                className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="rounded-md border border-neutral-700 px-6 py-3 text-sm text-white hover:bg-neutral-800"
              >
                Contact Me
              </a>
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}
