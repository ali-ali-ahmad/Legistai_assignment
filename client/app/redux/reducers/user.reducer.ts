import { createSlice } from "@reduxjs/toolkit";
import { SLICE_NAME, UserInterface } from "../types/user.types";

const INITIAL_STATE: UserInterface = {
  id: null,
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    resetUserSlice: () => INITIAL_STATE,
    userLogin: (state, action) => {
      const { id, name, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
    },
  },
  extraReducers: (builder) => {},
});

export const { resetUserSlice, userLogin } = userSlice.actions;

export default userSlice.reducer;
