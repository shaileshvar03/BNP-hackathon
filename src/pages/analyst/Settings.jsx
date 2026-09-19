import {
  Bell,
  Check,
  ChevronRight,
  LockKeyhole,
  Monitor,
  Moon,
  Palette,
  ShieldCheck,
  Sun,
  User,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { useTheme } from "../../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-[1200px] p-5 md:p-7">

        {/* Header */}
        <div>
          <p className="text-xs font-medium text-slate-400">
            Analyst Workspace
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your account, appearance and notification preferences.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-7 grid gap-6 lg:grid-cols-[220px_1fr]">

          {/* Settings navigation */}
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-2 dark:border-[#27312d] dark:bg-[#101614]">

            <SettingsNav
              icon={User}
              label="Profile"
              active
            />

            <SettingsNav
              icon={Palette}
              label="Appearance"
            />

            <SettingsNav
              icon={Bell}
              label="Notifications"
            />

            <SettingsNav
              icon={ShieldCheck}
              label="Security"
            />

          </aside>

          {/* Settings content */}
          <div className="space-y-5">

            {/* Profile */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

              <SectionHeader
                icon={User}
                title="Profile"
                description="Your analyst account information."
              />

              <div className="p-5">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e8f5ef] text-lg font-semibold text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
                    PA
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      Priya Anand
                    </h3>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Portfolio Analyst
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Analyst access
                    </p>
                  </div>

                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <InfoField
                    label="Name"
                    value="Priya Anand"
                  />

                  <InfoField
                    label="Role"
                    value="Portfolio Analyst"
                  />

                  <InfoField
                    label="Access"
                    value="Assigned Portfolios"
                  />

                  <InfoField
                    label="Account Status"
                    value="Active"
                  />

                </div>

              </div>

            </section>

            {/* Appearance */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

              <SectionHeader
                icon={Palette}
                title="Appearance"
                description="Customize how the Analyst Portal looks."
              />

              <div className="p-5">

                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Theme
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Choose the appearance of the application.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">

                  <ThemeOption
                    icon={Sun}
                    title="Light"
                    description="Bright interface"
                    active={theme === "light"}
                    onClick={() => setTheme("light")}
                  />

                  <ThemeOption
                    icon={Moon}
                    title="Dark"
                    description="Dark interface"
                    active={theme === "dark"}
                    onClick={() => setTheme("dark")}
                  />

                  <ThemeOption
                    icon={Monitor}
                    title="System"
                    description="Use device setting"
                    active={false}
                    disabled
                  />

                </div>

              </div>

            </section>

            {/* Notifications */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

              <SectionHeader
                icon={Bell}
                title="Notifications"
                description="Choose which activity should notify you."
              />

              <div className="divide-y divide-slate-100 dark:divide-[#202a26]">

                <PreferenceRow
                  title="Corporate action alerts"
                  description="Receive alerts for new corporate actions affecting assigned portfolios."
                  enabled
                />

                <PreferenceRow
                  title="Election deadlines"
                  description="Receive reminders before voluntary-action election deadlines."
                  enabled
                />

                <PreferenceRow
                  title="Settlement updates"
                  description="Receive updates when expected settlements change."
                  enabled
                />

                <PreferenceRow
                  title="Report generation"
                  description="Receive notifications when requested reports are ready."
                  enabled
                />

              </div>

            </section>

            {/* Security */}
            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-[#27312d] dark:bg-[#101614]">

              <SectionHeader
                icon={LockKeyhole}
                title="Security"
                description="Manage account security preferences."
              />

              <div className="divide-y divide-slate-100 dark:divide-[#202a26]">

                <ActionRow
                  title="Password"
                  description="Change your account password."
                  action="Change"
                />

                <ActionRow
                  title="Two-factor authentication"
                  description="Add an additional layer of account protection."
                  action="Configure"
                />

                <ActionRow
                  title="Active sessions"
                  description="Review devices currently signed in to your account."
                  action="Review"
                />

              </div>

            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-slate-200 pt-5 dark:border-[#202a26]">
          <p className="text-[11px] text-slate-400">
            Corporate Actions Hub · Analyst Portal
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}


/* -------------------------------- */
/* Settings Navigation              */
/* -------------------------------- */

function SettingsNav({
  icon: Icon,
  label,
  active = false,
}) {
  return (
    <button
      type="button"
      className={`
        flex w-full items-center gap-3
        rounded-md px-3 py-2.5
        text-left text-xs
        transition

        ${
          active
            ? "bg-[#e8f5ef] font-medium text-[#007a52] dark:bg-[#123d2e] dark:text-[#55d5a0]"
            : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-[#151d1a]"
        }
      `}
    >
      <Icon size={16} strokeWidth={1.8} />

      <span>{label}</span>

      {active && (
        <ChevronRight
          size={14}
          className="ml-auto"
        />
      )}
    </button>
  );
}


/* -------------------------------- */
/* Section Header                   */
/* -------------------------------- */

function SectionHeader({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-200 px-5 py-4 dark:border-[#27312d]">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e8f5ef] text-[#00875a] dark:bg-[#123d2e] dark:text-[#55d5a0]">
        <Icon size={17} />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

    </div>
  );
}


/* -------------------------------- */
/* Information Field                */
/* -------------------------------- */

function InfoField({
  label,
  value,
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <div className="mt-1.5 rounded-md border border-slate-200 bg-[#fafbfa] px-3 py-2.5 text-xs text-slate-700 dark:border-[#27312d] dark:bg-[#151d1a] dark:text-slate-300">
        {value}
      </div>
    </div>
  );
}


/* -------------------------------- */
/* Theme Option                     */
/* -------------------------------- */

function ThemeOption({
  icon: Icon,
  title,
  description,
  active,
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        relative rounded-lg border p-4 text-left
        transition

        ${
          active
            ? "border-[#00875a] bg-[#f3f9f6] dark:border-[#00a86b] dark:bg-[#123d2e]"
            : "border-slate-200 bg-white hover:border-slate-300 dark:border-[#27312d] dark:bg-[#151d1a] dark:hover:border-[#3a4842]"
        }

        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `}
    >
      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-[#202a26] dark:text-slate-300">
          <Icon size={17} />
        </div>

        {active && (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00875a] text-white dark:bg-[#00a86b]">
            <Check size={12} />
          </div>
        )}

      </div>

      <p className="mt-3 text-xs font-semibold text-slate-900 dark:text-white">
        {title}
      </p>

      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </button>
  );
}


/* -------------------------------- */
/* Preference Row                   */
/* -------------------------------- */

function PreferenceRow({
  title,
  description,
  enabled = false,
}) {
  return (
    <div className="flex items-center justify-between gap-5 px-5 py-4">

      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-900 dark:text-white">
          {title}
        </p>

        <p className="mt-1 max-w-2xl text-[11px] leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <div
        className={`
          relative h-5 w-9 shrink-0 rounded-full
          ${enabled ? "bg-[#00875a]" : "bg-slate-300 dark:bg-[#34403b]"}
        `}
      >
        <div
          className={`
            absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm
            transition
            ${enabled ? "left-[18px]" : "left-0.5"}
          `}
        />
      </div>

    </div>
  );
}


/* -------------------------------- */
/* Security Action Row              */
/* -------------------------------- */

function ActionRow({
  title,
  description,
  action,
}) {
  return (
    <div className="flex items-center justify-between gap-5 px-5 py-4">

      <div>
        <p className="text-xs font-medium text-slate-900 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <button
        type="button"
        className="shrink-0 rounded-md border border-slate-200 px-3 py-2 text-[11px] font-medium text-slate-600 hover:bg-slate-50 dark:border-[#27312d] dark:text-slate-300 dark:hover:bg-[#151d1a]"
      >
        {action}
      </button>

    </div>
  );
}