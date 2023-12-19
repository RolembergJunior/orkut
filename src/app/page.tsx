'use client'

import Link from 'next/link'
import './login.css'
import { useContext, useState } from 'react'
import { AuthContext } from '@/context/auth'
import { useRouter } from 'next/navigation'


export default function Login(){
const { user, setuser, handleLogin, handleLogout } = useContext(AuthContext);
const [formData, setFormData] = useState({
    email:'',
    password: ''
})

const router = useRouter()

function handleFormEdit(e, name){
    setFormData({...formData, [name]: e.target.value })
}

function handleSumit(e){
        e.preventDefault()

        handleLogin(formData)
}

    return(
        <>
           <div className='header'>
                <img 
                    src="/logo-orkut.png"
                    alt="Logo Orkut" 
                 />
                <ul>
                    <Link className='about_and-security' href= '/sobreoorkut'> Sobre o Orkut</Link>
                    <Link className='about_and-security' href= '/seguranca'>Central de Segurança</Link>
                </ul>
            </div> 
            <div className='form_box'>
                <img className='image_login'
                    src='./image-login.png'
                />
                <form className='form' onSubmit={(e) => {handleSumit(e)}}>
                    <img
                        src='./form-image.png'
                        alt='imagem do formulário'
                        width={160}
                    />
                    <input className='input_field' type='email' required  placeholder='E-mail' value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                    <input className='input_field' type="password" required  placeholder='Senha'  value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                    <button type='submit' className='login_button'>Entrar na minha conta</button>
                    <button className='register_button'>Criar uma conta</button>
                    <Link className='password_restore' href='/recuperaconta' >Esqueci a minha senha</Link>
                </form>
            </div>
        </>
    )
}
