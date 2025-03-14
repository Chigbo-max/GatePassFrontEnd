import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ElectronicGatePass from '../pages/GenerateOtp'
import Success from "../pages/SuccessPage"
import SignUp from "../auth/signUp/SignUp"
import LogIn from "../auth/login/Login"
import GenerateOtp from "../pages/GenerateOtp"
import SecurityDashboard from '../pages/SecurityDashBoard'
import CloseAccount from "../pages/CloseAccount";
import Residents from "../pages/AllResidents"
import Layout from "../layout/layout"
import ResidentById from '../pages/ResidentById'
import Visitors from "../pages/AllVisitors"
import VisitorById from '../pages/VisitorById'
import AllSecurity from '../pages/AllSecurity'
import SecurityById from '../pages/SecurityById'



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
                    },
                    {
                        "path": "/admin",
                        "element": <Layout/>,
                        children: [

                            {"path": "closeAccount",
                               "element":  <CloseAccount/>
                            },
                            {
                                "path": "allResidents",
                                "element": <Residents/>
                            },

                            {
                                "path": "residentById",
                                "element": <ResidentById/>
                            },

                            {
                                "path": "viewAllVisitors",
                                "element": <Visitors/>
                            },

                            {
                                "path": "viewVisitorByOtpId",
                                "element": <VisitorById/>
                            },

                            {
                                "path": "getAllSecurityPersonnel",
                                "element": <AllSecurity/>
                            },

                            {
                                "path": "getSecurityPersonnelById",
                                "element": <SecurityById/>
                            },

                        ]
                    }
            
        
    ]
)



export default routes
