import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchHistoryState {
  searchHistory: string[];
}

const initialState: SearchHistoryState = {
  searchHistory: [],
};

export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addToSearchHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory.unshift(action.payload);
      if (state.searchHistory.length > 5) {
        state.searchHistory.pop();
      }
    },
  },
});

export const { addToSearchHistory } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
