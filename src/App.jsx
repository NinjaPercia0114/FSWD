// import About from "./About.jsx";
// import Contact from "./Contact.jsx";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//       <Router>
//         {/* <Link to='/home'>Home</Link> */}
//         <Link to='/about'>about</Link>
//         <Link to='/Contact'>Contact</Link>
//         <Routes>
//           {/* <Route path='/' element={<Home />} />
//           <Route path='/home' element={<Home />} /> */}
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='*' element={<h1>404 Not found</h1>} />

//         </Routes>
//       </Router>
//     </div>
//   )
// }
// export default App;



import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";

import Home from "../home";

function App() {
  return (
      <div>
        <Home />
    <Router>
        <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
          <Link to="/signup" style={{ marginRight: "10px" }}>Signup</Link>
          <Link to="/login">Login</Link>
        </nav>
        

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;
