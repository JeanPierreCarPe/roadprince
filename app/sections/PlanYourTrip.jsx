/* eslint-disable react/no-unescaped-entities */
import { book, location, mapRoads } from "@/public/assets";
import ResourceCard from "../components/ResourceCard";

const PlanYourTrip = () => {
  return (
    <section
      id="plan-your-trip"
      className="w-full h-fit max-container px-8 md:px-60 bg-black-background py-20"
    >
      <div className="flex flex-col justify-center items-center gap-9">
        <h2 className="text-white text-5xl text-center font-montserrat">Plan Your Own Road Adventure</h2>
        <p className="text-white text-center text-lg font-light">
          Ready to create your own story on the road? We provide you with
          resources to plan your road trip effectively. From travel tips and
          destination guides to road safety essentials, we'are here to ensure
          your journey is as smooth as the asphalt beneath your wheels.
        </p>
        <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row gap-8">
          <ResourceCard
            icon={book}
            title="Plan Your Journey"
            text="Craft perfect road adventures with our guide."
          />
          <ResourceCard
            icon={location}
            title="Explore Destinations"
            text="Discover your next memorable escape."
          />
          <ResourceCard
            icon={mapRoads}
            title="Stay Roadwise"
            text="Drive secure with expert safety insights"
          />
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;
