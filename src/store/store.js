import { configureStore } from "@reduxjs/toolkit";
import headerTitleSlice from "./HeaderTitle/headerTitleSlice";
import authSlice from "./Authentication/authSlice";

export const store = configureStore({
  reducer: {
    headertitle: headerTitleSlice,

    userlogin: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
