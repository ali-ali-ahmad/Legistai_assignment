"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import ICONS from "@/assets/svg";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const UserCard = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="px-6">
      <div className="flex cursor-pointer items-center border-2 gap-4 rounded-full px-2 bg-[#f5f5f5] shadow-sm">
        <Image
          src={ICONS.personCover}
          width={50}
          height={50}
          className="border-2 rounded-full"
          alt="Website Logo"
        />
        <div className="flex w-full flex-row items-center justify-around">
          <h1 className="text-black">{user.name}</h1>
          <ChevronDownIcon className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
