"use client";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Hero from "./components/NewLook";
import ColdPepsi from "./components/ColdPepsi";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import { ChangeLanguegeProvider } from "./ChangeLanguegeProvider";

export default function Page() {
  return (
    <div className="bg-black">
      <ChangeLanguegeProvider>
        <Navbar />
        <Carousel />
        <Welcome />
        <Hero />
        <ColdPepsi />
        <Footer />
      </ChangeLanguegeProvider>
    </div>
  );
}
