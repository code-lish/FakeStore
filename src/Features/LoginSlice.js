import { createSlice } from "@reduxjs/toolkit";
import users from "../users.json";
const initialState = {
  users,
};

export const LoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    findUser: (state, action) => {
      const reciveUser = action.payload;
      const currentUser = state.users.find(
        (user) =>
          user.username === reciveUser.name &&
          user.password === reciveUser.password
      );
      return currentUser;
    },
  },
});

export const { findUser } = LoginSlice.actions;

export default LoginSlice.reducer;
