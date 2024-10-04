import Slider from "./Slider/Slider";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name)
    return (
        <div className="">
            <h2>My name is: {name}</h2>
            <Slider></Slider>
        </div>
    );
};

export default Home;