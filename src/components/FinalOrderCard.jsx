
import { Link } from "react-router-dom";
import { NextIcon } from "../assets/Icons/Icons";

export default function FinalOrderCard (props) {
    const { index, data, totalPrice } = props
    return ( 
        <div className="flex justify-between p-4 border rounded-md">
            <div className="flex flex-col">
                <span>01-12-23</span>
                <span>{data.length} articles</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-semibold">${totalPrice}</span>
                <span>
                    <Link to={`/my-orders/${index}`}>
                        <NextIcon />
                    </Link>
                </span>
            </div>
        </div>
    )
}