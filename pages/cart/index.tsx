import Table from 'react-bootstrap/Table'
import styles from '../../styles/Home.module.css'
import stylesCart from './Cart.module.css'
import {useCartContext} from '../../hooks/cart'
import {BsCart3} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

const Cart = () => {
  const {subTotal, handleBuy, cart} = useCartContext()

  console.log('cart', cart.products.length)

  return (
    <>
      <div className={stylesCart.titleContainer}>
        <div className={stylesCart.title}>
          <span>
            <BsCart3 />
          </span>
          <span>Cart</span>
        </div>
      </div>
      {cart.products.length > 0 ? (
        <div className={stylesCart.tableContainer}>
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price per Item</th>
                <th>Item Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.pricePerItem}</td>
                  <td>{item.quantity * item.pricePerItem}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className={stylesCart.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => handleBuy(cart.products)}
            >
              Checkout / Subtotal: {subTotal}
            </button>
          </div>
        </div>
      ) : (
        <div className={stylesCart.emptyCartContainer}>
          <span>Your cart is empty</span>
        </div>
      )}
    </>
  )
}

export default Cart
