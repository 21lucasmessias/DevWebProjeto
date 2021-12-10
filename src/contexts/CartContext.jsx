import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
    const [cart, cartSet] = useState([])

    return (
        <CartContext.Provider
            value={{
                cart,
                cartSet
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
