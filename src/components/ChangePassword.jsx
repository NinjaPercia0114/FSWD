import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const current = localStorage.getItem("currentUser");
    if (!current) return navigate("/login");
    setEmail(current);
  }, []);

  const handleChange = () => {
    const data = JSON.parse(localStorage.getItem(email));
    if (data.password !== oldPass) return alert("Old password wrong");
    if (newPass !== confirmPass) return alert("Passwords do not match");

    data.password = newPass;
    localStorage.setItem(email, JSON.stringify(data));
    alert("Password updated");
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input type="password" placeholder="Old Password" onChange={(e) => setOldPass(e.target.value)} /><br />
      <input type="password" placeholder="New Password" onChange={(e) => setNewPass(e.target.value)} /><br />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} /><br />
      <button onClick={handleChange}>Update Password</button>
    </div>
  );
}

export default ChangePassword;
