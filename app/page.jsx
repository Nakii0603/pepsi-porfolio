import React from "react";
import Navbar from "./components/Navbar";
import Cover from "@/public/Cover";
import Welcome from "./components/Welcome";
import Hero from "./components/NewLook";

export default function page() {
  return (
    <div className="bg-black ">
      <Navbar />
      <Cover />
      <Welcome />
      <Hero />
    </div>
  );
}
