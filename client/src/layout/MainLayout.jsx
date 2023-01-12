import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const elements = [<Announcement />, <Navbar />];
  return (
    <>
      {pathname === "/" ? (
        <>{elements.map((element) => element)}</>
      ) : (
        <>
          {elements
            .sort((a, b) => elements.indexOf(b) - elements.indexOf(a))
            .map((element) => element)}
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
