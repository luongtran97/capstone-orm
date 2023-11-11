import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalImg } from "../../../redux/slice/ModalSlice";

export default function ModalImg() {
  const { isModalImg } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  const handelCancel = () => {
    dispatch(setIsModalImg(false));
  };
  return (
    <Modal
      style={{ borderRadius: "32px" }}
      open={isModalImg}
      footer={false}
      onCancel={handelCancel}
      centered
      maskClosable={true}
    >
      <div className="flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png"
          width={50}
          alt="avatar"
        />
      </div>
      <h1 className="text-center py-5 text-2xl font-medium">
        Cập nhật hình ảnh
      </h1>
    </Modal>
  );
}
