import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, name, img, category, description, price, stock}) =>{
    console.log(name)
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoria: {category}</p>
                <p className="Info">Descripcion: {description}</p>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ?
                    (<Link to="/cart" className="Option">Terminar compra</Link> ) : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
                }
            </footer>
        </article>
    )
}


export default ItemDetail;
