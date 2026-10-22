import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
    return (
        <>
            <header className="bg-cyan-900 p-4">
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="text-white text-2xl font-bold">Meu E-commerce</Link>
                    <nav>
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <Link to="/" className="text-white hover:text-cyan-300" title="Ir para página principal">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className="relative text-white hover:text-cyan-300" title="Carrinho">
                                    <FiShoppingCart size={24} />
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
