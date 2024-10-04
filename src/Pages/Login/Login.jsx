import "react-toastify/dist/ReactToastify.css";
import imgLogin from "/src/assets/login-removebg-preview.png";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { auth } from "../../Firebase/Firebase.config";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const goggleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                console.log(result.user);
                alert("successfully Loginj")
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
    };
    const toastNotify = () => {
        toast.success("Login Successfull!", {
            position: "top-right"
        });

    }

    const handleGoggle = () => {
        signInWithPopup(auth, goggleProvider)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toastNotify()
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toastNotify()
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 h-screen w-full bg-gradient-to-r from-[#8d7673] via-[#dbc774] to-[#1E90FF] relative">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="object-cover w-full h-full opacity-70"
                    src={imgLogin}
                    alt="Image"
                />
            </div>

            {/* Form Overlay */}
            <div className="hero-content relative z-10 flex flex-col justify-center items-center w-full h-full">

                <div className="card bg-white bg-opacity-90 w-full max-w-md p-5 shadow-2xl rounded-lg">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold transform transition-transform duration-300 ease-in-out hover:scale-110">
                            Please Login!~
                        </h1>
                    </div>

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                        <div className="flex gap-4 text-4xl items-center justify-center mt-2">
                            <span onClick={handleGoggle} className="text-[#4180F5]">< FaGoogle /></span>
                            <ToastContainer />

                            <span onClick={handleGithubLogin}>
                                < FaGithub />
                            </span>
                        </div>
                        <h2 className="text-center font-serif text-xs my-4">
                            Are You New Here? <Link className="text-red-400" to="/signup">Please Sign Up</Link>
                        </h2>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
