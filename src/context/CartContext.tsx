import { createContext, type ReactNode, useState } from 'react'
import type { ProductProps } from '../pages/Home'

interface CartContextData {
    cart: CartProps[],
    cartAmount: number,
    addToCart: (product: ProductProps) => void
}

interface CartProps {
    id: number
    title: string
    description: string
    price: number
    cover: string
    amount: number
    total: number
}

interface CartProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])

    function addToCart(product: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === product.id)
        // if findIndex returns -1, it means the item is not in the cart yet
        if (indexItem !== -1) {
            // If the item is already in the cart, we can update its amount and total
            let cartList = cart;
            
            cartList[indexItem].amount += 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            
            setCart(cartList);
            return;
        }

        // If the item is not in the cart, we can add it with amount 1 and total equal to its price
        let data = {
            ...product,
            amount: 1,
            total: product.price
        }

        setCart(products => [...products, data]);
    }

    return (
        <CartContext.Provider 
        value={{ 
            cart,
            cartAmount: cart.length,
            addToCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider