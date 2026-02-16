import { Link, useLocation } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <Link to="/" className="logo">Deep Learning</Link>

      <div className="links">
        <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={pathname === "/leaderboard" ? "active" : ""} to="/leaderboard">Leaderboard</Link>
        <Link className={pathname === "/cases" ? "active" : ""} to="/cases">Case Studies</Link>

        {/* Discord Icon */}
        <a
          href="https://discord.gg/E7huSCxRsW"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-icon"
        >
          <FaDiscord size={20}/>
        </a>
      </div>
    </nav>
  );
}
