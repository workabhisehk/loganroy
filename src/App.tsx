const highlights = [
  {
    title: "Brand storytelling",
    description:
      "Clear narratives that make your product and people unforgettable.",
  },
  {
    title: "Business insight",
    description:
      "Practical frameworks on strategy, growth, and decision-making.",
  },
  {
    title: "Content systems",
    description:
      "Repeatable workflows that keep your voice consistent everywhere.",
  },
];

const focusAreas = [
  "Market positioning",
  "Customer psychology",
  "Thought leadership",
  "Founder-led marketing",
  "Product storytelling",
  "Community building",
];

const contentFormats = [
  {
    title: "Weekly essays",
    detail: "Deep dives on business models, strategy, and influence.",
  },
  {
    title: "Brand playbooks",
    detail: "Short, tactical guides you can implement in a weekend.",
  },
  {
    title: "Audio notes",
    detail: "Quick voice memos on what I am learning in real time.",
  },
];

const playbooks = [
  {
    title: "Positioning Sprint",
    detail: "A 48-hour framework to sharpen your market narrative.",
  },
  {
    title: "Founder-Led Growth",
    detail: "Content systems that scale a personal brand into a pipeline.",
  },
  {
    title: "Community Flywheel",
    detail: "A repeatable model to turn audiences into collaborators.",
  },
];

const speakingTracks = [
  {
    title: "Brand strategy in the AI era",
    detail: "How founders stay distinct while automation accelerates.",
  },
  {
    title: "Content that compounds",
    detail: "Building repeatable narratives that drive trust and growth.",
  },
  {
    title: "Operator storytelling",
    detail: "Turning real business learnings into shareable insight.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <header className="px-6 py-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-foreground">
            Logan Roy
          </span>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#vision" className="hover:text-foreground">
              Vision
            </a>
            <a href="#insights" className="hover:text-foreground">
              Insights
            </a>
            <a href="#content" className="hover:text-foreground">
              Content
            </a>
            <a href="#playbooks" className="hover:text-foreground">
              Playbooks
            </a>
            <a href="#speaking" className="hover:text-foreground">
              Speaking
            </a>
            <a href="#contact" className="hover:text-foreground">
              Connect
            </a>
          </div>
        </nav>
      </header>

      <main className="px-6 pb-16">
        <section className="mx-auto max-w-5xl pb-16 pt-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              A succession-inspired brand dossier
            </p>
            <div className="h-40 w-40 overflow-hidden rounded-full border border-border bg-secondary shadow-card md:h-48 md:w-48">
              <img
                src="/profile.jpg"
                alt="Logan Roy portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Strategy, power, and persuasion for modern founders.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              This is a boardroom-grade portfolio of ideas, frameworks, and
              narratives for builders who want real influence. Expect sharp
              business insight, brand positioning, and disciplined content
              strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition hover:-translate-y-0.5"
                href="#content"
              >
                Explore content
              </a>
              <a
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/30"
                href="#contact"
              >
                Collaborate with me
              </a>
              <a
                className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary-foreground hover:bg-primary/90"
                href="https://abhishekn.in"
                target="_blank"
                rel="noreferrer"
              >
                View Abhishekn.in
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl pb-16">
          <div className="rounded-3xl bg-gradient-card p-8 shadow-xl shadow-foreground/10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Current focus
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Building a modern dynasty of brand, content, and leverage.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Loganroy.in tracks my thought leadership, products, and
              partnerships. It is built for founders who want an unfair edge in
              narrative, trust, and distribution.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="vision"
          className="mx-auto max-w-6xl space-y-10 rounded-3xl bg-card px-8 py-12 shadow-lg shadow-foreground/5"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Vision
            </p>
            <h2 className="text-3xl font-semibold text-foreground">
              Two portfolios, one strategic narrative.
            </h2>
            <p className="text-sm text-muted-foreground">
              Abhishekn.in is the professional record. Loganroy.in is the
              operator mindset. Here I focus on business insight, brand
              experiments, and content systems that compound credibility.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-secondary p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="insights"
          className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="rounded-3xl bg-foreground p-8 text-background">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/50">
              Business lens
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              I share how I think about power, positioning, and trust.
            </h2>
            <p className="mt-4 text-sm text-background/80">
              This portfolio evolves as the playbook expands. Expect essays,
              teardown notes, and actionable frameworks for modern operators.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-8 shadow-lg shadow-foreground/5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              What you will find here
            </p>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                Opinionated takes on brand strategy and product storytelling.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                Notes from books, mentors, and real-world experiments.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary"></span>
                Playbooks that translate insights into action.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="content"
          className="mx-auto mt-14 max-w-6xl space-y-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Content studio
              </p>
              <h2 className="text-3xl font-semibold text-foreground">
                Publishing formats that build legacy.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-sm">
              Each channel is designed to amplify a distinct part of the Logan
              Roy narrative while staying consistent in voice and authority.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {contentFormats.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-gradient-card p-6 shadow-sm shadow-foreground/10"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="playbooks"
          className="mx-auto mt-14 max-w-6xl space-y-8"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Frameworks
              </p>
              <h2 className="text-3xl font-semibold text-foreground">
                Playbooks for builders and operators.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-sm">
              Short, actionable systems designed to ship clarity, not theory.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {playbooks.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-gradient-card p-6 shadow-sm shadow-foreground/10"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="speaking"
          className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-3xl bg-gradient-card p-8 shadow-lg shadow-foreground/10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Speaking
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground">
              Talks and workshops for teams building bold brands.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              I share practical lessons from the field, blending brand strategy,
              growth, and content systems. Available for founder events,
              incubators, and private team sessions.
            </p>
          </div>
          <div className="space-y-4">
            {speakingTracks.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-secondary p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto mt-16 max-w-6xl rounded-3xl bg-primary px-8 py-12 text-primary-foreground"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
                Connect
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Want to collaborate, invite me to speak, or explore a project?
              </h2>
              <p className="mt-4 text-sm text-primary-foreground/80">
                Drop a message and tell me what you are building. I am always
                open to aligned opportunities and thoughtful conversations.
              </p>
              <a
                className="mt-6 inline-flex rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-sm shadow-primary-foreground/30 transition hover:-translate-y-0.5"
                href="mailto:hello@loganroy.in?subject=Collaboration"
              >
                Start a conversation
              </a>
            </div>
            <div className="rounded-3xl bg-primary-foreground/10 p-6 text-sm">
              <p className="font-semibold">Email</p>
              <p className="mt-2 text-primary-foreground/80">hello@loganroy.in</p>
              <div className="mt-6">
                <p className="font-semibold">Social</p>
                <p className="mt-2 text-primary-foreground/80">
                  LinkedIn · X · YouTube (coming soon)
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold">Newsletter</p>
                <p className="mt-2 text-primary-foreground/80">
                  Monthly notes on business and brand strategy.
                </p>
                <a
                  className="mt-4 inline-flex rounded-full border border-primary-foreground/40 px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:border-primary-foreground"
                  href="mailto:hello@loganroy.in?subject=Newsletter"
                >
                  Join the list
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© 2026 Logan Roy. All rights reserved.</span>
          <span>Built to compound ideas and credibility.</span>
        </div>
      </footer>
    </div>
  );
}
