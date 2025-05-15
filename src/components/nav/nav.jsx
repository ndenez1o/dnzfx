import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/nav.scss'
import Logo from '../../assets/logo.png'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const hasVisitedHome = sessionStorage.getItem('hasVisitedHome')
  const location = useLocation()

  const handleLogoClick = (e) => {
    if (hasVisitedHome && location.pathname === '/') {
      e.preventDefault()
    }
  }

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link
          to={hasVisitedHome ? "/tienda" : "/"}
          className="nav__logo"
          onClick={handleLogoClick}
        >
          <img src={Logo} className="nav__img" alt="logo" />
        </Link>

        <button className="nav__toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav__links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/tienda" onClick={() => setMenuOpen(false)}>Tienda</Link></li>
          <li><Link to="/carrito" onClick={() => setMenuOpen(false)}>🛒 Carrito</Link></li>
          <li><Link to="/clones" onClick={() => setMenuOpen(false)}>Clones</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
