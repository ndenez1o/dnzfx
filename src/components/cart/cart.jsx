import { useContext } from 'react'
import { CartContext } from '../../context/cartcontext'
import './styles/cart.scss'

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext)

  // Calcular total sumando precio * cantidad
  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)

  // Función para disminuir cantidad (o eliminar si llega a 1)
  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product.id)
    } else {
      // Reducir cantidad
      addToCart({ ...product, quantity: -1 }) // Esta no la tenemos, así que la hacemos inline abajo
    }
  }

  // Mejor hacemos un método nuevo en contexto para decrementar cantidad:
  // Pero mientras, aquí hacemos el manejo local:

  return (
    <section className="cart">
      <h1>Carrito de compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart__list">
            {cart.map(item => (
              <li key={item.id} className="cart__item">
                <img src={item.img} alt={item.nombre} className="cart__img" />
                <div className="cart__info">
                  <h2>{item.nombre}</h2>
                  <p>Precio: ${item.precio}</p>
                  <div className="cart__quantity">
                    <button
                      onClick={() => {
                        if (item.quantity === 1) removeFromCart(item.id)
                        else {
                          // Disminuir cantidad
                          const newCart = cart.map(ci =>
                            ci.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci
                          )
                          // Como no tenemos función para actualizar directamente el cart, podemos hacer setCart aquí?
                          // No: mejor agregar función en contexto para updateQuantity.
                          // Por ahora, déjame agregarte esa función en el contexto.
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <button className="cart__remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__footer">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart
