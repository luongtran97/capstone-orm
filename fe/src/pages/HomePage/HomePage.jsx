import React, { useEffect, useState } from "react";
import MasonryLayout from "./MasonryLayout";
import { https } from "../../utils/fetchFromApi";

export default function HomePage() {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await https.get("/img/getAllImg");
        setItems(res.data);
      } catch (error) {
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="py-[80px]">
      <div className="container mx-auto">
        <h1 className="text-center font-medium text-xl py-5">Dành cho bạn</h1>
        {items && <MasonryLayout items={items} />}
      </div>
    </div>
  );
}
