import { createContext, type ReactNode, useState } from 'react'
import type { ProductProps } from '../pages/Home'

interface CartContextData {
    cart: CartProps[],
    cartAmount: number,
    addToCart: (product: ProductProps) => void,
    removeFromCart: (product: CartProps) => void,
    total: string
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
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addToCart(product: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === product.id)
        // if findIndex returns -1, it means the item is not in the cart yet
        if (indexItem !== -1) {
            // If the item is already in the cart, we can update its amount and total
            let cartList = cart;
            
            cartList[indexItem].amount += 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        // If the item is not in the cart, we can add it with amount 1 and total equal to its price
        let data = {
            ...product,
            amount: 1,
            total: product.price
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data]);
    }

    function removeFromCart(product: CartProps) {
        const indexItem = cart.findIndex(item => item.id === product.id);
        if (cart[indexItem]?.amount > 1) {
            let cartList = cart;
            cartList[indexItem].amount -= 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items: CartProps[]) {
        let myCart = items;
        let total = myCart.reduce((acc, item) => acc + item.total, 0);
        const formatedTotal = total.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
        setTotal(formatedTotal);
    }

    return (
        <CartContext.Provider 
        value={{ 
            cart,
            cartAmount: cart.length,
            addToCart,
            removeFromCart,
            total
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider