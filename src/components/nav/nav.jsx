import { Link } from 'react-router-dom'
import './styles/nav.scss'
// import Logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo">
        <p>DNZ Efectos</p>
          {/* <img src={Logo} alt="Logo" className="nav-logo" /> */}
        </Link>

        <ul className="nav__links">
          <li><Link to="/tienda">Tienda</Link></li>
          
          <li><Link to="/carrito" className="nav__cart">
            🛒 Carrito
          </Link></li>
          <li><Link to="/clones">Clones</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
