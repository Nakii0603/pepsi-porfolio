"use client";

import Logo from "@/public/imgJS/Logo";
import { useState } from "react";
import FullscreenOverlayNav from "./FullscreenOverlayNav";
import { Loyalty } from "./Loyalty";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [language, setLanguage] = useState("mn");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setVisible((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "mn" ? "en" : "mn"));
  };

  const items =
    language === "mn"
      ? [
          { label: "Нүүр", ariaLabel: "Home", href: "#" },
          { label: "Бидний тухай", ariaLabel: "About Us", href: "#" },
          { label: "Брэнд", ariaLabel: "Brand", href: "#" },
          { label: "Карьер", ariaLabel: "Career", href: "#" },
          { label: "Мэдээ, мэдээлэл", ariaLabel: "News", href: "#" },
          { label: "Холбогдох", ariaLabel: "Contact", href: "#" },
        ]
      : [
          { label: "Home", ariaLabel: "Home", href: "#" },
          { label: "About Us", ariaLabel: "About Us", href: "#" },
          { label: "Brand", ariaLabel: "Brand", href: "#" },
          { label: "Career", ariaLabel: "Career", href: "#" },
          { label: "News", ariaLabel: "News", href: "#" },
          { label: "Contact", ariaLabel: "Contact", href: "#" },
        ];

  return (
    <nav className="bg-[#1E1E1E] relative mb-[20px] transition-all duration-1000 rounded-br-lg rounded-bl-lg">
      <div className="flex max-w-[1440px] h-[90px] justify-between mx-auto items-center text-white">
        <div className="mt-[100px] w-[140px] h-[140px] z-10">
          <Logo />
        </div>
        <div className="flex lg:gap-[100px] max-md:gap-5 w-[100%]">
          <div className="max-md:hidden md:flex mx-[10px] justify-between md:font-extrabold md:w-[90%]  ">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                aria-label={item.ariaLabel}
                className="hover:text-gray-400 max-lg:text-[14px] text-[18px] transition duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <Loyalty toggleLanguage={toggleLanguage} language={language} />
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
          toggleLanguage={toggleLanguage}
          language={language}
        />
      </div>
    </nav>
  );
}
