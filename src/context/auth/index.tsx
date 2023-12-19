import Cookie from 'js-cookie'
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";


export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const router = useRouter();

    
    function handleLogin(profiles){
        if(profiles.email && profiles.password){
            setUser({...user, profiles})

            Cookie.set('auth_token', 'asdasdasdqwenhjdwqosdiuhsakjs')

            router.push('/home')
        }
    

    }
    
    function handleLogout(e){

        if(e.target.value === "logout"){
            Cookie.remove('auth_token')

            router.push('/')
        }      
    }

    return(
        <AuthContext.Provider value={{handleLogin, handleLogout, user, setUser}}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    )
}