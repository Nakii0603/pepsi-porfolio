"use client";

import Logo from "@/public/Logo";
import { useState } from "react";

const MenuItems = () => (
  <>
    <a href="" aria-label="Home">
      Нүүр
    </a>
    <a href="" aria-label="About Us">
      Бидний тухай
    </a>
    <a href="" aria-label="Brand">
      Брэнд
    </a>
    <a href="" aria-label="Career">
      Карьер
    </a>
    <a href="" aria-label="News">
      Мэдээ, мэдээлэл
    </a>
    <a href="" aria-label="Contact">
      Холбогдох
    </a>
    <a href="" aria-label="Social Impact">
      Нийгмийн үзүүлэх нөлөө
    </a>
    <a href="" aria-label="English">
      EN
    </a>
  </>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#1E1E1E] relative mb-[20px] transition-all duration-1000 rounded-br-lg rounded-bl-lg">
      <div className="flex max-w-[1440px] h-[90px] justify-between mx-auto items-center text-white">
        <div className="mt-[100px] w-[140px] h-[140px]">
          <Logo />
        </div>
        <div className="max-md:hidden md:flex  mx-[10px] justify-between w-[85%]  md:font-extrabold md:w-[85%] text-[16px] max-lg:text-[12px]">
          <MenuItems />
        </div>
        <div className="flex md:hidden items-center">
          <button
            className={`menu-btn m-4 ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>
        </div>
      </div>
      <div
        className={`flex-col text-white md:hidden flex transition-all items-end duration-1000 ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col">
          <MenuItems />
        </div>
      </div>
    </nav>
  );
}
