import { configureStore } from "@reduxjs/toolkit";
import itemslice from "./itemslice.js";

export const store = configureStore({
  reducer: {
    itemslice: itemslice,
  },
});
