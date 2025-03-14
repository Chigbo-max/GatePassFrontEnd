import { useGetViewResidentsQuery } from "../services/GatePassApi";
import Card from "../reusables/Card"

export default function Residents() {
    const { data, error, isLoading } = useGetViewResidentsQuery();
    console.log(data);

    return(
        <div >
            <Card data={data} isLoading={isLoading}></Card>
        </div>
    )
    
}
