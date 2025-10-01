import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-gray-900 relative">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
