

export default function OrderCard ({ data }) {
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img
                    className="w-16 h-16 rounded-lg" 
                    src={data.images[0]} 
                    alt={data.title} />
                <>{data.title}</>
            </div>
            <div className="flex gap-2">
                <p className="font-semibold">{data.price}</p>
                <p>X</p>
            </div>
            
        </div>
    )
}