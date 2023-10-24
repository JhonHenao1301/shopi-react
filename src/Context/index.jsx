
import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = (({ children }) => {

    const [ items, setItems ] = useState(null)
    const [ filteredItems, setFilteredItems ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ category, setCategory ] = useState('')
    
    // Get all data from API
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then(data => setItems(data))
            .catch((error) => console.log(error))
    }, [])

    // Filter by category
    const filterByCategory = (items, category) => {
        return items?.filter(item => item.category.name.includes(category))
    }

    useEffect(() => {
        setLoading(true)
        if(category === '') setFilteredItems(items)
        if(category) setFilteredItems(filterByCategory(items, category))
        setLoading(false)
    }, [items, category])

    return ( 
        <ShoppingCartContext.Provider value={{
            filteredItems,
            setCategory,
            loading,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
})