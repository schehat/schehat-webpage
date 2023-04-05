import LinksUrl from "@/src/const/LinksUrl";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex items-center justify-between py-4 ">
      <Link href={LinksUrl.linkedin} target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </Link>
      <Link href={LinksUrl.github} target="_blank" rel="noreferrer">
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
