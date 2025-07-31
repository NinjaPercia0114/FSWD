import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const data = localStorage.getItem(email);
    if (!data) return alert("User not found");
    const user = JSON.parse(data);
    if (user.password === password) {
      localStorage.setItem("currentUser", email);
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button><br />
      <button onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
    </div>
  );
}

export default Login;
