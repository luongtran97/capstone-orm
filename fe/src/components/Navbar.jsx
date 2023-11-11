import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";
export default function Navbar() {
  return (
    <header className="fixed z-40 bg-white flex w-full items-center justify-between p-5 ">
      <NavLink to="/" className="headerLeft flex">
        <img
          className="w-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png"
          alt=""
        />
      </NavLink>
      <div className="headerMiddle searchBar w-[420px]  ">
        <input
          type="text"
          className="searchForm w-full p-2 text-center text-black rounded-2xl border bg-slate-100"
          placeholder="Tìm kiếm hình ảnh"
        />
      </div>
      <div className="headerRight flex items-center ">
        <Button/>
      </div>
    </header>
  );
}
