import {
  CheckCircle2,
  Clock3,
  FileText,
  Filter,
  Scale,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";

export default function Elections() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] p-5 md:p-7">

        <div>
          <p className="text-xs font-medium text-slate-400">
            Analyst Workspace
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Elections
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Review and manage elections for voluntary corporate actions.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            icon={Clock3}
            title="Pending Elections"
            value="—"
          />

          <SummaryCard
            icon={CheckCircle2}
            title="Submitted"
            value="—"
          />

          <SummaryCard
            icon={Scale}
            title="Eligible Actions"
            value="—"
          />

          <SummaryCard
            icon={FileText}
            title="Upcoming Deadlines"
            value="—"
          />
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

          <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-[#27312d]">

            <div>
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                Election Instructions
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Voluntary action elections requiring analyst attention.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 self-start rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-[#27312d] dark:bg-[#151d1a] dark:text-slate-300"
            >
              <Filter size={14} />
              Filter
            </button>

          </div>

          <EmptyState
            icon={Scale}
            title="No elections available"
            description="Election instructions will appear here when eligible voluntary corporate actions are available."
          />

        </div>

      </div>
    </DashboardLayout>
  );
}

function SummaryCard({ icon: Icon, title, value }) {
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

      <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}