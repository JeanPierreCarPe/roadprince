import { user1, user2, user3 } from "@/public/assets";
import TestimonialCard from "../components/TestimonialCard";

const ShareYourStory = () => {
  return (
    <section
      id="shere-your-story"
      className="w-full max-container flex justify-center items-center px-20 bg-black-background py-20"
    >
      <div className="flex flex-col justify-center items-center gap-9">
        <h2 className="text-white text-5xl text-center font-montserrat">Share Your Road Tale</h2>
        <div className="flex flex-wrap justify-center xl:gap-5 gap-10">
          <TestimonialCard
            image={user1}
            name="Sarah G."
            text="Curved along the coast, the road led me to hidden beaches and stunning vistas. Each stop brought a new view, a new story, and a renewed love for the freedom of the open road."
          />
          <TestimonialCard
            image={user2}
            name="Alex M."
            text="Twisting up the mountains, I found myself amidst clouds and awe-inspiring peaks. The road taught me that the journey is just as remarkable as the destination."
          />
          <TestimonialCard
            image={user3}
            name="Mark L."
            text="From city lights to desert sands, the road was my guide through diverse landscapes and unforgettable moments. Each mile etched a story of exploration and discovery."
          />
        </div>
      </div>
    </section>
  );
};

export default ShareYourStory;
