// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import donorReducer from "./slices/donorSlice";
import adminReducer from "./slices/adminSlice";
import charityReducer from "./slices/charitySlice";

export const store = configureStore({
  reducer: {
    donor: donorReducer,
    admin: adminReducer,
    charity: charityReducer,
    auth: authReducer,
  },
});
