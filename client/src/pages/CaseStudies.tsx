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
    api.get<Case[]>("/cases").then((res) => setCases(res.data));
  }, []);

  /* -------- Dynamic Lesson Count -------- */
  const getLessonCount = (category: string) =>
    cases.filter(
      (c) =>
        c.category &&
        c.category.toLowerCase() === category.toLowerCase()
    ).length;

  return (
    <div className="case-page">
      <div className="case-page-inner">
        <h1 className="page-title">Case Studies</h1>

        <div className="accordion">
          {categories.map((cat) => {
            const isOpen = expandedCategory === cat.name;

            return (
              <div key={cat.name} className="accordion-item">
                {/* -------- HEADER -------- */}
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
                    {getLessonCount(cat.name)} lessons
                  </span>
                </button>

                {/* -------- CONTENT -------- */}
                {isOpen && (
                  <div className="accordion-content">
                    {cases
                      .filter(
                        (c) =>
                          c.category &&
                          c.category.toLowerCase() ===
                            cat.name.toLowerCase()
                      )
                      .map((c, idx) => (
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
                            <p>{c.subtitle}</p>
                          </div>
                        </div>
                      ))}

                    {/* Show message if no cases */}
                    {getLessonCount(cat.name) === 0 && (
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
