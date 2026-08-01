import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

export default function HeaderMain() {
  return (
      <header className="w-[1800px] mx-auto">
        <div className="uppercase text-accent tracking-[0.2em] flex flex-row justify-between items-center min-h-16">
          <Link className="flex flex-row items-center gap-2" href={"/"}>
            <FaArrowLeftLong /> home
          </Link>
          <div className="text-4xl font-bold">Reel</div>
          <div className="text-3xl border rounded-full p-1 ">
            <CiUser />
          </div>
        </div>
      </header>
  );
}
