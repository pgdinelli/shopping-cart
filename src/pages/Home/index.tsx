import { BsCartPlus } from 'react-icons/bs'

export function Home() {
  return (
    <div className="bg-cyan-950 text-white h-screen">
      <main className="w-full max-w-7xl px-4 py-8 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <section className="w-full flex flex-col items-center justify-center">
            <img src="https://freepngimg.com/thumb/earphone/117117-airpods-download-hd.png#google_vignette" 
            alt="Logo do produto" 
            className="w-full rounded-lg max-h-70 mb-2"
            />
            <p className="font-medium mt-1 mb-2">AirPods Pro</p>

            <div className="flex gap-3 items-center justify-content-center">
              <strong className='text-gray-50/90'>R$ 1299.99</strong>
              <button className='bg-zinc-900 p-1.5 rounded hover:cursor-pointer' title='Adicionar ao carrinho'>
                <BsCartPlus size={20} color='#FFF' />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}