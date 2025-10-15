import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderG from "./components/HeaderG";
import FooterG from "./components/FooterG";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Plan from "./pages/Plan";
import PlanDetail from "./pages/PlanDetail";
import Fan from "./pages/Fan";
import FanDetail from "./pages/FanDetail";
import Sponsor from "./pages/Sponsor";
import Contact from "./pages/Contact";
import Tournaments from "./pages/Tournaments"; // neue Seite

// Hilfskomponente, damit useLocation() funktioniert
function AppContent() {
  const location = useLocation();
  const isTournamentPage = location.pathname === "/tournaments";

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-900 relative">
      {/* Header */}
      {isTournamentPage ? (
        <HeaderG />
      ) : (
        <Header />
      )}

      {/* Routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/plan/:id" element={<PlanDetail />} />
          <Route path="/fan" element={<Fan />} />
          <Route path="/fan/:id" element={<FanDetail />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </div>

      {/* Footer */}
      {isTournamentPage ? (
        <FooterG />
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
