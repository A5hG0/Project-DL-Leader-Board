import { useEffect, useState } from "react";
import "../styles/leaderboard.css";

export default function Leaderboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzbsa_8EII2eNXtfl_UGrmqhoFi74wkJ7ROWwQ9dveY3xmmRaGiq5XeJSY1QFEC6han/exec")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="leaderboard">
      <h1 className="lb-title">Leaderboard</h1>

      <div className="lb-table-wrap">
        <table className="lb-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Last Submission</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className={i < 3 ? "top3" : ""}>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.score}</td>
                <td>
                  {new Date(u.lastSubmission).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
