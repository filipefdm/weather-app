import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City } from '../../types/weatherTypes'

interface FavoritesState {
  favorites: City[]
}

const initialState: FavoritesState = {
  favorites: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<City>) => {
      const city = action.payload
      state.favorites = [...state.favorites, city]
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const cityId = action.payload
      state.favorites = state.favorites.filter((city) => city.id !== cityId)
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
