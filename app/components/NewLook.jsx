import LaazLogo from "@/public/imgJS/LaazLogo";
import NewLook from "@/public/imgJS/NewLook";
import SameTaste from "@/public/imgJS/SameTaste";

export default function Hero() {
  return (
    <div className="flex max-w-[1440px] max-sm:flex-col max-sm:justify-center items-center m-auto justify-between text-white">
      <NewLook/>
      <LaazLogo />
      <SameTaste />
    </div>
  );
}
