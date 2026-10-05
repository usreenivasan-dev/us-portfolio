const skills = [
  "Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3 / SASS",
  "RxJS", "NgRx / Redux", "Node.js", "REST APIs", "Java / Spring Boot", "MySQL",
  "MongoDB", "Azure", "AWS", "Docker", "Jenkins", "Git", "Agile / Scrum"
];

const projects = [
  {
    title: "Enterprise Front-End Applications",
    text: "Scalable enterprise interfaces with reusable components, API integration, responsive layouts and maintainable architecture.",
    tech: "Angular · TypeScript · RxJS · REST APIs"
  },
  {
    title: "Modern React Applications",
    text: "Component-driven React applications using hooks, state management, modern JavaScript and responsive UI patterns.",
    tech: "React · JavaScript · Redux · CSS"
  },
  {
    title: "Full-Stack Microservice Demo",
    text: "A full-stack application connecting a modern UI with REST services and a relational database.",
    tech: "React / Angular · Node.js · Spring Boot · MySQL"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080b10] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b10]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-black tracking-tight">
            US<span className="text-blue-500">.</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium text-slate-400 md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#experience">Experience</a>
          </div>
          <a href="#contact" className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500">
            Let's Connect
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-grid relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-6 py-28 md:grid-cols-[1.35fr_.65fr] md:py-36">
            <div>
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-blue-400">
                <span className="h-px w-10 bg-blue-500" />
                SENIOR FRONT-END / UI DEVELOPER
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl">
                Building digital
                <br />
                experiences that
                <br />
                <span className="text-blue-500">scale.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                I'm <strong className="text-slate-200">Ullas Sreenivasan</strong>, a front-end focused
                software developer with 10+ years of experience building modern, scalable and
                user-focused web applications.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500">
                  View My Work
                </a>
                <a href="#contact" className="rounded-lg border border-white/15 px-6 py-3 font-bold text-slate-200 transition hover:border-blue-500/50 hover:bg-white/5">
                  Contact Me
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                <span>Angular</span><span>React</span><span>TypeScript</span>
                <span>JavaScript</span><span>Node.js</span>
              </div>
            </div>

            <div className="profile-card rounded-2xl border border-white/10 bg-white/[.035] p-7">
              <div className="mb-8 text-xs font-bold tracking-[.2em] text-blue-400">PROFILE</div>
              <div className="space-y-7">
                <div>
                  <div className="text-4xl font-black">10+</div>
                  <div className="mt-1 text-sm text-slate-500">Years of front-end experience</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-xl font-bold">UI + Full Stack</div>
                  <div className="mt-1 text-sm text-slate-500">From browser to API and database</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-xl font-bold">Enterprise Focus</div>
                  <div className="mt-1 text-sm text-slate-500">Scalable, maintainable applications</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-dark">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="section-label">01 / ABOUT</div>
            <h2 className="section-title">Engineering with a UI-first mindset.</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <p className="body-copy">
                I specialize in JavaScript and TypeScript ecosystems, with strong experience in
                Angular, React and modern front-end architecture. I focus on reusable components,
                clean code, responsive design, performance and accessibility.
              </p>
              <p className="body-copy">
                My broader application experience includes Node.js, Java/Spring Boot, REST APIs,
                databases, cloud platforms and DevOps tooling—allowing me to understand and
                troubleshoot applications end to end.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-dark border-t border-white/5 bg-[#0b0f15]">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="section-label">02 / TECHNOLOGY</div>
            <h2 className="section-title">Tools I work with.</h2>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {skills.map(skill => (
                <div key={skill} className="skill-card">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-dark">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="section-label">03 / SELECTED WORK</div>
            <h2 className="section-title">Projects & technical work.</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {projects.map((project, i) => (
                <article key={project.title} className="project-card">
                  <div className="text-sm font-bold text-blue-500">0{i + 1}</div>
                  <h3 className="mt-8 text-xl font-bold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.text}</p>
                  <div className="mt-8 border-t border-white/10 pt-5 text-xs font-semibold text-slate-500">
                    {project.tech}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-dark border-t border-white/5 bg-[#0b0f15]">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="section-label">04 / EXPERIENCE</div>
            <h2 className="section-title">A decade of building for the web.</h2>
            <div className="mt-9 border-l border-blue-500/40 pl-7">
              <div className="text-sm font-bold text-blue-400">10+ YEARS</div>
              <h3 className="mt-3 text-2xl font-bold">Front-End / UI Development</h3>
              <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                Enterprise application development, UI architecture, component development,
                API integration, responsive design, debugging, code quality and Agile delivery.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-dark">
          <div className="mx-auto max-w-[1180px] px-6">
            <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-[#0b0f15] p-9 md:p-14">
              <div className="section-label">05 / CONTACT</div>
              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
                Let's build something meaningful.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Open to senior front-end, UI and full-stack opportunities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:your.email@example.com" className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500">Email Me</a>
                <a href="https://www.linkedin.com/" target="_blank" className="rounded-lg border border-white/15 px-6 py-3 font-bold text-slate-200 hover:bg-white/5">LinkedIn</a>
                <a href="https://github.com/" target="_blank" className="rounded-lg border border-white/15 px-6 py-3 font-bold text-slate-200 hover:bg-white/5">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#080b10] py-8 text-center text-sm text-slate-600">
        © 2026 Ullas Sreenivasan · Senior Front-End / UI Developer
      </footer>
    </div>
  );
}