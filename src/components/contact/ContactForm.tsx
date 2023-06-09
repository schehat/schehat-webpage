const ContactForm = () => {
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-none border rounded-xl lg:p-4">
      <div className="p-4">
        <form
          action="https://getform.io/f/5b88577b-d186-4816-b943-94ec0d3c0a2e"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone Number</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows={10}
              name="message"
            ></textarea>
          </div>
          <button className="w-full p-4 text-gray-100 mt-4 dark:shadow-none">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
