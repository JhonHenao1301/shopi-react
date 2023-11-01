
import { Link } from "react-router-dom";
import { BackIcon } from "../assets/Icons/Icons";
import OrderCard from "../components/OrderCard";
import Layout from "../components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

export default function MyOrder () {
    const { orders } = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    
    if (index === 'last') index = orders?.length - 1

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
                        orders?.[index]?.products.map(cartItem => (
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