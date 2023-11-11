import { createSlice } from "@reduxjs/toolkit";
import { LocalService } from "../../services/localservices";

const initialState = {
  isLogin: LocalService.getItem("USER_LOGIN"),
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setIsLogin: (state, { payload }) => {
      state.isLogin = payload;
    },
    updateInfo : (state,{payload}) => { 
       state.isLogin = {...state.isLogin,...payload};
     }
  },
});

export const { setIsLogin ,updateInfo} = UserSlice.actions;

export default UserSlice.reducer;
