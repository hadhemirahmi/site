import Link from "next/link";
import { ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutPage() {
  const { personal, experiences, education, clubs } = PORTFOLIO_DATA;

  return (
    <div className="bg-paper-grain text-[var(--hr-ink)]">
      <section className="px-6 pb-24 pt-16 md:px-10 md:pb-36 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-[var(--hr-muted)]">
              01 / About me
            </div>
            <h1 className="serif max-w-5xl text-6xl font-bold leading-[0.9] sm:text-8xl lg:text-[9rem]">
              Curious by nature.
              <span className="text-coral"> Precise by craft.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <div className="stitch-surface mb-8 aspect-[4/5] overflow-hidden">
              <img src="/stitch/stitch-6.jpg" alt="Portrait créatif de Hadhemi Rahmi" className="h-full w-full object-cover" />
            </div>
            <div className="border-t border-[var(--hr-ink)]/20 pt-5">
            <p className="text-lg leading-relaxed text-[var(--hr-ink)]/75">
              {personal.bio}
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--hr-muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--hr-acid)]" />
              {personal.status}
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--hr-ink)] px-6 py-24 text-[var(--hr-paper)] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--hr-paper)]/55 md:col-span-3">
            02 / The approach
          </div>
          <div className="md:col-span-9">
            <h2 className="serif max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              I turn complex systems into <span className="text-[var(--hr-coral)]">clear experiences.</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                { title: "Structure", text: "Reliable architecture, readable code, and APIs designed to last." },
                { title: "Sensitivity", text: "Interfaces that make room for real people, not just ideal flows." },
                { title: "Momentum", text: "Small iterations, honest feedback, and useful software shipped." },
              ].map((item, index) => (
                <div key={item.title} className="border-t border-[var(--hr-paper)]/20 pt-5">
                  <span className="font-mono text-xs text-[var(--hr-acid)]">0{index + 1}</span>
                  <h3 className="serif mt-5 text-3xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--hr-paper)]/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--hr-muted)]">03 / Timeline</div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--hr-muted)]">A technical path shaped by experimentation, collaboration, and a growing interest in thoughtful digital products.</p>
          </div>
          <div className="space-y-12 md:col-span-9">
            {experiences.map((experience) => (
              <article key={experience.id} className="border-t border-[var(--hr-ink)]/20 pt-7">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h2 className="serif text-3xl font-bold sm:text-4xl">{experience.role} <span className="text-coral">@ {experience.company}</span></h2>
                  <span className="font-mono text-xs text-[var(--hr-muted)]">{experience.period}</span>
                </div>
                <p className="mt-5 max-w-3xl leading-relaxed text-[var(--hr-ink)]/70">{experience.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--hr-muted)]">
                  {experience.technologies.slice(0, 6).map((technology) => (
                    <span key={technology} className="inline-flex items-center gap-2"><Check className="h-3 w-3 text-coral" />{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--hr-paper-light)] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="border border-[var(--hr-ink)]/15 bg-[var(--hr-paper)] p-8 md:p-10">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--hr-muted)]"><Code2 className="h-4 w-4 text-coral" /> Education</div>
            <div className="mt-10 space-y-8">
              {education.map((item) => (
                <div key={item.id} className="border-l-2 border-[var(--hr-coral)] pl-5">
                  <span className="font-mono text-xs text-[var(--hr-muted)]">{item.period}</span>
                  <h3 className="serif mt-2 text-2xl font-bold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-[var(--hr-muted)]">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--hr-coral)] p-8 md:p-10">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--hr-ink)]/65"><Sparkles className="h-4 w-4" /> Beyond the screen</div>
            <h2 className="serif mt-10 text-5xl font-bold leading-none">Still learning.<br />Still building.</h2>
            <div className="mt-10 space-y-5">
              {clubs.map((club) => (
                <div key={club.name} className="border-t border-[var(--hr-ink)]/20 pt-5">
                  <h3 className="serif text-2xl font-bold">{club.name.split(" — ")[0]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--hr-ink)]/70">{club.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border-t border-[var(--hr-ink)]/20 pt-8 sm:flex-row sm:items-end">
          <div><p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--hr-muted)]">Next chapter</p><h2 className="serif mt-4 text-5xl font-bold">Let&apos;s make it useful.</h2></div>
          <Link href="/#contact" className="btn-coral inline-flex items-center gap-2">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
