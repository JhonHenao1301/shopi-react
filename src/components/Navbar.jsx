import { useState } from "react";
import { CartIcon, MenuIcon } from "../assets/Icons/Icons";

export default function Navbar () {
    const [ open, setOpen ] = useState()

    const typesProducts = [
        {name:'All', link:'#home'},
        {name:'Clothes', link:''},
        {name:'Electronics', link: ''},
        {name:'Furniture', link: ''},
        {name:'Toys', link:''},
        {name:'Others', link:''}
    ]

    const otherActions = [
        {name:'My Orders', link:''},
        {name:'My Account', link:''},
        {name:'Sign out', link: ''}
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
                                <a href={link} className="navbar-link">
                                    {name}
                                </a>
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
                            <a className="navbar-link" href={link}>
                                {name}
                            </a>
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