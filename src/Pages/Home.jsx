
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../Context"
import Card from "../components/Card"
import Layout from "../components/Layout"
import ProductDetail from "../components/ProductDetail"
import CheckOutSideMenu from "../components/CheckOutSideMenu"
import { BackIcon, DoubleBackIcon, DoubleNextIcon, NextIcon } from "../assets/Icons/Icons"
// import Loader from "../components/Loader"

export default function Home () {

    const { 
        loading, 
        filteredItems,
        setSearch,
    } = useContext(ShoppingCartContext)
    
    const [ currentPage, setCurrentPage ] = useState(0)
    const totalItems = filteredItems?.length
    const range = 12

    const itemsPerPage = filteredItems?.slice(currentPage, currentPage + range)

    const firstPage = () => {
        setCurrentPage(0)
    }

    const previousPage = () => {
        if (currentPage >= range)
        setCurrentPage(currentPage - range)
    }

    const nextPage = () => {
        if(totalItems > currentPage + range)
        setCurrentPage(currentPage + range)
    }

    const lastPage = () => {
        if((totalItems % range) === 0) {
            setCurrentPage(totalItems - range)
        } 
            else {
                setCurrentPage(totalItems - (totalItems % range))
            }
    }
 
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
                    itemsPerPage?.length > 0 && !loading
                        ?   itemsPerPage?.map(item => (
                                <Card 
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        : <h1 className="my-4 text-center">No images found</h1>
                        // :   <Loader />
                }
            </div>
            <div className="flex gap-6 mt-4 justify-center">
                <button className="border p-2 rounded-lg" onClick={firstPage}>
                    <DoubleBackIcon />
                </button>
                <button className="border p-2 rounded-lg mr-4" onClick={previousPage}>
                    <BackIcon />
                </button>
                <button className="border p-2 rounded-lg ml-4" onClick={nextPage}>
                    <NextIcon />
                </button>
                <button className="border p-2 rounded-lg" onClick={lastPage}>
                    <DoubleNextIcon />
                </button>
            </div>
            <ProductDetail />
            <CheckOutSideMenu />
        </Layout>
    )
}