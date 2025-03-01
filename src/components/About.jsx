import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "#link";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-blue-400">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Hi, I'm Preeti Diwakar, a frontend developer from Kanpur. I have a strong foundation in web development, with technical skills in JavaScript, HTML, and CSS, along with basic knowledge of Python and C programming. I hold a Software Engineering Diploma from Navgurukul and have experience building user-friendly web applications. My passion lies in solving complex problems, continuously learning new technologies, and working on innovative projects that make a difference. Outside of work, I find joy in cooking and engaging in creative activities that fuel my inspiration. I am eager to join a dynamic team where I can continue to grow, contribute, and make a positive impact.
                <br />
                Beyond Angular, I possess a versatile skill set. I am proficient in javascript, TypeScript, React.js, Bootstrap, Firebase, and GitHub, ensuring that I am well-equipped to adapt to diverse project requirements.
              
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
