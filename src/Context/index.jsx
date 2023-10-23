
import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = (({ children }) => {

    const [ items, setItems ] = useState(null)
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then(data => setItems(data))
            .catch((error) => console.log(error))
    }, [])

    return ( 
        <ShoppingCartContext.Provider value={{
            items
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
})