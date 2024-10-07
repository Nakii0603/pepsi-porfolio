import Facebook from "@/public/imgJS/Facebook";
import Instagram from "@/public/imgJS/Instagram";
import Linkedin from "@/public/imgJS/Linkedin";
import Logo from "@/public/imgJS/Logo";
import Youtube from "@/public/imgJS/Youtube";

export default function Footer() {
  return (
    <div className="bg-[#1443FF] ">
      <div className="max-w-[1440px] m-auto flex justify-between p-2 gap-2 items-center">
        <div className="w-[50px]">
          <Logo className="" />
        </div>
        <div className="flex gap-[70px] max-md:gap-4">
          <div className="flex text-white gap-4 font-bold">
            <p>Санал хүсэлт</p>
            <p>Асуулт, Хариулт</p>
            <p>Лого татах</p>
          </div>
          <div className="flex gap-4 items-center ">
            <Linkedin />
            <Youtube />
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}
