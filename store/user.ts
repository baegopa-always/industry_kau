import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";
import { UserState } from "../types/reduxState";

// * 초기 상태
const initialState: UserState = {
  email: "",
  isLogged: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    // * 로그인한 유저 변경하기
    setLoggerUser(state, action: PayloadAction<UserType>) {
      state = { ...action.payload, isLogged: true };
      return state;
    },
    setUser(state, action: PayloadAction<UserType>) {
      state = { ...action.payload, isLogged: true };
      return state;
    },
    //* 유저 초기화 하기
    initUser(state) {
      state = initialState;
      return state;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
