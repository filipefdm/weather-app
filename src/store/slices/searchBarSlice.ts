import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchBarState {
  city: string
}

const initialState: SearchBarState = {
  city: '',
}

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    clearCity: state => {
      state.city = ''
    },
  },
})

export const { setCity, clearCity } = searchBarSlice.actions

export default searchBarSlice.reducer
