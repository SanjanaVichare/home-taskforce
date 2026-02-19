import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import HeroLanding from "./components/HeroLanding"; // ✅ NEW
import Index from "./pages/Index";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Compliance from "./pages/Compliance";
import ComplianceServices from "./pages/ComplianceServices";
import ComplianceClients from "./pages/ComplianceClients";
import ComplianceContact from "./pages/ComplianceContact";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<HeroLanding />} />

        {/* Main Website */}
        <Route path="/home" element={<Compliance />} />
        <Route path="/compliance-services" element={<ComplianceServices />} />
        <Route path="/compliance-clients" element={<ComplianceClients />} />
        <Route path="/compliance-contact" element={<ComplianceContact />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

        {/* Non-Compliance */}
        <Route path="/non-compliance" element={<Index />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Clients */}
        <Route path="/clients" element={<ClientsPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
