import {useState, createContext, useContext} from 'react'
import {initiateCheckout} from '../lib/payments'

const defaultCart = {
  products: [],
} as CartStateType

export type ProductType = {
  id?: string
  title?: string
  description?: string
  price: any
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type CartProductType = {
  quantity: number
  pricePerItem: number
  price: any
  title?: string
}

type CartStateType = {
  products: CartProductType[]
}

export const useCart = () => {
  const [cart, setCart] = useState<CartStateType>(defaultCart)

  const addToCart = (product: ProductType) => {
    if (cart.products.find((p: CartProductType) => p.price === product.id)) {
      const newCart = {...cart}
      newCart.products = newCart.products.map((p: CartProductType) => {
        if (p.price === product.id) {
          p.quantity++
        }
        return p
      })
      setCart(newCart)
    } else {
      setCart({
        ...cart,
        products: [
          ...cart.products,
          {
            price: product.id,
            quantity: 1,
            pricePerItem: product.price,
            title: product.title,
          },
        ],
      })
    }
  }

  const subTotal = cart.products.reduce((acc: number, curr: any) => {
    return acc + curr.pricePerItem * curr.quantity
  }, 0)

  const totalItems = cart.products.reduce((acc: number, curr: any) => {
    return acc + curr.quantity
  }, 0)

  const handleBuy = (products: any) => {
    initiateCheckout({
      lineItems: products.map((product: any) => ({
        price: product.price,
        quantity: product.quantity,
      })),
    })
  }

  return {addToCart, subTotal, totalItems, cart, handleBuy}
}

// Context API

type CartContextType = {
  cart: CartStateType
  addToCart: (product: ProductType) => void
  subTotal: number
  totalItems: number
  handleBuy: (products: any) => void
}

const CartContext = createContext({} as CartContextType)

type CartContextProps = {
  children: React.ReactNode
}

export const CartProvider = ({children}: CartContextProps) => {
  const cart = useCart()
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  if (!useContext(CartContext)) {
    throw new Error('useCartContext must be used within a CartProvider')
  }
  return useContext(CartContext)
}
