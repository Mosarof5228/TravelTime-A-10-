import imgLogin from "/src/assets/login-removebg-preview.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
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

                <div className="card bg-white bg-opacity-90 w-full max-w-md p-10 shadow-2xl rounded-lg">
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
