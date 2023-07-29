import Project from "../templates/Projects";

const App = () => {
  const projects = [
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
      description: "A dark-mode Youtube website Landing-page",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/youtube.png",
      sourcecode: "https://github.com/srajankumar/youtube-landingpage",
      live: "https://youtube-clone-xi-weld.vercel.app/",
    },
    {
      title: "Noties",
      description: "A simple note-taking app",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/noties.png",
      sourcecode: "https://github.com/srajankumar/noties",
      live: "https://noties.vercel.app/",
    },
  ];

  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

export default App;
