import React from "react";
import { Button, Form, Input } from "antd";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { regex } from "../../../constant/regex";
import { useDispatch } from "react-redux";
import { setIsPageLogin, setModalOpen } from "../../../redux/slice/ModalSlice";
import { https } from "../../../utils/fetchFromApi";
import Swal from "sweetalert2";
import { LocalService } from "../../../services/localservices";
import { setIsLogin } from "../../../redux/slice/UserSlice";
export default function ModalSignIn() {
  const dispatch = useDispatch();
  const navigateToRegister = () => {
    dispatch(setIsPageLogin(false));
  };

  const [form] = Form.useForm();
  const handelSignIn = async (values) => {
    try {
      const res = await https.post("/user/sign-in", values);
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
        showConfirmButton: false,
        timer: 800, // Thời gian hiển thị thông báo (tính bằng mili giây)
      });
      form.resetFields();
      LocalService.setItem("USER_LOGIN", res.data);
      dispatch(setModalOpen(false));
      dispatch(setIsLogin(res.data));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
        showConfirmButton: false,
        timer: 800,
      });
    }
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
        {" "}
        Chào mừng bạn đến với Pinterest
      </h1>
      <Form form={form} layout="vertical" name="basic" onFinish={handelSignIn}>
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
        {/* Button */}
        <Form.Item>
          <Button
            className="bg-red-500  rounded-full mt-2 px-2  "
            htmlType="submit"
          >
            <span className="text-lg text-white leading-none font-medium">
              Đăng Nhập
            </span>
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-11">
        <p className="text-center text-base">
          Bạn chưa có tài khoản?{" "}
          <span
            onClick={navigateToRegister}
            className="cursor-pointer text-red-500"
          >
            Đăng Ký
          </span>
        </p>
      </div>
    </>
  );
}
