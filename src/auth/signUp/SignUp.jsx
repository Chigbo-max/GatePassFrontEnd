import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Button from "../../reusables/Button";
import { usePostSignUpMutation } from '../../services/GatePassApi';
import { useNavigate } from "react-router-dom";
import Style from "./SignUp.module.css"
export default function SignUp() {
  const [signUp, { data, error, isLoading }] = usePostSignUpMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    homeAddress: "",
    role: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); 
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signUp(formData).unwrap();
      console.log(response);

      setSuccessMessage("Signup successful! Redirecting... ");
      setTimeout(() => {
        if (response.role === "ADMIN") navigate("/admin");
        else if (response.role === "SECURITY") navigate("/security");
        else navigate("/generateOtp");
      }, 2000); 
    } catch (error) {
      console.error("Signup failed:", error);
      setSuccessMessage(""); 
    }
  };

  return (
    <div className={Style.signup_container}>
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="homeAddress" placeholder="Home Address" value={formData.homeAddress} onChange={handleChange} />
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="RESIDENT">Resident</option>
          <option value="SECURITY">Security</option>
          <option value="ADMIN">Admin</option>
        </select>

        <Button type="submit" action={isLoading ? <ClipLoader color="#ffff" size={50} /> : "Sign Up"} />

        {error && <p style={{ color: "red" }}>Signup failed. Please try again. 🙏</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} 
      </form>

      <div>
        <h4>Already have an account?</h4>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}
