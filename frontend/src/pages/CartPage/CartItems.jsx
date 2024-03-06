import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <div>
            {cartItems.map((cartItem) => (
                <CartItemCard key={cartItem._id} drug={cartItem} />
            ))}
        </div>
    )
}

export default CartItems
