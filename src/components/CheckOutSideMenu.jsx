
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { CloseMenuIcon } from "../assets/Icons/Icons"
import OrderCard from "./OrderCard"

export default function CheckOutSideMenu () {
    const { cart, isOpenCheckout } = useContext(ShoppingCartContext)

    return ( 
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} checkout flex-col gap-6 fixed right-0 border border-black rounded-lg bg-gray-5 py-4 px-2`}>
            <div className='flex justify-between items-center px-4'>
                <h2 className='font-semibold text-xl'>My Order</h2>
                <div
                    className='h-6 w-6 text-black cursor-pointer' >
                    <CloseMenuIcon/>
                </div>
            </div>
            <div className="flex flex-col gap-4 px-4">
                {   
                    // console.log(cart)
                    cart?.map((cartItem) => (
                        <OrderCard data={cartItem} key={cartItem.id} />
                    ))
                }
            </div>
        </aside>
    )
}