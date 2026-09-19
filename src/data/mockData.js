export const analystUser = {
  name: "Priya Anand",
  initials: "PA",
  role: "Portfolio Analyst",
};

export const dashboardStats = {
  portfolioValue: "₹24.8 Cr",
  portfolioChange: "+2.4%",
  cashBalance: "₹2.4 Cr",
  cashChange: "+1.2%",
  upcomingActions: 7,
  pendingElections: 2,
};

export const portfolioTrend = [
  { month: "Aug", value: 12 },
  { month: "Sep", value: 13 },
  { month: "Oct", value: 15 },
  { month: "Nov", value: 18 },
  { month: "Dec", value: 20 },
  { month: "Jan", value: 24.8 },
];

export const assetAllocation = [
  {
    name: "Equities",
    value: 68.2,
  },
  {
    name: "Cash",
    value: 9.7,
  },
  {
    name: "Fixed Income",
    value: 12.4,
  },
  {
    name: "Others",
    value: 9.7,
  },
];

export const upcomingActions = [
  {
    type: "DIV",
    name: "ABC Cash Dividend",
    security: "SEC001",
    detail: "Ex-Date: 15 Jan 2026",
    status: "5 days",
  },
  {
    type: "SPL",
    name: "XYZ Stock Split",
    security: "SEC006",
    detail: "Record Date: 20 Jan 2026",
    status: "10 days",
  },
  {
    type: "BON",
    name: "LMN Bonus Issue",
    security: "SEC003",
    detail: "Record Date: 25 Jan 2026",
    status: "15 days",
  },
  {
    type: "RIG",
    name: "PQR Rights Issue",
    security: "SEC008",
    detail: "Election Required",
    status: "Action needed",
    urgent: true,
  },
  {
    type: "NAM",
    name: "DEF Name Change",
    security: "SEC010",
    detail: "Effective: 1 Feb 2026",
    status: "18 days",
  },
];

export const recentImpacts = [
  {
    date: "10 Jan 2026",
    action: "Cash Dividend",
    security: "SEC001",
    portfolio: "P001",
    impact: "+₹2,12,500",
    status: "Processed",
  },
  {
    date: "08 Jan 2026",
    action: "Stock Split",
    security: "SEC006",
    portfolio: "P003",
    impact: "+2,000 shares",
    status: "Processed",
  },
  {
    date: "05 Jan 2026",
    action: "Bonus Issue",
    security: "SEC003",
    portfolio: "P001",
    impact: "+500 shares",
    status: "Processed",
  },
  {
    date: "22 Dec 2025",
    action: "Name Change",
    security: "SEC010",
    portfolio: "P007",
    impact: "No financial impact",
    status: "Processed",
  },
  {
    date: "15 Dec 2025",
    action: "Rights Issue",
    security: "SEC008",
    portfolio: "P003",
    impact: "Election recorded",
    status: "Processed",
  },
];