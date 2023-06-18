import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TempUnit } from '../../utils/unitConversion'

export interface IAppState {
  tempUnit: TempUnit
  isLoading: boolean
  isInitial: boolean
  darkMode: boolean
}

const getInitialDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    const storedDarkMode = localStorage.getItem('darkMode')
    if (storedDarkMode !== null) {
      return JSON.parse(storedDarkMode) as boolean
    }
  }
  return false
}

const initialState: IAppState = {
  tempUnit: TempUnit.CELCIUS,
  isLoading: false,
  isInitial: true,
  darkMode: getInitialDarkMode(),
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDarkMode: (state: IAppState) => {
      localStorage.setItem('darkMode', (!state.darkMode).toString())
      state.darkMode = !state.darkMode
    },
    changeTempUnit: (state: IAppState) => {
      state.tempUnit =
        state.tempUnit === TempUnit.CELCIUS
          ? TempUnit.FAHRENHEIT
          : TempUnit.CELCIUS
    },
    setIsLoading: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setIsInitial: (state: IAppState, action: PayloadAction<boolean>) => {
      state.isInitial = action.payload
    },
  },
})

export const { changeTempUnit, setIsLoading, toggleDarkMode, setIsInitial } =
  appSlice.actions
export default appSlice.reducer
