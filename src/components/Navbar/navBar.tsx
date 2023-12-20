'use client'

import { ChangeEvent, useContext } from 'react';
import './navBar.css'
import { AuthContext } from '@/context/auth';
import ActiveLink from '../ActiveLink/activeLink';



export default function NavBar(){
    const { handleLogout }:TypeFunction = useContext(AuthContext);


    return(
        <div className='cabecalho'>
            <div  className='navbar'>
                <img
                    src="/logo-orkut.png"
                    width={150}
                    height={50}
                    alt="Logo Orkut"
                />
                <ul className='lista'>
                    <li className='iten_lista'><ActiveLink href='/home'>Início</ActiveLink></li>
                    <li className='iten_lista'><ActiveLink href='/perfil'>Perfil</ActiveLink></li>
                    <li className='iten_lista'><ActiveLink href='/Comunidades'>Comunidades</ActiveLink></li>
                    <li className='iten_lista'><ActiveLink href='/Jogos'>Jogos</ActiveLink></li>
                </ul>
            </div>
            <div className='login'>
                <input type="scearch" className='search_box' placeholder='Pesquisar no Orkut'/>
                <img 
                    className='image_user'
                    src="/User_image.png" 
                    width={40}
                    height={40}
                    alt="Icone de usuário"
                />
                <select className='link_select' onChange={(e) => handleLogout(e)}>
                    <option className='options'></option>
                    <option className='options' value="config">Configurações</option>
                    <option className='options' value="logout">Sair</option>
                </select>
            </div>
        </div>
    )
}