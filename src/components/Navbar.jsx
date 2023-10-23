import { useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon, MenuIcon } from "../assets/Icons/Icons";

export default function Navbar () {
    const [ open, setOpen ] = useState()
    const activeStyle = 'underline underline-offset-4'

    const typesProducts = [
        {name:'All', link:'/'},
        {name:'Clothes', link:'/'},
        {name:'Electronics', link: '/'},
        {name:'Furniture', link: '/'},
        {name:'Toys', link:'/'},
        {name:'Others', link:'/'}
    ]

    const otherActions = [
        {name:'My Orders', link:'/my-orders'},
        {name:'My Account', link:'/my-account'},
        {name:'Sign out', link: '/sign-out'}
    ]

    return ( 
        <nav className="bg-gray-5 top-0 flex justify-between items-center p-4">
            <div className="navbar-section">
                <h2 className="font-bold">
                    <a href="/">Shopi</a>
                </h2>
                <ul className='flex gap-4'>
                    {
                        typesProducts.map(({name, link}) => (
                            <li key={name}>
                                <Link to={link} className="navbar-link">
                                    { name }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div 
                onClick={()=>setOpen(!open)} 
                className='text-3xl cursor-pointer bg-red lg:hidden'
            >
                <MenuIcon name={open ? 'close':'menu'} />
            </div>
            <ul className={`navbar-ul ${open ? 'top-16 ': 'top-[-490px]'}`}>
                <li>
                    <span className="text-gray-10">j.henao@gmail.com</span>
                </li>
                {
                    otherActions.map(({name, link}) => (
                        <li key={name}>
                            <Link to={link} className="navbar-link">
                                { name }
                            </Link >
                        </li>
                    ))
                }
                <li className="icon">
                    <CartIcon />
                    <span className="icon-number">3</span>
                </li>
            </ul>
        </nav>
    )
}