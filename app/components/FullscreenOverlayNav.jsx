const FullscreenOverlayNav = ({ isOpen, toggleMenu, items }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90  md:hidden transition-all duration-500 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end relative">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className={`x-btn absolute mt-7 mr-3  ${isOpen ? "active" : ""}`}
        >
          <span className="bar1 bar"></span>
          <span className="bar2 bar"></span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full  text-white">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            aria-label={item.ariaLabel}
            className="my-2 text-[26px] text-lg hover:text-gray-400 transition duration-200"
            onClick={toggleMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FullscreenOverlayNav;
