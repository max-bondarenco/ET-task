import { object } from 'prop-types'
import { useDispatch } from 'react-redux'
import { changeCount, removeCartItem } from '../../../redux/cartSlice/cartSlice'

const CartItemCard = ({ drug }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <img src={drug.image} />
            </div>
            <div>
                <p>{drug.name}</p>
                <p>Price: {drug.price * drug.count}</p>
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
                    step="1"
                />
                <button onClick={() => dispatch(removeCartItem(drug._id))}>
                    Remove from cart
                </button>
            </div>
        </div>
    )
}

CartItemCard.propTypes = {
    drug: object,
}

export default CartItemCard
