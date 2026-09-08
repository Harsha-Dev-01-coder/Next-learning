"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginButton() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "champ" && password === "1234") {
      console.log("Login successful");
      router.push("/dashboard");
    } else {
      console.log("Invalid username or password");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}