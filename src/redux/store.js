import { configureStore } from "@reduxjs/toolkit";
import { setUser } from "./Slice/Slice";

export const store = configureStore({
  reducer: {
    setUser: setUser,
  },
});
