import React from 'react'
import stylesNav from './Navbar.module.css'
import styles from '../../styles/Home.module.css'
import {BsCart3} from 'react-icons/bs'
import {useCartContext} from '../../hooks/cart'

export const Navbar = () => {
  const {totalItems, subTotal} = useCartContext()

  return (
    <div className={stylesNav.navbar}>
      <div>E-Commerce</div>
      <div>
        <button className={styles.button} onClick={() => {}}>
          {' '}
          <BsCart3 />
          <span>Check Out: </span>
          <div>
            <span>Total items: {totalItems} </span>
            <span>subTotal: {subTotal} </span>
          </div>
        </button>
      </div>
    </div>
  )
}
