import { ArrowRight, Sparkles } from "lucide-react";

const prompts = [
  "What corporate actions affect my portfolios this quarter?",
  "How has P001 changed since January 1?",
  "Show me my upcoming elections",
];

export default function AIAssistantCard() {
  return (
    <section
      className="
        rounded-lg
        border border-slate-200
        bg-white
        p-5
        dark:border-[#27312d]
        dark:bg-[#101614]
      "
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
          <Sparkles size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            AI Portfolio Assistant
          </h2>

          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Ask questions about your portfolios
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            className="
              flex w-full items-center gap-2
              rounded-md
              border border-slate-200
              bg-[#fafbfa]
              px-3 py-2.5
              text-left
              text-[11px]
              text-slate-600
              transition
              hover:border-[#9bcbb9]
              hover:bg-[#f3f9f6]
              dark:border-[#27312d]
              dark:bg-[#151d1a]
              dark:text-slate-400
              dark:hover:border-[#355246]
              dark:hover:bg-[#19231f]
            "
          >
            <ArrowRight size={13} className="shrink-0" />
            <span>{prompt}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Ask anything about your portfolios..."
          className="
            min-w-0 flex-1
            rounded-md
            border border-slate-200
            bg-white
            px-3
            text-xs
            outline-none
            focus:border-[#00875a]
            dark:border-[#27312d]
            dark:bg-[#0d1311]
            dark:text-white
          "
        />

        <button
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-md
            bg-[#00875a]
            text-white
            hover:bg-[#00724d]
          "
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}