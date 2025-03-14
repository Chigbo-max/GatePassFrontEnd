import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { usePostLoginMutation } from '../../services/GatePassApi';
import { useNavigate } from 'react-router-dom';
import Button from '../../reusables/Button';
import Style from "./Login.module.css"

export default function GenerateOtp() {
  const [login, { data, error, isLoading }] = usePostLoginMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(formData).unwrap();
      console.log('Login successful:', response);

      localStorage.setItem('userRole', response.role);

      if (response.role === 'ADMIN') navigate('/admin-dashboard');
      else if (response.role === 'SECURITY') navigate('/security');
      else if (response.role === 'RESIDENT') navigate('/generateOtp');
      else navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={Style.login_container}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <Button type="submit" action={isLoading ? <ClipLoader color="#ffff" size={50} /> : 'Login'} />

        {error && <p>Login failed. Please try again. 🙏</p>}
      </form>
    </div>
  );
}
