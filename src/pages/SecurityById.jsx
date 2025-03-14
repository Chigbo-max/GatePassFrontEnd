import React, { useState } from 'react'
import { usePostSecurityPersonnelByIdMutation } from "../services/GatePassApi";
import { ClipLoader } from "react-spinners"
import Style from "./securityById.module.css"
import Button from "../reusables/Button"

function SecurityById() {

    const [securityById, { data, error, isLoading }] = usePostSecurityPersonnelByIdMutation();
    const [securityId, setSecurityId] = useState("");
    const [securityData, setSecurityData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await securityById({ id: securityId }).unwrap();
            setSecurityData(response);
        } catch (error) {
            console.log("Fetching security personnel failed", error);
        }
    }


    return (
        <div className={Style.securityByIdContainer}>
            <form onSubmit={handleSubmit}>
                <label>Enter Security Id</label>
                <input type="text"
                    name="securityId"
                    value={securityId.trim()}
                    onChange={(event) => setSecurityId(event.target.value)}
                    required
                />

                <Button type="submit" action={isLoading ? <ClipLoader color="#ffff" size={50} /> : "Submit Id"}></Button>
                {error && <p>Could not fetch security perosonnel. Please check the id and try again 🙏</p>}

            </form>

            {
                securityData && (

                    <div className={Style.response}>
                        <p><span>Email:</span> {securityData.email}</p>
                        <p><span>ID:</span> {securityData.id}</p>
                        <p><span>Role:</span> {securityData.role}</p>
                        <p><span>Status:</span> {securityData.status}</p>
                    </div>
                )}


        </div>
    )
}

export default SecurityById
