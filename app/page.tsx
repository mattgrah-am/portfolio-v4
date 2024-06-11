import { Github, Xdotcom, Linkedin } from "@/components/socialIcons";

export default function Home() {
  return (
    <main className="fade-transition">
      <section
        className="mx-auto grid h-screen max-w-xl place-items-center px-4 md:px-0"
        id="about"
      >
        <div className="w-full">
          <h1>Hey, I&#39;m Matt.</h1>
          <div className="mb-5 -rotate-1 bg-neutral-950 px-4 py-2 text-base font-semibold uppercase text-neutral-50 shadow-lg md:text-lg">
            Web Developer, career switcher & problem solver.
          </div>
          <h2 className="font-light">
            A Melbourne (AU) based web developer, currently working for a large
            telecommunications company.
          </h2>

          <p className="h2 font-light">
            Made the career switch to work in a career that I am extremely
            passionate about. As quoted by Marc Anthony;{" "}
          </p>

          <blockquote className="h2 border-l-2 border-neutral-400 pl-4 font-light italic text-neutral-400">
            &quot;If you do what you love, you&apos;ll never work a day in your
            life.&quot;
          </blockquote>

          <p className="h2 mb-5 font-light">
            With a love of technology, my hobbies include tinkering with Linux
            distros, creating websites and building hobby servers.
          </p>
          <button className="mr-6 min-w-24 rounded-md bg-neutral-950 px-4 py-1.5 text-xl font-bold text-neutral-50 transition duration-200 hover:blur-[1px] md:text-2xl">
            Reach out
          </button>
          <a
            href="#projects"
            className="text-xl font-bold text-neutral-950 transition duration-200 hover:blur-[1px] md:text-2xl"
          >
            Projects ↓
          </a>
          <div className="mt-5 flex gap-2">
            <Xdotcom /> <Github /> <Linkedin />
          </div>
        </div>
      </section>
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
          <h2 className="h1">History</h2>
          <ul className="mb-5">
            <li className="flex justify-between">
              <p>Version 1</p>
              <div className="space-x-4">
                <a href="#">Github</a>
                <a href="#">Live</a>
              </div>
            </li>
            <li className="flex justify-between">
              <p>Version 2</p>
              <div className="space-x-4">
                <a href="#">Github</a>
                <a href="#">Live</a>
              </div>
            </li>
            <li className="flex justify-between">
              <p>Version 3</p>
              <div className="space-x-4">
                <a href="#">Github</a>
                <a href="#">Live</a>
              </div>
            </li>
            <li className="flex justify-between">
              <p>Version 4</p>
              <div className="space-x-4">
                <a href="#">Github</a>
                <a href="#">Live</a>
              </div>
            </li>
          </ul>
          <button className="mr-6 min-w-24 rounded-md bg-neutral-950 px-4 py-1.5 text-xl font-bold text-neutral-50 transition duration-200 hover:blur-[1px] md:text-2xl">
            Reach out
          </button>
          <a
            href="#about"
            className="text-xl font-bold text-neutral-950 transition duration-200 hover:blur-[1px] md:text-2xl"
          >
            About ↑
          </a>
          <div className="mt-5 flex gap-2">
            <Xdotcom /> <Github /> <Linkedin />
          </div>{" "}
        </div>
      </section>
    </main>
  );
}
