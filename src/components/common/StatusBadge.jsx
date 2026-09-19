export default function StatusBadge({ status }) {
  const styles = {
    Processed:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900",

    Pending:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900",

    Failed:
      "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900",
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-md border
        px-2.5 py-1
        text-xs font-medium
        ${styles[status] || styles.Pending}
      `}
    >
      {status}
    </span>
  );
}