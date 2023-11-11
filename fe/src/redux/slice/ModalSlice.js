import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isPageLogin: true,
  isModalEdit: false,
  isModalImg: false,
};

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState,
  reducers: {
    setModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    setIsPageLogin: (state, { payload }) => {
      state.isPageLogin = payload;
    },
    setIsModalEdit: (state, { payload }) => {
      state.isModalEdit = payload;
    },
    setIsModalImg: (state, { payload }) => {
      state.isModalImg = payload;
    },
  },
});

export const { setIsModalImg, setIsModalEdit, setModalOpen, setIsPageLogin } =
  ModalSlice.actions;

export default ModalSlice.reducer;
