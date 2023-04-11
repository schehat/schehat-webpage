import ContactImg from "@/src/assets/contact.jpg";
import SocialButtons from "@/src/components/SocialButtons";
import Image from "next/image";

const Connect = () => {
  return (
    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-none border rounded-xl p-4">
      <div className="lg:p-4 h-full">
        <div>
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300"
            src={ContactImg}
            alt="/"
          />
        </div>
        <div>
          <h2 className="py-2">Schehat Abdel Kader</h2>
          <p className="py-4">Let&apos;s connect and contact me</p>
        </div>
        <div>
          <p className="uppercase pt-8">Connect With Me</p>
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};

export default Connect;
