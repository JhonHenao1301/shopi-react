
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import Card from "../components/Card"
import Layout from "../components/Layout"
import Loader from "../components/Loader"
import ProductDetail from "../components/ProductDetail"

export default function Home () {

    const { loading, 
            filteredItems, 
            setSearch,
          } = useContext(ShoppingCartContext)
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
                onChange={(event) => setSearch(event.target.value)} 
            />
            <div className='grid grid-cols-fits gap-8 px-4 justify-center w-full max-w-screen-xl '>
                {
                    filteredItems?.length > 0
                    ?   !loading
                        ?   filteredItems?.map(item => (
                                <Card 
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        :   <Loader />
                    : <h1 className="mt-4 text-center">No images found</h1>
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}