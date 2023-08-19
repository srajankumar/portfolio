import Project from "../templates/Projects";

const App = () => {
  const projects = [
    {
      title: "Hungry Hive",
      description: "A MERN stack based recipe app",
      tags: ["#mongodb", "#express", "#react", "#nodejs", "tailwindcss"],
      imageSrc: "/assets/projects/hungry-hive.png",
      sourcecode: "https://github.com/srajankumar/hungry-hive",
      live: "",
    },
    {
      title: "Pull Quest",
      description:
        "A simple and fun quest to learn how to make a pull-request in GitHub",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/pullquest.png",
      sourcecode: "https://github.com/srajankumar/pullquest",
      live: "https://pullquest.vercel.app/",
    },
    {
      title: "YouTube Clone",
      description: "A dark-mode YouTube website Landing-page",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/youtube.png",
      sourcecode: "https://github.com/srajankumar/youtube-landingpage",
      live: "https://youtube-clone-xi-weld.vercel.app/",
    },
  ];

  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

export default App;
