import React from "react";
import { Button, Form, Input } from "antd";
import {
  ContactsOutlined,
  KeyOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { regex } from "../../../constant/regex";
import { useDispatch } from "react-redux";
import { setIsPageLogin } from "../../../redux/slice/ModalSlice";
import { https } from "../../../utils/fetchFromApi";
import Swal from "sweetalert2";
export default function ModalSignUp() {
  const dispatch = useDispatch();
  const navigateToLogin = () => {
    dispatch(setIsPageLogin(true));
  };
  const [form] = Form.useForm();

  const handelSignUp = async (values) => {
    try {
      await https.post("/user/sign-up", values);
      form.resetFields();
      Swal.fire({
        icon: "success",
        title: "Đăng ký thành công!",
        showConfirmButton: false,
        timer: 2000, // Thời gian hiển thị thông báo (tính bằng mili giây)
      });
    } catch (err) {}
  };

  return (
    <>
      <div className="flex justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png"
          width={50}
          alt=""
        />
      </div>
      <h1 className="text-center py-5 text-4xl font-bold">
        Đăng ký với Pinterest{" "}
      </h1>
      <Form form={form} layout="vertical" name="basic" onFinish={handelSignUp}>
        {/* Họ tên */}
        <Form.Item
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
            {
              required: regex.password,
              message:
                "Mật khẩu gồm 8-15 ký tự, 1 ký tự viết hoa, 1 số, 1 ký tự đặc biệt",
            },
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
              Đăng Ký
            </span>
          </Button>
        </Form.Item>
      </Form>
      <div className="mt-11">
        <p className="text-center text-base">
          Bạn đã có tài khoản?{" "}
          <span
            onClick={navigateToLogin}
            className="cursor-pointer text-red-500"
          >
            Đăng Nhập
          </span>
        </p>
      </div>
    </>
  );
}
