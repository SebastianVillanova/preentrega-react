import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
// import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext);

    if(totalQuantity === 0) {
        return (
            <div>
                <h2>No hay items en el carrito</h2>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()} className="Button">Vaciar carrito</button>
            <Link to="/checkout" >Checkout</Link>
        </div>
    )
}


export default Cart;