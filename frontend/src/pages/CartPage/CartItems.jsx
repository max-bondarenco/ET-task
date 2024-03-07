import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'
import { Navigate } from 'react-router'

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <div className="cart-items">
            {cartItems.length === 0 && <Navigate to="/shop" />}
            {cartItems.map((cartItem) => (
                <CartItemCard key={cartItem._id} drug={cartItem} />
            ))}
        </div>
    )
}

export default CartItems
