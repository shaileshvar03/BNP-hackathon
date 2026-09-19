export default function StatCard({
  title,
  value,
  change,
  subtitle,
  icon: Icon,
  accent = "green",
}) {
  const accents = {
    green: {
      icon: "bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]",
    },
    blue: {
      icon: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
    },
    amber: {
      icon: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
    },
    purple: {
      icon: "bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
    },
  };

  return (
    <div
      className="
        rounded-lg
        border border-slate-200
        bg-white
        p-5
        dark:border-[#27312d]
        dark:bg-[#101614]
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {value}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${accents[accent].icon}`}
        >
          <Icon size={19} strokeWidth={1.8} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs font-medium text-[#00875a] dark:text-[#55d5a0]">
          ↑ {change}
        </span>

        <span className="text-xs text-slate-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
}