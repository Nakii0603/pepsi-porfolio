import LaazLogo from "@/public/LaazLogo";
import NewLook from "@/public/NewLook";
import SameTaste from "@/public/SameTaste";

export default function Hero() {
  return (
    <div className="flex max-w-[1440px] items-center m-auto justify-between text-white">
      <NewLook/>
      <LaazLogo />
      <SameTaste />
    </div>
  );
}
