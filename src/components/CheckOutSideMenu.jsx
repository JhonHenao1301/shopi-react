
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { totalPrice } from "../utils/index"
import { Link } from "react-router-dom";
import { CloseMenuIcon } from "../assets/Icons/Icons"
import OrderCard from "./OrderCard"

export default function CheckOutSideMenu () {
    const { 
        cart, 
        setCart, 
        setIsOpenCheckout, 
        isOpenCheckout,
        orders,
        setOrders        
    } = useContext(ShoppingCartContext)

    const total = (products) => {
        return totalPrice(products)
    }

    const handleCloseMenu = () => {
        setIsOpenCheckout(false)
    }

    const handleDeleteButton = (id) => {
        setCart(cart?.filter(item => item.id !== id))
    }

    
    const handleCheckoutButton = () => {
        let id = crypto.randomUUID()
        const orderToAdd = {
            id: id,
            products: cart,
            totalPrice: total(cart)
        }

        setOrders([...orders, orderToAdd])
        localStorage.setItem('__cart__orders__', JSON.stringify(orders))
        setIsOpenCheckout(false)
        setCart([])
    }

    return ( 
        <aside className={`${isOpenCheckout ? 'flex' : 'hidden'} checkout flex-col justify-between gap-4 fixed right-0 border border-black rounded-lg bg-gray-5 py-4 px-2`}>
            <div className='flex justify-between items-center px-4'>
                <h2 className='font-semibold text-xl'>My Order</h2>
                <button
                    onClick={handleCloseMenu}>
                    <CloseMenuIcon />
                </button>
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
                <button 
                    className="border rounded-lg bg-gray-30 text-gray-5 p-2"
                    onClick={handleCheckoutButton}
                >
                    <Link to="/my-orders/last">
                        Checkout
                    </Link>
                </button>
            </div>
        </aside>
    )
}