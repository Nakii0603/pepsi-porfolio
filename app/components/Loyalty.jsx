function Loyalty({ toggleLanguage, language }) {
  return (
    <div className="flex lg:gap-5 gap-2 max-md:hidden">
      <button
        className="loyalty py-[2px] px-3 rounded-lg"
        onClick={toggleLanguage}
      >
        {language === "mn" ? "Лояалти" : "Loyalty"}
      </button>
      <button
        onClick={toggleLanguage}
        className="text-white mx-2"
        aria-label={`Switch to ${language === "mn" ? "English" : "Mongolian"}`}
      >
        {language === "mn" ? "EN" : "MN"}
      </button>
    </div>
  );
}

function Loyalt2({ toggleLanguage, language }) {
  return (
    <div className="flex lg:gap-5 gap-2 text-[26px]">
      <button
        className="loyalty py-[2px] px-3 rounded-lg"
        onClick={toggleLanguage}
      >
        {language === "mn" ? "Лояалти" : "Loyalty"}
      </button>
      <button
        onClick={toggleLanguage}
        className="text-white mx-2"
        aria-label={`Switch to ${language === "mn" ? "English" : "Mongolian"}`}
      >
        {language === "mn" ? "EN" : "MN"}
      </button>
    </div>
  );
}

export { Loyalty, Loyalt2 };
