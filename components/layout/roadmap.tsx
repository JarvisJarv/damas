import { roadmap } from "@/lib/sections";

export function ProductRoadmap() {
  return (
    <section className="surface-panel">
      <header>
        <p className="badge">Roadmap</p>
        <h2 className="section-title mt-2">Evolução planejada</h2>
        <p className="section-subtitle mt-1">
          Um trajeto realista focado em entregar valor rápido e expandir com confiança.
        </p>
      </header>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {roadmap.map((stage) => (
          <article key={stage.title} className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{stage.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              {stage.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
