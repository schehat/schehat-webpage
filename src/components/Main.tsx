import MainContent from "@/src/const/Main";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LinksUrl from "../const/LinksUrl";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="=max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {MainContent.upper_text}
          </p>
          <h1 className="py-4 text-gray-700">
            {MainContent.greetings}
            <span className="text-[color:var(--text-mainGreen)]">
              {MainContent.first_name}
            </span>
          </h1>
          <h1 className="py-2 text-gray-700">{MainContent.profession}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {MainContent.lower_text}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href={LinksUrl.linkedin} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href={LinksUrl.github} target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
