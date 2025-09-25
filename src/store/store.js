import { configreStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configreStore({
  reducer: {
    counter: counterSlice,
    // reducers aqui
  },
});
