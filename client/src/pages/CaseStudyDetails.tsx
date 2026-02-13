import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/CaseStudyDetails.css";

/* =========================
   Type Definitions
========================= */

type TextSection = {
  type: "text";
  heading: string;
  content: string;
};

type ListSection = {
  type: "list";
  heading: string;
  content: string[];
};

type CodeSection = {
  type: "code";
  heading: string;
  content: string;
  language?: string;
};

type CompositeBlock =
  | { subtype: "text"; value: string }
  | { subtype: "code"; value: string; language?: string };

type CompositeSection = {
  type: "composite";
  heading: string;
  content: CompositeBlock[];
};

type Section =
  | TextSection
  | ListSection
  | CodeSection
  | CompositeSection;

export type CaseStudy = {
  _id: string;
  title: string;
  subtitle?: string;
  sections: Section[];
};

/* =========================
   Main Component
========================= */

export default function CaseStudyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (!id) return;

    api.get<CaseStudy>(`/cases/${id}`)
      .then((res) => setCaseStudy(res.data))
      .catch((err) => console.error("Error fetching case study:", err));
  }, [id]);

  if (!caseStudy) return <div className="page">Loading...</div>;

  return (
    <div className="page">
      <div className="case-wrapper">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="page-inner case-detail">
          <h1>{caseStudy.title}</h1>
          {caseStudy.subtitle && (
            <p className="subtitle">{caseStudy.subtitle}</p>
          )}

          {caseStudy.sections.map((section, index) => (
            <DynamicSection key={index} section={section} />
          ))}
        </div>

      </div>
    </div>
  );
}

/* =========================
   Dynamic Section Renderer
========================= */

const DynamicSection = ({ section }: { section: Section }) => {
  return (
    <section className="section">
      <h2>{section.heading}</h2>

      {section.type === "text" && (
        <p>{section.content}</p>
      )}

      {section.type === "list" && (
        <ul>
          {section.content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {section.type === "code" && (
        <pre className="code-block">
          <code>{section.content}</code>
        </pre>
      )}

      {section.type === "composite" && (
        <div className="composite-block">
          {section.content.map((block, idx) => {
            if (block.subtype === "text") {
              return <p key={idx}>{block.value}</p>;
            }

            if (block.subtype === "code") {
              return (
                <pre key={idx} className="code-block">
                  <code>{block.value}</code>
                </pre>
              );
            }

            return null;
          })}
        </div>
      )}
    </section>
  );
};
