import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import ReactMarkdown from "react-markdown";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    api.get(`/cases/${id}`).then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "auto" }}>
      <h1>{data.title}</h1>
      <ReactMarkdown>{data.overview}</ReactMarkdown>

      <h2>Dataset</h2>
      <ReactMarkdown>{data.datasetInfo}</ReactMarkdown>

      <h2>Tasks</h2>
      <ul>
        {data.tasks.map((t: string, i: number) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <h2>Expected Outcome</h2>
      <ReactMarkdown>{data.expectedOutcome}</ReactMarkdown>
    </div>
  );
}
