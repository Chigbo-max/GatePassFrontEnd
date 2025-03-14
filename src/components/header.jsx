import React from 'react'
import Style from "./header.module.css"
import {useNavigate} from "react-router-dom"

function header() {

    const navigate = useNavigate();
  return (
        <div className={Style.header}>
            <button className={Style.headerButton } onClick={()=>navigate("/admin/closeAccount")} type = "submit">Close Account</button>
              <button className={Style.headerButton}  onClick={()=>navigate("/admin/allResidents")} type="submit">All Residents</button>
              <button className={Style.headerButton} onClick={()=>navigate("/admin/residentById")} type = "submit">Resident by Id</button>
              <button className={Style.headerButton } onClick={()=>navigate("/admin/viewAllVisitors")} type = "submit">All visitors</button>
              <button className={Style.headerButton}  onClick={()=>navigate("/admin/viewVisitorByOtpId")} type="submit">Visitor by Id</button>
              <button className={Style.headerButton} onClick={()=>navigate("/admin/getAllSecurityPersonnel")} type = "submit">Security Personnel</button>
              <button className={Style.headerButton} onClick={()=>navigate("/admin/getSecurityPersonnelById")} type = "submit">Security Personnel by Id</button>

            </div>
  )
}

export default header
