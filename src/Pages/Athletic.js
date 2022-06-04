import React from 'react'
import banner_image from "../assets/Athletic.jpg";
import { OpacityCard } from "../components/OpacityCard/OpacityCard";
import './Athletic.css'

export const Athletic = () => {
  const Connect_NFT = "You can buy and sell items from popular artists with other NFT Live users online!"; 
  return (
    <div>
         <div className="banner_section1">
          <img src={banner_image} width="100%" alt="Loading" />
          <div className="image_card A_image_card">
            <OpacityCard heading="Athletic" description={Connect_NFT} />
          </div>
        </div>

        <div class="container container1">
          <img
            src={banner_image}
            className="thinkingimage"
            width="30%"
            alt=""
          />
          <div class="container__text">
            <h2 className="marketHeading1">Athletics</h2>
            <p>
              "Cats like boxes because they are cryptic animals; they like to
              hide," Stephen Zawistowski, science adviser for the American
              Society for the Prevention of Cruelty to Animals, told Business
              Insider. "And a box gives them a place of safety and security."
            </p>
          </div>
        </div>


    </div>
  )
}
