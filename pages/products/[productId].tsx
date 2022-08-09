import React from 'react'
import products from '../../products/products.json'
import {GetStaticProps} from 'next'
import Image from 'next/image'
import {ProductType} from '../../hooks/cart'
import style from './Product.module.css'
import styleHome from '../../styles/Home.module.css'
import {useCartContext} from '../../hooks/cart'

type ProductProps = {
  product: ProductType
}

const Product = ({product}: ProductProps) => {
  const {addToCart} = useCartContext()

  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="responsive"
          objectFit="cover"
          height={350}
          width={350}
          className={styleHome.cardImage}
        />
      </div>
      <div className={style.info}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div>
          <span className={style.price}>{product.price}</span>
          <button
            className={styleHome.button}
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const product = products.products.find(
    product => product.id === params?.productId,
  )
  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = products.products.map(product => ({
    params: {
      productId: product.id,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Product
