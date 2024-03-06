import { object } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem, removeCartItem } from '../../../redux/cartSlice/cartSlice'
import {
    addFavoriteItem,
    removeFavoriteItem,
} from '../../../redux/favoriteSlice/favoriteSlice'
import { BsCartPlusFill, BsCartXFill } from 'react-icons/bs'
import { GoHeartFill, GoHeart } from 'react-icons/go'

const DrugCard = ({ drug }) => {
    const dispatch = useDispatch()
    const cartIds = useSelector((state) => state.cart.cartIds)
    const favoriteIds = useSelector((state) => state.favorite.favoriteIds)

    return (
        <div className="shop-item">
            <div className="shop-item-image">
                <img src={drug.image || '/default.jpg'} />
            </div>
            <div className="shop-item-info">
                <div className="shop-item-description">
                    <h3>{drug.name}</h3>
                    <p>{drug.price} uah</p>
                </div>
                {cartIds.includes(drug._id) ? (
                    <BsCartXFill
                        className="icon"
                        onClick={() => dispatch(removeCartItem(drug._id))}
                    />
                ) : (
                    <BsCartPlusFill
                        className="icon"
                        onClick={() => dispatch(addCartItem(drug))}
                    />
                )}
                {favoriteIds.includes(drug._id) ? (
                    <GoHeartFill
                        className="icon"
                        onClick={() => dispatch(removeFavoriteItem(drug._id))}
                    />
                ) : (
                    <GoHeart
                        className="icon"
                        onClick={() => dispatch(addFavoriteItem(drug))}
                    />
                )}
            </div>
        </div>
    )
}

DrugCard.propTypes = {
    drug: object,
}

export default DrugCard
