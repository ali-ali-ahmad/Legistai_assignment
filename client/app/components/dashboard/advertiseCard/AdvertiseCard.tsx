import { AdvertiseCardPropsTypes } from "./AdvertiseCard.types";
import { Button } from "@/components/common";
import Image from "next/image";
import IMAGES from "@/assets/img";

const AdvertiseCard = (props: AdvertiseCardPropsTypes) => {
  const { className } = props;
  return (
    <div className={className}>
      <Image
        src={IMAGES.mainLogo}
        width={80}
        className=" rounded-full"
        alt="Website Logo"
      />
      <div className="flex flex-col items-center">
        <p className="font-bold text-[#fff]">Legistai Pro</p>
        <p className=" text-[#fff] text-sm">Get access to all features</p>
      </div>
      <Button
        className="w-44 flex items-center justify-center font-bold rounded-2xl bg-[#ffffff] h-10 px-4 text-sm text-[#206aee] transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
        type="submit"
      >
        Get Pro
      </Button>
    </div>
  );
};

export default AdvertiseCard;
