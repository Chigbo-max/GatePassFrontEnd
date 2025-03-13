import React, { useState } from 'react';
import { useValidateOtpMutation } from '../services/GatePassApi';
import Button from '../reusables/Button';
import { ClipLoader } from 'react-spinners';
import Style from "./security.module.css"

export default function SecurityDashboard() {
  const [otp, setOtp] = useState('');
  const [validateOtp, { data, error, isLoading }] = useValidateOtpMutation();
  const[validity, setValidity] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     const response =  await validateOtp({ otp }).unwrap();
     setValidity(response)
    } catch (error) {
      console.error('OTP validation failed:', error);
    }
  };

  return (
    <div className={Style.security_dashboard}>
      <h2>Security Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <Button type="submit" action={isLoading ? <ClipLoader color="#ffff" size={20} /> : 'Validate OTP'} />
      </form>
      {data && <p style={{ color: 'green' }}>Check completed!</p>}
      {error && <p style={{ color: 'red' }}>OTP validation failed. Please try again.</p>}

      {validity &&(
        <div className="validattion_response">
            {/* <p>Result: {validateOtp.message}</p> */}
            <h3>The OTP is {validity.status}</h3>
        </div>

        
      )}
    </div>
  );
}
