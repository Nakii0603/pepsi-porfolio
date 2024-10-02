import React from "react";
import Navbar from "./components/Navbar";
import Cover from "@/public/imgJS/Cover";
import Welcome from "./components/Welcome";
import Hero from "./components/NewLook";
import ColdPepsi from "./components/ColdPepsi";
import Carousel from "./components/Carousel";
import BeColdGIF from "@/public/GIF/BeColdGIF";

export default function page() {
  return (
    <div className="bg-black ">
      <Navbar />
      <Carousel />
      <Welcome />
      <Hero />
      <ColdPepsi />
      {/* <BeColdGIF /> */}
    </div>
  );
}
