import { Nav } from "@/components/ui/Nav"

export default function Page() {
  return (
    <>
      <Nav />
      <main className="pt-24 px-4 max-w-5xl mx-auto space-y-24 pb-24">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center mt-12 space-y-8">
          <div className="bg-[var(--color-neo-pink)] text-black border-4 border-black px-6 py-2 font-mono font-bold uppercase rotate-[-2deg] shadow-[4px_4px_0px_0px_#000]">
            Full Stack Engineer • 3 YOE
          </div>
          
          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl uppercase tracking-wider leading-none text-black drop-shadow-[4px_4px_0_#38bdf8]">
            Vaibhav <br/> Sompura
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl font-mono border-l-8 border-[var(--color-neo-green)] pl-6 text-left bg-white border-y-4 border-r-4 border-black p-4 shadow-[8px_8px_0_0_#000]">
            Building fast, accessible UIs and robust backends. React, Next.js, FastAPI, Node.js.
            Currently delivering production-ready software at Ksolves India Limited.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-8 w-full px-4 sm:px-0">
            <a href="#experience" className="bg-[var(--color-neo-yellow)] border-4 border-black px-6 py-3 md:px-8 md:py-4 font-mono font-bold text-lg md:text-xl uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all text-center">
              View Experience
            </a>
            <a href="/resume.pdf" download className="bg-[var(--color-neo-pink)] border-4 border-black px-6 py-3 md:px-8 md:py-4 font-mono font-bold text-lg md:text-xl uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all text-center">
              Download CV
            </a>
            <a href="https://github.com/vsompura3" target="_blank" className="bg-white border-4 border-black px-6 py-3 md:px-8 md:py-4 font-mono font-bold text-lg md:text-xl uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all text-center">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-sompura" target="_blank" className="bg-[var(--color-neo-blue)] border-4 border-black px-6 py-3 md:px-8 md:py-4 font-mono font-bold text-lg md:text-xl uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all text-center">
              LinkedIn ↗
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-8">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-black bg-[var(--color-neo-blue)] inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] -rotate-1">
            Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="neo-card p-6 flex flex-col gap-4">
              <h3 className="font-display text-2xl uppercase border-b-4 border-black pb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-[var(--color-neo-yellow)] border-2 border-black px-3 py-1">React.js</span>
                <span className="bg-[var(--color-neo-pink)] border-2 border-black px-3 py-1">Next.js</span>
                <span className="bg-white border-2 border-black px-3 py-1">TypeScript</span>
                <span className="bg-white border-2 border-black px-3 py-1">Tailwind CSS</span>
                <span className="bg-white border-2 border-black px-3 py-1">React Query</span>
              </div>
            </div>

            <div className="neo-card p-6 flex flex-col gap-4 bg-[var(--color-neo-green)]">
              <h3 className="font-display text-2xl uppercase border-b-4 border-black pb-2">Backend</h3>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-white border-2 border-black px-3 py-1">Node.js</span>
                <span className="bg-[var(--color-neo-blue)] border-2 border-black px-3 py-1">FastAPI</span>
                <span className="bg-white border-2 border-black px-3 py-1">Express</span>
                <span className="bg-white border-2 border-black px-3 py-1">Python</span>
              </div>
            </div>

            <div className="neo-card p-6 flex flex-col gap-4">
              <h3 className="font-display text-2xl uppercase border-b-4 border-black pb-2">Data & Tools</h3>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-[var(--color-neo-pink)] border-2 border-black px-3 py-1">PostgreSQL</span>
                <span className="bg-[var(--color-neo-yellow)] border-2 border-black px-3 py-1">MongoDB</span>
                <span className="bg-white border-2 border-black px-3 py-1">Azure OpenAI</span>
                <span className="bg-white border-2 border-black px-3 py-1">Git</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-8">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-black bg-[var(--color-neo-yellow)] inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] rotate-1">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="neo-card p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b-4 border-black pb-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase">Frontend Lead</h3>
                  <p className="font-mono font-bold text-[var(--color-neo-pink)] text-xl drop-shadow-[1px_1px_0_#000]">Ksolves India Limited</p>
                </div>
                <div className="bg-black text-white font-mono px-4 py-2 border-2 border-black">
                  Apr 2025 – Present
                </div>
              </div>
              <ul className="list-square list-inside space-y-2 font-mono text-lg ml-4">
                <li>Directed frontend architecture for a large-scale enterprise Next.js app.</li>
                <li>Optimized SEO & Performance via SSR and React Query.</li>
                <li>Architected RBAC workflows and managed complex state.</li>
              </ul>
            </div>

            <div className="neo-card p-6 md:p-8 space-y-4 bg-[var(--color-neo-pink)]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b-4 border-black pb-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase">Full Stack Engineer (AI-Doc)</h3>
                  <p className="font-mono font-bold text-white text-xl drop-shadow-[1px_1px_0_#000]">Ksolves India Limited</p>
                </div>
                <div className="bg-black text-white font-mono px-4 py-2 border-2 border-black">
                  Nov 2024 – Apr 2025
                </div>
              </div>
              <ul className="list-square list-inside space-y-2 font-mono text-lg ml-4">
                <li>Spearheaded UI with React, Tailwind, React Query & ShadCN.</li>
                <li>Integrated Azure OpenAI for intelligent document chat.</li>
                <li>Enabled real-time WebSockets communication.</li>
              </ul>
            </div>

            <div className="neo-card p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b-4 border-black pb-4">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase">Frontend Engineer</h3>
                  <p className="font-mono font-bold text-[var(--color-neo-blue)] text-xl drop-shadow-[1px_1px_0_#000]">Ksolves India Limited</p>
                </div>
                <div className="bg-black text-white font-mono px-4 py-2 border-2 border-black">
                  Sep 2023 – Oct 2024
                </div>
              </div>
              <ul className="list-square list-inside space-y-2 font-mono text-lg ml-4">
                <li>Engineered workflow management UIs for NiFi Automation.</li>
                <li>Managed complex app state using Redux Saga.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
      
      <footer className="border-t-4 border-black bg-[var(--color-neo-yellow)] py-8 text-center font-mono font-bold uppercase">
        <p>Designed & Built by Vaibhav Sompura © 2025</p>
      </footer>
    </>
  )
}
