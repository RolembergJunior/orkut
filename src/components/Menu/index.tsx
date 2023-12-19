import Link from 'next/link'
import { AiOutlineMenuUnfold } from 'react-icons/ai'

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

export function Menu({ isVisible, onClose }: MenuProps){
     

    return(
        <div
        className={`${ isVisible ? 'flex' : 'hidden' }`}
        >
            <div>
                <div>
                    <Link href="/home" >
                        <img 
                            src="./logo-orkut.png"
                            width={100}
                            height={50}
                            alt="logo"
                        />
                    </Link>
                    <button onClick={onClose}>
                        <AiOutlineMenuUnfold/>
                    </button>
                </div>
                <nav>
                    <Link href='/configurações' >Configurações</Link>
                    <Link href='/sair'>Sair</Link>
                </nav>
            </div>
        </div>
    )
}