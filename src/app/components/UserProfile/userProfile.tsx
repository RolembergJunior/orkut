import './userProfile.css'
import imageUser from  './user_profile.png'

export default function UserProfile(){
    return(
        <div className='subcontainer'>
            <div className='user_profile'>
            <img
            src= '/user_profile.png'
            />
            <h1 className='name_profile'>Rolemberg Junior</h1>
            <p className='stats_profile'>Solteiro, Brasil</p>
            <button>Editar meu perfil</button>
            </div>

        </div>
    )
}
