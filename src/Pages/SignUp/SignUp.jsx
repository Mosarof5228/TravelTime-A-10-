const SignUp = () => {
    return (
        <div className="hero bg-base-200 h-screen w-full bg-gradient-to-r from-[#8d7673] via-[#dbc774] to-[#1E90FF]">

            <div className="hero-content flex-col shadow-2xl p-20 md:flex-row">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="text-center lg:text-left pt-4 pl-4">
                        <h1 className="md:text-5xl text-3xl  font-bold transform transition-transform duration-300 ease-in-out hover:scale-110">
                            Sign Up Now
                        </h1>

                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
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