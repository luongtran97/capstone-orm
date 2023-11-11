import React from "react";
import Masonry from "react-masonry-css";
import Card from "./Card";

export default function MasonryLayout({ items }) {
  const breakpointColumnsObj = {
    default: 6,
    1536: 5,
    1280: 4,
    1024: 3,
    768: 2,
    640: 1,
  };


  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item) => {
        return <Card   key={item.hinh_id} item={item} />;
      })}
    </Masonry>
  );
}
