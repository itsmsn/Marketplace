import { Fragment, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import HotCollection from "../components/HotCollection/HotCollection";
import NewCollection from "../components/NewCollection/NewCollection";
import Trending from "../components/Trending/Trending";
import Banner from "../components/EntertainmentBanner/EntertainmentBanner";

function Entertainment() {

  const bannerHeading = "Live Auction";
  const Explore_More = "Explore More";
  const Connect_NFT = "You can buy and sell items from popular artists with other NFT Live users online!"; 
  const newheading = "Featured creators";
  const newdescripton = "If you're looking to buy or sell entertainment content, then explore our NFT Featured creators.";
  const TrendingArtwork = "Featured Artworks";
  const description = "Prices are always rising, so it's important to explore new opportunities. Check out our featured artwork for buying and selling entertainment content!";   
  const TrendingArtwork1 = "Top Entertainment Collections Over the last 7 days";
  const description1 = "From movies to music to games, we have the best entertainment assets. Over 7 days we have collected many different kinds of top-quality media for you! Explore our diverse collection today and find something that suits your taste or need";



  useEffect(() => {
    Aos.init({ duration: 700, delay: 550, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <Banner />
      <HotCollection bannerHeading={bannerHeading} ExploreMore={Explore_More} bannerDiscription = {Connect_NFT}/>
      <NewCollection heading={newheading} descripton={newdescripton}/>
      <Trending TrendingArtwork={TrendingArtwork} description={description}/>
      <Trending TrendingArtwork={TrendingArtwork1} description={description1}/>
    </Fragment>
  );
}

export default Entertainment;
