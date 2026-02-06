import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Case } from "../types/CaseStudy";
import "../styles/CaseStudies.css";

const categories = [
  { name: "Python Basics", lessons: 8, color: "blue", icon: "📘" },
  { name: "Data Handling", lessons: 6, color: "pink", icon: "📊" },
  { name: "Visualization", lessons: 5, color: "cyan", icon: "📈" },
  { name: "Machine Learning", lessons: 10, color: "green", icon: "🤖" },
  { name: "Deep Learning", lessons: 7, color: "purple", icon: "🧠" },
];

export default function CaseStudies() {
  const [cases, setCases] = useState<Case[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    api.get<Case[]>("/cases").then((res) => setCases(res.data));
  }, []);

  return (
    <div className="page">
      <div className="page-inner">
        <h1 className="page-title">Case Studies</h1>

        <div className="accordion">
          {categories.map((cat) => {
            const isOpen = expandedCategory === cat.name;

            return (
              <div key={cat.name} className="accordion-item">
                {/* ---------- HEADER ---------- */}
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

                  <span className="pill">{cat.lessons} lessons</span>
                </button>

                {/* ---------- CONTENT ---------- */}
                {isOpen && (
                  <div className="accordion-content">
                    {cases
                      .filter((c) => c.category === cat.name)
                      .map((c, idx) => (
                        <div key={c._id} className="lesson-card">
                          <div className="lesson-number">{idx + 1}</div>
                          <div>
                            <h3>{c.title}</h3>
                            <p>{c.subtitle}</p>
                          </div>
                        </div>
                      ))}
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
