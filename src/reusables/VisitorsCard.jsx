import React from 'react'
import Style from "./visitorsCard.module.css";
import { ClipLoader } from "react-spinners";


function VisitorsCard(props) {

    const{data, error, isLoading} = props;

    if (isLoading) {
        return <div className={Style.loader}><ClipLoader color="#032440ff" size={50} /></div>;
    }
    if (!data?.length) {
        return <div className={Style.noVisitors}>No visitors found</div>;
    }

    return (
        <div className={Style.visitorsContainer}>
            <h2>Visitors' List</h2>
            <table className={Style.visitorsTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>OTP</th>
                        <th>Created Time</th>
                        <th>Expiry Time</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((visitor) => (
                        <tr key={visitor.otpId}>
                            <td>{visitor.visitorName}</td>
                            <td>{visitor.otpId}</td>
                            <td>{visitor.otp}</td>
                            <td>{visitor.createdTime}</td>
                            <td>{visitor.expiryTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default VisitorsCard
