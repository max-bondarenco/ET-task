import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    cartIds: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            if (state.cartIds.includes(action.payload._id)) return
            state.cartIds.push(action.payload._id)
            const { _id, image, name, price } = action.payload
            state.cartItems.push({ _id, image, name, price, count: 1 })
        },
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem._id != action.payload
            )
            state.cartIds = state.cartIds.filter(
                (cartId) => cartId != action.payload
            )
        },
        changeCount: (state, action) => {
            state.cartItems.forEach((cartItem) => {
                if (cartItem._id == action.payload._id) {
                    cartItem.count = action.payload.value * 1
                    return
                }
            })
        },
        clearCart: (state) => {
            state.cartItems = []
            state.cartIds = []
        },
    },
})

export const { addCartItem, removeCartItem, changeCount, clearCart } =
    cartSlice.actions
export default cartSlice.reducer
