"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "violet", label: "Violeta" },
  { id: "emerald", label: "Esmeralda" },
  { id: "cyan", label: "Ciano" },
];

export function TopNav() {
  const [theme, setTheme] = useState("violet");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  const applyTheme = (value: string) => {
    setTheme(value);
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-white/10 bg-white/60 px-6 py-3 shadow-lg backdrop-blur dark:border-white/5 dark:bg-white/5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 text-lg font-semibold text-white shadow-md shadow-violet-500/40">
          ⏱️
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            TEMPO
          </p>
          <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            Agenda inteligente local-first
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-white/70 p-1 text-sm font-medium text-zinc-700 shadow-sm dark:bg-white/10 dark:text-zinc-200">
          {themes.map((item) => (
            <button
              key={item.id}
              onClick={() => applyTheme(item.id)}
              className={`rounded-full px-3 py-1 transition ${
                theme === item.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleDark}
          className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm transition hover:scale-[1.02] hover:shadow-lg dark:border-white/10 dark:bg-white/10"
        >
          <span className="text-lg" aria-hidden>
            {dark ? "🌙" : "☀️"}
          </span>
          <span>{dark ? "Modo escuro" : "Modo claro"}</span>
        </button>
      </div>
    </header>
  );
}
