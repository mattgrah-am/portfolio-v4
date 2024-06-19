import SocialIcons from "./SocialIcons";

interface Project {
  title: string;
  date: string;
  github: string;
  live: string;
}

const historyData: Project[] = [
  {
    title: "Version 1",
    date: "March 2021",
    github: "https://github.com/mattgrah-am/portfolio",
    live: "https://v1.matg.dev/",
  },
  {
    title: "Version 2",
    date: "February 2022",
    github: "https://github.com/mattgrah-am/portfolio-v2",
    live: "https://v2.matg.dev/",
  },
  {
    title: "Version 3",
    date: "February 2023",
    github: "https://github.com/mattgrah-am/portfolio-v3",
    live: "https://v3.matg.dev/",
  },
  {
    title: "Version 4",
    date: "June 2024 (Current)",
    github: "https://github.com/mattgrah-am/portfolio-v4",
    live: "https://matg.dev/",
  },
];

const History = () => (
  <section className="mx-auto mt-10 max-w-xl px-4 md:px-0" id="projects">
    <div className="w-full">
      <h2 className="h1">History</h2>
      <ul>
        {historyData.map((item, idx) => (
          <li
            className="mb-2 flex justify-between border-b border-neutral-400 pb-2"
            key={idx}
          >
            <div>
              <p className="mb-0">{item.title}</p>
              <p className="mb-0 text-xs text-neutral-600">{item.date}</p>
            </div>
            <div className="space-x-4 self-end">
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase transition duration-200 hover:blur-[1px]"
                >
                  Github
                </a>
              )}
              {item.live && (
                <a
                  href={item.live}
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
      <button className="mr-6 mt-5 min-w-24 rounded-md bg-neutral-950 px-4 py-1.5 text-xl font-bold text-neutral-50 transition duration-200 hover:blur-[1px] md:text-2xl">
        Reach out
      </button>
      <a
        href="#about"
        className="text-xl font-bold text-neutral-950 transition duration-200 hover:blur-[1px] md:text-2xl"
      >
        About ↑
      </a>
      <SocialIcons />
    </div>
  </section>
);

export default History;
