import BeCold from "@/public/BeCold";

export default function ColdPepsi() {
  return (
    <div className="flex max-w-[1440px] py-[100px] mx-[auto]">
      <div className="flex items-center justify-between gap-8 w-[62%] max-lg:w-[90%] max-xl:w-[70%]">
        <BeCold />
        <p className="text-white text-[48px] max-md:text-[36px] max-sm:text-[30px] font-bold">
          MyPep Mongolia
        </p>
      </div>
    </div>
  );
}
