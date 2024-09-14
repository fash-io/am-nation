import React from "react";
import {Events, FeaturedArtist, Headliners} from "../components"
import {CarouselHero,  Jumbotron, Reviews, About} from "../sections"

function HomePage() {
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

export default HomePage;
