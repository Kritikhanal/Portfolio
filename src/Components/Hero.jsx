const Hero = () => {
  return (
    <header>
      <div className="header flex light-bg">
        <div>
          <button>Front-End Developer</button>
          <h1 className="white">Transforming Ideas into Web Experiences</h1>
          <h3 className="white">Where design meets code to create magic!</h3>
          <p className="gray">
            I design and code beautiful simple things, and I love what I do.
          </p>
          <a className="green" href="mailto:contact@kritima.com">
            Let&#39;s chat!
          </a>
        </div>
        <img src="/myphoto2.png" width={400} height={513} alt="Kritima" />
      </div>
    </header>
  );
};
export default Hero;
