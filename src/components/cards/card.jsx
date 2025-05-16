import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles/card.scss'
import { CartContext } from '../../context/cartcontext'

const Card = ({ pedal, isInCart = false }) => {
  const { addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext)

  return (
    <div className="card">
      {!isInCart ? (
        // Link solo en tienda para ir al detalle
        <Link to={`/producto/${pedal.id}`} className="card__link">
          <img src={pedal.img} alt={pedal.nombre} className="card__img" />
        </Link>
      ) : (
        <img src={pedal.img} alt={pedal.nombre} className="card__img" />
      )}

      <div className="card__info">
        <h2 className="card__title">{pedal.nombre}</h2>
        <span className="card__price">${pedal.precio}</span>

        {isInCart ? (
          <>
            <div className="card__quantity">Cantidad: {pedal.quantity}</div>
            <div className="card__buttons">
              <button onClick={() => addToCart(pedal)}>+</button>
              <button onClick={() => decreaseQuantity(pedal.id)}>-</button>
              <button onClick={() => removeFromCart(pedal.id)}>Eliminar</button>
            </div>
          </>
        ) : (
          <button onClick={() => addToCart(pedal)}>Agregar al carrito</button>
        )}
      </div>
    </div>
  )
}

export default Card
