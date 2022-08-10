import React from 'react'
import stylesNav from './Navbar.module.css'
import styles from '../../styles/Home.module.css'
import {BsCart3} from 'react-icons/bs'
import {useCartContext} from '../../hooks/cart'
import {useRouter} from 'next/router'
import Link from 'next/link'

export const Navbar = () => {
  const router = useRouter()
  const {totalItems, subTotal} = useCartContext()

  return (
    <div className={stylesNav.navbar}>
      <div>
        <Link href="/">E-Commerce</Link>
      </div>
      <div>
        <button className={styles.button} onClick={() => router.push('/cart')}>
          {' '}
          <BsCart3 />
          <div>
            <span>Total items: {totalItems} </span>
            <span>subTotal: {subTotal} </span>
          </div>
        </button>
      </div>
    </div>
  )
}
