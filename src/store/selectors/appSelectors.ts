import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const getAppState = (state: RootState) => state.app

export const getTempUnit = createSelector(
  getAppState,
  (appState) => appState.tempUnit,
)

export const getIsLoading = createSelector(
  getAppState,
  (appState) => appState.isLoading,
)

export const getIsInitial = createSelector(
  getAppState,
  (appState) => appState.isInitial,
)

export const getDarkMode = createSelector(
  getAppState,
  (appState) => appState.darkMode,
)
