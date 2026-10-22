export function Cart() {
  return (
    <div className="bg-cyan-950 text-white h-screen w-full">
      <main className="w-full max-w-7xl px-4 py-8 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center text-white">Carrinho de compras</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-600 py-4">
          <img src="https://freepngimg.com/thumb/earphone/117117-airpods-download-hd.png#google_vignette" 
          alt="Imagem do produto" 
          className="w-28"
          />

          <strong>Preço: R$ 1299.99</strong>

          <div className="flex items-center justify-center gap-3">
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center hover:cursor-pointer" title="Remover unidade">
              -
            </button>
            <span>2</span>
            <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center hover:cursor-pointer" title="Adicionar unidade">
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal: R$ 2599.98
          </strong>
        </section>
        <p className="text-xl font-bold mt-4">Total: R$ 2599.98</p>
      </main>
    </div>
  )
}