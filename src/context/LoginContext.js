import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const LoginContext = createContext();


export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })
    
    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({
                email: null,
                logged: false,
                uid: null
            })
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })
            } else {
                logout()
            }
        })
    },[])

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    return(
        <LoginContext.Provider value={{
            user,
            register,
            login,
            logout,
            googleLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}