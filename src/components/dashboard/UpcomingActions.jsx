import { ArrowUpRight } from "lucide-react";
import { upcomingActions } from "../../data/mockData";

const typeStyles = {
  DIV: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
  SPL: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400",
  BON: "bg-purple-50 text-purple-700 dark:bg-purple-950/30 dark:text-purple-400",
  RIG: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
  NAM: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function UpcomingActions() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 dark:border-[#27312d] dark:bg-[#101614]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Upcoming Corporate Actions
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Events requiring attention
          </p>
        </div>

        <a
          href="/analyst/actions"
          className="flex items-center gap-1 text-xs font-medium text-[#00875a] hover:underline dark:text-[#55d5a0]"
        >
          View all
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="mt-5 divide-y divide-slate-100 dark:divide-[#202a26]">
        {upcomingActions.map((action) => (
          <div
            key={action.security}
            className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${typeStyles[action.type]}`}
            >
              {action.type}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-slate-900 dark:text-white">
                {action.name}
              </p>

              <p className="mt-0.5 truncate text-[11px] text-slate-500 dark:text-slate-400">
                {action.security} · {action.detail}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-medium ${
                action.urgent
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                  : "bg-slate-100 text-slate-600 dark:bg-[#18201d] dark:text-slate-400"
              }`}
            >
              {action.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}