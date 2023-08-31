import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full relative flex md:flex-row flex-col justify-start min-h-screen max-container bg-home bg-cover bg-bottom"
    >
      <div className="absolute w-full h-full bg-black bg-opacity-40 ">
      </div>
      <div className="relative flex flex-col justify-center items-center w-full gap-7 pt-10">
        <h1 className="text-white text-8xl text-center font-bold z-10 relative xl:w-[1054px] leading-[120px]">
          <span className="text-blue-cyan">Embrace</span> the Journey with{" "}
          <span className="text-blue-cyan">Roadprince</span>.
        </h1>
        <p className="text-white text-base font-light">
          Discover the Beauty of the Open Road and Create Lasting Memories.
        </p>
        <div className="flex gap-8">
          <Button text="Read more" type="filled" />
          <Button text="Plan your trip" type="outline" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
