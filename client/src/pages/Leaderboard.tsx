import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Leaderboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    api.get("/users/leaderboard").then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {users.map((u, i) => (
        <p key={u._id}>
          {i + 1}. {u.name} — {u.score}
        </p>
      ))}
    </div>
  );
}
