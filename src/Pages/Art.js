import { Fragment, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import HotCollection from "../components/HotCollection/HotCollection";
import NewCollection from "../components/NewCollection/NewCollection";
import Trending from "../components/Trending/Trending";
import Banner from "../components/ArtBanner/ArtBanner";

function Art() {
  const bannerHeading = "Live Auction";
  const Explore_More = "Explore More";
  const Connect_NFT = "The live auction features NFTs of Art-related assets. There's a wide selection to choose from, so don't miss it!"; 
  
  const newheading = "Featured creators";
  const newdescripton = "The best way to find new, interesting creators is by exploring our NFT featured items. There are so many different types of pieces in this collection that it's hard not to be overwhelmed with all your options!";

  const TrendingArtwork = "Featured Artworks";
  const description = "Take a look at some of the incredible art we have on offer";   

  const TrendingArtwork1 = "Top Art Collections Over the last 7 days";
  const description1 = "With our vast collection of art, you are sure to find something that speaks to your unique vision The best way for us is through exploration! Explore our top artworks now!";


  useEffect(() => {
    Aos.init({ duration: 700, delay: 550, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <Banner />
      <HotCollection bannerHeading = {bannerHeading} ExploreMore={Explore_More} bannerDiscription={Connect_NFT} />
      <NewCollection heading={newheading} descripton={newdescripton}/>
      <Trending TrendingArtwork={TrendingArtwork} description={description}/>
      <Trending TrendingArtwork={TrendingArtwork1} description={description1}/>
    </Fragment>
  );
}

export default Art;
