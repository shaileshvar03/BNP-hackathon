import {
  CalendarDays,
  ClipboardCheck,
  FileClock,
  Filter,
  Search,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";

export default function AuditHistory() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] p-5 md:p-7">

        <div>
          <p className="text-xs font-medium text-slate-400">
            Analyst Workspace
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Audit History
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Review the audit trail of corporate-action processing and portfolio impact.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 md:flex-row dark:border-[#27312d] dark:bg-[#101614]">

          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search audit records..."
              className="h-9 w-full rounded-md border border-slate-200 bg-[#fafbfa] pl-9 pr-3 text-xs outline-none focus:border-[#00875a] dark:border-[#27312d] dark:bg-[#151d1a] dark:text-white"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-xs text-slate-600 dark:border-[#27312d] dark:text-slate-300"
          >
            <CalendarDays size={14} />
            Date Range
          </button>

          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-xs text-slate-600 dark:border-[#27312d] dark:text-slate-300"
          >
            <Filter size={14} />
            Filter
          </button>

        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

          <div className="border-b border-slate-200 px-5 py-4 dark:border-[#27312d]">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Audit Records
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Processing history and before/after control information.
            </p>
          </div>

          <EmptyState
            icon={ClipboardCheck}
            title="No audit records available"
            description="Audit records will appear here when corporate-action processing activity is available."
          />

        </div>

      </div>
    </DashboardLayout>
  );
}