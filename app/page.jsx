import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Hero from "./components/NewLook";
import ColdPepsi from "./components/ColdPepsi";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function page() {
  return (
    <div className="bg-black ">
      <Navbar />
      <Carousel />
      <Welcome />
      <Hero />
      <ColdPepsi />
      <Footer/>
    </div>
  );
}
