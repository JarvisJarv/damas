export function BookingTeaser() {
  return (
    <section className="surface-panel">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="badge">Agendamento externo</p>
          <h2 className="section-title mt-2">Booking clean com confirmação instantânea</h2>
          <p className="section-subtitle mt-1">
            Tipos de evento reutilizáveis, buffers, perguntas prévias e confirmação automática por e-mail.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-600 shadow-sm transition hover:scale-[1.02] hover:bg-cyan-400/20 dark:border-cyan-400/40 dark:text-cyan-200"
        >
          Ver fluxo completo →
        </a>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-white/40 to-violet-500/20 p-8 shadow-xl backdrop-blur dark:border-white/5 dark:from-cyan-400/10 dark:via-white/5 dark:to-violet-500/10">
          <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-300">
            <span className="font-semibold uppercase tracking-wide">Link público</span>
            <span>tz detectado · buffers +10/-10</span>
          </div>
          <div className="mt-6 space-y-4">
            {["Consulta 30min", "Mentoria 60min", "Daily Async"].map((slot) => (
              <div key={slot} className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-5 py-4 shadow-sm dark:border-white/10 dark:bg-white/10">
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50">{slot}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Calendário público · limite diário 5</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-zinc-900/30 transition hover:scale-[1.02] dark:bg-white dark:text-zinc-900"
                >
                  Reservar
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Automação</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Dispare notificações no Slack, atualize CRM ou gere notas assim que um horário for reservado.
            </p>
          </div>
          <div className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Lembretes inteligentes</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Confirmar, reagendar e bloquear no-shows automaticamente com e-mail + push local.
            </p>
          </div>
          <div className="surface-muted">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Página white-label</h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Personalize domínios, brand colors e mensagens de confirmação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
