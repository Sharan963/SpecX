import React from "react";
import BrandStats from "../components/layout/BrandStats";
import Main from "../components/layout/Main";
import WhyUs from "../components/layout/WhyUs";
import AboutUs from "../components/layout/AboutUs";
import Category from "../components/layout/Category";
import Accessories from "../components/layout/Accessories";

const Home = () => {
  return (
    <>
    <Main />
    <BrandStats />
    <AboutUs />
    <WhyUs />
    <Category />
    <Accessories />
    </>
  );
};

export default Home;
