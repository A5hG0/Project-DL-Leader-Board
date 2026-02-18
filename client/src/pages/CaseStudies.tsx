import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import type { Case } from "../types/CaseStudy";
import "../styles/CaseStudies.css";

const categories = [
  { name: "Python Basics", color: "blue", icon: "📘" },
  { name: "Data Handling", color: "pink", icon: "📊" },
  { name: "Visualization", color: "cyan", icon: "📈" },
  { name: "Machine Learning", color: "green", icon: "🤖" },
  { name: "Deep Learning", color: "purple", icon: "🧠" },
];

export default function CaseStudies() {
  const [cases, setCases] = useState<Case[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    api.get<Case[]>("/cases")
      .then((res) => setCases(res.data))
      .catch((err) => console.error("Error fetching cases:", err));
  }, []);

  return (
    <div className="case-page">
      <div className="case-page-inner">
        <h1 className="page-title">Case Studies</h1>

        {/* ===== Submit Section ===== */}
        <div className="submit-section">
          <div className="submit-left">
            <h2>Want to submit your solution?</h2>
            <p>
              Complete the case study and submit your work through the form.
            </p>

            <a
              href="https://forms.gle/xEqjJn1KwwTyB7ey8"
              target="_blank"
              rel="noopener noreferrer"
              className="submit-btn"
            >
              🚀 Submit Case Study
            </a>
          </div>

          <div className="submit-right">
            <img
              src="https://media.tenor.com/itjFesV8_RUAAAAi/soulja-boy-pepe.gif"
              alt="Anime coding"
              className="submit-gif"
            />
          </div>
        </div>

        <div className="accordion">
          {categories.map((cat) => {
            const isOpen = expandedCategory === cat.name;

            const filteredCases = cases.filter(
              (c) =>
                c.category &&
                c.category.toLowerCase().trim() ===
                  cat.name.toLowerCase().trim()
            );

            return (
              <div key={cat.name} className="accordion-item">
                <button
                  className={`accordion-header ${cat.color}`}
                  onClick={() =>
                    setExpandedCategory(isOpen ? null : cat.name)
                  }
                >
                  <div className="left">
                    <span className="icon">{cat.icon}</span>
                    <h2>{cat.name}</h2>
                  </div>

                  <span className="pill">
                    {filteredCases.length} lessons
                  </span>
                </button>

                {isOpen && (
                  <div className="accordion-content">
                    {filteredCases.length > 0 ? (
                      filteredCases.map((c, idx) => (
                        <div
                          key={c._id}
                          className="lesson-card clickable"
                          onClick={() =>
                            navigate(`/case/${c._id}`)
                          }
                        >
                          <div className="lesson-number">
                            {idx + 1}
                          </div>

                          <div>
                            <h3>{c.title}</h3>
                            {c.subtitle && <p>{c.subtitle}</p>}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="no-lessons">
                        No case studies yet.
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
