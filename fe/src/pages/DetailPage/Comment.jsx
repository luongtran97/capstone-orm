import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";
import { imgUrl } from "../../constant/regex";

export default function Comment({ comment }) {
  const handelMapComment = () => {
    return (
      comment &&
      comment.map((item, index) => {     
        return (
          <div key={index} className="comment py-2">
            { item && item.nguoi_dung.anh_dai_dien ? (
              <Avatar src={imgUrl + item.nguoi_dung.anh_dai_dien} alt="avatar" />
            ) : (
              <Avatar
                style={{ backgroundColor: "#87d068", marginRight: "4px" }}
                icon={<UserOutlined />}
              />
            )}

            <span className="username font-bold">{item.nguoi_dung.hoTen}</span>
            <span> : </span>
            <span className="comment-content">{item.noi_dung}</span>
          </div>
        );
      })
    );
  };
  return <div className="comment">{handelMapComment()}</div>;
}
