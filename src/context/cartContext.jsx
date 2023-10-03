import { createContext, useState } from "react";
import App from "../App";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    const addItem = (item, quantity) => {
        setCart([ ...cart, { ...item, quantity }]);
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(producto => producto.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const inInCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
    
        cart.forEach(producto => {
        totalQuantity += producto.quantity
        })
    
        return totalQuantity
    }
    
    const totalQuantity = getTotalQuantity()
    
    const getTotal = () => {
        let total = 0
    
        cart.forEach(producto => {
        total += producto.quantity * producto.precio
        })
    
        return total
    }
    
    const total = getTotal()


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
