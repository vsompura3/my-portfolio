import { Nav } from "@/components/ui/Nav"

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 px-4 max-w-5xl mx-auto space-y-16 pb-24">
        <div className="flex justify-between items-end border-b-8 border-black pb-4 mb-12">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-wider text-black bg-[var(--color-neo-green)] inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] -rotate-2">
            My Projects
          </h1>
        </div>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="neo-card p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl uppercase">SEO-First SSR Platform</h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-[var(--color-neo-pink)] border-2 border-black px-3 py-1">Next.js</span>
                <span className="bg-[var(--color-neo-yellow)] border-2 border-black px-3 py-1">React Query</span>
                <span className="bg-white border-2 border-black px-3 py-1">SSR</span>
                <span className="bg-white border-2 border-black px-3 py-1">RBAC</span>
              </div>
              <p className="font-mono text-lg mt-4 border-l-4 border-black pl-4">
                Server-side rendered web application with React Query for performant data fetching, pixel-perfect Figma implementation, and role-based access control for multi-vendor production delivery.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="neo-card p-8 flex flex-col md:flex-row gap-8 bg-[var(--color-neo-blue)]">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl uppercase text-white drop-shadow-[2px_2px_0_#000]">AI-Doc Assistant Chat App</h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-white border-2 border-black px-3 py-1">Azure OpenAI</span>
                <span className="bg-[var(--color-neo-pink)] border-2 border-black px-3 py-1">WebSockets</span>
                <span className="bg-white border-2 border-black px-3 py-1">ShadCN</span>
              </div>
              <p className="font-mono text-lg mt-4 border-l-4 border-black pl-4 bg-white p-4 border-y-4 border-r-4">
                Full-stack application with an intelligent document chat interface powered by Azure OpenAI. Built real-time streaming responses via WebSockets and designed clean REST API architecture.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="neo-card p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl uppercase">NiFi Automation UI</h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-[var(--color-neo-yellow)] border-2 border-black px-3 py-1">Redux-Saga</span>
                <span className="bg-white border-2 border-black px-3 py-1">Material UI</span>
                <span className="bg-white border-2 border-black px-3 py-1">Apache NiFi</span>
              </div>
              <p className="font-mono text-lg mt-4 border-l-4 border-black pl-4">
                Complex dataflow automation interface with Redux-Saga state management, custom UI components, and seamless backend API integration for enterprise-grade pipeline management.
              </p>
            </div>
          </div>
          
           {/* Project 4 */}
          <div className="neo-card p-8 flex flex-col md:flex-row gap-8 bg-[var(--color-neo-pink)]">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl uppercase text-white drop-shadow-[2px_2px_0_#000]">Data Access Management</h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="bg-white border-2 border-black px-3 py-1">ReactJS</span>
                <span className="bg-[var(--color-neo-blue)] border-2 border-black px-3 py-1">React Native</span>
                <span className="bg-[var(--color-neo-yellow)] border-2 border-black px-3 py-1">Data Catalog</span>
              </div>
              <p className="font-mono text-lg mt-4 border-l-4 border-black pl-4 bg-white p-4 border-y-4 border-r-4">
                Key UI components for a Data Catalog application with scalable data access management. Also delivered a React Native mobile POC and collaborated closely with the client's dev team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
