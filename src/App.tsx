import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Layout } from './components/Layout'
import { ProductDetails } from './pages/ProductDetails'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ]
  },
]);

export { router }