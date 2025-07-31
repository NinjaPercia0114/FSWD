import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("currentUser");
    if (!email) {
      navigate("/login");
    } else {
      const userData = localStorage.getItem(email);
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <h3>Hi, {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Address: {user.address}</p>

          <button onClick={() => navigate("/edit-profile")}>Edit Profile</button><br />
          <button onClick={() => navigate("/change-password")}>Change Password</button><br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
