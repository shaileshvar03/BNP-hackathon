import {
  BarChart3,
  CalendarDays,
  Download,
  FileBarChart,
  FileText,
  Filter,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import EmptyState from "../../components/common/EmptyState";

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] p-5 md:p-7">

        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

          <div>
            <p className="text-xs font-medium text-slate-400">
              Analyst Workspace
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Reports
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Generate portfolio and corporate-action impact reports.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 self-start rounded-md bg-[#00875a] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#00724d]"
          >
            <Download size={15} />
            Generate Report
          </button>

        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

          <ReportType
            icon={FileBarChart}
            title="Portfolio Impact Report"
            description="Compare portfolio positions and values before and after corporate actions."
          />

          <ReportType
            icon={CalendarDays}
            title="Corporate Action Report"
            description="Review actions affecting assigned portfolios within a selected period."
          />

          <ReportType
            icon={BarChart3}
            title="Reconciliation Report"
            description="Review expected and actual settlement and reconciliation results."
          />

        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

          <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-[#27312d]">

            <div>
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                Generated Reports
              </h2>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Previously generated analyst reports.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 self-start rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 dark:border-[#27312d] dark:bg-[#151d1a] dark:text-slate-300"
            >
              <Filter size={14} />
              Filter
            </button>

          </div>

          <EmptyState
            icon={FileText}
            title="No reports available"
            description="Generated reports will appear here once portfolio and corporate-action data is available."
          />

        </div>

      </div>
    </DashboardLayout>
  );
}

function ReportType({ icon: Icon, title, description }) {
  return (
    <button
      type="button"
      className="text-left rounded-lg border border-slate-200 bg-white p-5 transition hover:border-[#9bcbb9] hover:shadow-sm dark:border-[#27312d] dark:bg-[#101614] dark:hover:border-[#355246]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
        <Icon size={19} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </button>
  );
}