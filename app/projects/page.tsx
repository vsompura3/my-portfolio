import { Nav } from "@/components/ui/Nav"

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl space-y-16 px-4 pt-32 pb-24">
        <div className="mb-12 flex items-end justify-between border-b-8 border-black pb-4">
          <h1 className="inline-block -rotate-2 border-4 border-black bg-[var(--color-neo-green)] px-4 py-2 font-display text-5xl tracking-wider text-black uppercase shadow-[4px_4px_0_0_#000] sm:text-6xl md:text-8xl">
            My Projects
          </h1>
        </div>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="neo-card flex flex-col gap-8 p-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl uppercase md:text-4xl">
                SEO-First SSR Platform
              </h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="border-2 border-black bg-[var(--color-neo-pink)] px-3 py-1">
                  Next.js
                </span>
                <span className="border-2 border-black bg-[var(--color-neo-yellow)] px-3 py-1">
                  React Query
                </span>
                <span className="border-2 border-black bg-white px-3 py-1">
                  SSR
                </span>
                <span className="border-2 border-black bg-white px-3 py-1">
                  RBAC
                </span>
              </div>
              <p className="mt-4 border-l-4 border-black pl-4 font-mono text-lg">
                Server-side rendered web application with React Query for
                performant data fetching, pixel-perfect Figma implementation,
                and role-based access control for multi-vendor production
                delivery.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="neo-card flex flex-col gap-8 bg-[var(--color-neo-blue)] p-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl text-white uppercase drop-shadow-[2px_2px_0_#000] md:text-4xl">
                AI-Doc Assistant Chat App
              </h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="border-2 border-black bg-white px-3 py-1">
                  Azure OpenAI
                </span>
                <span className="border-2 border-black bg-[var(--color-neo-pink)] px-3 py-1">
                  WebSockets
                </span>
                <span className="border-2 border-black bg-white px-3 py-1">
                  ShadCN
                </span>
              </div>
              <p className="mt-4 border-y-4 border-r-4 border-l-4 border-black bg-white p-4 pl-4 font-mono text-lg">
                Full-stack application with an intelligent document chat
                interface powered by Azure OpenAI. Built real-time streaming
                responses via WebSockets and designed clean REST API
                architecture.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="neo-card flex flex-col gap-8 p-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl uppercase md:text-4xl">
                NiFi Automation UI
              </h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="border-2 border-black bg-[var(--color-neo-yellow)] px-3 py-1">
                  Redux-Saga
                </span>
                <span className="border-2 border-black bg-white px-3 py-1">
                  Material UI
                </span>
                <span className="border-2 border-black bg-white px-3 py-1">
                  Apache NiFi
                </span>
              </div>
              <p className="mt-4 border-l-4 border-black pl-4 font-mono text-lg">
                Complex dataflow automation interface with Redux-Saga state
                management, custom UI components, and seamless backend API
                integration for enterprise-grade pipeline management.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="neo-card flex flex-col gap-8 bg-[var(--color-neo-pink)] p-8 md:flex-row">
            <div className="flex-1 space-y-4">
              <h2 className="font-display text-3xl text-white uppercase drop-shadow-[2px_2px_0_#000] md:text-4xl">
                Data Access Management
              </h2>
              <div className="flex flex-wrap gap-2 font-mono text-sm font-bold">
                <span className="border-2 border-black bg-white px-3 py-1">
                  ReactJS
                </span>
                <span className="border-2 border-black bg-[var(--color-neo-blue)] px-3 py-1">
                  React Native
                </span>
                <span className="border-2 border-black bg-[var(--color-neo-yellow)] px-3 py-1">
                  Data Catalog
                </span>
              </div>
              <p className="mt-4 border-y-4 border-r-4 border-l-4 border-black bg-white p-4 pl-4 font-mono text-lg">
                Key UI components for a Data Catalog application with scalable
                data access management. Also delivered a React Native mobile POC
                and collaborated closely with the client's dev team.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
