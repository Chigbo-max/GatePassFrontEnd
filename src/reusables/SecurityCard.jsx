import React from 'react'
import { ClipLoader } from "react-spinners"
import Style from "./securityCard.module.css";

function SecurityCard(props) {
    const { data, error, isLoading } = props;

    if (isLoading) {
        return (
            <div className={Style.loader}><ClipLoader color="#032440ff" size={50} /></div>
        )
    }

    if (!data?.length) {
        return (
            <div className={Style.noSecurity}>
                <p>No Security Personnel found</p>
            </div>

        )
    }


    return (
        <div className={Style.securityContainer}>
            <h2>Security Personnel List</h2>
            <table className ={Style.securityTable}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>ID</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tBody>
                    {data.map((item) => (
                        <tr key={item.id}>
                                <td>{item.email}</td>
                                <td>{item.id}</td>
                                <td>{item.role}</td>
                                <td>{item.status}</td>
                        </tr>
                ))}
                </tBody>
            </table>

        </div>
    )
}

export default SecurityCard
