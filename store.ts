import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import locationReducer from "./locationSlice"; // Ensure this import is correct

export const store = configureStore({
  reducer: {
    global: globalReducer,
    location: locationReducer, // Add the location slice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
