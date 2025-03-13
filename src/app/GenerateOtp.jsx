import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { usePostGenerateOtpMutation } from "../services/GatePassApi";
import Button from "../reusables/Button";

export default function GenerateOtp() {
  const [generateOtp, { data, error, isLoading }] = usePostGenerateOtpMutation();
  const [visitorName, setVisitorName] = useState("");
  const [residentEmail, setResidentEmail] = useState("");
  const [otpData, setOtpData] = useState(null);

  // const residentEmail = localStorage.getItem("residentEmail");

  const handleGenerateOtp = async (event) => {
    event.preventDefault();
    if (!residentEmail) {
      alert("resident email is required!");
      return;
    }
    
    try {
      const response = await generateOtp({ visitorName, residentEmail }).unwrap();
      setOtpData(response);
    } catch (error) {
      console.error("OTP Generation Failed:", error);
    }
  };

  const handleCancelOtp = () => {
    setOtpData(null); 
  };

  return (
    <div className="otp-container">
      <form onSubmit={handleGenerateOtp}>
        <h2>Generate OTP</h2>
        <input
          type="text"
          name="visitorName"
          placeholder="Visitor Name"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
          required
        />

        <input
          type="email"
          name="residentEmail"
          placeholder="Your email address"
          value={residentEmail}
          onChange={(e) => setResidentEmail(e.target.value)}
          required
        />
        
        <Button type="submit" action={isLoading ? <ClipLoader color="#ffff" size={50} /> : "Generate OTP"} />

        {error && <p>OTP generation failed. Please try again. 🙏</p>}
      </form>

      {otpData && (
        <div className="otp-display">
          <h3>OTP Code: {otpData.otp}</h3>
          <p>Expires at: {otpData.expiryTime}</p>
          {/* <Button type="button" action="Cancel OTP" onClick={handleCancelOtp} /> */}
        </div>
      )}
    </div>
  );
}
