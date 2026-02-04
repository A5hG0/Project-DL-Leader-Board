import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <Link to="/" className="logo">Deep Learning</Link>

      <div className="links">
        <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={pathname === "/leaderboard" ? "active" : ""} to="/leaderboard">Leaderboard</Link>
        <Link className={pathname === "/add" ? "active" : ""} to="/add">Case Studies</Link>
      </div>
    </nav>
  );
}
