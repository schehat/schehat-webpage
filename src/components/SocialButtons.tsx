import { links } from "@/src/constant/Links";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex items-center justify-between py-4 ">
      <Link href={links.linkedin} target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </Link>
      <Link href={links.github} target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </Link>
      <Link href="/#contact" scroll={false}>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <AiOutlineMail />
        </div>
      </Link>
    </div>
  );
};

export default SocialButtons;
