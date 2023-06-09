import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  noData: false,
  searchData: "",
  isLoading: false,
  isStarted: false,
  isPopupActive: false,
};

export const fetchData = createAsyncThunk(
  "itemslice/api",
  async (searchData) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?client_id=Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs&per_page=50&query=${searchData}`
    );
    const data = response.json();
    return data;
  }
);

export const itemslice = createSlice({
  name: "itemslice",
  initialState,
  reducers: {
    addSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    changePopupActive: (state, action) => {
      state.isPopupActive = action.payload;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isStarted = true;
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isStarted = true;
      state.data = action.payload.results;
      if (action.payload.results.length < 1) {
        state.noData = true;
      } else {
        state.noData = false;
      }
    },
    [fetchData.rejected]: (action) => {
      console.log(action);
    },
  },
});

export const { addData, addSearchData, changePopupActive } = itemslice.actions;

export default itemslice.reducer;
