import React from "react";
import Slide from "react-reveal/Slide";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const Project = ({ projects }) => {
  return (
    <div>
      <div className="container flex items-center justify-center min-h-screen px-2 md:px-0 py-24 mx-auto">
        <div className="flex flex-col w-fit">
          <h1 className="mb-5 mx-5 md:mx-4 font-gothamB text-4xl">
            <Slide top>Projects.</Slide>
          </h1>
          <div className="flex flex-wrap md:justify-start justify-center w-fit">
            {projects.map((project, index) => (
              <div className="p-4 w-96" key={index}>
                <Slide left delay={index * 200}>
                  <Tilt>
                    <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
                      <Image
                        height={500}
                        width={500}
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={project.imageSrc}
                        alt={project.title}
                      />
                      <div className="p-6">
                        <h1 className="title-font text-xl font-gothamB mb-3">
                          {project.title}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center flex-wrap">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-green-500 pr-2 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </Slide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
