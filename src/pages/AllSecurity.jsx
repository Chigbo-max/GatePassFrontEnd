import React from 'react'
import {useGetAllSecurityPersonnelQuery} from "../services/GatePassApi"
import SecurityCard from '../reusables/SecurityCard';


function AllSecurity() {
    const {data, error, isLoading} = useGetAllSecurityPersonnelQuery()
    console.log(data);

  return (
    <div>
        <SecurityCard data={data} error={error} isLoading={isLoading} />
    </div>
  )
}

export default AllSecurity
