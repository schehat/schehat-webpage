import MobileNavbar from "@/src/components/navbar/MobileNavbar";
import NavbarItems from "@/src/components/navbar/NavbarItems";
import { imagesCommon } from "@/src/constant/Images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

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
    const projectsRegex = /^\/projects\/.*/;
    if (projectsRegex.test(router.asPath)) {
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
          <NavbarItems linkColor={linkColor} />
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
      <MobileNavbar nav={nav} setNav={setNav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
