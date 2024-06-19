import History from "./History";

interface Project {
  title: string;
  description: string;
  github: string;
  live: string;
}

const projectData: Project[] = [
  {
    title: "Xinx Music Archive",
    description: "A music archive from a past life.",
    github: "https://github.com/mattgrah-am/xinxmusic",
    live: "https://xinxmusic.com/",
  },
  {
    title: "Macro Calculator",
    description: "A simple macro calculator.",
    github: "",
    live: "https://macros.matg.dev/",
  },
  {
    title: "Guess that tune!",
    description: "A game where you guess the song.",
    github: "https://github.com/mattgrah-am/guessThatTune",
    live: "https://guessthattune.com/",
  },
  {
    title: "Tic tac toe",
    description: "A simple tic tac toe game.",
    github: "https://github.com/mattgrah-am/tictactoe",
    live: "https://tictactoe.matg.dev/",
  },
];

const Projects = () => (
  <section
    className="mx-auto grid h-screen max-w-xl place-items-center px-4 md:px-0"
    id="projects"
  >
    <div className="w-full">
      <h2 className="h1">Projects</h2>
      <ul>
        {projectData.map((project, idx) => (
          <li
            className="mb-2 flex justify-between border-b border-neutral-400 pb-2"
            key={idx}
          >
            <div>
              <p className="mb-0">{project.title}</p>
              <p className="mb-0 text-xs text-neutral-600">
                {project.description}
              </p>
            </div>
            <div className="space-x-4 self-end">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase transition duration-200 hover:blur-[1px]"
                >
                  Github
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase transition duration-200 hover:blur-[1px]"
                >
                  Live
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
      <History />
    </div>
  </section>
);

export default Projects;
