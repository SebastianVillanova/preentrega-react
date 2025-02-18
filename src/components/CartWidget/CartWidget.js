import cart from '../../assets/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="CartWidget" style ={{ display: totalQuantity > 0 ? "flex" : "none"}}>
            <img src={cart} alt="cart-widget" className='imgCart'/>
            <p>{totalQuantity}</p>
        </Link>
    )
}

export default CartWidget;