import { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'

import { api } from '../../services/api'

interface ProductProps {
  id: number
  title: string
  description: string
  price: number
  cover: string
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products')
      setProducts(response.data)
    }
    fetchProducts();
  }, [])

  return (
    <div className="bg-cyan-950 text-white h-screen">
      <main className="w-full max-w-7xl px-4 py-8 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <section className="w-full">
            <img src={product.cover} 
            alt={product.title} 
            className="w-full rounded-lg max-h-70 mb-2"
            />
            <p className="font-medium mt-1 mb-2">{product.title}</p>
            <div className="flex gap-3 items-center justify-content-center">
              <strong className='text-gray-50/90'>{product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</strong>
              <button className='bg-zinc-900 p-1.5 rounded hover:cursor-pointer' title='Adicionar ao carrinho'>
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