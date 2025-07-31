import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "", address: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    localStorage.setItem(form.email, JSON.stringify(form));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} /><br />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} /><br />
      <input name="address" placeholder="Address" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Signup;
