import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
    const { userCreate } = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkeed = form.terms.checked;
        if (password < 6) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must be minimum 6 character",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must be One Uppercase",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password Must be one Lowercase",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }
        else if (!checkeed) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Accept Terms and condition",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }

        console.log(name, photo, email, password, checkeed)
        userCreate(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            })
            .catch(error => {
                const message = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                return;
            })


    }
    return (
        <div className="hero bg-base-200 h-screen w-full bg-gradient-to-r from-[#8d7673] via-[#dbc774] to-[#1E90FF]">

            <div className="hero-content flex-col shadow-2xl p-20 md:flex-row">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="text-center lg:text-left pt-4 pl-4">
                        <h1 className="md:text-5xl text-3xl  font-bold transform transition-transform duration-300 ease-in-out hover:scale-110">
                            Sign Up Now
                        </h1>

                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
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
                            <div className="form-control pt-2">
                                <label className="cursor-pointer label">

                                    <input type="checkbox" defaultValue={FontFaceSetLoadEvent} name="terms" className="checkbox checkbox-secondary" />
                                    <span className="label-text"><a className="text-blue-500">Please Accept Terms And Condition</a></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <h2 className="text-center font-serif text-xs my-4">Already have an account <Link className="text-red-400" to='/login'>Please Login</Link></h2>
                    </form>
                </div>
                <div className="hidden md:block transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <img src="/src/assets/signup.png" alt="Signup" />
                </div>

            </div>
        </div>
    );
};

export default SignUp;