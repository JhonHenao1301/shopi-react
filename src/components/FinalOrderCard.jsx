
import { Link } from "react-router-dom";
import { NextIcon } from "../assets/Icons/Icons";

export default function FinalOrderCard () {
    return ( 
        <div className="flex justify-between p-4 border rounded-md">
            <div className="flex flex-col">
                <span>01-12-23</span>
                <span>4 articles</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-semibold">$0000</span>
                <span>
                    <Link to="/my-order">
                        <NextIcon />
                    </Link>
                </span>
            </div>
        </div>
    )
}