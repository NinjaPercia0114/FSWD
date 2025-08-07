import React from "react";
import { useState } from "react";




function Signup1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    function handlesignup() {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("password", password);

}
    return (
        <>

            <h2>Signup Form</h2>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /> 
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter your mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handlesignup}>Submit</button>

        </>
    );
}

export default Signup1;