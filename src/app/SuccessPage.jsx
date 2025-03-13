import React from "react";
import { useNavigate } from "react-router-dom";

import Style from "./styles.module.css"

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className={Style.successContainer} >
      <h2>Signup Successful!</h2>
      <button
        onClick={() => navigate("/login")}
      >
        Go to Login
      </button>
    </div>
  );
}