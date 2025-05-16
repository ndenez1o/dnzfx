import { useContext } from 'react'
import { CartContext } from './cartcontext'
import Card from '../components/cards/card'

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)

  if (cart.length === 0) {
    return <p>Tu carrito está vacío</p>
  }

  // Calcular el total del carrito
  const total = cart.reduce((acc, pedal) => acc + pedal.precio * pedal.quantity, 0)

  return (
    <div>
      <h1>Carrito</h1>
      <button onClick={clearCart}>Vaciar carrito</button>
      <div className="cart-list">
        {cart.map(pedal => (
          <div key={pedal.id} className="cart-item">
            <Card pedal={pedal} isInCart={true} />
            {/* Mostrar subtotal producto */}
            <div className="cart-subtotal">
              Subtotal: ${pedal.precio * pedal.quantity}
            </div>
          </div>
        ))}
      </div>
      <h2>Total: ${total}</h2>
    </div>
  )
}

export default Cart

