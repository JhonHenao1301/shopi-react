import { useContext } from "react";
import FinalOrderCard from "../components/FinalOrderCard";
import Layout from "../components/Layout";
import { ShoppingCartContext } from "../Context";
import { Link } from "react-router-dom";

export default function MyOrders () {
    const { orders } = useContext(ShoppingCartContext)
    return ( 
        <Layout>
            <h1 className="font-semibold text-subtitle">My Orders</h1>
            <div className="flex flex-col gap-4 mt-4 w-72">
                {   
                    orders.map((order, index) => (
                        <Link key={order.id} to={`/my-orders/${index}`}>
                            <FinalOrderCard
                                key={order.id}
                                index={index}
                                data={order.products}
                                totalPrice={order.totalPrice}
                            />
                        </Link>
                    ))
                }
            </div>
        </Layout>
    )
}