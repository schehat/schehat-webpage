import SocialButtons from "@/src/components/SocialButtons";
import MobileNavbarItems from "@/src/components/navbar//MobileNavbarItems";
import { imagesCommon } from "@/src/constant/Images";
import { MobileNavbarProps } from "@/src/model/props/MobileNavbarProps";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = ({ nav, handleNav, setNav }: MobileNavbarProps) => {
  return (
    <div
      className={
        nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
      }
    >
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Link href="/#home" scroll={false}>
              <Image src={imagesCommon.logo} width="120" height="35" alt="/" />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray p-3 cursor-pointer"
            >
              <AiOutlineClose className="text-gray-700" />
            </div>
          </div>
          <div className="border-b my-4 ">
            <p className="w-[85%] md:w-[90%] py-4">
              <span className="text-gray-700">Lets build something</span>
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col text-gray-700">
          <MobileNavbarItems setNav={setNav} />
          <div className="pt-40">
            <p className="uppercase tracking-widest text-mainGreen  dark:text-mainGreen">
              Let&apos;s Connect
            </p>
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
