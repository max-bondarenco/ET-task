import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const cartIds = useSelector((state) => state.cart.cartIds)

    return (
        <header className="header">
            <h1 className="header-title">Medicine Delivery</h1>
            <nav className="header-nav">
                <NavLink to="shop">Shop</NavLink>
                {cartIds.length !== 0 && <NavLink to="cart">Cart</NavLink>}
                <NavLink to="history">Orders</NavLink>
            </nav>
        </header>
    )
}

export default Header
