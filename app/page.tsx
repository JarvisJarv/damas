import { AnnualOverview } from "@/components/calendar/annual-overview";
import { BookingTeaser } from "@/components/booking/booking-teaser";
import { Hero } from "@/components/layout/hero";
import { HighlightMetrics } from "@/components/layout/highlight-metrics";
import { ProductRoadmap } from "@/components/layout/roadmap";
import { TaskFocus } from "@/components/tasks/task-focus";
import { dataModel } from "@/lib/sections";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />

      <section className="surface-panel">
        <header className="flex flex-col gap-2">
          <p className="badge">Arquitetura local-first</p>
          <h2 className="section-title">Frontend moderno, dados sob seu domínio</h2>
          <p className="section-subtitle">
            Stack baseada em Next.js 15, React 18 e Tailwind com persistência IndexedDB/Dexie. Desktop via Tauri e sync opcional com servidor auto-hospedado.
          </p>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">PWA + Desktop</h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-300">
              Base única em React. Instalável como PWA, com build Tauri para SQLite criptografado e acesso nativo a arquivos.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>• App Router, streaming e server actions para APIs locais</li>
              <li>• Tailwind + shadcn/ui + Radix para UI acessível</li>
              <li>• Zustand + React Query para cache e modo offline</li>
            </ul>
          </article>
          <article className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Persistência & Sync</h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-300">
              IndexedDB via Dexie, com CRDT opcional (Automerge/Yjs) e export .ics/.json. Jobs locais garantem notificações mesmo offline.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>• Service Worker para cache de 4 semanas e notificações</li>
              <li>• Backups automáticos para pasta local</li>
              <li>• Sync opcional com Tiny Sync Server (WebSocket)</li>
            </ul>
          </article>
          <article className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Segurança pessoal</h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-300">
              Senha mestra local para bloquear app, criptografia AES-GCM e auditoria em arquivo texto para transparência.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>• Bloqueio automático por inatividade</li>
              <li>• Export/Import com senha obrigatória</li>
              <li>• Logs locais e retenção configurável</li>
            </ul>
          </article>
        </div>
      </section>

      <HighlightMetrics />
      <AnnualOverview />
      <TaskFocus />
      <BookingTeaser />

      <section className="surface-panel">
        <header className="flex flex-col gap-2">
          <p className="badge">Modelo de dados</p>
          <h2 className="section-title">Entidades principais, prontas para escalar</h2>
          <p className="section-subtitle">
            Estrutura pensada para multi-organização, compartilhamento granular e integrações ricas.
          </p>
        </header>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataModel.map((table) => (
            <div key={table} className="rounded-2xl border border-white/10 bg-white/60 p-4 text-sm font-medium uppercase tracking-wide text-zinc-600 shadow-sm backdrop-blur dark:border-white/5 dark:bg-white/10 dark:text-zinc-300">
              {table}
            </div>
          ))}
        </div>
      </section>

      <ProductRoadmap />

      <section className="surface-panel">
        <header className="flex flex-col gap-2">
          <p className="badge">Próximos passos</p>
          <h2 className="section-title">Backlog inicial orientado à execução</h2>
          <p className="section-subtitle">
            Sequência sugerida para entregar valor rápido, com validações semanais e foco em experiência.
          </p>
        </header>
        <ul className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
          {[
            "Tela Hoje com agenda do dia, tarefas foco e temporizador de foco",
            "Calendário Semana com drag-and-drop + criação por seleção",
            "Tarefas com labels, prioridades e notas vinculadas",
            "Exportar/Importar .ics e .json com backups locais",
            "Tema escuro padrão e paleta custom por usuário",
            "Bloqueio por senha com timeout configurável",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-emerald-400 to-violet-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
