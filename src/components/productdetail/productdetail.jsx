import { useParams } from 'react-router-dom'
import productsData from '../../data/productsdata'
import './styles/productdetail.scss'

const ProductDetail = () => {
  const { id } = useParams()
  const pedal = productsData.find(p => p.id === id)

  if (!pedal) return <p>Producto no encontrado</p>

  return (
    <div className="product">
      <img src={pedal.img} alt={pedal.nombre} className="product__img" />
      <div className="product__info">
        <h1 className="product__title">{pedal.nombre}</h1>
        <span className="product__price">${pedal.precio}</span>
        <p className="product__desc">{pedal.descripcion}</p>
        <button className="product__btn">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductDetail
