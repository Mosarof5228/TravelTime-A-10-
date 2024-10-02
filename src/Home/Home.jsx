import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name)
    return (
        <div className="max-w-7xl mx-auto px-4 ">
            <h2>My name is: {name}</h2>
        </div>
    );
};

export default Home;