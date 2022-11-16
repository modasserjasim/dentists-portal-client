import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createAccount,
        loginWithEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;