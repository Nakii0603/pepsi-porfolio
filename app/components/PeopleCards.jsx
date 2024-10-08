const data = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
    text: "Cold weather attire",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
    text: "Bearded man in striped shirt",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
    text: "Cold weather attire",
  },
  {
    id: 4,
    img: "/GIF/CoverStatic.gif",
    text: "Bearded man in striped shirt",
  },
  {
    id: 5,
    img: "/img/Becold.png",
    text: "Cold weather attire",
  },
  {
    id: 6,
    img: "/img/Becold.png",
    text: "Bearded man in striped shirt",
  },
];

export default function PeopleCards() {
  return (
    <div className="bg-[#0125FF]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {data.slice(0, 6).map((item) => (
            <div className="w-[290px] h-[400px]">
              <div key={item.id} className="my-4 text-center bg-white">
                <img
                  src={item.img}
                  alt={item.text}
                  className="max-w-xs rounded-[50%] w-[200px] h-[200px]"
                />
                <p className="text-white mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
