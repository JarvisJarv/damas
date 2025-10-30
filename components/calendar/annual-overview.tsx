const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const weekdays = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"];

export function AnnualOverview() {
  return (
    <section className="surface-panel">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="badge">Visão geral</p>
          <h2 className="section-title mt-2">Visão anual com heatmap inteligente</h2>
          <p className="section-subtitle mt-1">
            Navegue com teclado, filtre por calendários ou labels e abra o peek card para agir sem sair do contexto.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="badge-pill">Heatmap</span>
          <span className="badge-pill">Peek card</span>
          <span className="badge-pill">Filtros rápidos</span>
        </div>
      </header>
      <div className="space-y-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/30 p-4 text-sm text-zinc-600 shadow-inner shadow-white/40 backdrop-blur dark:border-white/5 dark:bg-white/5 dark:text-zinc-300">
          <span className="font-semibold text-zinc-900 dark:text-white">2025</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs uppercase text-zinc-600 shadow-sm dark:bg-white/10 dark:text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-violet-500" /> Equipe
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs uppercase text-zinc-600 shadow-sm dark:bg-white/10 dark:text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Pessoal
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs uppercase text-zinc-600 shadow-sm dark:bg-white/10 dark:text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-cyan-500" /> Hábitos
            </span>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {months.map((month) => (
            <div key={month} className="rounded-2xl border border-white/10 bg-white/40 p-4 shadow-lg backdrop-blur dark:border-white/5 dark:bg-white/10">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{month}</span>
                <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Heatmap</span>
              </div>
              <div className="mb-2 grid grid-cols-7 gap-1 text-[10px] uppercase text-zinc-500 dark:text-zinc-500">
                {weekdays.map((day) => (
                  <span key={day} className="text-center">
                    {day}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg bg-gradient-to-br from-violet-500/10 via-emerald-400/10 to-cyan-400/10 shadow-inner shadow-black/5 ring-1 ring-white/40 transition hover:scale-[1.02] hover:shadow-lg hover:ring-white/90 dark:from-violet-500/20 dark:via-emerald-400/20 dark:to-cyan-400/20"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
