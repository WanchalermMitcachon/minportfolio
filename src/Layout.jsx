import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/์Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className={` ${isOpen ? "h-[5vh]" : ""} `}>
      <div className={`mx-7 mt-10 `}>
        {" "}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
