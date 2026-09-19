import {
  BarChart3,
  CalendarDays,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";

export default function ImpactAnalysis() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] p-5 md:p-7">
        {/* Header */}
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              Analyst Workspace
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Impact Analysis
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Analyze the portfolio impact of corporate actions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="
                inline-flex items-center gap-2 rounded-md
                border border-slate-200 bg-white
                px-3 py-2 text-xs font-medium text-slate-600
                hover:bg-slate-50
                dark:border-[#27312d] dark:bg-[#101614]
                dark:text-slate-300 dark:hover:bg-[#151d1a]
              "
            >
              <RefreshCw size={14} />
              Refresh
            </button>

            <button
              type="button"
              className="
                inline-flex items-center gap-2 rounded-md
                bg-[#00875a] px-3 py-2
                text-xs font-medium text-white
                hover:bg-[#00724d]
              "
            >
              <Download size={14} />
              Export
            </button>
          </div>
        </div>

        {/* Filters */}
        <div
          className="
            mt-6 flex flex-col gap-3 rounded-lg
            border border-slate-200 bg-white p-4
            md:flex-row md:items-center
            dark:border-[#27312d] dark:bg-[#101614]
          "
        >
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Filter size={15} />
            Filters
          </div>

          <select
            className="
              h-9 rounded-md border border-slate-200
              bg-white px-3 text-xs text-slate-600
              outline-none focus:border-[#00875a]
              dark:border-[#27312d] dark:bg-[#151d1a]
              dark:text-slate-300
            "
          >
            <option>All Portfolios</option>
          </select>

          <select
            className="
              h-9 rounded-md border border-slate-200
              bg-white px-3 text-xs text-slate-600
              outline-none focus:border-[#00875a]
              dark:border-[#27312d] dark:bg-[#151d1a]
              dark:text-slate-300
            "
          >
            <option>All Action Types</option>
          </select>

          <button
            type="button"
            className="
              inline-flex h-9 items-center gap-2 rounded-md
              border border-slate-200 bg-white px-3
              text-xs text-slate-600
              dark:border-[#27312d] dark:bg-[#151d1a]
              dark:text-slate-300
            "
          >
            <CalendarDays size={14} />
            Date Range
          </button>
        </div>

        {/* Summary */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Affected Portfolios"
            value="—"
            icon={BarChart3}
          />

          <SummaryCard
            title="Security Impact"
            value="—"
            icon={BarChart3}
          />

          <SummaryCard
            title="Cash Impact"
            value="—"
            icon={BarChart3}
          />

          <SummaryCard
            title="Reconciliation"
            value="—"
            icon={BarChart3}
          />
        </div>

        {/* Impact table */}
        <div
          className="
            mt-5 overflow-hidden rounded-lg
            border border-slate-200 bg-white
            dark:border-[#27312d] dark:bg-[#101614]
          "
        >
          <div className="border-b border-slate-200 px-5 py-4 dark:border-[#27312d]">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Portfolio Impact
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Before and after values will appear here after data is loaded.
            </p>
          </div>

          <EmptyState
            icon={BarChart3}
            title="No impact data available"
            description="Portfolio impact results will appear here when corporate-action data is available."
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

function SummaryCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-[#27312d] dark:bg-[#101614]">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
          <Icon size={17} />
        </div>
      </div>

      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}