import Project from "@/templates/Project";

const App = () => {
  const projects = [
    {
      title: "Pull Quest",
      description:
        "A simple and fun quest to learn how to make a pull-request in GitHub",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/pullquest.png",
    },
    {
      title: "YouTube Clone",
      description: "A dark-mode Youtube website Landing-page",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/youtube.png",
    },
    {
      title: "Noties",
      description: "A simple note-taking app",
      tags: ["#nextjs", "#tailwindcss"],
      imageSrc: "/assets/projects/noties.png",
    },
  ];

  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

export default App;
