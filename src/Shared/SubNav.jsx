import { Link } from "react-router-dom";

const SubNav = () => {
    return (
        <div className="navbar bg-[#5D62FF] text-primary-content text-[#dbd7d7]">
            <button className="btn btn-ghost text-xl font-bold"><span className="text-[#dbd7d7]">Travel</span><span className="text-[#FAA61A] -ml-2">Time</span></button>
            <div className="flex flex-grow justify-evenly">
                <ul className="flex space-x-4">
                    <li><Link to="#">Facebook</Link></li>
                    <li><Link to="#">LinkedIn</Link></li>
                    <li><Link to="#">Twitter</Link></li>
                    <li><Link to="#">Portfolio</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default SubNav;