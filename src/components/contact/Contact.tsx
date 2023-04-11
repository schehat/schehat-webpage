import ScrollToHome from "@/src/components/ScrollToHome";
import Connect from "@/src/components/contact/Connect";
import ContactForm from "@/src/components/contact/ContactForm";
import SectionWrapper from "@/src/hoc/SectionWrapper";
import { textVariant } from "@/src/utils/motion";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <motion.div variants={textVariant(0)}>
          <p className="text-xl tracking-widest uppercase text-mainGreen  dark:text-mainGreen">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            <Connect />
            <ContactForm />
          </div>
          <ScrollToHome />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
