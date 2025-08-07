import React from "react";
import { useNavigate } from "react-router-dom";


function Login1() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function doCheckLogin(){
        const lemail = localStorage.getItem("email");
        const lpassword = localStorage.getItem("password");

        if(lemail === email && lpassword === password){
            alert("Login successful!");
            // Navigate to dashboard or home page
            navigate("/dashboard");
        } else {
            alert("Invalid email or password");
        }
    }
    
    return (
        <>
            <h2>Login Form</h2>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={doCheckLogin}>Login</button>
        </>
    );
}

export default Login1;  