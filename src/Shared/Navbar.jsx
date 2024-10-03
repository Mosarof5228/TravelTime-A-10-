import logo from "/src/assets/travel time second logo.png";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { auth } from "../Firebase/Firebase.config";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const NavInfo = <>
        <li><Link className="btn  bg-[#C6C184]  btn-sm mx-2 hover:bg-yellow-500">Home</Link></li>
        <li><Link className="btn  bg-[#C6C184] btn-sm mx-2 hover:bg-yellow-500">All Tourists Spot</Link></li>
        <li><Link className="btn  bg-[#C6C184] btn-sm mx-2 hover:bg-yellow-500">Add Tourists Spot</Link></li>
        <li><Link className="btn  bg-[#C6C184] btn-sm mx-2 hover:bg-yellow-500">My List</Link></li>

    </>
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Logout Success")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100  bg-[#aeb0f3] px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {NavInfo}
                    </ul>
                </div>
                <Link>
                    <img className="w-44 h-14" src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavInfo}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} to='/logOut' className="btn btn-sm mx-2 bg-[#C6C184] hover:bg-yellow-500">Log Out</button> : <div>
                        <Link to='/login' className="btn btn-sm mx-2 bg-[#C6C184] hover:bg-yellow-500">Login</Link>
                        <Link to='/signup' className="btn btn-sm  bg-[#C6C184] hover:bg-yellow-500">Sign Up</Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;