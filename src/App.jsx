import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav'
import Home from './components/home/home'
import Shop from './components/shop/shop'
import ProductDetail from './components/productdetail/productdetail'
import Cart from './context/cart'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />  {/* <-- agregamos la ruta carrito */}
      </Routes>
    </div>
  )
}

export default App
