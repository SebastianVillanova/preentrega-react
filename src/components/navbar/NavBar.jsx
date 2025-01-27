import "./NavBar.css"
import { NavLink, Link } from "react-router-dom";
import Carrito from "../Carrito/Carrito";


const NavBar = ()=>{
    return(
        <nav className="NavBar">
            <Link to="/">
                <h1>Ecommerce</h1>
            </Link>
            
            <div className="Categorias">
                <NavLink to={`/category/auriculares`} >Auriculares</NavLink>
                <NavLink to={`/category/parlantes`} >Parlantes</NavLink>
                <NavLink to={`/category/notebooks`} >Notebooks</NavLink>

                {/* <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button> */}
            </div>
            <Carrito/>
        </nav>
    );
}

export default NavBar;