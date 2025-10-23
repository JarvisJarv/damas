# Tempo – Agenda Local-First

Aplicativo web moderno para agendamento, tarefas, notas e booking totalmente sob seu controle. O foco é oferecer uma experiência fluida para uso individual ou em equipe, com visão anual/semana/dia, fluxo rápido de criação e suporte offline.

## Requisitos

- Node.js 20+
- Um gerenciador de pacotes (recomendado: `pnpm`, mas `npm` ou `yarn` também funcionam)

## Projeto 100% web

Tempo é um aplicativo web construído com **Next.js 15 (App Router)**, **React 18** e **TailwindCSS**. Todo o código roda no
navegador (com suporte PWA) e o modo de desenvolvimento utiliza apenas o servidor web do Next.js. Não há binários ou
dependências nativas — basta abrir o endereço local no browser para usar.

## Como rodar

1. Instale as dependências:
   ```bash
   pnpm install
   ```
2. Suba o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
3. Abra `http://localhost:3000` no navegador para explorar o protótipo.

### Build de produção

```bash
pnpm build
pnpm start
```

O comando `pnpm start` inicia o servidor Next.js usando a build gerada em `.next/`.

## Como usar o protótipo atual

A home já apresenta uma experiência navegável com as principais seções do produto:

- **Hero + Navegação**: destaque do posicionamento, chamadas rápidas e visual semanal fictício.
- **Visão Anual**: grade interativa demonstrando marcadores por dia, filtros e interações planejadas.
- **Painel de Tarefas**: foco do dia, prioridades, labels e exemplos de automações.
- **Booking**: prévia do fluxo de agendamento público com buffers, formulários e confirmação.
- **Métricas e Roadmap**: visão macro dos objetivos, arquitetura e próximos passos sugeridos.

Use este protótipo para validar fluxos, ajustar copy e planejar as próximas entregas antes de conectar com dados reais.

## Estrutura de pastas

```
app/                # rotas App Router e composição das páginas
components/         # blocos reutilizáveis (layout, calendário, tarefas, booking)
lib/                # dados estáticos e estruturas de apoio
public/             # assets estáticos
```

## Próximos passos sugeridos

1. Implementar a camada de persistência local com Dexie + criptografia opcional.
2. Criar visão Semana/Dia integrada ao componente de calendário (FullCalendar/react-big-calendar).
3. Habilitar criação natural language + atalhos de teclado (`cmd+k`, `A/S/D`).
4. Construir tela "Hoje" consolidando agenda, tarefas foco e notas rápidas.
5. Entregar fluxo de booking público com buffers, formulários e confirmação por e-mail.

## Licença

Uso pessoal. Adapte conforme necessário.
