import {
  CalendarDays,
  FileText,
  WalletCards,
  BriefcaseBusiness,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import PortfolioValueChart from "../../components/dashboard/PortfolioValueChart";
import UpcomingActions from "../../components/dashboard/UpcomingActions";
import RecentImpacts from "../../components/dashboard/RecentImpacts";
import AIAssistantCard from "../../components/dashboard/AIAssistantCard";
import { dashboardStats } from "../../data/mockData";

export default function AnalystDashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1500px] p-5 md:p-7">

        {/* Header */}
        <div className="mb-7 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              Monday, 15 January 2026
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Good morning,{" "}
              <span className="text-[#00875a] dark:text-[#55d5a0]">
                Priya
              </span>
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Here's what's happening with your portfolios today.
            </p>
          </div>

          <button
            className="
              inline-flex
              items-center gap-2
              self-start
              rounded-md
              bg-[#00875a]
              px-4 py-2.5
              text-xs
              font-medium
              text-white
              transition
              hover:bg-[#00724d]
            "
          >
            <FileText size={15} />
            View portfolio report
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Portfolio Value"
            value={dashboardStats.portfolioValue}
            change={dashboardStats.portfolioChange}
            subtitle="vs. previous month"
            icon={BriefcaseBusiness}
            accent="green"
          />

          <StatCard
            title="Cash Balance"
            value={dashboardStats.cashBalance}
            change={dashboardStats.cashChange}
            subtitle="vs. previous month"
            icon={WalletCards}
            accent="blue"
          />

          <StatCard
            title="Upcoming Actions"
            value={dashboardStats.upcomingActions}
            change="2"
            subtitle="in next 30 days"
            icon={CalendarDays}
            accent="amber"
          />

          <StatCard
            title="Pending Elections"
            value={dashboardStats.pendingElections}
            change="1"
            subtitle="requires your attention"
            icon={FileText}
            accent="purple"
          />

        </div>

        {/* Charts */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
          <PortfolioValueChart />
          <UpcomingActions />
        </div>

        {/* Bottom */}
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
          <RecentImpacts />
          <AIAssistantCard />
        </div>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-200 pt-5 dark:border-[#202a26]">
          <div className="flex flex-col justify-between gap-2 text-[11px] text-slate-400 sm:flex-row">
            <p>
              Corporate Actions Hub · Analyst Portal
            </p>

            <p>
              All portfolio information shown is for demonstration.
            </p>
          </div>
        </footer>

      </div>
    </DashboardLayout>
  );
}