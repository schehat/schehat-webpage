import Connect from "@/src/components/contact/Connect";
import ScrollToHome from "../ScrollToHome";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[color:var(--text-mainGreen)]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <Connect />
          <ContactForm />
        </div>
        <ScrollToHome />
      </div>
    </div>
  );
};

export default Contact;
