import { RouterProvider } from 'react-router-dom'
import {router} from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import CartProvider from './context/CartContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <Toaster 
      position='top-center'
      reverseOrder={false}
      />
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
