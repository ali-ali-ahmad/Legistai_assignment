import Image from "next/image";
import IMAGES from "./assets/img";
import { Link } from "./components/common";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src={IMAGES.mainLogo} alt="Legistia Logo" width={480} priority />
      <div className="flex flex-row items-center gap-2">
        <Link
          className="bg-[#38bab8] p-2 rounded-xl font-bold hover:bg-[#38bab8]/25"
          href={"/login"}
        >
          Login
        </Link>
        <p>to start</p>
      </div>
    </main>
  );
}
