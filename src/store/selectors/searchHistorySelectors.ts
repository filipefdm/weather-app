import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

const getSearchHistoryState = (state: RootState) => state.searchHistory
const getFavoritesState = (state: RootState) => state.favorites.favorites

export const getSearchHistory = createSelector(
  getSearchHistoryState,
  (searchHistoryState) => searchHistoryState.searchHistory,
)

export const getFavorites = createSelector(
  getFavoritesState,
  (favoritesState) => favoritesState,
)
