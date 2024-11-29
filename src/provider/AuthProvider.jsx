import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../config/fireBaseConfig";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);

export const AuthProvier = ({children}) =>{

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const data = getUserFromLocal();
        setUser(data)
    },[])

    const loginWithGoogle = async ()=>{
     try {
        const google = await signInWithPopup(auth,googleProvider)
     console.log(google);
     storeDataAtLocal(google.user)
     setUser(google.user);
     return true
     } catch (error) {
        throw new Error(error.message.toString())
     }
     
    }

    const login = async (userData)=>{
        try {
          const google = await signInWithEmailAndPassword(auth,userData.email,userData.password);
          console.log(google);
          storeDataAtLocal(google.user)
          setUser(google.user);
            return true;
        } catch (error) {
            console.log(error.message.toString());
            
            throw new Error(error.message.toString());
            
        }
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
    }

    const isAuth = ()=>{
        return user!==null ?true:false
    }

    const storeDataAtLocal =(data)=>{
        const rawData = JSON.stringify(data);
        localStorage.setItem("user",rawData)

    }

    const getUserFromLocal=()=>{
        const rawData = localStorage.getItem("user");
    if(rawData===undefined || rawData === null){
        return null
    }
    else{
        const user = JSON.parse(rawData);
        return user;
    }

    }

    return (
        <AuthContext.Provider value={{user,login,logout,isAuth,loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>{
    return useContext(AuthContext)
}