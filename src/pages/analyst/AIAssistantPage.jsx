import {
  ArrowRight,
  Bot,
  MessageSquareText,
  Sparkles,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";

const suggestedQueries = [
  "What corporate actions affect my portfolios?",
  "Show the impact of recent corporate actions.",
  "Which elections require my attention?",
  "Compare my portfolio value between two dates.",
];

export default function AIAssistantPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1200px] p-5 md:p-7">

        <div>
          <p className="text-xs font-medium text-slate-400">
            Analyst Workspace
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            AI Assistant
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Ask questions about corporate actions, portfolio impact and audit history.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

          <div className="border-b border-slate-200 px-5 py-5 dark:border-[#27312d]">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
                <Sparkles size={19} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Portfolio Assistant
                </h2>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Ask a question to explore your assigned portfolio data.
                </p>
              </div>

            </div>

          </div>

          <div className="min-h-[420px] px-5 py-8">

            <div className="flex flex-col items-center justify-center text-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
                <Bot size={25} />
              </div>

              <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">
                How can I help?
              </h3>

              <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500 dark:text-slate-400">
                Ask questions about your portfolios, corporate actions,
                settlements, elections or audit history.
              </p>

            </div>

            <div className="mx-auto mt-8 grid max-w-2xl gap-2 sm:grid-cols-2">

              {suggestedQueries.map((query) => (
                <button
                  key={query}
                  type="button"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-[#fafbfa] px-4 py-3 text-left text-xs text-slate-600 transition hover:border-[#9bcbb9] hover:bg-[#f3f9f6] dark:border-[#27312d] dark:bg-[#151d1a] dark:text-slate-400 dark:hover:border-[#355246] dark:hover:bg-[#19231f]"
                >
                  <MessageSquareText
                    size={14}
                    className="shrink-0"
                  />

                  <span className="flex-1">
                    {query}
                  </span>

                  <ArrowRight size={14} />
                </button>
              ))}

            </div>

          </div>

          <div className="border-t border-slate-200 p-4 dark:border-[#27312d]">

            <div className="flex gap-2">

              <input
                type="text"
                placeholder="Ask about your portfolios..."
                className="h-11 min-w-0 flex-1 rounded-lg border border-slate-200 bg-[#fafbfa] px-4 text-xs outline-none focus:border-[#00875a] dark:border-[#27312d] dark:bg-[#0d1311] dark:text-white"
              />

              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00875a] text-white hover:bg-[#00724d]"
              >
                <ArrowRight size={17} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}