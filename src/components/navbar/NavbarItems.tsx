import { NavbarItemsProps } from "@/src/model/props/NavbarItemsProps";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

const NavbarItems = ({ linkColor }: NavbarItemsProps) => {
  return (
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
          {/* scroll={false} is for smooth scrolling no hard jump*/}
          <Link href="/#education" scroll={false}>
            Education
          </Link>
        </li>
        <li className="ml-10 text-sm uppercase hover:border-b">
          {/* scroll={false} is for smooth scrolling no hard jump*/}
          <Link href="/#experience" scroll={false}>
            Experience
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
        <li className="ml-10 text-sm uppercase hover:border-b">
          <ThemeButton />
        </li>
      </ul>
    </div>
  );
};

export default NavbarItems;
