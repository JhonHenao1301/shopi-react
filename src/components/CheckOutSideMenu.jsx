
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { CloseMenuIcon } from "../assets/Icons/Icons"
import { totalPrice } from "../utils/index"
import OrderCard from "./OrderCard"

export default function CheckOutSideMenu () {
    const { cart, setCart, setIsOpenCheckout, isOpenCheckout } = useContext(ShoppingCartContext)
    const total = (products) => {
        return totalPrice(products)
    }

    const handleCloseMenu = () => {
        setIsOpenCheckout(false)
    }

    const handleDeleteButton = (id) => {
        setCart(cart?.filter(item => item.id != id))
    }  

    return ( 
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} checkout flex-col justify-between gap-4 fixed right-0 border border-black rounded-lg bg-gray-5 py-4 px-2`}>
            <div className='flex justify-between items-center px-4'>
                <h2 className='font-semibold text-xl'>My Order</h2>
                <div
                    className='h-6 w-6 text-black cursor-pointer'
                    onClick={handleCloseMenu}
                >
                    <CloseMenuIcon />
                </div>
            </div>
            <div className="flex flex-col gap-4 px-4 overflow-y-scroll flex-1">
                {
                    cart?.map((cartItem) => (
                        <OrderCard 
                            key={cartItem.id}
                            id={cartItem.id}
                            data={cartItem}
                            handleDeleteButton={handleDeleteButton}
                        />    
                    ))
                }
            </div>
            <div className="flex flex-col gap-2 px-2">
                <p className="flex justify-between ">
                    <span>Total</span>
                    <span className="font-semibold">${total(cart)}</span>
                </p>
                <button className="border rounded-lg bg-gray-30 text-gray-5 p-2">
                    Checkout
                </button>
            </div>
        </aside>
    )
}