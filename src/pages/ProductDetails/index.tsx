import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from "../../context/CartContext";

import { type ProductProps } from "../Home";
import { api } from "../../services/api";
import toast from "react-hot-toast";

export function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductProps | null>(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        async function fetchProduct() {
            const response = await api.get(`products/${id}`);
            setProduct(response.data);
            console.log(response.data);
        }
        fetchProduct();
    }, []);

    function handleAddToCart(product: ProductProps) {
    toast.success('Produto adicionado ao carrinho!', {
      duration: 2500,
      style: {
        background: '#333',
        color: '#fff',
        borderRadius: 10,
      }
    });
    addToCart(product);
  }

    return (
        <div className="bg-cyan-950 text-white h-screen w-full">
            <main className="w-full max-w-7xl px-4 py-8 mx-auto">
                {product && (
                    <section key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <img src={product.cover} 
                        alt={product.title} 
                        className="w-full rounded-lg max-w-lg mb-2"
                        />
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-2xl">{product.title}</h1>
                            <p>{product.description}</p>
                            <div className="flex gap-3 items-center justify-content-center">
                                <strong className='text-gray-50/90'>{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</strong>
                                <Link to={`/cart`}>
                                    <button className='bg-zinc-900 p-1.5 rounded hover:cursor-pointer'
                                    title='Adicionar ao carrinho'
                                    onClick={() => handleAddToCart(product)}
                                    >
                                        <BsCartPlus size={20} color='#FFF' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}