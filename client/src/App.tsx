import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import CaseStudies from "./pages/CaseStudies";
import Leaderboard from "./pages/Leaderboard";
import AdminAddCase from "./pages/AdminAddCase";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<CaseStudies />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<AdminAddCase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
