import React from "react";
import Navbar from "./components/Navbar";
import Cover from "@/public/Cover";
import Welcome from "./components/Welcome";
import Hero from "./components/NewLook";
import ColdPepsi from "./components/ColdPepsi";
import BeCold from "@/public/GIF/BeCold";


export default function page() {
  return (
    <div className="bg-black ">
      <Navbar />
      <Cover />
      <Welcome />
      <Hero />
      <ColdPepsi />
      <BeCold />
    </div>
  );
}
