import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [user, setUser] = useState({ name: "", mobile: "", address: "" });
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentEmail = localStorage.getItem("currentUser");
    if (!currentEmail) return navigate("/login");
    const data = JSON.parse(localStorage.getItem(currentEmail));
    setUser({ name: data.name, mobile: data.mobile, address: data.address });
    setEmail(currentEmail);
  }, []);

  const handleUpdate = () => {
    const updated = { ...JSON.parse(localStorage.getItem(email)), ...user };
    localStorage.setItem(email, JSON.stringify(updated));
    alert("Profile updated");
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /><br />
      <input value={user.mobile} onChange={(e) => setUser({ ...user, mobile: e.target.value })} /><br />
      <input value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} /><br />
      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}

export default EditProfile;
