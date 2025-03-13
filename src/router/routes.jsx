import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ElectronicGatePass from '../app/GenerateOtp'
import Success from "../app/SuccessPage"
import SignUp from "../auth/signUp/SignUp"
import LogIn from "../auth/logIn/Login"
import GenerateOtp from "../app/GenerateOtp"
import SecurityDashboard from '../app/SecurityDashBoard'



const routes = createBrowserRouter(
    [
        {
            "path": "/", "element":<SignUp/>
        },

        {
            "path": "/logIn", "element":        <LogIn/>

        },
           
                {"path": "/electronicGatePass",
                    "element": <ElectronicGatePass />},
                    {
                        "path": "/success",
                        "element": <Success />
                    },
                    {
                        "path": "/generateOtp",
                        "element": <GenerateOtp />
                    },
                    {
                        "path": "/security",
                        "element": <SecurityDashboard/>
                    }
                  
            
        
    ]
)



export default routes
