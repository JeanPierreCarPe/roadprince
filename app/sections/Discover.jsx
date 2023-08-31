import Button from "../components/Button";
import ImageSquare from "../components/ImageSquare";
import { road1, road2, road3, road4, traveler1, traveler2, traveler3, traveler4 } from "./../../public/assets/index.js";

const Discover = () => {
  return (
    <section
      id="discover"
      className="w-full h-fit bg-black-background max-container flex flex-col justify-center items-center px-8 md:px-20"
    >
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 my-20">
        <div className="flex gap-8 w-[460px] min-w-[460px] flex-wrap">
          <ImageSquare type="info"image={road1} />
          <ImageSquare type="info"image={road2} />
          <ImageSquare type="info"image={road3} />
          <ImageSquare type="info"image={road4} />
        </div>
        <div className="flex flex-col items-center md:items-end gap-9">
          <h2 className="text-5xl text-white text-center md:text-right font-montserrat">Discover New Horizons</h2>
          <p className="text-center md:text-right text-white text-lg font-light">
            Immerse yourself in the beauty of the open road. Our curated
            collection of photographs will transport you to scenic routes that
            unveil the hidden gems of the world. From winding coastal highways
            to serene mountain passes, each image tells a story of adventure
            waiting to be embraced.
          </p>
          <Button text="Read more" type="filled" />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 my-20">
        <div className="flex flex-col items-center md:items-start gap-9">
          <h2 className="text-5xl text-white text-center md:text-left xl:text-left font-montserrat">Fuel Your Wanderlust</h2>
          <p className="text-center md:text-left text-white text-lg font-light">
            Let your wanderlust thrive as you explore our gallery of road
            travelers. Witness the joy of individuals and groups, united by a
            passion for exploration, as they traverse landscapes on motorcycles
            and in cars. These images capture the essence of the road trip
            experience - the camaraderie, the freedom, and the thrill of the
            unknown.
          </p>
          <Button text="Read more" type="filled" />
        </div>
        <div className="flex gap-8 w-[460px] min-w-[460px] flex-wrap">
          <ImageSquare type="info"image={traveler1} />
          <ImageSquare type="info"image={traveler2} />
          <ImageSquare type="info"image={traveler3} />
          <ImageSquare type="info"image={traveler4} />
        </div>
      </div>
    </section>
  );
};

export default Discover;
