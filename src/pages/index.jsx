import About from "../sections/About";
import CarouselHero from "../sections/CarouselHero";
import Events from "../components/Events";
import FeaturedArtist from "../components/FeaturedArtist";
import Headliners from "../components/Headliners";
import Jumbotron from "../sections/Jumbotron";
import Reviews from "../sections/Reviews";

function index() {

  return (
    <>
      <CarouselHero />
      <Headliners />
      <Events />
      <FeaturedArtist />
      <Reviews />
      <Jumbotron />
      <About />
    </>
  );
}

export default index;
