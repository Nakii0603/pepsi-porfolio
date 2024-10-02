"use client";

import Logo from "@/public/imgJS/Logo";
import { useState } from "react";
import FullscreenOverlayNav from "./FullscreenOverlayNav";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setVisible((prev) => !prev); 
  };

  const items = [
    { label: "Нүүр", ariaLabel: "Home", href: "#" },
    { label: "Бидний тухай", ariaLabel: "About Us", href: "#" },
    { label: "Брэнд", ariaLabel: "Brand", href: "#" },
    { label: "Карьер", ariaLabel: "Career", href: "#" },
    { label: "Мэдээ, мэдээлэл", ariaLabel: "News", href: "#" },
    { label: "Холбогдох", ariaLabel: "Contact", href: "#" },
    { label: "Нийгмийн үзүүлэх нөлөө", ariaLabel: "Social Impact", href: "#" },
    { label: "EN", ariaLabel: "English", href: "#" },
  ];

  return (
    <nav className="bg-[#1E1E1E] relative mb-[20px] transition-all duration-1000 rounded-br-lg rounded-bl-lg">
      <div className="flex max-w-[1440px] h-[90px] justify-between mx-auto items-center text-white">
        <div className="mt-[100px] w-[140px] h-[140px]">
          <Logo />
        </div>
        <div className="max-md:hidden md:flex mx-[10px] justify-between w-[85%] md:font-extrabold md:w-[85%] text-[18px] max-lg:text-[12px]">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.ariaLabel}
              className="hover:text-gray-400 transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden max-md:flex mr-5">
          {visible && (
            <button
              className="hidden max-md:flex menu-btn"
              onClick={toggleMenu}
            >
              <span className="bar bar1"> </span>
              <span className="bar bar2"> </span>
              <span className="bar bar3"> </span>
            </button>
          )}
        </div>
        <FullscreenOverlayNav
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          items={items}
        />
      </div>
    </nav>
  );
}
