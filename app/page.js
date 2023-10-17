import Image from "next/legacy/image";
import { Hero } from "./sections";
import Discover from "./sections/Discover";
import PlanYourTrip from "./sections/PlanYourTrip";
import Gallery from "./sections/Gallery";
import ShareYourStory from "./sections/ShareYourStory";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <section className="overflow-hidden">
        <Hero />
      </section>
      <section className="overflow-hidden">
        <Discover />
      </section>
      <section className="overflow-hidden">
        <PlanYourTrip />
      </section>
      <section className="overflow-hidden">
        <Gallery />
      </section>
      <section className="overflow-hidden">
        <ShareYourStory />
      </section>
      <section className="overflow-hidden">
        <Footer/>
      </section>
    </main>
  );
}
