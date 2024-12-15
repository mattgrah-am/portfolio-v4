import SocialIcons from "./SocialIcons";

const About = () => (
  <section
    className="mx-auto grid max-w-xl place-items-center px-4 md:h-screen md:px-0"
    id="about"
  >
    <div className="w-full">
      <h1>Hey, I&#39;m Matt.</h1>
      <div className="mb-5 -rotate-1 bg-neutral-950 px-4 py-2 text-center text-base font-semibold uppercase text-neutral-50 shadow-lg md:text-lg">
        Web Developer, career switcher & problem solver.
      </div>
      <p className="h3 font-light">
        Based in Melbourne, Australia, I am a dedicated web developer, currently
        leveraging my skills at a prominent telecommunications company.
      </p>

      <p className="h3 font-light">
        My career shift into this dynamic field stems from a deep-seated
        passion—a sentiment perfectly captured by Marc Anthony&apos;s timeless
        adage:
      </p>

      <blockquote className="h3 border-l-2 border-neutral-400 pl-4 font-light italic text-neutral-400">
        &quot;If you do what you love, you&apos;ll never work a day in your
        life.&quot;
      </blockquote>

      <p className="h3 mb-5 font-light">
        My transition into programming was a natural progression driven by my
        fascination with technology and a keen aptitude for problem-solving.
        This career switch not only aligns with my interests but also allows me
        to channel my creativity and analytical skills into meaningful projects.
      </p>
      <p className="h3 mb-5 font-light">
        I thrive in environments where innovation meets practical application,
        and I am continually inspired by the ever-evolving landscape of web
        development.
      </p>
      <a
        href="ma&#105;l&#116;o&#58;ma&#105;l&#64;%6D&#97;t&#103;&#37;2E%64&#101;&#118;?subject=Message from matg.dev website"
        className="mr-6 mt-5 min-w-24 rounded-md bg-neutral-950 px-4 py-1.5 text-xl font-bold text-neutral-50 transition duration-200 hover:blur-[1px] md:text-2xl"
      >
        Reach out
      </a>
      <a
        href="#projects"
        className="text-xl font-bold text-neutral-950 transition duration-200 hover:blur-[1px] md:text-2xl"
      >
        Projects ↓
      </a>
      <SocialIcons />
    </div>
  </section>
);

export default About;
