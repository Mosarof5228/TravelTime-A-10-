import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SubNav = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
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
            <div className="pr-8 flex gap-4">
                <h1><span className="font-bold uppercase">Name : <span className="text-[#DAC675]">{user?.displayName
                }</span> </span> </h1>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img
                            src={user?.photoURL ? user.photoURL : "https://i.ibb.co.com/XVGQfZh/image.jpg"} // Fallback to a placeholder image
                            alt="User Avatar"
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SubNav;