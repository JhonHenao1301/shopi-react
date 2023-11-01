import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../Context";
import { BackIcon } from "../assets/Icons/Icons";
import OrderCard from "../components/OrderCard";
import Layout from "../components/Layout";

export default function MyOrders () {
    const { cart } = useContext(ShoppingCartContext)
    return (
        <Layout>
            <div className="flex flex-col gap-8 max-w-sm p-4">
                <div className="flex justify-between">
                    <span>
                        <Link to="/my-orders">
                            <BackIcon />
                        </Link>
                    </span>
                    <p className="flex-1 text-center font-semibold">My Order</p>
                </div>
                <div className="flex flex-col gap-6">
                    {
                        cart?.map(cartItem => (
                            <OrderCard
                                key={cartItem.id}
                                id={cartItem.id}
                                data={cartItem}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}