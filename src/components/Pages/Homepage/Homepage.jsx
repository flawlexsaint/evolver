import React from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Navigation from "../../Layout/Navigation/Navigation";
import TopBar from "../../Layout/TopBar/TopBar";
import Category from "./Fragments/Category/Category";
import Contact from "./Fragments/Contact/Contact";
import Header from "./Fragments/Header/Header";
import Products from "./Fragments/Products/Products";
import Sales from "./Fragments/Sales/Sales";
import Shop from "./Fragments/Shop/Shop";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <TopBar />
      <Navigation />
      <Header />
      <Shop />
      <Category />
      <Products />
      <Sales />
      <Contact />
      <Footer />
      <Navbar />
    </>
  );
};

export default Homepage;
