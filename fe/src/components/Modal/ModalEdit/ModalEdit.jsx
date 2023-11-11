import { Form, Input, Modal, Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalEdit } from "../../../redux/slice/ModalSlice";
import FormItem from "antd/es/form/FormItem";
import {
  ContactsOutlined,
  KeyOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { regex } from "../../../constant/regex";
import Swal from "sweetalert2";
import { editUserInfo } from "../../../utils/fetchFromApi";
import { updateInfo } from "../../../redux/slice/UserSlice";

export default function ModalEdit() {
  const user = useSelector((state) => state.userSlice.isLogin);
  const { isModalEdit } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  const handelCancel = () => {
    dispatch(setIsModalEdit(false));
  };
  const [form] = Form.useForm();

  // xử lý thay đổi thông tin cá nhân
  const handelEditUserInfo = async (values) => {
    editUserInfo(values)
      .then((res) => {
        dispatch(updateInfo(res));
        form.resetFields();
        dispatch(setIsModalEdit(false));

        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công!",
          showConfirmButton: false,
          timer: 800, // Thời gian hiển thị thông báo (tính bằng mili giây)
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data,
          showConfirmButton: false,
          timer: 800,
        });
      });
  };

  return (
    <Modal
      style={{ borderRadius: "32px" }}
      open={isModalEdit}
      onCancel={handelCancel}
      footer={false}
      centered
      maskClosable={true}
    >
      <div className="flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png"
          width={50}
          alt=""
        />
      </div>
      <h1 className="text-center py-5 text-2xl font-medium">
        Cập nhật thông tin cá nhân
      </h1>
      <Form form={form} onFinish={handelEditUserInfo}>
        <Form.Item
          initialValue={user && user.hoTen}
          name="hoTen"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập đầu đủ họ tên!",
            },
            // {
            //   pattern: regex.blank,
            //   message: "Không chứa khoảng trắng",
            // },
            // {
            //   pattern: regex.onlyNumCharacter,
            //   message: "Không chứa ký tự đặc biệt",
            // },
          ]}
        >
          <Input
            size="large"
            prefix={<ContactsOutlined />}
            placeholder="Họ và tên"
          />
        </Form.Item>

        {/* Tài Khoản */}
        <Form.Item
          initialValue={user && user.taiKhoan}
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản",
            },
            // {
            //   pattern: regex.blank,
            //   message: "Không chứa khoảng trắng",
            // },
            // {
            //   pattern: regex.onlyNumCharacter,
            //   message: "Không chứa ký tự đặc biệt",
            // },
          ]}
        >
          <Input
            disabled={true}
            placeholder="Tài khoản"
            prefix={<UserOutlined />}
            size="large"
          />
        </Form.Item>

        {/* Mật Khẩu */}
        <Form.Item
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu",
            },
            // {
            //   required: regex.password,
            //   message:
            //     "Mật khẩu gồm 8-15 ký tự, 1 ký tự viết hoa, 1 số, 1 ký tự đặc biệt",
            // },
          ]}
        >
          <Input.Password
            prefix={<KeyOutlined />}
            placeholder="Mật khẩu"
            size="large"
          />
        </Form.Item>

        {/* Email */}
        <Form.Item
          initialValue={user && user.email}
          name="email"
          rules={[
            {
              required: true,
              message: "Xin vui lòng nhập email",
            },
            {
              type: "email",
              message: "Vui lòng nhập đúng định dạng Email",
            },
          ]}
        >
          <Input placeholder="Email" size="large" prefix={<MailOutlined />} />
        </Form.Item>

        <Form.Item>
          <Button
            className="bg-red-500  rounded-full mt-2 px-2  "
            htmlType="submit"
          >
            <span className="text-lg text-white leading-none font-medium">
              Cập nhật
            </span>
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
