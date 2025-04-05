import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      // img: projectTwo,
      name: "Tic tac  toc",
      link: "https://game-project-seven-flax.vercel.app/",
      
    },
    {
      // img: projectOne,
      name: "Book",
      link: "https://bookproject-preetidiwakargithubs-projects.vercel.app/",
      
    },
       {
      // img: projectThree,
      name: "Lorem Text",
      link: "https://lorem-pink.vercel.app/",
     
    },
    {
      // img: projectFour,
      name: "Food Menu",
      link:
        "https://restaurants-menu-six.vercel.app/",
      
    },
    {
      name: "Season Gallery",
      link: "",
    
    },
  ];

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  {/* If you have images, insert here */}
                  {/* <img src={project.img} alt={project.name} className="rounded-lg" /> */}
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3">
                    {/* Optional Github link if available */}
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 bg-gray-800 px-2 py-1 inline-block"
                      >
                        GitHub
                      </a>
                    )}
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
