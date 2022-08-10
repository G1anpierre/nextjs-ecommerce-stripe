import React from 'react'
import stylesNav from './Navbar.module.css'
import {BsCart3} from 'react-icons/bs'
import {useCartContext} from '../../hooks/cart'
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button'
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
        <Button variant="outline-dark" onClick={() => router.push('/cart')}>
          {' '}
          <div className={stylesNav.cartButton}>
            <BsCart3 />
            <span>Total items: {totalItems}</span>
            <span>subTotal: {subTotal}</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
