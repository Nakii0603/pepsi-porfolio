import React, { useState } from "react";

const items = [
  { label: "Нүүр", ariaLabel: "Home", href: "#" },
  { label: "Бидний тухай", ariaLabel: "About Us", href: "" },
  { label: "Брэнд", ariaLabel: "Brand", href: "" },
  { label: "Карьер", ariaLabel: "Career", href: "" },
  { label: "Мэдээ, мэдээлэл", ariaLabel: "News", href: "" },
  { label: "Холбогдох", ariaLabel: "Contact", href: "" },
  { label: "Нийгмийн үзүүлэх нөлөө", ariaLabel: "Social Impact", href: "" },
  { label: "EN", ariaLabel: "English", href: "" },
];

function MenuItems({ items }) {
  return (
    <ul className="menu-items">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href} aria-label={item.ariaLabel}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="max-md:flex hidden flex-col mt-[px]">
      <button
        className={`menu-btn ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className={`bar bar1 ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar bar2 ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar bar3 ${isMenuOpen ? "active" : ""}`}></span>
      </button>
      {isMenuOpen && (
        <div className=" absolute flex flex-col right-0 top-[60px] p-3 bg-[#80808083]">
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
      )}
    </div>
  );
}
