import ChageLanguage from "./ChageLanguage";
import LoyaltyBtn from "./LoyaltyBtn";

function Loyalty({ toggleLanguage, language }) {
  return (
    <div className="flex  md:font-extrabold max-lg:text-[14px] lg:gap-5 gap-2 max-md:hidden">
      <LoyaltyBtn language={language} />
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
    <div className="flex lg:gap-5 gap-5 text-[26px] font-semibold">
      <LoyaltyBtn toggleLanguage={toggleLanguage} language={language} />
      <ChageLanguage toggleLanguage={toggleLanguage} language={language} />
    </div>
  );
}

export { Loyalty, Loyalt2 };
