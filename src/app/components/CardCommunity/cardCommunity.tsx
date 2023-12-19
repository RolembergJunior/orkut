import './cardCommunity.css'

export default function CardCommunity({image, alt, name}){
    return(
        <div className='community_container'>
            <img
                className='image_community'
                src={image}
                alt={alt}
            />
            <p>{name}</p>
        </div>
    )
}