import React from "react";

const Contact = () => {
  const contactInfo = [
    { logo: "mail", text: "preetidiwakar23@navgurukul.org" },
    { logo: "call-outline", text: "+91 8303435267" },
    { logo: "location", text: "Kanpur, India" },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-4 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-700 p-3 rounded text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-gray-700 p-3 rounded text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="bg-gray-700 p-3 rounded text-white focus:outline-none"
            ></textarea>
            <button className="bg-cyan-600 hover:bg-cyan-700 transition duration-300 px-6 py-3 rounded text-white font-semibold w-fit">
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-7">
            {contactInfo.map((contact, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-left flex-wrap"
              >
                <div className="min-w-[3.5rem] min-h-[3.5rem] text-3xl flex items-center justify-center text-white bg-blue-400 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
