import { Inbox } from "lucide-react";

export default function EmptyState({
  icon: Icon = Inbox,
  title = "No data available",
  description = "There is currently no information to display.",
}) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center px-6 py-10 text-center">
      <div
        className="
          flex h-12 w-12 items-center justify-center
          rounded-lg
          bg-[#e8f5ef] text-[#00875a]
          dark:bg-[#123d2e] dark:text-[#55d5a0]
        "
      >
        <Icon size={21} strokeWidth={1.8} />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-1 max-w-md text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}