import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;

// styled components
