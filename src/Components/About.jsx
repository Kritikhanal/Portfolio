import AboutCard from "./Aboutcard";

// const response = {
//   clients: [
//     "/artisty.png",
//     "/directy.png",
//     "/khedma-lik.png",
//     "/telefy.png",
//     "/wallety.png",
//   ],
// };

const About = () => {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="UX/UI Design"
            icon="/icons/design.svg"
            description="I create design  products with unique ideas."
            projects={7}
          />
          <AboutCard
            title="Web Design"
            icon="/icons/code.svg"
            description="I develop Front-End with coding super smooth."
            projects={10}
          />
          <AboutCard
            title="Graphics Designer"
            icon="/icons/phone.svg"
            description="This is what I love to do most in my spare time"
            projects={7}
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I&#39;m Kritima Khanal</h1>
          <h3 className="white">
            Design is not just what it looks like. Design is how it works!
          </h3>
          <p className="gray">
            As a Front-End developer with a background in UI/UX design and
            Graphics Designing, I have dedicated my life to pursuing my dream of
            becoming a developer. Over the course of my 1-year career, I have
            acquired my skills through collaborations developing practical,
            user-friendly solutions.
            <br />
            With a commitment to excellence and a love for what I do, I am
            confident in my ability to continue making a positive impact in the
            world of front-end development and UI/UX design.
            <br />I am driven by a natural tenacity, confidence in my abilities,
            and a quiet but insatiable curiosity that constantly pushes me to
            innovate and challenge myself. My passion for development, combined
            with my design expertise, allows me to create elegant, functional
            solutions that meet the needs of both businesses and end-users.
          </p>
        </div>
      </div>
      {/* <div className="flex partners justify-space">
        {response.clients.map((client) => (
          <img height={45} width={180} src={"/clients" + client} alt={client} />
        ))}
      </div> */}
    </section>
  );
};
export default About;
