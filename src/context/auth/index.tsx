import Cookie from 'js-cookie'
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import { ChangeEvent, ReactNode, createContext, useState } from "react";


export const AuthContext = createContext();

interface ProfilesData{
    email: string,
    password: string
}

interface TypeFunction{
    // handleLogin: (formData:{email: string, password: string}) => undefined,
    handleLogout: (e:ChangeEvent<HTMLSelectElement>) => undefined
}


export const AuthProvider:React.FC<ReactNode> = ({children}) => {
    const [user, setUser] = useState({});
    const router = useRouter();

    
    function handleLogin(profiles:ProfilesData){
        if(profiles.email && profiles.password){
            setUser({...user, profiles})

            Cookie.set('auth_token', 'asdasdasdqwenhjdwqosdiuhsakjs')

             return router.push('/home')
        }
    

    }
    
    function handleLogout(e):TypeFunction{

        if(e.target.value === "logout"){
            Cookie.remove('auth_token')

            return router.push('/')
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