import {
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  FileBarChart,
  FileClock,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  Scale,
  Settings,
  WalletCards,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/analyst",
  },
  {
    label: "My Portfolios",
    icon: BriefcaseBusiness,
    path: "/analyst/portfolios",
  },
  {
    label: "Corporate Actions",
    icon: CalendarDays,
    path: "/analyst/actions",
  },
  {
    label: "Impact Analysis",
    icon: BarChart3,
    path: "/analyst/impact",
  },
  {
    label: "Elections",
    icon: Scale,
    path: "/analyst/elections",
  },
  {
    label: "Settlements",
    icon: WalletCards,
    path: "/analyst/settlements",
  },
  {
    label: "Reports",
    icon: FileBarChart,
    path: "/analyst/reports",
  },
  {
    label: "Audit History",
    icon: FileClock,
    path: "/analyst/audit",
  },
  {
    label: "AI Assistant",
    icon: MessageSquareText,
    path: "/analyst/ai",
  },
];

export default function Sidebar({ activePath = "/analyst" }) {
  return (
    <aside
      className="
        hidden lg:flex
        w-[245px]
        shrink-0
        flex-col
        border-r border-slate-200
        bg-[#f8f9f7]
        dark:border-[#202a26]
        dark:bg-[#0b1110]
      "
    >
      {/* Product identity */}
      <div className="flex h-[70px] items-center border-b border-slate-200 px-5 dark:border-[#202a26]">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#00875a] text-white">
            <span className="text-sm font-bold">B</span>
          </div>

          <div>
            <div className="text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white">
              Corporate Actions
            </div>

            <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-500">
              Analyst Portal
            </div>
          </div>
        </div>
      </div>

      {/* User */}
      <div className="mx-3 mt-4 rounded-lg border border-slate-200 bg-white p-3 dark:border-[#27312d] dark:bg-[#101614]">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f5ef] text-xs font-semibold text-[#00875a] dark:bg-[#123d2e] dark:text-[#45c992]">
            PA
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
              Priya Anand
            </p>

            <p className="truncate text-xs text-slate-500 dark:text-slate-400">
              Portfolio Analyst
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Workspace
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = activePath === item.path;

            return (
              <a
                key={item.label}
                href={item.path}
                className={`
                  flex items-center gap-3
                  rounded-md
                  px-3 py-2.5
                  text-sm
                  transition
                  ${
                    active
                      ? "bg-[#e8f5ef] font-medium text-[#007a52] dark:bg-[#123d2e] dark:text-[#55d5a0]"
                      : "text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#121a17] dark:hover:text-white"
                  }
                `}
              >
                <Icon size={17} strokeWidth={1.8} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-200 p-3 dark:border-[#202a26]">
        <a
          href="/analyst/settings"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-white dark:text-slate-400 dark:hover:bg-[#121a17]"
        >
          <Settings size={17} />
          Settings
        </a>

        <button
          className="mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-500 hover:bg-white hover:text-red-600 dark:text-slate-500 dark:hover:bg-[#121a17]"
        >
          <LogOut size={17} />
          Sign out
        </button>
      </div>
    </aside>
  );
}