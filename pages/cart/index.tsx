import Table from 'react-bootstrap/Table'
import stylesCart from './Cart.module.css'
import {CartProductType, useCartContext} from '../../hooks/cart'
import {BsCart3} from 'react-icons/bs'
import {MemoizedInput} from '../../components/InputQuantity'
import Button from 'react-bootstrap/Button'
import {useCallback} from 'react'

const Cart = () => {
  const {subTotal, handleBuy, cart, updateQuantity, deleteFromCart} =
    useCartContext()

  const handleInputChange = useCallback(
    (quantity: number, item: CartProductType) => {
      updateQuantity(quantity, item)
    },
    [updateQuantity],
  )

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
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>
                      <MemoizedInput
                        value={item.quantity}
                        onChange={quantity => handleInputChange(quantity, item)}
                      />
                    </td>
                    <td>{item.pricePerItem}</td>
                    <td>{item.quantity * item.pricePerItem}</td>
                    <td>
                      <Button
                        onClick={() => deleteFromCart(item)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <div className={stylesCart.buttonContainer}>
            <Button onClick={() => handleBuy(cart.products)} variant="success">
              Checkout / Subtotal: {subTotal}
            </Button>
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
