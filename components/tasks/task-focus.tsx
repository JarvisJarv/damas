const focusTasks = [
  {
    title: "Revisar sprint com o squad",
    labels: ["#produto", "#reunião"],
    status: "Hoje 10h",
  },
  {
    title: "Preparar pauta da consultoria",
    labels: ["#freela", "P1"],
    status: "Due amanhã",
  },
  {
    title: "Estudo semanal de IA",
    labels: ["#aprendizado", "hábito"],
    status: "Streak 4 semanas",
  },
];

export function TaskFocus() {
  return (
    <section className="surface-panel">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="badge">Tarefas & hábitos</p>
          <h2 className="section-title mt-2">Painel Hoje com foco total</h2>
          <p className="section-subtitle mt-1">
            Combine tarefas com agenda, checklists e notas vinculadas para garantir execução sem perder contexto.
          </p>
        </div>
        <button className="rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition hover:scale-[1.02] hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-white" type="button">
          Nova tarefa
        </button>
      </header>
      <div className="grid-auto-fit">
        {focusTasks.map((task) => (
          <article key={task.title} className="surface-muted">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{task.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{task.status}</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-400/20 dark:border-emerald-400/30 dark:text-emerald-300"
              >
                Concluir
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {task.labels.map((label) => (
                <span key={label} className="badge-pill">
                  {label}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
