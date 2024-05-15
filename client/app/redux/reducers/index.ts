import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user.reducer";

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
