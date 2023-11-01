import FinalOrderCard from "../components/FinalOrderCard";
import Layout from "../components/Layout";

export default function MyOrders () {
    return ( 
        <Layout>
            <h1>My Orders</h1>
            <div className="w-72">
                {
                    <FinalOrderCard />
                }
            </div>
        </Layout>
    )
}