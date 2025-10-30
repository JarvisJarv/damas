import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempo – Agenda Inteligente Local-First",
  description:
    "App local-first para agendamento, tarefas e notas com visão anual, semana e dia, pensado para uso pessoal ou em equipes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} relative min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-950 antialiased dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900`}
      >
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[-1] h-60 bg-[radial-gradient(circle,_rgba(139,92,246,0.35)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-20 pt-16 sm:px-8 lg:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
