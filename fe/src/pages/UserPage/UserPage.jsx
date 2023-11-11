import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalEdit, setIsModalImg } from "../../redux/slice/ModalSlice";
import ModalEdit from "../../components/Modal/ModalEdit/ModalEdit";
import Masonry from "react-masonry-css";
import { imgUrl } from "../../constant/regex";
import ModalImg from "../../components/Modal/ModalImg/ModalImg";

export default function UserPage() {
  const user = useSelector((state) => state.userSlice.isLogin);
  const dispatch = useDispatch();
  const handelOpenModal = () => {
    dispatch(setIsModalEdit(true));
  };

  const handelOpenModalImg = () => {
    dispatch(setIsModalImg(true));
  };
  const breakpointColumnsObj = {
    default: 5,
    1536: 5,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };

  return (
    <div className="container mx-auto py-[80px]">
      {/* UserInfo */}
      <div className="flex mt-16 justify-center text-center items-center">
        <div className="">
          <button onClick={handelOpenModalImg} className="cursor-pointer">
            {user && user.anh_dai_dien ? (
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={user && imgUrl + user.anh_dai_dien}
                alt="avatar"
              />
            ) : (
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />
            )}
          </button>
            <ModalImg />

          <h1 className="text-xl font-medium">{user && user.hoTen}</h1>
          <p className="text-slate-400">{user && user.email}</p>
          <button
            onClick={handelOpenModal}
            className="px-2 py-4 bg-slate-300 rounded-full text-black font-medium text-sm"
          >
            Chỉnh sửa hồ sơ
          </button>
          <ModalEdit />
        </div>
      </div>
      {/* MasonryLayout*/}
      <div className="mt-10">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="rounded-lg">
            <img
              src={`https://picsum.photos/id/${
                Math.floor(Math.random() * 100) + 1
              }/300/${Math.floor(Math.random() * 280) + 180}`}
              alt="img"
            />
          </div>
        </Masonry>
      </div>
    </div>
  );
}
