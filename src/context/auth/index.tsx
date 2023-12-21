import Cookie from 'js-cookie'
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import { ChangeEvent, ReactNode, createContext, useState } from "react";


interface ProfilesData{
    email: string,
    password: string
}

interface Junin{
    handleLogout: (e:ChangeEvent<HTMLSelectElement>) => void
    handleLogin: (formData:ProfilesData) => void,
    user: object,
    setUser: (user: {}) => void
}

export const AuthContext = createContext({} as Junin);

interface Props{
    children:React.FC<ReactNode> 
}

export const AuthProvider = ({children}:Props ) => {
    const [user, setUser] = useState({});
    const router = useRouter();

    
    function handleLogin(profiles:ProfilesData){
        if(profiles.email && profiles.password){
            setUser({...user, profiles})

            Cookie.set('auth_token', 'asdasdasdqwenhjdwqosdiuhsakjs')

            return router.push('/home')
        }
    

    }
    
    function handleLogout(e:ChangeEvent<HTMLSelectElement>):void{

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