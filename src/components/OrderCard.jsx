
import { CloseMenuIcon } from "../assets/Icons/Icons"


export default function OrderCard (props) {

    const { id, data, handleDeleteButton } = props

    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img
                    className="w-16 h-16 rounded-lg" 
                    src={data.images[0]} 
                    alt={data.title} />
                <p>{data.title}</p>
            </div>
            <div className="flex gap-2">
                <span className="font-semibold">{data.price}</span>
                <span
                    className="cursor-pointer"
                    onClick={() => handleDeleteButton(id)}
                >
                    <CloseMenuIcon />
                </span>
            </div>
            
        </div>
    )
}