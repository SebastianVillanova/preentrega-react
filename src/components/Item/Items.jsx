import "./Items.css"
import { Link } from "react-router-dom";

const Item = ({id, name, img, price, stock})=>{
    return (
        <article className="CardItem">
            <header className="Header">
                <h3 className="ItemHeader">{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Precio: ${price}</p>
                <p className="Info">Stock disponible: ${stock}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} >Ver detalles</Link>
            </footer>
        </article>
        
    )
}

export default Item;