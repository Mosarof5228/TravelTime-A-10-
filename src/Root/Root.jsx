import Navbar from "../Shared/Navbar";
import SubNav from "../Shared/SubNav";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <SubNav></SubNav>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;