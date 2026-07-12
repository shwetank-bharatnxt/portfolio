import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/35 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Crafted with intent.
        </p>
        <p className="font-mono text-xs">
          Next.js · Tailwind · Framer Motion · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
