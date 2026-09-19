import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AnalystDashboard from "./pages/analyst/AnalystDashboard";
import MyPortfolios from "./pages/analyst/MyPortfolios";
import CorporateActions from "./pages/analyst/CorporateActions";
import ImpactAnalysis from "./pages/analyst/ImpactAnalysis";
import Elections from "./pages/analyst/Elections";
import Settlements from "./pages/analyst/Settlements";
import Reports from "./pages/analyst/Reports";
import AuditHistory from "./pages/analyst/AuditHistory";
import AIAssistantPage from "./pages/analyst/AIAssistantPage";
import Settings from "./pages/analyst/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Analyst Dashboard */}
        <Route
          path="/analyst"
          element={<AnalystDashboard />}
        />

        {/* Portfolios */}
        <Route
          path="/analyst/portfolios"
          element={<MyPortfolios />}
        />

        {/* Corporate Actions */}
        <Route
          path="/analyst/actions"
          element={<CorporateActions />}
        />

        {/* Impact Analysis */}
        <Route
          path="/analyst/impact"
          element={<ImpactAnalysis />}
        />

        {/* Elections */}
        <Route
          path="/analyst/elections"
          element={<Elections />}
        />

        {/* Settlements */}
        <Route
          path="/analyst/settlements"
          element={<Settlements />}
        />

        {/* Reports */}
        <Route
          path="/analyst/reports"
          element={<Reports />}
        />
<Route
  path="/analyst/settings"
  element={<Settings />}
/>
        {/* Audit */}
        <Route
          path="/analyst/audit"
          element={<AuditHistory />}
        />

        {/* AI */}
        <Route
          path="/analyst/ai"
          element={<AIAssistantPage />}
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/analyst" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;