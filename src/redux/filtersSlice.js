import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchStr: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchStr = action.payload;
    },
  },
});

export const searchReducer = filtersSlice.reducer;
export const { changeSearch } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.searchStr;
