import NavBar from '@/components/Navbar/navBar'
import './perfil.css'

export default function Sobre() {
    return(
        <>
        <NavBar/>
        <div className="container_profile"> 
            <img
                src='./perfil.jfif'
                alt='foto do programador'
                width={500}
                className='profile_photo'
            />
            <h1>Olá, seja bem vindo ao meu perfil</h1>
            <p className='profile_text'>Olá meu nome Rolemberg Junior e estou estudando para ser programador. Atualmente tenho 20
            anos e nesse projeto estou aprimorando minhas habilidades com html, css e principalmente Java. Esse projeto
            foi feito com base na biblioteca Next.js. O Next.js é uma "continuação" do React.js, onde nela possui algumas
            funcionalidades bem interessantes que otmizam o tempo e consequentemente a produtividade dos desenvolvedores.
            </p>
        </div>
        </>
        
    )
}