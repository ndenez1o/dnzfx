import { Link } from 'react-router-dom'
import './styles/card.scss'

const Card = ({ pedal }) => {
  return (
    <div className="card">
      <Link to={`/producto/${pedal.id}`} className="card__link">
        <img src={pedal.img} alt={pedal.nombre} className="card__img" />
      </Link>
      <div className="card__info">
        <h2 className="card__title">{pedal.nombre}</h2>
        <span className="card__price">${pedal.precio}</span>
      </div>
    </div>
  )
}

export default Card
