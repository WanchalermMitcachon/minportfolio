import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import NotFound from "./NotFound";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route index path="/portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
