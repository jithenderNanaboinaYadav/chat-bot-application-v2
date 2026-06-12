import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import Vaults from "./components/pages/Vaults";
import Exchanges from "./components/pages/Exchanges";
import Payees from "./components/pages/Payees";
import BankPayment from "./components/pages/BankPayment";
import Settings from "./components/pages/Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vaults" element={<Vaults />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/payees" element={<Payees />} />
          <Route path="/bank-payment" element={<BankPayment />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
