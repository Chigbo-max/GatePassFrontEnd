import { ClipLoader } from "react-spinners";
import { usePostCloseAccountMutation} from "../services/GatePassApi";
import { useState } from "react";
import Button from "../reusables/Button"
import Style from "./closeAccount.module.css";

export default function AdminDashBoard() {
    const [userId, setUserId] = useState("");
    const [closeAccount, { data, error, isLoading }] = usePostCloseAccountMutation();
    const[close, setClose] = useState(null);

    const handleCloseAccount = async (event) => {
        event.preventDefault();
        try {
            const response = await closeAccount({ userId }).unwrap();
            setClose(response);
        }
        catch (error) {
            console.log('Failed to close account: ', error);
        }
    };

    return (
        <div className={Style.closeAccountContainer}>
            <h2>Close User Account</h2>
            <form onSubmit={handleCloseAccount}>
                <input type="text"
                    name="userId"
                    placeholder="Enter id"
                    value={userId.trim()}
                    onChange={(event) => setUserId(event.target.value)}
                    required
                />
                <Button type="submit" action={isLoading ? <ClipLoader color="#ffff" size={50} /> : "Close Account"}></Button>
                {error && <p>Failed to close account. Please try again 🙏</p>}
            </form>

            {close && (
                <div className={Style.closeAccountRespons}>
                    <p>{close.message}</p>
                </div>
            )
            }


        </div>
    )


}