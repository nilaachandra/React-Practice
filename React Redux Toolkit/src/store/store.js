import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "./slices/storeIndex";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
