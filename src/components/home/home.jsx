import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/home.scss'

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5vYo459ROroW9G4nY0n9ZAdgrARmX9XjfQ&s',
  'https://c1.wallpaperflare.com/preview/534/14/425/pedals-effects-electric-guitar.jpg',
  'https://c0.wallpaperflare.com/preview/630/905/103/united-states-rancho-cucamonga-abundant-living-family-church-bass-thumbnail.jpg',
]

const Home = () => {
  const [current, setCurrent] = useState(0)
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome')
    if (!hasVisited) {
      setShowIntro(true)
      sessionStorage.setItem('hasVisitedHome', 'true')
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      <div className="home__slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`home__img ${index === current ? 'active' : ''}`}
            alt={`pedal-${index}`}
          />
        ))}
      </div>

      {showIntro && (
        <div className="home__text">
          <h1>Bienvenido a la tienda de pedales</h1>
          <p>
            Nuestra pasión por el sonido nos llevó a crear pedales únicos, diseñados y construidos con amor en cada detalle.
          </p>
          <Link to="/tienda" className="home__btn">
            Ver tienda
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home
