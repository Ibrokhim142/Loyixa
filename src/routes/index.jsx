import { useRoutes  } from "react-router-dom"
import {  lazy  } from "react"

import Suspense, { Loading } from "./utils"

const Home = lazy(() => import("./home/Home"))
const Auth = lazy(() => import("./auth/Auth"))

const Login = lazy(() => import("./auth/login/Login"))
const Register = lazy(() => import("./auth/register/Register"))
 
const RouteController = () => {

       return useRoutes([
            {
                path: "",
                element: <Suspense><Home /></Suspense>
            },
            {
                path: "Auth",
                element: <Suspense><Auth /></Suspense>,
                children: [
                      {
                          path: "",
                        element: <Suspense><Login /></Suspense> 
                    },
                    {
                        path: "Register",
                        element: <Suspense><Register /></Suspense>
                    },
            ]
                             
                          
            }

        ])


  
}

export default RouteController