import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-cyan-950 text-white h-screen w-full">
      <main className="w-full max-w-7xl px-4 py-8 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Carrinho de compras</h1>

        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center font-medium">Ops... Parece que seu carrinho está vazio.</p>
            <Link to="/" className="text-center font-medium text-white hover:text-white bg-zinc-900 hover:bg-cyan-600 px-4 py-2 rounded hover:cursor-pointer">
              Voltar para página de produtos
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          cart.map(item => (
            <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-600 py-4">
              <img src={item.cover}
                alt={item.title}
                className="w-28"
              />

              <strong>Preço: R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</strong>

              <div className="flex items-center justify-center gap-3">
                <button className="bg-zinc-900 px-2 rounded font-medium flex items-center justify-center hover:cursor-pointer" title="Remover unidade">
                  -
                </button>
                <span>{item.amount}</span>
                <button className="bg-zinc-900 px-2 rounded font-medium flex items-center justify-center hover:cursor-pointer" title="Adicionar unidade">
                  +
                </button>
              </div>

              <strong className="float-right">
                SubTotal: R$ {item.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
              </strong>
            </section>
          ))
        )}

        {cart.length !== 0 && (
          <p className="text-xl font-bold mt-4">Total: R$ 2599.98</p>
        )}
      </main>
    </div>
  )
}