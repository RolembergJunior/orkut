import NavBar from '@/components/Navbar/navBar'
import CardCommunity from '../components/CardCommunity/cardCommunity'
import './home.css'
import UserProfile from '../components/UserProfile/userProfile'
import DataBaseProfile from '../components/DataBaseProfile/dataBaseProfile'
import CardFriend from '../components/CardFriend/cardFriend'



export default function Home() {
  return (
    <>
    <NavBar/>
      <main className='container'>
          <UserProfile/>
          <DataBaseProfile/>
          <div className='Friends_box'>
            <CardFriend name='Fernando' src='./Fernando.png' alt='Foto do amigo'/>
            <CardFriend name='Ana' src='./Ana.png' alt='Foto do amigo'/>
            <CardFriend name='Carlos' src='./Carlos.png' alt='Foto do amigo'/>
            <CardFriend name='Vitor' src='./Vitor.png' alt='Foto do amigo'/>
            <CardFriend name='Matheus' src='./Matheus.png' alt='Foto do amigo'/>
            <CardFriend name='Ramos' src='./Ramos.png' alt='Foto do amigo'/>
            <CardFriend name='Eji' src='./Eji.png' alt='Foto do amigo'/>
            <CardFriend name='Julia' src='./Julia.png' alt='Foto do amigo'/>
            <CardFriend name='Carol' src='./Carol.png' alt='Foto do amigo'/>
          </div>
        <div className='community_box'>
          <CardCommunity name='' image='./Frame 10.png' alt=''/>
          <CardCommunity name='' image='./Frame 11.png' alt=''/>
          <CardCommunity name='' image='./Frame 12.png' alt=''/>
          <CardCommunity name='' image='./Frame 13.png' alt=''/>
          <CardCommunity name='' image='./Frame 14.png' alt=''/>
          <CardCommunity name='' image='./Frame 15.png' alt=''/>
          <CardCommunity name='' image='./Frame 16.png' alt=''/>
          <CardCommunity name='' image='./Frame 17.png' alt=''/>
          <CardCommunity name='' image='./Frame 18.png' alt=''/>
        </div>
      </main>
    </>
  )
}


