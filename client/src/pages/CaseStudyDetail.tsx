import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Case } from "../types/CaseStudy";

export default function CaseStudies() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    api.get<Case[]>("/cases").then((res) => setCases(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-12">Case Studies</h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {cases.map((c) => (
          <div key={c._id} className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-4xl font-bold">{c.title}</h2>
            <p className="text-gray-500 mb-6">{c.subtitle}</p>

            <Section title="Problem" text={c.problem} />
            <Section title="Approach" text={c.approach} />
            <Section title="Implementation" text={c.implementation} />
            <Section title="Results" text={c.results} />
            <Section title="Learnings" text={c.learnings} />
          </div>
        ))}
      </div>
    </div>
  );
}

const Section = ({ title, text }: { title: string; text: string }) => (
  <div className="mb-6">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-lg leading-relaxed whitespace-pre-line">{text}</p>
  </div>
);
