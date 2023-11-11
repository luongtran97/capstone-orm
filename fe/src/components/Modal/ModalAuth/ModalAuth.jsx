import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../../redux/slice/ModalSlice";
import ModalSignUp from "./ModalSignUp";
import ModalSignIn from "./ModalSignIn";

export default function ModalAuth() {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((state) => state.modalSlice);
  const { isPageLogin } = useSelector((state) => state.modalSlice);
  const handelCancel = () => {
    dispatch(setModalOpen(false));
  };
  return (
    <div>
      <Modal
        style={{ borderRadius: "32px" }}
        maskClosable={true}
        footer={false}
        onCancel={handelCancel}
        centered
        open={isModalOpen}
      >
        <div className="py-8 sm:px-11">
          {isPageLogin == true ? <ModalSignIn /> : <ModalSignUp />}
          <div className="mt-12 text-xs">
            <p>
              Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
              <span className="underline cursor-pointer">
                điều khoản sử dụng{" "}
              </span>
              của chúng tôi.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
