import MainLogo from "@/components/common/mainLogo/MainLogo";
import {
  ArrowRightStartOnRectangleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { UserCard } from "../userCard";
import { Link } from "@/components/common";
import { AdvertiseCard } from "../advertiseCard";
import { LanguageCard } from "../languageCard";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="mt-2 hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          <div className="flex h-full flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-5">
              <Link href="/">
                <MainLogo />
              </Link>
              <Link
                className="flex bg-[#0054ec] h-[48px] grow w-48 items-center justify-center gap-2 rounded-full p-3 text-sm font-medium text-[#ffff] md:flex-none md:justify-center md:p-2 md:px-3"
                href={"/dashboard"}
              >
                <Squares2X2Icon className="w-6" />
                Dashboard
              </Link>
              <div className="w-full">
                <UserCard />
              </div>
            </div>
            <div className="flex flex-col w-full items-center gap-2">
              <AdvertiseCard className="flex gap-4 justify-between flex-col items-center rounded-xl p-2 shadow-sm bg-[#0054ec]" />
              <Link
                className="flex h-[48px] grow w-48 items-center gap-2 rounded-full p-3 text-sm font-medium text-[#000]"
                href={"/settings"}
              >
                <Squares2X2Icon className="w-6" />
                Settings
              </Link>
              <button className="flex h-[48px] w-48 grow items-center gap-2 rounded-full p-3 text-sm font-medium hover:text-red-700">
                <ArrowRightStartOnRectangleIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
              <div className="w-full">
                <LanguageCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
