// import ItemCount from "../ItemCount/ItemCount";
// import "./ItemDetail.css"
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useContext } from "react";

// import { CartContext } from "../../context/CartContext";


// const ItemDetail = ({ id, name, img, category, description, price, stock}) =>{
//     const [quantityAdded, setQuantityAdded] = useState(0);

//     const { addItem } = useContext(CartContext);

//     const handleOnAdd = (quantity) => {
//         setQuantityAdded(quantity);

//         const item = {
//             id, name, price
//         }

//         addItem(item, quantity);
//     }

//     return (
//         <article className="CardItemDetail">
//             <header className="Header">
//                 <h2 className="ItemHeader">{name}</h2>
//             </header>
//             <picture>
//                 <img src={img} alt={name} className="ItemImg" />
//             </picture>
//             <section>
//                 <p className="Info">Categoria: {category}</p>
//                 <p className="Info">Descripcion: {description}</p>
//                 <p className="Info">Precio: ${price}</p>
//             </section>
//             <footer className="ItemFooter">
//                 {
//                     quantityAdded > 0 ?
//                     (<Link to="/cart" className="Option">Terminar compra</Link> ) : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
//                 }
//                 {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log(`Cantidad agregada ${quantity}`)}  /> */}
//             </footer>
//         </article>
//     )
// }


// export default ItemDetail;

import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

/* importamos contexto del carrito de compras */
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded,setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id,name,price,img
        }
        addItem(item,quantity)
    }

    return (

        <div className="card">
            <div className="card-content">
                <div className="columns is-vcentered">
                    {/* Columna para la imagen */}
                    <div className="column is-one-third">
                        <figure className="image is-4by3">
                            <img src={img} alt={name} />
                        </figure>
                    </div>

                    {/* Columna para los datos */}
                    <div className="column">
                        <div className="content">
                            <h2 className="title is-4">{name}</h2>
                            <br/>
                            <p className="subtitle is-6">Categoría: {category}</p>
                            <p>Descripción: {description}</p>
                            
                            <p >Precio unitario: ${price}</p>
                            {/* Mostrar cantidad seleccionada y precio total */}
                            {quantityAdded > 0 && (
                                <>
                                    <p className="has-text-weight-bold">
                                        Cantidad seleccionada: {quantityAdded}
                                    </p>
                                    <p className="has-text-weight-bold has-text-info">
                                        Precio total: ${price * quantityAdded}
                                    </p>
                                </>
                            )}
                            {
                                quantityAdded > 0 ?(
                                    <Link to="/cart" className="button is-warning">Terminar compra</Link>
                                ): (
                                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={1} />
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail;