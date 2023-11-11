import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
};

const CommentSlice = createSlice({
  name: "CommentSlice",
  initialState,
  reducers: {
    pushComment: (state, { payload }) => {
      state.comment = payload;
    },
    commentAction: (state, { payload }) => {
      state.comment.push(payload);
    },
  },
});

export const { pushComment, commentAction } = CommentSlice.actions;

export default CommentSlice.reducer;
