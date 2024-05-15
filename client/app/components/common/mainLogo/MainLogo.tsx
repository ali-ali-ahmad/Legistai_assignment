import { lusitana } from "@/assets/font";
import Image from "next/image";
import IMAGES from "@/assets/img";

const MainLogo = () => {
  return (
    <div
      className={`${lusitana.className} flex h-20 flex-row items-center leading-none text-white`}
    >
      <Image
        src={IMAGES.mainLogo}
        width={500}
        height={100}
        className="rounded"
        alt="Website Logo"
      />
    </div>
  );
};

export default MainLogo;
