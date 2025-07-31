import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRecover = () => {
    const data = localStorage.getItem(email);
    if (!data) return alert("User not found");
    const user = JSON.parse(data);
    alert("Your password is: " + user.password);
    navigate("/login");
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} /><br />
      <button onClick={handleRecover}>Recover</button>
    </div>
  );
}

export default ForgotPassword;
