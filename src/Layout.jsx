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

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div className={` ${isOpen ? "h-[5vh]" : ""} m`}>
      <div className={`mt-10 max-w-[1110px] mx-auto px-10`}>
        {" "}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
