import Link from "next/link"

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-neo-yellow)] border-b-4 border-black p-3 md:p-4 px-4 md:px-8 flex items-center justify-between shadow-[0_4px_0_0_#000]">
      <Link href="/" className="font-display text-xl md:text-2xl tracking-wider uppercase text-black">
        VSompura
      </Link>
      <div className="flex gap-3 md:gap-6 font-mono text-sm md:text-base font-bold text-black uppercase items-center">
        <Link href="/" className="hidden sm:block hover:-translate-y-1 transition-transform">
          Home
        </Link>
        <Link href="/projects" className="hover:-translate-y-1 transition-transform">
          Projects
        </Link>
        <a href="mailto:vsompura3@gmail.com" className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 hover:-translate-y-1 transition-transform border-2 border-black">
          Hit me up
        </a>
      </div>
    </nav>
  )
}
