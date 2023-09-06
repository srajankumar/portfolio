import Slide from "react-reveal/Slide";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import Linkk from "@/templates/Links";

const App = () => {
  const projects = [
    {
      title: "Hungry Hive",
      description: "A MERN stack based recipe app.",
      tags: ["#mongodb", "#express", "#react", "#nodejs", "#tailwindcss"],
      imageSrc: "/assets/project/main/hungry-hive.png",
      sourcecode: "https://github.com/srajankumar/hungry-hive",
      link: "/projects/hungry-hive",
    },
    {
      title: "Pull Quest",
      description:
        "A simple and fun quest to learn how to make a pull-request in GitHub.",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/project/main/pullquest.png",
      sourcecode: "https://github.com/srajankumar/pullquest",
      link: "/projects/pull-quest",
    },
    {
      title: "QRby",
      description:
        "A simple user-friendly QR code generator with download capabilities.",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/project/main/qrby.png",
      sourcecode: "https://github.com/srajankumar/qrby",
      link: "/projects/qrby",
    },
  ];

  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

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
                <Slide bottom delay={index * 200}>
                  <Tilt>
                    <Link href={project.link}>
                      <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
                        {/* <div className="fixed flex items-center text-black right-6 bottom-6 justify-end">
                          <Link
                            className="pr-1 text-gray-200 hover:text-gray-400 transition duration-300"
                            href={project.sourcecode}
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                              />
                            </svg>
                          </Link>
                        </div> */}
                        <Image
                          height={500}
                          width={500}
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={project.imageSrc}
                          alt={project.title}
                        />
                        <div className="font-gothamL p-6">
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
                    </Link>
                  </Tilt>
                </Slide>
              </div>
            ))}
          </div>
          <div className="flex font-gothamM tracking-wide justify-center pt-10 w-full">
            <Linkk href="project" _blank="n">
              Excited to see more work?
            </Linkk>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
