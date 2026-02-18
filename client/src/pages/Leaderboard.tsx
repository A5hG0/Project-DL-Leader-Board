import { useEffect, useState } from "react";
import "../styles/leaderboard.css";

interface User {
  name: string;
  totalPoints: number;
  casesCompleted: number;
  completionPercent: string; // Already comes with %
  streak: number;
  badge?: string;
}

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzQMfCaDu9ibmFIxFTQ1DV2SFRRwLmsO_74wz99rCwuPcwBcpzSbJMM6n7sZz0LdP0x/exec")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch leaderboard");
        }
        return res.json();
      })
      .then(data => {
        setUsers(data); // Backend already sorted
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="leaderboard">
      <h1 className="lb-title">Leaderboard</h1>

      {/* 🔥 Loading State */}
      {loading && (
        <div className="lb-loading">
          <p>Loading leaderboard...</p>
        </div>
      )}

      {/* ❌ Error State */}
      {error && (
        <div className="lb-error">
          <p>{error}</p>
        </div>
      )}

      {/* ✅ Table */}
      {!loading && !error && (
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Total Points</th>
                <th>Cases Completed</th>
                <th>Completion %</th>
                <th>🔥 Streak</th>
                <th>Badge</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i} className={i < 3 ? "top3" : ""}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.totalPoints}</td>
                  <td>{u.casesCompleted}</td>
                  <td>{Number(u.completionPercent) * 100}</td>
                  <td>{u.streak} 🔥</td>
                  <td>{u.badge || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
