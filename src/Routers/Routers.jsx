import Home from "../Home/Home";
import Login from "../Pages/Login/Login";
import Root from "../Root/Root";
import SignUp from "../Pages/SignUp/SignUp";

import {
    createBrowserRouter,
} from "react-router-dom";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);