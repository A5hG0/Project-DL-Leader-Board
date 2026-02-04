import { useState } from "react";
import api from "../api/axios";

export default function AdminAddCase() {
  const [form, setForm] = useState<any>({});

  const submit = () => {
    api.post("/cases", form);
    alert("Added!");
  };

  return (
    <div>
      <h1>Add Case Study</h1>
      <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
      <textarea placeholder="Overview (Markdown)" onChange={e => setForm({...form, overview: e.target.value})}/>
      <textarea placeholder="Dataset Info" onChange={e => setForm({...form, datasetInfo: e.target.value})}/>
      <textarea placeholder="Tasks (comma separated)" onChange={e => setForm({...form, tasks: e.target.value.split(",")})}/>
      <textarea placeholder="Expected Outcome" onChange={e => setForm({...form, expectedOutcome: e.target.value})}/>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
