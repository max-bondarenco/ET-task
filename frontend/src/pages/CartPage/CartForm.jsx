import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { clearCart } from '../../../redux/cartSlice/cartSlice'
import axios from '../../../api/axios'
import ReCaptcha from '../../components/ReCaptcha'
import { useCallback } from 'react'

const CartForm = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({})
    const [total, setTotal] = useState(0)
    const [token, setToken] = useState(null)

    useEffect(() => {
        let sum = 0
        cartItems.forEach(
            (cartItem) => (sum += cartItem.count * cartItem.price)
        )
        setTotal(sum)
    }, [cartItems])

    const recaptchaCallback = useCallback((token) => setToken(token), [])

    const handleInputChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCartSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(
                '/orders/',
                { ...formData, items: cartItems, total, captcha: token },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            dispatch(clearCart())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="cart-form-wrapper">
            <form className="cart-form" onSubmit={handleCartSubmit}>
                <div className="cart-inputs">
                    <div className="cart-input">
                        <label htmlFor="name">Name:</label>
                        <input
                            onChange={handleInputChange}
                            required
                            type="text"
                            placeholder=""
                            name="name"
                            id="name"
                        />
                    </div>
                    <div className="cart-input">
                        <label htmlFor="email">Email:</label>
                        <input
                            onChange={handleInputChange}
                            required
                            type="email"
                            placeholder=""
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="cart-input">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            onChange={handleInputChange}
                            required
                            type="text"
                            placeholder=""
                            name="phone"
                            id="phone"
                        />
                    </div>
                    <div className="cart-input">
                        <label htmlFor="address">Address:</label>
                        <input
                            onChange={handleInputChange}
                            required
                            type="text"
                            placeholder=""
                            name="address"
                            id="address"
                        />
                    </div>
                </div>
                <div className="cart-submit">
                    <p>Total price: {total} uah</p>
                    <ReCaptcha callback={recaptchaCallback} />
                    <button disabled={!token} type="submit">
                        Place order
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CartForm
