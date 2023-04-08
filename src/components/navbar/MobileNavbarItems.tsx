import { MobileNavbarItemsProps } from "@/src/model/props/MobileNavbarItemsProps";
import Link from "next/link";

const MobileNavbarItems = ({ setNav }: MobileNavbarItemsProps) => {
  return (
    <div>
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
        <Link href="/#education" scroll={false}>
          <li onClick={() => setNav(false)} className="py-4 text-sm">
            Education
          </li>
        </Link>
        <Link href="/#experience" scroll={false}>
          <li onClick={() => setNav(false)} className="py-4 text-sm">
            Experience
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
    </div>
  );
};

export default MobileNavbarItems;
