
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import Card from "../components/Card"
import Layout from "../components/Layout"

export default function Home () {

    const { items } = useContext(ShoppingCartContext)
    return ( 
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className="font-medium text-xl">
                    Exclusive products
                </h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                // onChange={(event) => context.setSearchByTitle(event.target.value)} 
            />
            <div className='grid grid-cols-fits gap-8 justify-center w-full max-w-screen-lg '>
                {
                    items?.map(item => (
                        <Card 
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}