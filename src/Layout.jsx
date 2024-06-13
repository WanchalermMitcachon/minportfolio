import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/์Navbar/Navbar";

function Layout() {
  return (
    <>
      <div className="mx-7 mt-10 ">
        {" "}
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;
