import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPageLogin, setModalOpen } from "../redux/slice/ModalSlice";
import Modal from "./Modal/Modal";
import DropDown from "./DropDown";

export default function Button() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.isLogin);

  const handelOpenModalSignIn = () => {
    dispatch(setModalOpen(true));
    dispatch(setIsPageLogin(true));
  };

  const handelOpenModalSignUp = () => {
    dispatch(setModalOpen(true));
    dispatch(setIsPageLogin(false));
  };

  return (
    <div>
      {user ? (
        <div className="">
          <img src="" alt="" />
          <DropDown/>
        </div>
      ) : (
        <>
          <button
            onClick={() => {
              handelOpenModalSignIn();
            }}
            className="bg-red-400 px-4 py-2 rounded-2xl font-medium text-white hover:bg-red-600 duration-500 hover:text-black"
          >
            Đăng Nhập
          </button>
          <button
            onClick={() => {
              handelOpenModalSignUp();
            }}
            className="mx-2 bg-slate-500 px-4 py-2 rounded-2xl font-medium text-black hover:text-white duration-500"
          >
            Đăng Ký
          </button>
        </>
      )}
      <Modal />
    </div>
  );
}
