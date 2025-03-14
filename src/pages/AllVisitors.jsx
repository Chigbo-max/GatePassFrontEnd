import React from 'react'
import {useGetViewAllVisitorsQuery} from "../services/GatePassApi"
import Card from "../reusables/VisitorsCard"

function AllVisitors() {

    const{data, error, isLoading} = useGetViewAllVisitorsQuery();
    console.log(data);
  return (
    <div>

        <Card data={data} error={error} isLoading={isLoading}></Card>
      
    </div>
  )
}

export default AllVisitors
