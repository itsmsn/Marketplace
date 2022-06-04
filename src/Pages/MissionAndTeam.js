import React from "react";
import { OpacityCard } from "../components/OpacityCard/OpacityCard";
import banner_image from "../assets/MissionAndTeamBanner_70.jpg";
import thinkingImage from "../assets/MissionThinking.png";
import "./MissionAndTeam.css";
import trending1 from "../assets/trending-1.png";
import trending2 from "../assets/trending-2.png";
import trending3 from "../assets/trending-3.png";
import trending4 from "../assets/trending-4.png";
import trending5 from "../assets/trending-5.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import arrow_left from "../assets/left-arrow.png";
import arrow_right from "../assets/right-arrow.png";

export const MissionAndTeam = () => {
  // Owl Carousel

  const heading = "Mission";
  const discription = "End-To-End is the digital hub to buy & sell all your sports, art, and entertainment assets. We provide a safe and secure platform for our users to transact their NFTs. We are committed to offering the best user experience and customer service in the industry. Our mission is to help people unlock the value of their passions and connect with like-minded others from around the world. Whether you're a collector, a creator, or just someone who loves to gamble, End-To-End is the place for you.Thanks for being here! -The End-To-End Team";

  const options = {
    loop: true,
    margin: 20,
    items: 5,
    dots: false,
    nav: true,
    navSpeed: 500,
    navText: [
      `<img src=${arrow_left} className="img-fluid" alt="">`,
      `<img src=${arrow_right} className="img-fluid" alt="">`,
    ],
    responsiveClass: true,
    responsive: {
      0: {
        stagePadding: 0,
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  };
  return (
    <div>
      <section>
        <div className="banner_section1">
          <img src={banner_image} width="100%" alt="Loading" />
          <div className="image_card">
            <OpacityCard heading={heading} description={discription} />
          </div>
        </div>

        <div class="container">
          <img
            src={thinkingImage}
            className="thinkingimage"
            width="30%"
            alt=""
          />
          <div class="container__text">
            <h2 className="marketHeading1">Mission</h2>
            <p>
              "End-To-End is the digital hub to buy & sell all your sports, art, and entertainment assets. We provide a safe and secure platform for our users to transact their NFTs. We are committed to offering the best user experience and customer service in the industry. Our mission is to help people unlock the value of their passions and connect with like-minded others from around the world. Whether you're a collector, a creator, or just someone who loves to gamble, End-To-End is the place for you. Thanks for being here! -The End-To-End Team"
            </p>
          </div>
        </div>

        <center>
          <h1>Team</h1>
          <div className="marketHeading teamH"></div>
        </center>
           
             {/* --- */}
             <div className="col-12">
                  <div className="d-flex justify-content-between">
                  {/* trendingsubheading */}
                  <center>
                    <p className="banner__discription trendingsubheading">
                    With a team of dedicated professionals, End-To-End makes it easy to find the right buyer or seller for any asset, whether it's a painting, sculpture, piece of jewelry, ticket to a game or anything else imaginable.                  
                     </p>
                     </center>
                  </div>
                </div>
                  {/* --- */}

        <div className="team">
          <OwlCarousel className="owl-theme trending_slider" {...options}>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending1} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
              {/* marketHeading1 */}
                <p className="trending-infinity mark">Lamarr Walker</p>
                <p className="trending-infinity mark">Founder</p>
                <p className="trending-infinity">Lamarr is the founder of End To End, an original Digital Asset Platform designed to monetize the likeness for creators
                 and inspiring small business owners (Entrepreneurs). 
                </p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending2} alt="" className="img-fluid" />
                </a>
              </div>
              {/* marketHeading1 */}
              <div className="trending-content">
                <p className="trending-infinity mark">Lamarr Walker</p>
                <p className="trending-infinity mark">Founder</p>
    
                <p className="trending-infinity">Lamarr is the founder of End To End, an original Digital Asset Platform designed to monetize the likeness for creators
                 and inspiring small business owners (Entrepreneurs).</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending3} alt="" className="img-fluid" />
                </a>
              </div>
              {/* marketHeading1 */}
              <div className="trending-content">
              <p className="trending-infinity mark">Lamarr Walker</p>
                <p className="trending-infinity mark">Founder</p>
                <p className="trending-infinity">Lamarr is the founder of End To End, an original Digital Asset Platform designed to monetize the likeness for creators
                 and inspiring small business owners (Entrepreneurs).</p> 
                </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending4} alt="" className="img-fluid" />
                </a>
              </div>
              {/* marketHeading1 */}
              <div className="trending-content">
              <p className="trending-infinity  mark">Lamarr Walker</p>
                <p className="trending-infinity  mark">Founder</p>
                <p className="trending-infinity">Lamarr is the founder of End To End, an original Digital Asset Platform designed to monetize the likeness for creators
                 and inspiring small business owners (Entrepreneurs).</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending5} alt="" className="img-fluid" />
                </a>
              </div>
              {/* marketHeading1 */}
              <div className="trending-content">
              <p className="trending-infinity  mark">Lamarr Walker</p>
                <p className="trending-infinity  mark">Founder</p>
                <p className="trending-infinity">Lamarr is the founder of End To End, an original Digital Asset Platform designed to monetize the likeness for creators
                 and inspiring small business owners (Entrepreneurs).</p>
              </div>
            </div>
            {/* 1 */}
            <div className="trending-box shadow-sm my-3">
              <div className="trending-img">
                <a href="/">
                  <img src={trending1} alt="" className="img-fluid" />
                </a>
              </div>
              <div className="trending-content">
              {/* marketHeading1 */}
              <p className="trending-infinity  mark">Lamarr Walker</p>
                <p className="trending-infinity  mark">Founder</p>
                <p className="trending-infinity">Lamarr is the founder of End To End, an original Digital Asset Platform designed to monetize the likeness for creators
                 and inspiring small business owners (Entrepreneurs).</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
};
