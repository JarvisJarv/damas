import { quickActions } from "@/lib/sections";
import { TopNav } from "./top-nav";

export function Hero() {
  return (
    <section className="relative flex flex-col gap-12">
      <TopNav />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-400/10 px-4 py-1 text-sm font-medium text-violet-600 shadow-sm dark:border-violet-400/30 dark:text-violet-200">
              Local-first · Offline por padrão
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              Agenda e tarefas sofisticadas, 100% sob seu controle
            </h1>
            <p className="text-pretty text-lg text-zinc-600 dark:text-zinc-300">
              Tempo combina calendário interativo, tarefas, notas e booking em um único app local-first. Pensado para fluxo rápido, com recorrências avançadas, permissões e integrações sob demanda.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/30 transition hover:scale-[1.02] dark:bg-white dark:text-zinc-900" type="button">
              Abrir protótipo
            </button>
            <button className="rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:scale-[1.02] hover:shadow-lg dark:border-white/10 dark:text-white" type="button">
              Ver arquitetura
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickActions.map((action) => (
              <div key={action.title} className="rounded-2xl border border-white/10 bg-white/60 p-5 shadow-md backdrop-blur transition hover:shadow-xl dark:border-white/5 dark:bg-white/10">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-violet-500 dark:text-violet-300">
                  <span>{action.icon}</span>
                  {action.title}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="gradient-surface rounded-[2.5rem] border border-white/10 p-8 text-white shadow-2xl shadow-violet-500/40">
            <div className="flex items-center justify-between text-sm uppercase tracking-wide text-white/70">
              <span>Semana 42</span>
              <span>Sincronizado • Offline</span>
            </div>
            <div className="mt-6 space-y-3 text-left text-sm">
              {[
                {
                  time: "09:30",
                  title: "Daily Squad Orion",
                  detail: "Sala Sync • 15min",
                },
                {
                  time: "11:00",
                  title: "1:1 Ana",
                  detail: "Sugestão automática 11h",
                },
                {
                  time: "14:00",
                  title: "Deep Work – Roadmap",
                  detail: "Focus mode ativado",
                },
                {
                  time: "18:00",
                  title: "Revisão Inbox",
                  detail: "Tarefa recorrente P2",
                },
              ].map((event) => (
                <div key={event.title} className="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-inner">
                  <p className="text-xs uppercase tracking-widest text-white/60">{event.time}</p>
                  <p className="mt-1 text-base font-semibold">{event.title}</p>
                  <p className="text-xs text-white/60">{event.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm shadow-inner">
              <p className="text-xs uppercase tracking-widest text-white/60">Focus hoje</p>
              <p className="mt-1 text-base font-semibold text-white">Preparar pauta consultoria</p>
              <div className="mt-3 flex gap-2 text-xs text-white/70">
                <span className="rounded-full border border-white/30 px-3 py-1">#marketing</span>
                <span className="rounded-full border border-white/30 px-3 py-1">Checklist 3/5</span>
              </div>
            </div>
          </div>
          <div className="absolute -left-8 -top-8 -z-10 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" aria-hidden />
        </div>
      </div>
    </section>
  );
}
