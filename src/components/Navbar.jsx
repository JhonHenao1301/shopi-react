import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon, MenuIcon } from "../assets/Icons/Icons";
import { ShoppingCartContext } from "../Context";

export default function Navbar () {
    const [ open, setOpen ] = useState()
    const { setCategory } = useContext(ShoppingCartContext)

    const typesProducts = [
        {name:'All', category: ''},
        {name:'Clothes', category: 'Clothes'},
        {name:'Electronics', category: 'Electronics'},
        {name:'Furniture', category: 'Furniture'},
        {name:'Story', category: 'toys'},
        {name:'Others', category: 'Others'}
    ]

    const otherActions = [
        {name:'My Orders', link:'/my-orders'},
        {name:'My Account', link:'/my-account'},
        {name:'Sign out', link: '/sign-out'}
    ]

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    return ( 
        <nav className="bg-gray-5 top-0 flex justify-between items-center p-4">
            <div className="navbar-section">
                <h2 className="font-bold">
                    <a href="/">Shopi</a>
                </h2>
                
                <select 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" 
                    onChange={handleChange}
                >
                    {
                        typesProducts.map(({name, category}) => (
                            <option 
                                key={name}
                                value={category}
                            >
                                { name }
                            </option>
                        ))
                    }
                </select>
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