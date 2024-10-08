
const GIF = [{ gif: "/GIF/Pepsi.gif" }];

export default function LaazLogo() {
  return (
    <div className="pepsi relative">
      {GIF.map((item, index) => (
        <img
          className=" absolute w-[300px] h-[300px] mt-[64px]"
          key={index}
          src={item.gif}
          alt="Pepsi GIF"
        />
      ))}
      <img src="./img/PepsiBlack.png" alt="Pepsi Black" />
    </div>
  );
}
