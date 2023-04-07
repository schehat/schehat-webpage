import { imagesCommon } from "@/src/constant/Images";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import SocialButtons from "../SocialButtons";

const MobileNavbar = ({ nav, handleNav, setNav }: any) => {
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
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">Lets build something</p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <Link href="/#home" scroll={false}>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Home
              </li>
            </Link>
            <Link href="/#about" scroll={false}>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                About
              </li>
            </Link>
            <Link href="/#skills" scroll={false}>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Skills
              </li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                Projects
              </li>
            </Link>
            <li onClick={() => setNav(false)} className="py-4 text-sm">
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="pt-40">
            <p className="uppercase tracking-widest text-[color:var(--text-mainGreen)]">
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
