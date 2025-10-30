export const quickActions = [
  {
    title: "Criar evento em 5s",
    description:
      "Clique em qualquer horário, digite em linguagem natural e confirme com Enter. Recorrências e convidados sem fricção.",
    icon: "⚡",
  },
  {
    title: "Visão Hoje",
    description:
      "Agenda, tarefas foco e notas rápidas em uma única tela para começar o dia alinhado.",
    icon: "📅",
  },
  {
    title: "Modo visão geral",
    description:
      "Planeje o ano inteiro com heatmap, filtros por labels e peek card acessível.",
    icon: "🗓️",
  },
  {
    title: "Booking sem dor",
    description:
      "Compartilhe sua disponibilidade com buffers, perguntas e confirmação automática.",
    icon: "🔗",
  },
];

export const roadmap = [
  {
    title: "MVP Local-First",
    items: [
      "Calendário Semana/Mês com drag-and-drop",
      "Tarefas com labels, prioridades e notas",
      "Persistência offline no IndexedDB + export .json/.ics",
      "Tema escuro/claro com personalização de acento",
    ],
  },
  {
    title: "v1.0",
    items: [
      "Recorrências completas com exceções",
      "Booking público com formulários customizáveis",
      "Compartilhamento com permissões e links temporários",
      "Painel Hoje com foco e notificações locais",
    ],
  },
  {
    title: "v1.x",
    items: [
      "Kanban de projetos e automations",
      "Integração Google/Outlook e webhooks",
      "Relatórios de tempo e cumprimento de metas",
      "Desktop (Tauri) com banco criptografado",
    ],
  },
];

export const dataModel = [
  "users",
  "orgs",
  "memberships",
  "calendars",
  "events",
  "recurrences",
  "tasks",
  "task_labels",
  "projects",
  "notes",
  "attachments",
  "reminders",
  "shares",
  "audit_logs",
];

export const highlightStats = [
  { label: "Eventos sincronizados", value: "+10k", detail: "sem conflitos" },
  { label: "Recorrências", value: "RRULE", detail: "com exceções" },
  { label: "Retenção D7", value: ">35%", detail: "meta" },
  { label: "Tempo p/ criar", value: "<7s", detail: "objetivo" },
];
