import {useState} from 'react'

const defaultCartInfo = {
  products: {},
}

// AddToCartInfo is a function that adds the product to the cartInfo object
// and then sets the cartInfo object to the new cartInfo object
// *** This is a temporary solution until we have a real cart ***

export const useCartInfo = () => {
  const [cartInfo, setCartInfo] = useState<any>(defaultCartInfo)

  const addToCartInfo = (product: any) => {
    if (cartInfo.products[product.id]) {
      const newCartInfo = {...cartInfo}
      newCartInfo.products[product.id]++
      setCartInfo(newCartInfo)
    } else {
      setCartInfo({
        ...cartInfo,
        products: {...cartInfo.products, [product.id]: 1},
      })
    }
  }
  return {}
}
