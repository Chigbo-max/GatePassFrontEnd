import React, { useState } from 'react'
import {usePostViewVisitorByOtpIdMutation} from "../services/GatePassApi"
import Button from "../reusables/Button"
import {ClipLoader} from "react-spinners"
import Style from "./visitorById.module.css"

function VisitorById() {
    const [Visitor, {data, error, isLoading}] = usePostViewVisitorByOtpIdMutation();
    const[viewVisitor, setViewVisitor] = useState(null);
    const [otpId, setOtpId] = useState("");

    const handleSubmitId = async(event)=>{
        event.preventDefault();
        try{
            const response = await Visitor({otpId}).unwrap();
            setViewVisitor(response);
        }
        catch(error){
            console.log("Failed to fetch visitor", error);
        }
    }

  return (
    <div className ={Style.visitorByIdContainer}>
        <form onSubmit={handleSubmitId}>
            <input type="text"
             name="otpId"
              placeholder="Enter OTP ID"
              value={otpId}
              onChange={(e)=> setOtpId(e.target.value)}
              required
              />

        <Button type="submit" action = {isLoading? <ClipLoader color="#ffff" size={50}/> : "Submit Visitor Id"}></Button>
        {error && <p>Failed to fetch visitor, please check the id and try again 🙏</p>}

        </form>

        {
            
            viewVisitor && (
            <div className={Style.response}>
                <p><span>Name:</span> {viewVisitor.visitorName}</p>
                <p><span>OTP Id:</span> {viewVisitor.otpId}</p>
                <p><span>OTP:</span> {viewVisitor.otp}</p>
                <p><span>Created Time: </span>{viewVisitor.createdTime}</p>
                <p><span>Expiry Time:</span> {viewVisitor.expiryTime}</p>

            </div>
        )}
      
    </div>
  )
}

export default VisitorById
