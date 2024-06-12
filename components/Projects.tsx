import History from "@/components/History";

const Projects = () => (
  <section
    className="mx-auto grid h-screen max-w-xl place-items-center px-4 md:px-0"
    id="projects"
  >
    <div className="w-full">
      <h2 className="h1">Projects</h2>
      <ul>
        <li className="flex justify-between">
          <p>Xinx Music Archive</p>
          <div className="space-x-4">
            <a href="#">Github</a>
            <a href="#">Live</a>
          </div>
        </li>
        <li className="flex justify-between">
          <p>Macro Calculator</p>
          <div className="space-x-4">
            <a href="#">Live</a>
          </div>
        </li>
        <li className="flex justify-between">
          <p>Guess that tune!</p>
          <div className="space-x-4">
            <a href="#">Github</a>
            <a href="#">Live</a>
          </div>
        </li>
        <li className="flex justify-between">
          <p>Tic tac toe</p>
          <div className="space-x-4">
            <a href="#">Github</a>
            <a href="#">Live</a>
          </div>
        </li>
      </ul>
      <History />
    </div>
  </section>
);

export default Projects;
