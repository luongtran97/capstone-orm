import React, { useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { https, postComment, saveImg } from "../../utils/fetchFromApi";
import { commentAction, pushComment } from "../../redux/slice/CommentSlice";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../../redux/slice/ModalSlice";
import { LocalService } from "../../services/localservices";
import ModalAuth from "../../components/Modal/ModalAuth/ModalAuth";

export default function DetailPage() {
  const { id } = useParams();
  const [img, setImg] = useState();
  const comment = useSelector((state) => state.commentSlice.comment);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const inputRef = useRef(null);
  useEffect(() => {
    // lấy hình
    https
      .get(`/img/getImgById/${id}`)
      .then((res) => {
        setImg(res.data);
      })
      .catch((err) => {});

    // lấy bình luận
    https
      .get(`/comment/getcomment-byid/${id}`)
      .then((res) => {
        dispatch(pushComment(res.data));
      })
      .catch((err) => {});
  }, [id]);

  // xử lý gửi bình luận
  const handelSendComment = () => {
    const model = {
      hinh_id: img.hinh_id,
      noi_dung: inputRef.current.value,
    };
    setLoading(true);
    postComment(model)
      .then((res) => {
        dispatch(commentAction(res));
        setLoading(false);
        inputRef.current.value = "";
      })
      .catch((err) => {
        setLoading(false);
        console.log("🚀 ~ err:", err);
      });
  };

  // xử lý hiện modal đăng nhập nếu user chưa đăng nhập
  const handelOpenModal = () => {
    const user = LocalService.getItem("USER_LOGIN");
    if (!user) {
      dispatch(setModalOpen(true));
      return;
    }
  };

  // xử lý lưu hình
  const handelSaveImg = () => {
    saveImg({ hinh_id: img.hinh_id })
      .then((res) => {
        console.log("🚀 ~ res:", res);
      })
      .catch((err) => {
        console.log("🚀 ~ err:", err);
      });
  };

  return (
    <div className="container mx-auto  py-[80px]">
      <div className="flex mt-16 min-h-[650px] w-[1016px] mx-auto rounded-[32px] shadow-[rgba(0,0,0,0.1)_0px_1px_20px_0px] overflow-hidden">
        <div className="flex-shrink-0 w-1/2 basis-1/2">
          <img
            className="w-full h-full"
            src={`https://picsum.photos/id/${
              Math.floor(Math.random() * 100) + 1
            }/200/200`}
            alt="img"
          />
        </div>
        <div className="flex-shrink-0 w-1/2 basis-1/2">
          {/* save button */}
          <div className="text-right p-7">
            <button
              onClick={handelSaveImg}
              className="bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-700"
            >
              Lưu
            </button>
          </div>

          {/* info img */}
          <div className="p-7">
            <h3 className="text-lg font-semibold truncate break-words">
              {img && img.ten_hinh}
            </h3>
          </div>

          {/* comment */}
          <div className="p-7">
            <p className="text-xl font-semibold">Bình luận</p>

            {/* comment list */}
            <div className="overflow-y-auto mt-5">
              <Comment comment={comment} />
            </div>
          </div>

          {/* comment counter */}
          <hr className="my-5" />
          <div className="px-7 pb-7">
            <p className="text-lg font-bold">
              <span className="mx-1">
                {comment && comment ? (
                  <span>{comment.length}</span>
                ) : (
                  <span>Hãy là người đầu tiên bình luận </span>
                )}{" "}
              </span>
              <span>Bình luận</span>
            </p>
          </div>

          {/* send comment */}
          <div className="p-7">
            <div className="flex relative">
              <input
                onClick={handelOpenModal}
                ref={inputRef}
                type="text"
                className="pl-5 w-full py-3 rounded-full outline-none bg-gray-300"
                placeholder="Thêm nhận xét"
              />
              <Button
                loading={loading}
                onClick={handelSendComment}
                type="circle-primary"
                className="absolute right-0 top-1"
              >
                <SendOutlined />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ModalAuth />
    </div>
  );
}
