
import { useContext, useState } from "react";
import { AddToCartIcon } from "../assets/Icons/Icons";
import { ShoppingCartContext } from "../Context";
import ProductDetail from "./ProductDetail";

export default function Card ({ data }) {
    const { count, setCount, setIsOpenProductDetail, setProductToShow } = useContext(ShoppingCartContext)

    const handleAddButton = () => {
        setCount(count + 1)
    }

    const handleItemSelected = (itemData) => {
        setIsOpenProductDetail(true)
        setProductToShow(itemData)
    }

    return ( 
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => handleItemSelected(data)}>
            <figure className='relative bg-white mb-2 w-full h-4/5'>
                <span className='span-category'>
                    {data.category.name}
                </span>
                <div className="icon-plus-cart" onClick={handleAddButton}>
                    <AddToCartIcon className='w-6 h-6 text-slate-200'/>
                </div>
                {
                    data.images[0].search('https://placeimg.com/640/480/any')
                    ? <img className='w-full h-full object-cover rounded-lg'  src={data.images[0]} alt={data.title} />
                    : <img className='w-full h-full object-cover rounded-lg'  src="./no-image.jpg" alt={data.title} />
                }
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-semibold'>
                    ${data.price}
                </span>
            </p>
        </div>
    )
}