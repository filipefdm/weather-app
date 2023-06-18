import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

const getFavoritesCities = (state: RootState) => state.favorites.favorites

export const getFavoriteCities = createSelector(
  getFavoritesCities,
  favoritesCities => favoritesCities
)
