import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Layout} from '../components/layout'
import {CartProvider} from '../hooks/cart'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
