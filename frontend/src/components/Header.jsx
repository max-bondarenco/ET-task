import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Medicine Delivery</h1>
            <nav className="header-nav">
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="cart">Cart</NavLink>
                <NavLink to="history">Orders</NavLink>
            </nav>
        </header>
    )
}

export default Header
