import DashboardLayout from "../../components/layout/DashboardLayout";

export default function MyPortfolios() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] p-5 md:p-7">
        <p className="text-xs font-medium text-slate-400">
          Analyst Workspace
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          My Portfolios
        </h1>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          View and analyze your assigned portfolios.
        </p>

        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-8 dark:border-[#27312d] dark:bg-[#101614]">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Portfolio data will appear here.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}