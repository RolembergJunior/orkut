import './cardFriend.css'

export default function CardFriend({src, alt, name}){
    return(
        <div className='card_box'>
            <img
                className="image_card"
                src={src}
                alt={alt}
            />
            <p>{name}</p>
        </div>
    )
}