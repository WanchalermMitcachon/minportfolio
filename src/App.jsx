import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFound from "./NotFound";
import Layout from "./Layout";
import PortfolioDetail from "./components/Portfolio/PortfolioDetail/PortfolioDetail";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route index path="/portfolio" element={<Portfolio />}></Route>
          <Route
            index
            path="/portfolio/:slug"
            element={<PortfolioDetail />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
