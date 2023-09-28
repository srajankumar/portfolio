import Slide from "react-reveal/Slide";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import Linkk from "@/utils/Links";

import Header from "@/utils/Header";

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
    <div className="lg:px-[2%] md:px-0">
      <div className="lg:px-24 md:px-16 flex items-center justify-center min-h-screen px-2 py-24 mx-auto">
        <div className="flex flex-col w-fit">
          <h1 className="mb-5 mx-5 md:mx-3.5 font-gothamB text-4xl">
            <Header content="Projects." />
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:justify-start justify-center w-fit">
            {projects.map((project, index) => (
              <div className="p-4 w-full" key={index}>
                <Slide bottom delay={index * 200}>
                  <Tilt>
                    <Link href={project.link}>
                      <div className="h-full bg-[#d1f2f9] bg-opacity-5 rounded-3xl overflow-hidden">
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
            <Linkk href="https://github.com/srajankumar" _blank="y">
              Excited to see more work?
            </Linkk>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
