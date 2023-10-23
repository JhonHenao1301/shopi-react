

export default function Card ({ image, title, description, price }) {
    return ( 
        <div className="flex flex-col gap-2">
            <picture>
                <img 
                    src={image} 
                    alt={description} 
                    className="w-48 h-48 rounded-lg"
                />
            </picture>
            <section className="flex gap-2">
                <p>{title}</p>
                <p>{price}</p>
            </section>
        </div>
    )
}