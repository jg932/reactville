import React, {useState} from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  console.log("im consolelogging propssss",props)
  const [message, setMessage] = useState("")
  const format = (num) => (Math.round(num * 100) / 100).toFixed(2)

  const total = format(props.cart.reduce((sum, item) => {
    return item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price
  }, 0))

  const clearCart = () => {
    props.setCart([])
    setMessage('')
  }

  const handleCheckout = () => {
    const checkoutStatus = props.handleExchange(total)
    checkoutStatus ? clearCart() : setMessage('Payment declined!')
  }

  const cart = props.cart.map((ele, idx) => {
    return (
      <CartItem 
        item={ele}
        removeFromCart={props.removeFromCart}
      />
    )
  })

  return (
    <div className="cart">
      <h3>Cart</h3>
      <p>{message}</p>
      {cart}
      <div className="cart-total">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <button onClick={handleCheckout}>CHECKOUT</button>
      <button onClick={clearCart}>CLEAR CART</button>
    </div>
  )
}

export default Cart