import { Bell, Search } from "lucide-react";
import { useState } from "react";

import ThemeToggle from "../common/ThemeToggle";
import { analystUser } from "../../data/mockData";

export default function Topbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header
      className="
        relative z-50
        flex h-[70px] shrink-0 items-center
        justify-between
        border-b border-slate-200
        bg-white/95
        px-5
        backdrop-blur
        dark:border-[#202a26]
        dark:bg-[#0b1110]/95
      "
    >
      {/* Search */}
      <div className="relative hidden max-w-xl flex-1 md:block">
        <Search
          size={17}
          className="
            absolute left-3.5 top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          placeholder="Search securities, actions, portfolios..."
          className="
            h-10 w-full
            rounded-md
            border border-slate-200
            bg-[#f7f8f6]
            pl-10 pr-4
            text-sm
            text-slate-900
            outline-none
            placeholder:text-slate-400
            focus:border-[#00875a]

            dark:border-[#27312d]
            dark:bg-[#101614]
            dark:text-white
            dark:placeholder:text-slate-500
            dark:focus:border-[#00a86b]
          "
        />
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-3">

        {/* Theme */}
        <ThemeToggle />

        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setShowNotifications((current) => !current)
            }
            aria-label="Notifications"
            className="
              relative flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-slate-500
              transition
              hover:bg-slate-100

              dark:text-slate-400
              dark:hover:bg-[#151d1a]
            "
          >
            <Bell size={18} strokeWidth={1.8} />

            {/* Notification indicator */}
            <span
              className="
                absolute right-2 top-1.5
                h-1.5 w-1.5
                rounded-full
                bg-red-500
              "
            />
          </button>

          {/* Notification dropdown */}
          {showNotifications && (
            <div
              className="
                absolute right-0 top-12
                z-[100]
                w-[320px]
                overflow-hidden
                rounded-lg
                border border-slate-200
                bg-white
                shadow-xl

                dark:border-[#27312d]
                dark:bg-[#101614]
              "
            >
              {/* Header */}
              <div
                className="
                  border-b border-slate-200
                  px-4 py-3

                  dark:border-[#27312d]
                "
              >
                <div className="flex items-center justify-between">
                  <h3
                    className="
                      text-sm font-semibold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    Notifications
                  </h3>

                  <span
                    className="
                      rounded-md
                      bg-[#e8f5ef]
                      px-2 py-1
                      text-[10px]
                      font-medium
                      text-[#00875a]

                      dark:bg-[#123d2e]
                      dark:text-[#55d5a0]
                    "
                  >
                    0 new
                  </span>
                </div>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Recent activity and important updates
                </p>
              </div>

              {/* Empty notification state */}
              <div className="px-4 py-10 text-center">
                <div
                  className="
                    mx-auto
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-slate-100
                    text-slate-400

                    dark:bg-[#18201d]
                    dark:text-slate-500
                  "
                >
                  <Bell size={18} />
                </div>

                <p
                  className="
                    mt-3
                    text-xs font-medium
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  No new notifications
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    text-slate-400
                  "
                >
                  You're all caught up.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          className="
            h-7 w-px
            bg-slate-200
            dark:bg-[#27312d]
          "
        />

        {/* User */}
        <div className="flex items-center gap-2.5">
          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              bg-[#e8f5ef]
              text-xs font-semibold
              text-[#00875a]

              dark:bg-[#123d2e]
              dark:text-[#55d5a0]
            "
          >
            {analystUser.initials}
          </div>

          <div className="hidden sm:block">
            <p
              className="
                text-sm font-medium
                text-slate-900
                dark:text-white
              "
            >
              {analystUser.name}
            </p>

            <p
              className="
                text-[11px]
                text-slate-500
                dark:text-slate-400
              "
            >
              {analystUser.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}