import React, { useState } from 'react'
import { usePostViewResidentByIdMutation } from "../services/GatePassApi";
import { ClipLoader } from "react-spinners";
import Button from "../reusables/Button"
import Style from "./residentId.module.css"


function ResidentById() {

    const [resident, { data, error, isLoading }] = usePostViewResidentByIdMutation();
    const [residentId, setResidentId] = useState('');
    const [residentDetails, setResidentDetails] = useState(null);

    const handleUserInput = async (event) => {
        event.preventDefault();
        try {
            const response = await resident({ residentId }).unwrap();
            setResidentDetails(response);
        }
        catch (error) {
            console.log('Fetching resident failed', error);
        }
    }




    { isLoading && <ClipLoader color="#032440ff" size={50} /> }


    return (
        <div className ={Style.residentByIdContainer} >
            <form onSubmit={handleUserInput}>

                <h2>Search Resident By Id</h2>

                <input type="text"
                    placeholder="Enter Resident ID"
                    name="residenId"
                    value={residentId.trim()}
                    onChange={(e) => setResidentId(e.target.value)}
                    required
                />

                <Button type="submit" action={isLoading? <ClipLoader color="#ffff" size={50} /> : "Submit Resident Id"}></Button>
                { error && <p>Could not fetch resident. Please try again🙏</p> }


            </form>

            {residentDetails && (
                <div className={Style.response}>
                    <p><span>Id:</span> {residentDetails.id}</p>
                    <p><span>Email:</span> {residentDetails.email}</p>
                    <p><span>Role:</span> {residentDetails.role}</p>
                    <p><span>Status:</span> {residentDetails.status}</p>
                </div>
            )}
        </div>
    )
}

export default ResidentById
