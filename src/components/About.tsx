import Image from "next/image";
import Link from "next/link";
import AboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#66bd80]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I began my programming journey in 2018 with web development, then
            gradually expanded my knowledge by learning C# and Python to grasp
            the core concepts of programming. In 2020, while studying at
            university, I delved deeper into systems through Java, C/C++, Unix,
            and databases. This newfound knowledge enabled me to create software
            projects for assignments and personal projects, and continue to
            improve my skills.
          </p>

          <p className="py-2 text-gray-600">
            In my spare time, I enjoy calisthenics and staying fit, as well as
            playing video games and watching anime. Additionally, I have a keen
            interest in the fields of machine learning and chess.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
