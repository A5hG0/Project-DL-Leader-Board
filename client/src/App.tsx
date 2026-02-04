import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Leaderboard from "./pages/Leaderboard";
import AdminAddCase from "./pages/AdminAddCase";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case/:id" element={<CaseStudyDetail />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<AdminAddCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
