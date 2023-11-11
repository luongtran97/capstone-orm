import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./slice/ModalSlice";
import UserSlice from "./slice/UserSlice";
import CommentSlice from "./slice/CommentSlice";

export const store = configureStore({
  reducer: {
    modalSlice: ModalSlice,
    userSlice : UserSlice,
    commentSlice : CommentSlice,
  },
});
