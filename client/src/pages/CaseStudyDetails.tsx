import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Case } from "../types/CaseStudy";
import "../styles/CaseStudyDetails.css";

export default function CaseStudyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState<Case | null>(null);

  useEffect(() => {
    api.get<Case>(`/cases/${id}`).then((res) => {
      setCaseStudy(res.data);
    });
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
        <p className="subtitle">{caseStudy.subtitle}</p>

        <Section title="Problem" text={caseStudy.problem} />
        <Section title="Approach" text={caseStudy.approach} />
        <Section title="Implementation" text={caseStudy.implementation} />
        <Section title="Results" text={caseStudy.results} />
        <Section title="Learnings" text={caseStudy.learnings} />
      </div>

    </div>
  </div>
);

}

const Section = ({ title, text }: { title: string; text: string }) => (
  <section className="section">
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);
