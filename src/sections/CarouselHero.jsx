import Carousel from "../components/Carousel";
import { carouselItems } from "../constants";

const CarouselHero = () => {
  return <Carousel carouselItems={carouselItems} btn={true} />;
}
export default CarouselHero