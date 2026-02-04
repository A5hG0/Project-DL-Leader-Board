import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../types/casestudy";

export default function Home() {
  const [cases, setCases] = useState<CaseStudy[]>([]);

  useEffect(() => {
    api.get("/cases").then((res) => setCases(res.data));
  }, []);

  return (
    <div>
      <h1>HOME</h1>
      {cases.map((c) => (
        <div key={c._id}>
          <Link to={`/case/${c._id}`}>
            <h3>{c.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
