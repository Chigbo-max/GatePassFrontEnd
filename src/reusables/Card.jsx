import React from 'react'
import Style from "./card.module.css";
import { ClipLoader } from "react-spinners";


function Card(props) {

    const{data, error, isLoading} = props;

    if (isLoading) {
        return <div className={Style.loader}><ClipLoader color="#032440ff" size={50} /></div>;
    }
    if (!data?.length) {
        return <div className={Style.noResidents}>No residents found</div>;
    }

    return (
        <div className={Style.residentsContainer}>
            <h2>Residents' List</h2>
            <table className={Style.residentsTable}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>ID</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((resident) => (
                        <tr key={resident.id}>
                            <td>{resident.email}</td>
                            <td>{resident.id}</td>
                            <td>{resident.role}</td>
                            <td>{resident.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Card
