import { useEffect, useState } from "react";
import api from "../api/axios";

export default function CaseStudies() {
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    api.get("/cases").then((res) => setCases(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">Case Studies</h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {cases.map((c, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow">
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

const Section = ({ title, text }: any) => (
  <div className="mb-6">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-lg leading-relaxed">{text}</p>
  </div>
);
