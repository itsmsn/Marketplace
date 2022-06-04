import React from 'react'
import banner_image from "../assets/TopPlayers_4.png";
import { OpacityCard } from "../components/OpacityCard/OpacityCard";
import './TopPlayer.css'
import { Rating_Component } from '../components/Rating_Component/Rating_Component';

export const TopPlayers = () => {
 
  const heading = "The world's best marketplace for buying and selling entertainment NFT assets";
  const description = "When it comes to our NFT collections, we have a top player. Our most valuable asset is our clients' satisfaction and trust in us as their chosen NFT marketplace.";


  return (
    <div className='TopPlayers'>
         <div className='background-image'>
          <div className="image_card2 image_card3">
            <OpacityCard heading={heading} description={description}/>
          </div>
        </div>
         
        <div className="col-12">
                  <div className="d-flex justify-content-between">
                    <h1 className="trendingheading trendingtxt">Top Players</h1>
                    <div className="s">
                      <button className="exploreBtn trendingbtn trendingbtn">
                        Explore More
                      </button>
                    </div>
                  </div>
            </div>
    
        <div className="rating_component">
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
          <Rating_Component className='small_card'/>
         </div>   
    </div>
  )
}
