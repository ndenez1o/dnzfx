import CardList from "../cards/cardlist";
import './styles/shop.scss';
import productsData from "../../data/productsdata";
  
const Shop = () => {
    return (
        <section className="shop">
        <CardList pedales={productsData} />
      </section>
    )
}

export default Shop