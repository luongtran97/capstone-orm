import React from "react";
import { Dropdown, Menu, Button, Avatar } from "antd";
import { LocalService } from "../services/localservices";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { imgUrl } from "../constant/regex";
export default function DropDown() {
  const user = useSelector((state) => state.userSlice.isLogin);

  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        onClick={() => {
          navigate("/user-info");
        }}
      >
        Trang cá nhân
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => {
          LocalService.removeItem("USER_LOGIN");
          window.location.reload();
        }}
      >
        Đăng Xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className="flex justify-center items-center">
      <Button style={{border:"none",outline:"none"}}>
        {user.anh_dai_dien ? (
          <Avatar src={ imgUrl+ user.anh_dai_dien} alt="avatar" />
        ) : (
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        )}
      </Button>
    </Dropdown>
  );
}
