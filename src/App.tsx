import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { HelpLayout } from "./pages/help/HelpLayout";
import { GettingStarted } from "./pages/help/GettingStarted";
import { Dashboard } from "./pages/help/Dashboard";
import { Tasks } from "./pages/help/Tasks";
import { Goals } from "./pages/help/Goals";
import { Calendar } from "./pages/help/Calendar";
import { Notes } from "./pages/help/Notes";
import { Meals } from "./pages/help/Meals";
import { MobileApp } from "./pages/help/MobileApp";
import { Account } from "./pages/help/Account";
import { Privacy } from "./pages/help/Privacy";
import { Collaboration } from "./pages/help/Collaboration";
import { Troubleshooting } from "./pages/help/Troubleshooting";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/help" element={<HelpLayout />}>
            <Route index element={<GettingStarted />} />
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="goals" element={<Goals />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="notes" element={<Notes />} />
            <Route path="meals" element={<Meals />} />
            <Route path="mobile-app" element={<MobileApp />} />
            <Route path="account" element={<Account />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="troubleshooting" element={<Troubleshooting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
