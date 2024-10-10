import { useState, useEffect } from "react";

const DrinkSwitcher = () => {
  const drinks = [
    {
      name: "Pepsi Black",
      img: "/icons/PepMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+1+Small",
        "https://via.placeholder.com/300.png?text=Drink+1+Medium",
        "https://via.placeholder.com/300.png?text=Drink+1+Large",
        "https://via.placeholder.com/300.png?text=Drink+1+Extra+Large",
      ],
    },
    {
      name: "Evervess",
      img: "/icons/EvervessMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+2+Small",
        "https://via.placeholder.com/300.png?text=Drink+2+Medium",
        "https://via.placeholder.com/300.png?text=Drink+2+Large",
        "https://via.placeholder.com/300.png?text=Drink+2+Extra+Large",
      ],
    },
    {
      name: "Mountain Dew",
      img: "/icons/MountainMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+3+Small",
        "https://via.placeholder.com/300.png?text=Drink+3+Medium",
        "https://via.placeholder.com/300.png?text=Drink+3+Large",
        "https://via.placeholder.com/300.png?text=Drink+3+Extra+Large",
      ],
    },
    {
      name: "Lipton ice tea",
      img: "/icons/Lip1.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+4+Small",
        "https://via.placeholder.com/300.png?text=Drink+4+Medium",
        "https://via.placeholder.com/300.png?text=Drink+4+Large",
        "https://via.placeholder.com/300.png?text=Drink+4+Extra+Large",
      ],
    },
    {
      name: "7-Up",
      img: "/icons/SevenUpMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+5+Small",
        "https://via.placeholder.com/300.png?text=Drink+5+Medium",
        "https://via.placeholder.com/300.png?text=Drink+5+Large",
        "https://via.placeholder.com/300.png?text=Drink+5+Extra+Large",
      ],
    },
    {
      name: "Mirinda",
      img: "/icons/MirindaMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+6+Small",
        "https://via.placeholder.com/300.png?text=Drink+6+Medium",
        "https://via.placeholder.com/300.png?text=Drink+6+Large",
        "https://via.placeholder.com/300.png?text=Drink+6+Extra+Large",
      ],
    },
    {
      name: "Sting energy",
      img: "/icons/StingMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+7+Small",
        "https://via.placeholder.com/300.png?text=Drink+7+Medium",
        "https://via.placeholder.com/300.png?text=Drink+7+Large",
        "https://via.placeholder.com/300.png?text=Drink+7+Extra+Large",
      ],
    },
    {
      name: "Gatorade sport drink",
      img: "/icons/GatoradeMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+8+Small",
        "https://via.placeholder.com/300.png?text=Drink+8+Medium",
        "https://via.placeholder.com/300.png?text=Drink+8+Large",
        "https://via.placeholder.com/300.png?text=Drink+8+Extra+Large",
      ],
    },
    {
      name: "Aquafine",
      img: "/icons/AquafineMini.png",
      sizes: [
        "https://via.placeholder.com/300.png?text=Drink+9+Small",
        "https://via.placeholder.com/300.png?text=Drink+9+Medium",
        "https://via.placeholder.com/300.png?text=Drink+9+Large",
        "https://via.placeholder.com/300.png?text=Drink+9+Extra+Large",
      ],
    },
  ];

  const [currentDrinkIndex, setCurrentDrinkIndex] = useState(0);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);

  const switchDrink = (index) => {
    setCurrentDrinkIndex(index);
    setCurrentSizeIndex(0);
  };

  const switchSize = (index) => {
    setCurrentSizeIndex(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setCurrentDrinkIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : drinks.length - 1
      );
    } else if (event.key === "ArrowRight") {
      setCurrentDrinkIndex((prevIndex) =>
        prevIndex < drinks.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      setCurrentSizeIndex((prevIndex) =>
        prevIndex > 0
          ? prevIndex - 1
          : drinks[currentDrinkIndex].sizes.length - 1
      );
    } else if (event.key === "ArrowDown") {
      setCurrentSizeIndex((prevIndex) =>
        prevIndex < drinks[currentDrinkIndex].sizes.length - 1
          ? prevIndex + 1
          : 0
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentDrinkIndex, currentSizeIndex]);

  return (
    <div className="max-w-[1440px]">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <h2>Select Size</h2>
          <div className="flex gap-2 ml-4">
            {drinks[currentDrinkIndex].sizes.map((_, index) => (
              <button
                key={index}
                className={`bg-white p-2 rounded ${
                  currentSizeIndex === index ? "border border-blue-500" : ""
                }`}
                onClick={() => switchSize(index)}
                aria-label={`Select size ${index + 1}`}
              >
                Size {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h1>{drinks[currentDrinkIndex].name}</h1>
          <img
            src={drinks[currentDrinkIndex].sizes[currentSizeIndex]}
            alt={`Image of ${drinks[currentDrinkIndex].name} - Size ${
              currentSizeIndex + 1
            }`}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
      <div>
        <h2>Select Drink</h2>
        <div className="flex justify-between">
          {drinks.map((drink, index) => (
            <div
              key={index}
              onClick={() => switchDrink(index)}
              className={`flex gap-1 p-2 rounded-full bg-white h-[50px] w-[115px] items-center cursor-pointer ${
                currentDrinkIndex === index ? "border border-blue-500" : ""
              }`}
              role="button"
              aria-label={`Select drink ${drink.name}`}
              tabIndex={0} 
            >
              <img
                src={drink.img}
                alt={drink.name}
                style={{ width: "40px", height: "40px" }}
              />
              <button className="text-[12px]  font-semibold">
                {drink.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkSwitcher;
