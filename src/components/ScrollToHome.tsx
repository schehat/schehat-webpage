import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const ScrollToHome = () => {
  return (
    <div className="flex justify-center py-12">
      <Link href="/#home" scroll={false}>
        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
          <HiOutlineChevronDoubleUp
            className="text-[color:var(--text-mainGreen)]"
            size={30}
          />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToHome;
