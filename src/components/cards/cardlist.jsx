import Card from "./card"
import "./styles/cardlist.scss"

const CardList = ({ pedales }) => {
  return (
    <div className="card-list">
      {pedales.map((pedal) => (
        <Card key={pedal.id} pedal={pedal} />
      ))}
    </div>
  )
}

export default CardList
