import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./app-components/shared/Layout";
import Dashboard from "./app-components/Dashboard";
import Members from "./app-components/Members";
import Subscriptions from "./app-components/Subscriptions";
import Roles from "./app-components/Roles";
import Events from "./app-components/Events";
import Finances from "./app-components/Finances";
import Reports from "./app-components/Reports";
import Settings from "./app-components/settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/events" element={<Events />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
