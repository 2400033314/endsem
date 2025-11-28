import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(d => { setUsers(d); setState("done"); })
      .catch(() => setState("error"));
  }, []);

  if (state === "loading") return <h3>Loading...</h3>;
  if (state === "error") return <h3>Error fetching data</h3>;

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {users.map(u => (
        <div key={u.id} style={{ border: "1px solid #ccc", padding: 10, borderRadius: 8, width: 200 }}>
          <h4>{u.name}</h4>
          <p>{u.email}</p>
          <p>{u.address.city}</p>
        </div>
      ))}
    </div>
  );
}
