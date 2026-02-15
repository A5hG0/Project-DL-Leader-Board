import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import type { Case } from "../types/CaseStudy";
import "../styles/Home.css";

export default function Home() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    api.get("/cases").then((res) => setCases(res.data));
  }, []);

  return (
    <div className="home">

      <div className="stars"></div>
      <div className="stars2"></div>

      {/* Hero Section */}
      <section className="hero">
        <h1>TAB Deep Learning</h1>
        <p>
          Real-world Deep Learning Case Studies, Projects and Concepts for learners.
        </p>
      </section>

      {/* Case Studies */}
      <section className="cases">
        <h2>Case Studies</h2>

        <div className="case-grid">
          {cases.map((c) => (
            <div className="case-card" key={c._id}>
              <h3>{c.title}</h3>
              <Link to={`/case/${c._id}`} className="btn">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
