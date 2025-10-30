import { highlightStats } from "@/lib/sections";

export function HighlightMetrics() {
  return (
    <section className="surface-panel">
      <header className="flex flex-col gap-2">
        <p className="badge">Métricas alvo</p>
        <h2 className="section-title">Qualidade desde o primeiro release</h2>
        <p className="section-subtitle">
          Metas de experiência que guiam as decisões de produto e engenharia.
        </p>
      </header>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlightStats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/40 p-6 text-center shadow-lg backdrop-blur dark:border-white/5 dark:bg-white/10">
            <p className="text-3xl font-semibold text-zinc-900 dark:text-white">{item.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {item.label}
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
