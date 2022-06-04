import { Fragment, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import CreateAndSell from "../components/CreateAndSell/CreateAndSell";
import HotCollection from "../components/HotCollection/HotCollection";
import NewCollection from "../components/NewCollection/NewCollection";
import BuyToken from "../components/BuyToken/BuyToken";
import Trending from "../components/Trending/Trending";
import Banner from "../components/Banner/Banner";

function Home() {

  const banner__heading = "The ultimate NFT marketplace for digital assets";
  const Explore_More = "Explore More";
  const Connect_NFT = "Connect NFT"; 
  const description = "Find everything from unique artwork to sports memorabilia on our easy-to-use platform."; 
  const Trending_Artwork = "Trending Artwork";
  const dscription = "Explore some of the latest and most popular pieces of artwork that are trending right now.";
  const buyHeading ="Buy Tokens & Get Freebitco";
  const buyDescription = " Get freebies when you buy a Token";
  const bannerHeading = "Hot Collections";
  const bannerDiscription = " Collect, trade, and enjoy the hottest digital assets related to sports, art, and entertainment.";
  const newheading = "New Collections";
  const newDescription = " Our new collections of digital assets related to sports, art, and entertainment are perfect for your next project.";

  useEffect(() => {
    Aos.init({ duration: 700, delay: 550, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <Banner banner__heading={banner__heading} description={description} ExploreMore={Explore_More} ConnectNFT={Connect_NFT}/>
      <Trending TrendingArtwork={Trending_Artwork} description = {dscription}/>
      <BuyToken buyHeading={buyHeading} buyDescription={buyDescription}/>
      <HotCollection bannerHeading={bannerHeading} bannerDiscription ={bannerDiscription } ExploreMore = {Explore_More}/>
      <NewCollection heading={newheading} descripton={newDescription}/>
      <CreateAndSell />
    </Fragment>
  );
}

export default Home;
