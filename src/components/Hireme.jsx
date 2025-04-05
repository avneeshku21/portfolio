import React from "react";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-blue-400">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
           ​A front-end developer is a professional who specializes in crafting the visual and interactive elements of websites and web applications that users engage with directly. Utilizing a combination of technologies such as HTML for structuring content, CSS for styling and layout, and JavaScript for adding interactivity, they ensure that the user interface is not only aesthetically pleasing but also functional and responsive across various devices and browsers. Their role is pivotal in translating design concepts into functional code, collaborating closely with designers and back-end developers to create seamless and efficient user experiences. By focusing on performance optimization and accessibility, front-end developers play a crucial role in enhancing the overall usability and satisfaction of web platforms. ​
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={"pic"}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
