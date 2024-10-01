import { useState } from "react";

export const menuItems = [
  { id: 1, label: "Нүүр", href: "/" },
  { id: 2, label: "Брэнд", href: "/brand" },
  { id: 3, label: "Карьер", href: "/career" },
  { id: 4, label: "Мэдээ, мэдээлэл", href: "/news" },
  { id: 5, label: "Холбоо барих", href: "/contact" },
];

export default function MenuIcon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="max-md:flex justify-center flex-col  relative">
        <button
          className={`menu-btn mr-4 ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-list"
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </button>
      </div>
      {isMenuOpen && (
        <div id="menu-list" className="max-md:flex flex-col w-full mt-2">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="menu-link text-white aboutMenu h-10 flex items-center pl-6"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
