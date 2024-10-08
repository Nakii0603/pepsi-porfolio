
const GIF = [{ gif: "/GIF/BeColdGIF.gif" }];

export default function ColdPepsi() {
  return (
    <div className="flex max-w-[1440px] py-[100px] mx-[auto]">
      <div className="flex items-center justify-center max-sm:flex-wrap  m-auto gap-[100px] w-[62%] max-lg:w-[90%] max-xl:w-[70%]">
        {GIF.map((item, index) => (
          <img key={index} src={item.gif} className="w-[230px] h-[230px] rounded-[50%]" alt="Cold Pepsi GIF" />
        ))}
        <p className="text-white text-[48px] max-md:text-[36px] max-sm:text-[30px] font-bold">
          MyPep Mongolia
        </p>
      </div>
    </div>
  );
}
