"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        }),
      { threshold: 0.12 }
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav>
        <div className="nav-logo">
          <span>{"{"}</span> vs <span>{"}"}</span>
        </div>
        {/* <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul> */}
        <a href="mailto:vsompura3@gmail.com" className="nav-cta">
          Get in touch
        </a>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-glow"></div>
        <div className="hero-badge">
          <div className="badge-dot"></div>
          Open to new opportunities
        </div>
        <h1>
          <div className="line1">The Frontend</div>
          <div className="line2">Developer</div>
        </h1>
        <p className="hero-sub">
          Building fast, accessible, pixel-perfect UIs. React · Next.js ·
          TypeScript · Node.js. Currently growing into full-stack at Ksolves
          India.
        </p>
        <div className="hero-actions">
          <a href="#experience" className="btn-primary">
            View Experience
          </a>
          <a
            href="https://github.com/vsompura3"
            target="_blank"
            className="btn-ghost"
          >
            GitHub ↗
          </a>
        </div>

        <div className="terminal-wrap">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="dot dot-r"></div>
              <div className="dot dot-y"></div>
              <div className="dot dot-g"></div>
            </div>
            <div className="terminal-body">
              <div>
                <span className="t-prompt">$</span>{" "}
                <span className="t-cmd">cat vaibhav.json</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="t-comment">{" {"}</span>
              </div>
              <div>
                &nbsp; <span className="t-key">"role"</span>:{" "}
                <span className="t-val">"Frontend Developer"</span>,
              </div>
              <div>
                &nbsp; <span className="t-key">"company"</span>:{" "}
                <span className="t-val">"Ksolves India Limited"</span>,
              </div>
              <div>
                &nbsp; <span className="t-key">"stack"</span>: [
                <span className="t-val2">"React"</span>,{" "}
                <span className="t-val2">"Next.js"</span>,{" "}
                <span className="t-val2">"TypeScript"</span>,{" "}
                <span className="t-val2">"Node.js"</span>],
              </div>
              <div>
                &nbsp; <span className="t-key">"exp"</span>:{" "}
                <span className="t-val">"2+ years"</span>,
              </div>
              <div>
                &nbsp; <span className="t-key">"education"</span>:{" "}
                <span className="t-val">"MCA — CGPA 8.81"</span>,
              </div>
              <div>
                &nbsp; <span className="t-key">"status"</span>:{" "}
                <span className="t-val2">"available"</span>
              </div>
              <div>
                <span className="t-comment">{"}"}</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="t-arrow">→</span>{" "}
                <span className="t-comment">
                  Ready to build something great
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-grid reveal">
            <div className="about-text">
              <div className="section-label">// about me</div>
              <h2 className="section-title">
                Crafting UIs that
                <br />
                actually perform
              </h2>
              <p>
                Frontend Developer with a strong focus on creating{" "}
                <strong>interactive, user-friendly, and scalable</strong> web
                applications. Skilled in building high-performance UIs using
                React and Next.js with responsive, accessible designs across
                devices.
              </p>
              <p>
                Experienced in{" "}
                <strong>complex state management, API integrations,</strong> and
                delivering smooth user experiences. Currently expanding into
                backend to become a well-rounded Full-Stack Developer.
              </p>
              <p>
                Based in <strong>Dungarpur, Rajasthan</strong>. Working at{" "}
                <strong>Ksolves India Limited</strong> since July 2023.
              </p>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-num green">2+</div>
                <div className="stat-label">years experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-num blue">3</div>
                <div className="stat-label">projects shipped</div>
              </div>
              <div className="stat-card">
                <div className="stat-num orange">8.81</div>
                <div className="stat-label">MCA CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-num green">10+</div>
                <div className="stat-label">tech skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// tech stack</div>
            <h2 className="section-title">What I work with</h2>
            <p className="section-desc">
              A curated toolkit built from real production work across frontend,
              backend, and tooling.
            </p>
          </div>
          <div className="skills-grid reveal">
            <div className="skill-card">
              <span className="skill-card-icon">⚛️</span>
              <div className="skill-card-title">Frontend Core</div>
              <div className="skill-tags">
                <span className="tag accent">React</span>
                <span className="tag accent">Next.js</span>
                <span className="tag accent">TypeScript</span>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-card-icon">🎨</span>
              <div className="skill-card-title">Styling & UI</div>
              <div className="skill-tags">
                <span className="tag green">TailwindCSS</span>
                <span className="tag green">SASS</span>
                <span className="tag green">ShadCN</span>
                <span className="tag">Material UI</span>
                <span className="tag">Styled Components</span>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-card-icon">🔄</span>
              <div className="skill-card-title">State & Data</div>
              <div className="skill-tags">
                <span className="tag accent">React Query</span>
                <span className="tag accent">Redux</span>
                <span className="tag accent">Redux-Saga</span>
                <span className="tag">WebSockets</span>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-card-icon">🖥️</span>
              <div className="skill-card-title">Backend & APIs</div>
              <div className="skill-tags">
                <span className="tag green">Node.js</span>
                <span className="tag green">Express</span>
                <span className="tag">REST APIs</span>
                <span className="tag">Azure OpenAI</span>
                <span className="tag">Postman</span>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-card-icon">🗄️</span>
              <div className="skill-card-title">Database</div>
              <div className="skill-tags">
                <span className="tag accent">PostgreSQL</span>
                <span className="tag accent">MongoDB</span>
              </div>
            </div>
            <div className="skill-card">
              <span className="skill-card-icon">🛠️</span>
              <div className="skill-card-title">Tools & Workflow</div>
              <div className="skill-tags">
                <span className="tag green">Git</span>
                <span className="tag green">RBAC</span>
                <span className="tag">React Native</span>
                <span className="tag">CI/CD</span>
                <span className="tag">SSR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// work history</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-desc">
              Building real products at Ksolves India Limited since July 2023.
            </p>
          </div>
          <div className="timeline reveal">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-role">
                  Frontend Lead — Client Project
                </div>
                <div className="timeline-period">Apr 2025 — Present</div>
              </div>
              <div className="timeline-company">Ksolves India Limited</div>
              <ul className="timeline-list">
                <li>
                  Drove <strong>architectural decisions</strong> as primary
                  point of contact for complex UI logic.
                </li>
                <li>
                  Built a <strong>SEO-friendly, server-side rendered</strong>{" "}
                  app using Next.js + React Query.
                </li>
                <li>
                  Delivered <strong>responsive, pixel-perfect designs</strong>{" "}
                  with cross-browser compatibility.
                </li>
                <li>
                  Implemented <strong>RBAC</strong>, collaborating with multiple
                  vendors and DevOps teams for production/UAT releases.
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-role">
                  Full-Stack Developer — AI-Doc Assistant
                </div>
                <div className="timeline-period">Nov 2024 — Apr 2025</div>
              </div>
              <div className="timeline-company">Ksolves India Limited</div>
              <ul className="timeline-list">
                <li>
                  Led complete frontend with{" "}
                  <strong>React, TailwindCSS, React Query, ShadCN</strong>.
                </li>
                <li>
                  Designed REST API endpoints + integrated{" "}
                  <strong>Azure OpenAI</strong> for an intelligent chat
                  interface.
                </li>
                <li>
                  Implemented <strong>real-time WebSocket</strong> updates for
                  application responsiveness.
                </li>
                <li>
                  Mentored frontend developers and drove architectural decisions
                  in code reviews.
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-header">
                <div className="timeline-role">
                  Frontend Developer — NiFi Automation &amp; Data Catalog
                </div>
                <div className="timeline-period">Sep 2023 — Oct 2024</div>
              </div>
              <div className="timeline-company">Ksolves India Limited</div>
              <ul className="timeline-list">
                <li>
                  Built UI for a <strong>NiFi automation</strong> application
                  with custom components and backend API endpoints.
                </li>
                <li>
                  Implemented <strong>Redux-Saga</strong> for complex state
                  management.
                </li>
                <li>
                  Worked on a Data Catalog app — built key components for{" "}
                  <strong>Data Access Management</strong>.
                </li>
                <li>
                  Created a <strong>mobile application POC</strong> using React
                  Native and supported QA test case scenarios.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// notable work</div>
            <h2 className="section-title">What I've built</h2>
            <p className="section-desc">
              Highlights from production projects and technical explorations.
            </p>
          </div>
          <div className="projects-grid reveal">
            <div className="project-card featured">
              <div className="project-tag-row">
                <span className="tag accent">Next.js</span>
                <span className="tag accent">React Query</span>
                <span className="tag">SSR</span>
                <span className="tag">RBAC</span>
              </div>
              <div className="project-title">SEO-First SSR Platform</div>
              <p className="project-desc">
                Server-side rendered web application with React Query for
                performant data fetching, pixel-perfect Figma implementation,
                and role-based access control for multi-vendor production
                delivery.
              </p>
            </div>

            <div className="project-card">
              <div className="project-tag-row">
                <span className="tag green">Azure OpenAI</span>
                <span className="tag accent">WebSockets</span>
                <span className="tag">ShadCN</span>
              </div>
              <div className="project-title">AI-Doc Assistant Chat App</div>
              <p className="project-desc">
                Full-stack application with an intelligent document chat
                interface powered by Azure OpenAI. Built real-time streaming
                responses via WebSockets and designed clean REST API
                architecture.
              </p>
            </div>

            <div className="project-card">
              <div className="project-tag-row">
                <span className="tag accent">Redux-Saga</span>
                <span className="tag">Material UI</span>
                <span className="tag">Apache NiFi</span>
              </div>
              <div className="project-title">NiFi Automation UI</div>
              <p className="project-desc">
                Complex dataflow automation interface with Redux-Saga state
                management, custom UI components, and seamless backend API
                integration for enterprise-grade pipeline management.
              </p>
            </div>

            <div className="project-card">
              <div className="project-tag-row">
                <span className="tag green">ReactJS</span>
                <span className="tag green">React Native</span>
                <span className="tag">Data Catalog</span>
              </div>
              <div className="project-title">Data Access Management</div>
              <p className="project-desc">
                Key UI components for a Data Catalog application with scalable
                data access management. Also delivered a React Native mobile POC
                and collaborated closely with the client's dev team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// education</div>
            <h2 className="section-title">Academic Background</h2>
            <p className="section-desc">
              Strong computer science foundation across postgraduate and
              undergraduate levels.
            </p>
          </div>
          <div className="edu-grid reveal">
            <div className="edu-card">
              <div className="edu-degree">Master of Computer Application</div>
              <div className="edu-school">
                Lovely Professional University, Phagwara
              </div>
              <div className="edu-meta">
                <span className="edu-pill cgpa">CGPA 8.81</span>
                <span className="edu-pill year">Aug 2022 – Jun 2024</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-degree">Bachelor of Computer Application</div>
              <div className="edu-school">Sardar Patel University, Gujarat</div>
              <div className="edu-meta">
                <span className="edu-pill cgpa">CGPA 7.72</span>
                <span className="edu-pill year">Aug 2017 – Sep 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-inner reveal">
            <div className="section-label">// let's connect</div>
            <h2 className="section-title">Get in touch</h2>
            <p className="section-desc">
              Open to new opportunities, freelance projects, or just a good
              conversation about frontend architecture.
            </p>
            <div className="contact-links">
              <a href="mailto:vsompura3@gmail.com" className="contact-link">
                ✉ vsompura3@gmail.com
              </a>
              <a
                href="https://github.com/vsompura3"
                target="_blank"
                className="contact-link"
              >
                ⌥ github.com/vsompura3
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-sompura"
                target="_blank"
                className="contact-link"
              >
                ⟁ linkedin.com/in/vaibhav-sompura
              </a>
              <a href="tel:+919610030982" className="contact-link">
                ☏ +91 9610030982
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Built with ♥ by <span>Vaibhav Sompura</span> · 2025 · Dungarpur,
          Rajasthan
        </p>
      </footer>
    </>
  )
}
