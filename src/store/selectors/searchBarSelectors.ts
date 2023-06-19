import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export const getSearchBarState = (state: RootState) => state.searchBar

export const getSearchBarCity = createSelector(
  getSearchBarState,
  (searchBarState) => searchBarState.city,
)
