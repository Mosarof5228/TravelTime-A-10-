import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.config";

// Create a context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        name: "Md. Mosarof Hossen",
        userCreate,
        userLogin,

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
