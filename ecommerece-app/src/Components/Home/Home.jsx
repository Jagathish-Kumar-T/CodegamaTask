import React from "react";
import "./Home.css";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Products />
    </>
  );
}
