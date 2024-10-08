
const GIF = [{ gif: "/GIF/Pepsi.gif" }];

export default function LaazLogo() {
  return (
    <div className="pepsi ">
      {GIF.map((item, index) => (
        <img
          className="  w-[300px] h-[300px] mt-[64px]"
          key={index}
          src={item.gif}
          alt="Pepsi GIF"
        />
      ))}
      <img src="./img/PepsiBlack.png" alt="Pepsi Black" />
    </div>
  );
}
