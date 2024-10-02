import Home from "../Home/Home";
import Root from "../Root/Root";

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
            }
        ]
    },
]);