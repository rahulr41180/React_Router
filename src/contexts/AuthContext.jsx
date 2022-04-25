
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    
    const [IsAuth, setIsAuth] = useState(false);

    const handleAuth = (state) =>{

        setIsAuth(state);

    }

    return (
        <AuthContext.Provider value = {{IsAuth, handleAuth}}>{children}</AuthContext.Provider>
    )
}