import CartForm from './CartForm'
import CartItems from './CartItems'

const CartPage = () => {
    return (
        <section className="cart">
            <CartForm />
            <CartItems />
        </section>
    )
}

export default CartPage
