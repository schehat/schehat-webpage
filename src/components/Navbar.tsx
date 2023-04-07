import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { imagesCommon } from "../constant/Images";
import MobileNavbar from "./navbar/MobileNavbar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  // toogle menu
  const handleNav = () => {
    setNav(!nav);
  };

  const [position, setPosition] = useState("fixed");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/projects/property" ||
      router.asPath === "/projects/crypto" ||
      router.asPath === "/projects/netflix" ||
      router.asPath === "/projects/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={imagesCommon.logo}
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#home" scroll={false}>
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              {/* scroll={false} is for smooth scrolling no hard jump*/}
              <Link href="/#about" scroll={false}>
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills" scroll={false}>
                Skills
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects" scroll={false}>
                Projects
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <MobileNavbar nav={nav} handleNav={handleNav} setNav={setNav} />
    </div>
  );
};

export default Navbar;
