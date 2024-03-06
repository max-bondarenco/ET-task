import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteItems: [],
    favoriteIds: [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavoriteItem: (state, action) => {
            if (state.favoriteIds.includes(action.payload._id)) return
            state.favoriteIds.push(action.payload._id)
            state.favoriteItems.push(action.payload)
        },
        removeFavoriteItem: (state, action) => {
            state.favoriteItems = state.favoriteItems.filter(
                (favoriteItem) => favoriteItem._id != action.payload
            )
            state.favoriteIds = state.favoriteIds.filter(
                (favoriteId) => favoriteId != action.payload
            )
        },
    },
})

export const { addFavoriteItem, removeFavoriteItem } = favoriteSlice.actions
export default favoriteSlice.reducer
