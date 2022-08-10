import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Layout} from '../components/layout'
import {CartProvider} from '../hooks/cart'
import SSRProvider from 'react-bootstrap/SSRProvider'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <CartProvider>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </CartProvider>
  )
}

export default MyApp
