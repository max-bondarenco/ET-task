import { object } from 'prop-types'
import { useDispatch } from 'react-redux'
import { changeCount, removeCartItem } from '../../../redux/cartSlice/cartSlice'
import { BsCartXFill } from 'react-icons/bs'

const CartItemCard = ({ drug }) => {
    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={drug.image || '/default.jpg'} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-description">
                    <h3>{drug.name}</h3>
                    <p>Price: {drug.price * drug.count}</p>
                </div>
                <BsCartXFill
                    className="icon"
                    onClick={() => dispatch(removeCartItem(drug._id))}
                />
                <input
                    type="number"
                    onChange={(e) =>
                        dispatch(
                            changeCount({
                                _id: drug._id,
                                value: e.target.value,
                            })
                        )
                    }
                    defaultValue={drug.count}
                    min="1"
                    max="999"
                    step="1"
                />
            </div>
        </div>
    )
}

CartItemCard.propTypes = {
    drug: object,
}

export default CartItemCard
