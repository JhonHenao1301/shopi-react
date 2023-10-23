
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import Card from "../components/Card"

export default function Home () {

    const { items } = useContext(ShoppingCartContext)
    return ( 
        <div className="flex flex-col gap-6">
            <h1>Home</h1>
            <div className="flex flex-col md:grid md:grid-cols-4 gap-4 ">
                {
                    items?.map(item => (
                        <Card 
                            key={item.id}
                            image={item.images}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    )
}