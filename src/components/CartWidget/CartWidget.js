import cart from './cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="CartWidget" style ={{ display: totalQuantity > 0 ? "block" : "none"}}>
            <img src={cart} alt="cart-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;