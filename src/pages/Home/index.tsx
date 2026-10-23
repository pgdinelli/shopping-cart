import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'

import { api } from '../../services/api'
import { CartContext } from '../../context/CartContext'
import toast from 'react-hot-toast'

export interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  cover: string
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products')
      setProducts(response.data)
    }
    fetchProducts();
  }, [])

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
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <Link to={`/product/${product.id}`}>
                <img src={product.cover}
                  alt={product.title}
                  title='Clique para ver detalhes do produto'
                  className="w-full rounded-lg max-h-70 mb-2 hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="font-medium mt-1 mb-2">{product.title}</p>
              <div className="flex gap-3 items-center justify-content-center">
                <strong className='text-gray-50/90'>{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</strong>
                <button className='bg-zinc-900 p-1.5 rounded hover:cursor-pointer' 
                title='Adicionar ao carrinho'
                onClick={() => handleAddToCart(product)}
                >
                  <BsCartPlus size={20} color='#FFF' />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}