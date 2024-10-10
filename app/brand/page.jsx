"use client";
import ImageSwitcher from "../components/ImageSwitcher";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChangeLanguegeProvider } from "../ChangeLanguegeProvider";

export default function Page() {
  return (
    <div className="bg-black">
      <ChangeLanguegeProvider>
        <Navbar />
        <ImageSwitcher />
        <Footer />
      </ChangeLanguegeProvider>
    </div>
  );
}
