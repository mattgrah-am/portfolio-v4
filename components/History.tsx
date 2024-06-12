import SocialIcons from "@/components/SocialIcons";

const History = () => (
  <div className="w-full">
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
    <SocialIcons />
  </div>
);

export default History;
