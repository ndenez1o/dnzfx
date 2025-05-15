import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav'
import Home from './components/home/home'
import Shop from './components/shop/shop'
import ProductDetail from './components/productdetail/productdetail'

function App() {
  return (
    <div className="App">
      <Nav />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/tienda" element={<Shop />} />
  <Route path="/producto/:id" element={<ProductDetail />} />
</Routes>

    </div>
  )
}

export default App
