import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ contentPage }) {
  return (
    <div>
      <Navbar/>
      {contentPage}
      <Footer/>
    </div>
  );
}
