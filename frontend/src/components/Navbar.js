import './Navbar.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = ({click}) => {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }
    return(
        <nav className="navbar">
            {/* logo */}
            <div className="navbarLogo">
                <h2>MERN shopping cart</h2>
            </div>

            {/* links */}
            <ul className="navbarLinks">
                <li>
                    <Link to="/cart" className='cartLink'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogoBadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburgerMenu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;