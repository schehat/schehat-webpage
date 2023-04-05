import AboutContent from "@/src/const/About";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[color:var(--text-mainGreen)]">
            About
          </p>
          <h2 className="py-4">{AboutContent.introduction}</h2>
          <p className="py-2 text-gray-600">{AboutContent.firstParagraph}</p>

          <p className="py-2 text-gray-600">{AboutContent.secondParagraph}</p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {AboutContent.reference}
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutContent.image} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
