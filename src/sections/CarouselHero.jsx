import Carousel from "../components/Carousel";
import { carouselItems } from "../constants";

export default function CarouselHero() {
  return <Carousel carouselItems={carouselItems} btn={true} />;
}