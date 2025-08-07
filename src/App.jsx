// import React, { useState } from 'react';
// import './App.css';



// class App extends React.Component {
//   render() {
//     return <FormComponent />;
//   }
// }

// function FormComponent() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     semester: '',
//     gender: '',
//     message: '',
//     password: '',
//     confirmPassword: '',
//     agree: false,
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
//     // Name: required, only letters and spaces
//     if (!form.name.trim()) {
//       setError('Name is required.');
//       return;
//     }
//     if (!/^[A-Za-z ]+$/.test(form.name.trim())) {
//       setError('Name must contain only letters and spaces.');
//       return;
//     }
//     // Email: required, valid format
//     if (!form.email.trim()) {
//       setError('Email is required.');
//       return;
//     }
//     if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
//       setError('Please enter a valid email address.');
//       return;
//     }
//     // Mobile: required, 10 digits only
//     if (!form.mobile.trim()) {
//       setError('Mobile number is required.');
//       return;
//     }
//     if (!/^\d{10}$/.test(form.mobile.trim())) {
//       setError('Mobile number must be exactly 10 digits.');
//       return;
//     }
//     // Semester: required, numeric, 1-12 (assuming max 12 semesters)
//     if (!form.semester.trim()) {
//       setError('Semester is required.');
//       return;
//     }
//     if (!/^\d+$/.test(form.semester.trim()) || Number(form.semester) < 1 || Number(form.semester) > 12) {
//       setError('Semester must be a number between 1 and 12.');
//       return;
//     }
//     // Gender: required
//     if (!form.gender) {
//       setError('Please select your gender.');
//       return;
//     }
//     // Message: required, min 10 chars
//     if (!form.message.trim()) {
//       setError('Message is required.');
//       return;
//     }
//     if (form.message.trim().length < 10) {
//       setError('Message must be at least 10 characters.');
//       return;
//     }
//     // Password: required, min 6 chars, at least one number and one special char
//     if (!form.password) {
//       setError('Password is required.');
//       return;
//     }
//     if (form.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }
//     if (!/[0-9]/.test(form.password) || !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(form.password)) {
//       setError('Password must contain at least one number and one special character.');
//       return;
//     }
//     // Confirm Password: must match
//     if (!form.confirmPassword) {
//       setError('Please confirm your password.');
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }
//     // Terms: must be checked
//     if (!form.agree) {
//       setError('You must agree to the terms and conditions.');
//       return;
//     }
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' }}>
//         <h2>Form Submitted!</h2>
//         <p>Thank you, {form.name}.</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <h2 className="form-title">Registration Form</h2>
//       {error && <div className="form-error">{error}</div>}
//       <div className="form-group">
//         <label htmlFor="name" className="form-label">Name:</label>
//         <input id="name" type="text" name="name" value={form.name} onChange={handleChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email" className="form-label">Email:</label>
//         <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="mobile" className="form-label">Mobile:</label>
//         <input id="mobile" type="tel" name="mobile" value={form.mobile} onChange={handleChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="semester" className="form-label">Semester:</label>
//         <input id="semester" type="text" name="semester" value={form.semester} onChange={handleChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <span className="form-label">Gender:</span>
//         <div style={{ display: 'flex', gap: '18px', marginTop: '4px' }}>
//           <label className="form-radio-label" htmlFor="gender-male">
//             <input id="gender-male" type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} />
//             <span style={{ marginLeft: 6 }}>Male</span>
//           </label>
//           <label className="form-radio-label" htmlFor="gender-female">
//             <input id="gender-female" type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} />
//             <span style={{ marginLeft: 6 }}>Female</span>
//           </label>
//           <label className="form-radio-label" htmlFor="gender-other">
//             <input id="gender-other" type="radio" name="gender" value="Other" checked={form.gender === 'Other'} onChange={handleChange} />
//             <span style={{ marginLeft: 6 }}>Other</span>
//           </label>
//         </div>
//       </div>
//       <div className="form-group">
//         <label htmlFor="message" className="form-label">Message:</label>
//         <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={3} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password" className="form-label">Password:</label>
//         <input id="password" type="password" name="password" value={form.password} onChange={handleChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
//         <input id="confirmPassword" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="form-input" />
//       </div>
//       <div className="form-group form-checkbox-group">
//         <label htmlFor="agree" className="form-checkbox-label"><input id="agree" type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="form-checkbox" /> I agree to the terms and conditions</label>
//       </div>
//       <button type="submit" className="form-submit">Submit</button>
//     </form>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup1 from './components/Signup1';
import Login1 from './components/Login1';
import Dashboard1 from './components/Dashboard1'; // Make sure this exists

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/dashboard" element={<Dashboard1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
