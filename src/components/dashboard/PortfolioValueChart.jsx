import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { portfolioTrend } from "../../data/mockData";

export default function PortfolioValueChart() {
  return (
    <section
      className="
        rounded-lg
        border border-slate-200
        bg-white
        p-5
        dark:border-[#27312d]
        dark:bg-[#101614]
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Portfolio Value Trend
          </h2>

          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Portfolio value over the last six months
          </p>
        </div>

        <select
          className="
            rounded-md
            border border-slate-200
            bg-white
            px-2.5 py-1.5
            text-xs
            text-slate-600
            outline-none
            dark:border-[#27312d]
            dark:bg-[#151d1a]
            dark:text-slate-300
          "
        >
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="mt-5 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={portfolioTrend}>
            <defs>
              <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="#00875a"
                  stopOpacity={0.22}
                />

                <stop
                  offset="100%"
                  stopColor="#00875a"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#dfe4e1"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#7b8580" }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#7b8580" }}
              tickFormatter={(value) => `₹${value}Cr`}
            />

            <Tooltip
              formatter={(value) => [`₹${value} Cr`, "Portfolio Value"]}
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid #dfe4e1",
                background: "#ffffff",
                fontSize: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#00875a"
              strokeWidth={2.5}
              fill="url(#portfolioFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}