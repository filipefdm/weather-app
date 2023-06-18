import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/appReducer'
import favoritesSliceReducer from './slices/favoritesSlice'
import searchHistoryReducer from './slices/searchHistorySlice'
import searchBarReducer from './slices/searchBarSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    favorites: favoritesSliceReducer,
    searchHistory: searchHistoryReducer,
    searchBar: searchBarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
