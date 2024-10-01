import Headliners from "../components/Headliners";
import Events from "../components/Events";
import FeaturedArtist from "../components/FeaturedArtist";
import Jumbotron from '../sections/Jumbotron';
import Reviews from "../sections/Reviews";
import About from "../sections/About";
import CarouselHero from "../sections/CarouselHero";

const Home = () => {
  return (
    <>
      <CarouselHero />
      <Headliners />
      <Events />
      <FeaturedArtist 
        id="headliners" 
        title="Featured Artists" 
        type="1" 
        more={{ name: "View All Artists", url: "/artists" }} 
        num={4} 
        filtered={true} 
      />
      <Reviews />
      <Jumbotron />
      <About/>
    </>
  );
}

export default Home;
