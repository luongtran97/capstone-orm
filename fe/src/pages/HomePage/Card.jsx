import React from "react";
import { https } from "../../utils/fetchFromApi";
import { useNavigate } from "react-router-dom";
export default function Card({ item }) {
  const navigate = useNavigate();

  const handelDetailPage = async (item) => {
    try {
      await https.get(`/img/getImgById/${item.hinh_id}`);
      navigate(`/detail/${item.hinh_id}`);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };

  return (
    <button
      onClick={() => {
        handelDetailPage(item);
      }}
    >
      <div className="cursor-zoom-in card">
        <div className="rounded-2xl relative">
          <img
            className="w-full object-cover"
            src={`https://picsum.photos/id/${
              Math.floor(Math.random() * 100) + 1
            }/300/${Math.floor(Math.random() * 280) + 180}`}
            alt="img"
          />
          <div className="absolute top-0 left-0  w-full h-full bg-black/30 opacity-0 overlay duration-500">
            <button className="absolute px-3 py-2 top-2 left-2 bg-red-400 rounded-full font-medium text-white">
              Lưu
            </button>
          </div>
        </div>
        <div className="bg-white text-center">
          <h3 className="font-medium ">{item.ten_hinh}</h3>
          <p>{item.mo_ta}</p>
        </div>
      </div>
    </button>
  );
}
