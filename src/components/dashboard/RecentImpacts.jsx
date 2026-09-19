import { ArrowUpRight } from "lucide-react";
import { recentImpacts } from "../../data/mockData";
import StatusBadge from "../common/StatusBadge";

export default function RecentImpacts() {
  return (
    <section
      className="
        overflow-hidden
        rounded-lg
        border border-slate-200
        bg-white
        dark:border-[#27312d]
        dark:bg-[#101614]
      "
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-[#27312d]">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Recent Impact on Your Portfolios
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Recently processed corporate actions
          </p>
        </div>

        <a
          href="/analyst/impact"
          className="flex items-center gap-1 text-xs font-medium text-[#00875a] dark:text-[#55d5a0]"
        >
          View all
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-slate-100 dark:border-[#202a26]">
              {[
                "Date",
                "Action",
                "Security",
                "Portfolio",
                "Impact",
                "Status",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {recentImpacts.map((item) => (
              <tr
                key={`${item.date}-${item.security}`}
                className="border-b border-slate-100 last:border-0 dark:border-[#202a26]"
              >
                <td className="px-5 py-3 text-xs text-slate-600 dark:text-slate-400">
                  {item.date}
                </td>

                <td className="px-5 py-3 text-xs font-medium text-slate-900 dark:text-white">
                  {item.action}
                </td>

                <td className="px-5 py-3 text-xs text-slate-600 dark:text-slate-400">
                  {item.security}
                </td>

                <td className="px-5 py-3 text-xs text-slate-600 dark:text-slate-400">
                  {item.portfolio}
                </td>

                <td className="px-5 py-3 text-xs font-medium text-[#00875a] dark:text-[#55d5a0]">
                  {item.impact}
                </td>

                <td className="px-5 py-3">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}