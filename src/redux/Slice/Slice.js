import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "user",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {},
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
